"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCypressConfigPlugin = void 0;
const tslib_1 = require("tslib");
const t = (0, tslib_1.__importStar)(require("@babel/types"));
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const recast_1 = require("recast");
const debug = (0, debug_1.default)('cypress:config:addToCypressConfigPlugin');
/**
 * Standardizes our approach to writing values into the existing
 * Cypress config file. Attempts to handle the pragmatic cases,
 * finding the typical patterns we'd expect to see for `defineConfig`
 * import & usage, falling back to adding spread object properties
 * on `module.exports` or `export default`
 *
 * @param toAdd k/v Object Property to append to the current object
 * @returns
 */
function addToCypressConfigPlugin(toAdd, opts = {}) {
    debug(`adding %s`, toAdd);
    const { shouldThrow = true } = opts;
    function canAddKey(path, props, toAdd) {
        for (const prop of props) {
            if (t.isObjectProperty(prop) && t.isNodesEquivalent(prop['key'], toAdd['key'])) {
                if (shouldThrow) {
                    throw new Error(`Cannot add, the existing config has a ${(0, recast_1.print)(prop['key']).code} property`);
                }
                else {
                    path.stop();
                    return false;
                }
            }
        }
        return true;
    }
    /**
     * Based on the import syntax, we look for the "defineConfig" identifier, and whether it
     * has been reassigned
     */
    const defineConfigIdentifiers = [];
    /**
     * Checks whether we've seen the identifier
     */
    let seenConfigIdentifierCall = false;
    // Returns the ObjectExpression associated with the defineConfig call,
    // so we can add in the "toAdd" object property
    function getDefineConfigExpression(node) {
        for (const possibleIdentifier of defineConfigIdentifiers) {
            if (typeof possibleIdentifier === 'string') {
                if (t.isIdentifier(node.callee) && node.callee.name === possibleIdentifier && t.isObjectExpression(node.arguments[0])) {
                    return node.arguments[0];
                }
            }
            else if (Array.isArray(possibleIdentifier)) {
                if (t.isMemberExpression(node.callee) &&
                    t.isIdentifier(node.callee.object) &&
                    t.isIdentifier(node.callee.property) &&
                    node.callee.object.name === possibleIdentifier[0] &&
                    node.callee.property.name === possibleIdentifier[1] &&
                    t.isObjectExpression(node.arguments[0])) {
                    return node.arguments[0];
                }
            }
        }
        return undefined;
    }
    // Visits the program ahead-of-time, to know what transforms we need to do
    // on the source when we output the addition
    const nestedVisitor = {
        ImportDeclaration(path) {
            // Skip "import type" for the purpose of finding the defineConfig identifier,
            // and skip if we see a non "cypress" import, since that's the only one we care about finding
            if (path.node.importKind === 'type' || path.node.source.value !== 'cypress') {
                debug(`Skipping non-cypress import declaration %s`, path);
                return;
            }
            for (const specifier of path.node.specifiers) {
                if (specifier.type === 'ImportNamespaceSpecifier' || specifier.type === 'ImportDefaultSpecifier') {
                    debug(`Adding %s specifier [%s, %s]`, specifier.type, specifier.local.name, 'defineConfig');
                    defineConfigIdentifiers.push([specifier.local.name, 'defineConfig']);
                }
                else {
                    debug(`Adding import specifier %s`, specifier.local.name);
                    defineConfigIdentifiers.push(specifier.local.name);
                }
            }
        },
        VariableDeclaration(path) {
            // We only care about the top-level variable declarations for requires
            if (path.parent.type !== 'Program') {
                return;
            }
            const cyRequireDeclaration = path.node.declarations.filter((d) => {
                return (t.isCallExpression(d.init) &&
                    t.isIdentifier(d.init.callee) &&
                    d.init.callee.name === 'require' &&
                    t.isStringLiteral(d.init.arguments[0]) &&
                    d.init.arguments[0].value === 'cypress');
            });
            for (const variableDeclaration of cyRequireDeclaration) {
                if (t.isIdentifier(variableDeclaration.id)) {
                    debug(`Cypress require declaration [%s, 'defineConfig']`, variableDeclaration.id.name);
                    defineConfigIdentifiers.push([variableDeclaration.id.name, 'defineConfig']);
                }
                else if (t.isObjectPattern(variableDeclaration.id)) {
                    for (const prop of variableDeclaration.id.properties) {
                        if (t.isObjectProperty(prop) && t.isIdentifier(prop.key) && t.isIdentifier(prop.value)) {
                            if (prop.key.name === 'defineConfig') {
                                debug(`Adding destructured object prop`, prop.value.name);
                                defineConfigIdentifiers.push(prop.value.name);
                            }
                        }
                    }
                }
                else {
                    debug(`Skipping variableDeclaration %s`, variableDeclaration.id.type);
                }
            }
        },
        CallExpression(path) {
            if (getDefineConfigExpression(path.node)) {
                seenConfigIdentifierCall = true;
                debug(`Seen identifier call %s`, path);
            }
        },
    };
    let didAdd = false;
    return {
        name: 'addToCypressConfigPlugin',
        manipulateOptions(t, parserOpts) {
            var _a;
            parserOpts.errorRecovery = true;
            (_a = parserOpts.plugins) !== null && _a !== void 0 ? _a : (parserOpts.plugins = []);
            if (parserOpts.plugins.some((p) => (Array.isArray(p) ? p[0] : p) === 'typescript')) {
                return;
            }
            parserOpts.plugins.push('typescript');
        },
        visitor: {
            Program: {
                enter(path) {
                    path.traverse(nestedVisitor);
                    debug(`Finished initial traversal, seenConfigIdentifierCall: %s - %o`, seenConfigIdentifierCall, defineConfigIdentifiers);
                },
                exit() {
                    if (!didAdd && shouldThrow) {
                        throw new Error(`Unable to add properties`);
                    }
                },
            },
            CallExpression(path) {
                if (seenConfigIdentifierCall && !didAdd) {
                    const defineConfigExpression = getDefineConfigExpression(path.node);
                    if (defineConfigExpression) {
                        if (canAddKey(path, defineConfigExpression.properties, toAdd)) {
                            defineConfigExpression.properties.push(toAdd);
                            didAdd = true;
                            debug(`Added to defineConfig expression`);
                        }
                    }
                }
            },
            ExportDefaultDeclaration(path) {
                // Exit if we've seen the defineConfig({ ... called elsewhere,
                // since this is where we'll be adding the object props
                if (seenConfigIdentifierCall || didAdd) {
                    return;
                }
                // export default {}
                if (t.isObjectExpression(path.node.declaration)) {
                    if (canAddKey(path, path.node.declaration.properties, toAdd)) {
                        path.node.declaration.properties.push(toAdd);
                        didAdd = true;
                    }
                }
                else if (t.isExpression(path.node.declaration)) {
                    path.node.declaration = spreadResult(path.node.declaration, toAdd);
                    didAdd = true;
                }
            },
            AssignmentExpression(path) {
                // Exit if we've seen the defineConfig({ ... called elsewhere,
                // since this is where we'll be adding the object props
                if (seenConfigIdentifierCall || didAdd) {
                    return;
                }
                if (t.isMemberExpression(path.node.left) && isModuleExports(path.node.left)) {
                    if (t.isObjectExpression(path.node.right)) {
                        if (canAddKey(path, path.node.right.properties, toAdd)) {
                            path.node.right.properties.push(toAdd);
                            didAdd = true;
                        }
                    }
                    else if (t.isExpression(path.node.right)) {
                        path.node.right = spreadResult(path.node.right, toAdd);
                        didAdd = true;
                    }
                }
            },
        },
    };
}
exports.addToCypressConfigPlugin = addToCypressConfigPlugin;
function spreadResult(expr, toAdd) {
    return t.objectExpression([
        t.spreadElement(expr),
        toAdd,
    ]);
}
function isModuleExports(node) {
    return (t.isIdentifier(node.object) &&
        node.object.name === 'module' &&
        t.isIdentifier(node.property) &&
        node.property.name === 'exports');
}
