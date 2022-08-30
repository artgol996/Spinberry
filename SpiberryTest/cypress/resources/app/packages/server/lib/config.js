"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResolvedRuntimeConfig = exports.parseEnv = exports.setUrls = exports.setAbsolutePaths = exports.setSupportFileAndFolder = exports.relativeToProjectRoot = exports.setNodeBinary = exports.resolveConfigValues = exports.updateWithPluginValues = exports.setPluginResolvedOn = exports.setResolvedConfigValues = exports.mergeDefaults = exports.setupFullConfigWithDefaults = exports.isValidCypressInternalEnvValue = exports.utils = void 0;
const tslib_1 = require("tslib");
const bluebird_1 = (0, tslib_1.__importDefault)(require("bluebird"));
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const return_deep_diff_1 = (0, tslib_1.__importDefault)(require("return-deep-diff"));
const configUtils = (0, tslib_1.__importStar)(require("../../config"));
const errors = (0, tslib_1.__importStar)(require("./errors"));
const config_1 = require("./util/config");
const fs_1 = require("./util/fs");
const keys_1 = (0, tslib_1.__importDefault)(require("./util/keys"));
const origin_1 = (0, tslib_1.__importDefault)(require("./util/origin"));
const path_helpers_1 = (0, tslib_1.__importDefault)(require("./util/path_helpers"));
const makeDataContext_1 = require("./makeDataContext");
const debug = (0, debug_1.default)('cypress:server:config');
const folders = (0, lodash_1.default)(configUtils.options).filter({ isFolder: true }).map('name').value();
const convertRelativeToAbsolutePaths = (projectRoot, obj) => {
    return lodash_1.default.reduce(folders, (memo, folder) => {
        const val = obj[folder];
        if ((val != null) && (val !== false)) {
            memo[folder] = path_1.default.resolve(projectRoot, val);
        }
        return memo;
    }, {});
};
const hideSpecialVals = function (val, key) {
    if (lodash_1.default.includes(config_1.CYPRESS_SPECIAL_ENV_VARS, key)) {
        return keys_1.default.hide(val);
    }
    return val;
};
// an object with a few utility methods for easy stubbing from unit tests
exports.utils = {
    resolveModule(name) {
        return require.resolve(name);
    },
    // returns:
    //   false - if the file should not be set
    //   string - found filename
    //   null - if there is an error finding the file
    discoverModuleFile(options) {
        debug('discover module file %o', options);
        const { filename } = options;
        // they have it explicitly set, so it should be there
        return fs_1.fs.pathExists(filename)
            .then((found) => {
            if (found) {
                debug('file exists, assuming it will load');
                return filename;
            }
            debug('could not find %o', { filename });
            return null;
        });
    },
};
function isValidCypressInternalEnvValue(value) {
    // names of config environments, see "config/app.yml"
    const names = ['development', 'test', 'staging', 'production'];
    return lodash_1.default.includes(names, value);
}
exports.isValidCypressInternalEnvValue = isValidCypressInternalEnvValue;
function setupFullConfigWithDefaults(obj = {}) {
    debug('setting config object %o', obj);
    let { projectRoot, projectName, config, envFile, options, cliConfig } = obj;
    // just force config to be an object so we dont have to do as much
    // work in our tests
    if (config == null) {
        config = {};
    }
    debug('config is %o', config);
    // flatten the object's properties into the master config object
    config.envFile = envFile;
    config.projectRoot = projectRoot;
    config.projectName = projectName;
    return mergeDefaults(config, options, cliConfig);
}
exports.setupFullConfigWithDefaults = setupFullConfigWithDefaults;
function mergeDefaults(config = {}, options = {}, cliConfig = {}) {
    const resolved = {};
    config.rawJson = lodash_1.default.cloneDeep(config);
    lodash_1.default.extend(config, lodash_1.default.pick(options, 'configFile', 'morgan', 'isTextTerminal', 'socketId', 'report', 'browsers'));
    debug('merged config with options, got %o', config);
    lodash_1.default
        .chain(configUtils.allowed({ ...cliConfig, ...options }))
        .omit('env')
        .omit('browsers')
        .each((val, key) => {
        // If users pass in testing-type specific keys (eg, specPattern),
        // we want to merge this with what we've read from the config file,
        // rather than override it entirely.
        if (typeof config[key] === 'object' && typeof val === 'object') {
            if (Object.keys(val).length) {
                resolved[key] = 'cli';
                config[key] = { ...config[key], ...val };
            }
        }
        else {
            resolved[key] = 'cli';
            config[key] = val;
        }
    }).value();
    let url = config.baseUrl;
    if (url) {
        // replace multiple slashes at the end of string to single slash
        // so http://localhost/// will be http://localhost/
        // https://regexr.com/48rvt
        config.baseUrl = url.replace(/\/\/+$/, '/');
    }
    const defaultsForRuntime = configUtils.getDefaultValues(options);
    lodash_1.default.defaultsDeep(config, defaultsForRuntime);
    let additionalIgnorePattern = config.additionalIgnorePattern;
    if (options.testingType === 'component' && config.e2e && config.e2e.specPattern) {
        additionalIgnorePattern = config.e2e.specPattern;
    }
    config = {
        ...config,
        ...config[options.testingType],
        additionalIgnorePattern,
    };
    // split out our own app wide env from user env variables
    // and delete envFile
    config.env = parseEnv(config, { ...cliConfig.env, ...options.env }, resolved);
    config.cypressEnv = process.env.CYPRESS_INTERNAL_ENV;
    debug('using CYPRESS_INTERNAL_ENV %s', config.cypressEnv);
    if (!isValidCypressInternalEnvValue(config.cypressEnv)) {
        throw errors.throwErr('INVALID_CYPRESS_INTERNAL_ENV', config.cypressEnv);
    }
    delete config.envFile;
    // when headless
    if (config.isTextTerminal && !process.env.CYPRESS_INTERNAL_FORCE_FILEWATCH) {
        // dont ever watch for file changes
        config.watchForFileChanges = false;
        // and forcibly reset numTestsKeptInMemory
        // to zero
        config.numTestsKeptInMemory = 0;
    }
    config = setResolvedConfigValues(config, defaultsForRuntime, resolved);
    if (config.port) {
        config = setUrls(config);
    }
    // validate config again here so that we catch configuration errors coming
    // from the CLI overrides or env var overrides
    configUtils.validate(lodash_1.default.omit(config, 'browsers'), (validationResult) => {
        // return errors.throwErr('CONFIG_VALIDATION_ERROR', errMsg)
        if (lodash_1.default.isString(validationResult)) {
            return errors.throwErr('CONFIG_VALIDATION_MSG_ERROR', null, null, validationResult);
        }
        return errors.throwErr('CONFIG_VALIDATION_ERROR', null, null, validationResult);
    });
    config = setAbsolutePaths(config);
    config = (0, exports.setNodeBinary)(config, options.userNodePath, options.userNodeVersion);
    debug('validate that there is no breaking config options before setupNodeEvents');
    const { testingType } = options;
    function makeConfigError(cyError) {
        cyError.name = `Obsolete option used in config object`;
        return cyError;
    }
    configUtils.validateNoBreakingConfig(config[testingType], errors.warning, (err, options) => {
        throw makeConfigError(errors.get(err, { ...options, name: `${testingType}.${options.name}` }));
    }, testingType);
    configUtils.validateNoBreakingConfig(config, errors.warning, (err, ...args) => {
        throw makeConfigError(errors.get(err, ...args));
    }, testingType);
    // We need to remove the nested propertied by testing type because it has been
    // flattened/compacted based on the current testing type that is selected
    // making the config only available with the properties that are valid,
    // also, having the correct values that can be used in the setupNodeEvents
    delete config['e2e'];
    delete config['component'];
    delete config['resolved']['e2e'];
    delete config['resolved']['component'];
    return setSupportFileAndFolder(config);
}
exports.mergeDefaults = mergeDefaults;
function setResolvedConfigValues(config, defaults, resolved) {
    const obj = lodash_1.default.clone(config);
    obj.resolved = resolveConfigValues(config, defaults, resolved);
    debug('resolved config is %o', obj.resolved.browsers);
    return obj;
}
exports.setResolvedConfigValues = setResolvedConfigValues;
// Given an object "resolvedObj" and a list of overrides in "obj"
// marks all properties from "obj" inside "resolvedObj" using
// {value: obj.val, from: "plugin"}
function setPluginResolvedOn(resolvedObj, obj) {
    return lodash_1.default.each(obj, (val, key) => {
        if (lodash_1.default.isObject(val) && !lodash_1.default.isArray(val) && resolvedObj[key]) {
            // recurse setting overrides
            // inside of objected
            return setPluginResolvedOn(resolvedObj[key], val);
        }
        const valueFrom = {
            value: val,
            from: 'plugin',
        };
        resolvedObj[key] = valueFrom;
    });
}
exports.setPluginResolvedOn = setPluginResolvedOn;
function updateWithPluginValues(cfg, overrides, testingType) {
    var _a, _b;
    if (!overrides) {
        overrides = {};
    }
    debug('updateWithPluginValues %o', { cfg, overrides });
    // make sure every option returned from the plugins file
    // passes our validation functions
    configUtils.validate(overrides, (validationResult) => {
        let configFile = (0, makeDataContext_1.getCtx)().lifecycleManager.configFile;
        if (lodash_1.default.isString(validationResult)) {
            return errors.throwErr('CONFIG_VALIDATION_MSG_ERROR', 'configFile', configFile, validationResult);
        }
        return errors.throwErr('CONFIG_VALIDATION_ERROR', 'configFile', configFile, validationResult);
    });
    debug('validate that there is no breaking config options added by setupNodeEvents');
    function makeSetupError(cyError) {
        cyError.name = `Error running ${testingType}.setupNodeEvents()`;
        return cyError;
    }
    configUtils.validateNoBreakingConfig(overrides, errors.warning, (err, options) => {
        throw makeSetupError(errors.get(err, options));
    }, testingType);
    configUtils.validateNoBreakingConfig(overrides[testingType], errors.warning, (err, options) => {
        throw makeSetupError(errors.get(err, {
            ...options,
            name: `${testingType}.${options.name}`,
        }));
    }, testingType);
    const originalResolvedBrowsers = (_b = lodash_1.default.cloneDeep((_a = cfg === null || cfg === void 0 ? void 0 : cfg.resolved) === null || _a === void 0 ? void 0 : _a.browsers)) !== null && _b !== void 0 ? _b : {
        value: cfg.browsers,
        from: 'default',
    };
    const diffs = (0, return_deep_diff_1.default)(cfg, overrides, true);
    debug('config diffs %o', diffs);
    const userBrowserList = diffs && diffs.browsers && lodash_1.default.cloneDeep(diffs.browsers);
    if (userBrowserList) {
        debug('user browser list %o', userBrowserList);
    }
    // for each override go through
    // and change the resolved values of cfg
    // to point to the plugin
    if (diffs) {
        debug('resolved config before diffs %o', cfg.resolved);
        setPluginResolvedOn(cfg.resolved, diffs);
        debug('resolved config object %o', cfg.resolved);
    }
    // merge cfg into overrides
    const merged = lodash_1.default.defaultsDeep(diffs, cfg);
    debug('merged config object %o', merged);
    // the above _.defaultsDeep combines arrays,
    // if diffs.browsers = [1] and cfg.browsers = [1, 2]
    // then the merged result merged.browsers = [1, 2]
    // which is NOT what we want
    if (Array.isArray(userBrowserList) && userBrowserList.length) {
        merged.browsers = userBrowserList;
        merged.resolved.browsers.value = userBrowserList;
    }
    if (overrides.browsers === null) {
        // null breaks everything when merging lists
        debug('replacing null browsers with original list %o', originalResolvedBrowsers);
        merged.browsers = cfg.browsers;
        if (originalResolvedBrowsers) {
            merged.resolved.browsers = originalResolvedBrowsers;
        }
    }
    debug('merged plugins config %o', merged);
    return merged;
}
exports.updateWithPluginValues = updateWithPluginValues;
// combines the default configuration object with values specified in the
// configuration file like "cypress.{ts|js}". Values in configuration file
// overwrite the defaults.
function resolveConfigValues(config, defaults, resolved = {}) {
    // pick out only known configuration keys
    return lodash_1.default
        .chain(config)
        .pick(configUtils.getPublicConfigKeys())
        .mapValues((val, key) => {
        let r;
        const source = (s) => {
            return {
                value: val,
                from: s,
            };
        };
        r = resolved[key];
        if (r) {
            if (lodash_1.default.isObject(r)) {
                return r;
            }
            return source(r);
        }
        if (!(!lodash_1.default.isEqual(config[key], defaults[key]) && key !== 'browsers')) {
            // "browsers" list is special, since it is dynamic by default
            // and can only be overwritten via plugins file
            return source('default');
        }
        return source('config');
    }).value();
}
exports.resolveConfigValues = resolveConfigValues;
// instead of the built-in Node process, specify a path to 3rd party Node
const setNodeBinary = (obj, userNodePath, userNodeVersion) => {
    // if execPath isn't found we weren't executed from the CLI and should used the bundled node version.
    if (userNodePath && userNodeVersion && obj.nodeVersion !== 'bundled') {
        obj.resolvedNodePath = userNodePath;
        obj.resolvedNodeVersion = userNodeVersion;
        return obj;
    }
    obj.resolvedNodeVersion = process.versions.node;
    return obj;
};
exports.setNodeBinary = setNodeBinary;
function relativeToProjectRoot(projectRoot, file) {
    if (!file.startsWith(projectRoot)) {
        return file;
    }
    // captures leading slash(es), both forward slash and back slash
    const leadingSlashRe = /^[\/|\\]*(?![\/|\\])/;
    return file.replace(projectRoot, '').replace(leadingSlashRe, '');
}
exports.relativeToProjectRoot = relativeToProjectRoot;
// async function
async function setSupportFileAndFolder(obj) {
    if (!obj.supportFile) {
        return bluebird_1.default.resolve(obj);
    }
    obj = lodash_1.default.clone(obj);
    const ctx = (0, makeDataContext_1.getCtx)();
    const supportFilesByGlob = await ctx.file.getFilesByGlob(obj.projectRoot, obj.supportFile);
    if (supportFilesByGlob.length > 1) {
        return errors.throwErr('MULTIPLE_SUPPORT_FILES_FOUND', obj.supportFile, supportFilesByGlob);
    }
    if (supportFilesByGlob.length === 0) {
        if (obj.resolved.supportFile.from === 'default') {
            return errors.throwErr('DEFAULT_SUPPORT_FILE_NOT_FOUND', relativeToProjectRoot(obj.projectRoot, obj.supportFile));
        }
        return errors.throwErr('SUPPORT_FILE_NOT_FOUND', relativeToProjectRoot(obj.projectRoot, obj.supportFile));
    }
    // TODO move this logic to find support file into util/path_helpers
    const sf = supportFilesByGlob[0];
    debug(`setting support file ${sf}`);
    debug(`for project root ${obj.projectRoot}`);
    return bluebird_1.default
        .try(() => {
        // resolve full path with extension
        obj.supportFile = exports.utils.resolveModule(sf);
        return debug('resolved support file %s', obj.supportFile);
    }).then(() => {
        if (!path_helpers_1.default.checkIfResolveChangedRootFolder(obj.supportFile, sf)) {
            return;
        }
        debug('require.resolve switched support folder from %s to %s', sf, obj.supportFile);
        // this means the path was probably symlinked, like
        // /tmp/foo -> /private/tmp/foo
        // which can confuse the rest of the code
        // switch it back to "normal" file
        const supportFileName = path_1.default.basename(obj.supportFile);
        const base = sf.endsWith(supportFileName) ? path_1.default.dirname(sf) : sf;
        obj.supportFile = path_1.default.join(base, supportFileName);
        return fs_1.fs.pathExists(obj.supportFile)
            .then((found) => {
            if (!found) {
                errors.throwErr('SUPPORT_FILE_NOT_FOUND', relativeToProjectRoot(obj.projectRoot, obj.supportFile));
            }
            return debug('switching to found file %s', obj.supportFile);
        });
    }).catch({ code: 'MODULE_NOT_FOUND' }, () => {
        debug('support JS module %s does not load', sf);
        return exports.utils.discoverModuleFile({
            filename: sf,
            projectRoot: obj.projectRoot,
        })
            .then((result) => {
            if (result === null) {
                return errors.throwErr('SUPPORT_FILE_NOT_FOUND', relativeToProjectRoot(obj.projectRoot, sf));
            }
            debug('setting support file to %o', { result });
            obj.supportFile = result;
            return obj;
        });
    })
        .then(() => {
        if (obj.supportFile) {
            // set config.supportFolder to its directory
            obj.supportFolder = path_1.default.dirname(obj.supportFile);
            debug(`set support folder ${obj.supportFolder}`);
        }
        return obj;
    });
}
exports.setSupportFileAndFolder = setSupportFileAndFolder;
function setAbsolutePaths(obj) {
    let pr;
    obj = lodash_1.default.clone(obj);
    // if we have a projectRoot
    pr = obj.projectRoot;
    if (pr) {
        // reset fileServerFolder to be absolute
        // obj.fileServerFolder = path.resolve(pr, obj.fileServerFolder)
        // and do the same for all the rest
        lodash_1.default.extend(obj, convertRelativeToAbsolutePaths(pr, obj));
    }
    return obj;
}
exports.setAbsolutePaths = setAbsolutePaths;
function setUrls(obj) {
    obj = lodash_1.default.clone(obj);
    // TODO: rename this to be proxyServer
    const proxyUrl = `http://localhost:${obj.port}`;
    const rootUrl = obj.baseUrl ?
        (0, origin_1.default)(obj.baseUrl)
        :
            proxyUrl;
    lodash_1.default.extend(obj, {
        proxyUrl,
        browserUrl: rootUrl + obj.clientRoute,
        reporterUrl: rootUrl + obj.reporterRoute,
        xhrUrl: obj.namespace + obj.xhrRoute,
    });
    return obj;
}
exports.setUrls = setUrls;
function parseEnv(cfg, envCLI, resolved = {}) {
    const envVars = (resolved.env = {});
    const resolveFrom = (from, obj = {}) => {
        return lodash_1.default.each(obj, (val, key) => {
            return envVars[key] = {
                value: val,
                from,
            };
        });
    };
    const envCfg = cfg.env != null ? cfg.env : {};
    const envFile = cfg.envFile != null ? cfg.envFile : {};
    let envProc = (0, config_1.getProcessEnvVars)(process.env) || {};
    envCLI = envCLI != null ? envCLI : {};
    const configFromEnv = lodash_1.default.reduce(envProc, (memo, val, key) => {
        const cfgKey = configUtils.matchesConfigKey(key);
        if (cfgKey) {
            // only change the value if it hasn't been
            // set by the CLI. override default + config
            if (resolved[cfgKey] !== 'cli') {
                cfg[cfgKey] = val;
                resolved[cfgKey] = {
                    value: val,
                    from: 'env',
                };
            }
            memo.push(key);
        }
        return memo;
    }, []);
    envProc = lodash_1.default.chain(envProc)
        .omit(configFromEnv)
        .mapValues(hideSpecialVals)
        .value();
    resolveFrom('config', envCfg);
    resolveFrom('envFile', envFile);
    resolveFrom('env', envProc);
    resolveFrom('cli', envCLI);
    // envCfg is from cypress.config.{js,ts,mjs,cjs}
    // envFile is from cypress.env.json
    // envProc is from process env vars
    // envCLI is from CLI arguments
    return lodash_1.default.extend(envCfg, envFile, envProc, envCLI);
}
exports.parseEnv = parseEnv;
function getResolvedRuntimeConfig(config, runtimeConfig) {
    const resolvedRuntimeFields = lodash_1.default.mapValues(runtimeConfig, (v) => ({ value: v, from: 'runtime' }));
    return {
        ...config,
        ...runtimeConfig,
        resolved: { ...config.resolved, ...resolvedRuntimeFields },
    };
}
exports.getResolvedRuntimeConfig = getResolvedRuntimeConfig;
