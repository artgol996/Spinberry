"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wizard = void 0;
const gql_WizardBundler_1 = require("./gql-WizardBundler");
const gql_WizardFrontendFramework_1 = require("./gql-WizardFrontendFramework");
const gql_WizardNpmPackage_1 = require("./gql-WizardNpmPackage");
const nexus_1 = require("nexus");
const scaffold_config_1 = require("../../../../scaffold-config");
exports.Wizard = (0, nexus_1.objectType)({
    name: 'Wizard',
    description: 'The Wizard is a container for any state associated with initial onboarding to Cypress',
    definition(t) {
        t.nonNull.list.nonNull.field('allBundlers', {
            type: gql_WizardBundler_1.WizardBundler,
            description: 'All of the bundlers to choose from',
            resolve: () => Array.from(scaffold_config_1.WIZARD_BUNDLERS),
        });
        t.field('bundler', {
            type: gql_WizardBundler_1.WizardBundler,
            resolve: (source, args, ctx) => { var _a; return (_a = ctx.coreData.wizard.chosenBundler) !== null && _a !== void 0 ? _a : null; },
        });
        t.field('framework', {
            type: gql_WizardFrontendFramework_1.WizardFrontendFramework,
            resolve: (source, args, ctx) => { var _a; return (_a = ctx.coreData.wizard.chosenFramework) !== null && _a !== void 0 ? _a : null; },
        });
        t.nonNull.list.nonNull.field('frameworks', {
            type: gql_WizardFrontendFramework_1.WizardFrontendFramework,
            description: 'All of the component testing frameworks to choose from',
            resolve: () => Array.from(scaffold_config_1.WIZARD_FRAMEWORKS), // TODO(tim): fix this in nexus to accept Readonly
        });
        t.nonNull.list.nonNull.field('packagesToInstall', {
            type: gql_WizardNpmPackage_1.WizardNpmPackage,
            description: 'A list of packages to install, null if we have not chosen both a framework and bundler',
            resolve: (source, args, ctx) => {
                return ctx.wizard.packagesToInstall().map((pkg) => {
                    return {
                        name: pkg.dependency.name,
                        package: pkg.dependency.package,
                        description: pkg.dependency.description,
                        minVersion: pkg.dependency.minVersion,
                        detectedVersion: pkg.detectedVersion,
                        satisfied: pkg.satisfied,
                    };
                });
            },
        });
        t.string('installDependenciesCommand', {
            description: 'Command to install required command',
            resolve: (source, args, ctx) => ctx.wizard.installDependenciesCommand(),
        });
    },
    sourceType: {
        module: '@packages/data-context/src/data/coreDataShape',
        export: 'WizardDataShape',
    },
});
