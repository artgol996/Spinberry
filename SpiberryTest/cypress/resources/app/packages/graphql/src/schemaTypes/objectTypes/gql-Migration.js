"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration = exports.MigrationRegexp = exports.MigrationFile = exports.MigrationFileData = exports.ManualMigration = exports.ManualMigrationFile = exports.MigrationFilePart = exports.MigrationStep = exports.MigrationStepEnum = void 0;
const nexus_1 = require("nexus");
const __1 = require("..");
const types_1 = require("../../../../types");
exports.MigrationStepEnum = (0, nexus_1.enumType)({
    name: 'MigrationStepEnum',
    members: types_1.MIGRATION_STEPS,
});
exports.MigrationStep = (0, nexus_1.objectType)({
    name: 'MigrationStep',
    node: 'name',
    description: 'Contains all data related to the 9.X to 10.0 migration UI',
    definition(t) {
        t.nonNull.field('name', {
            type: exports.MigrationStepEnum,
            description: 'Identifier of the step',
        });
        t.nonNull.boolean('isCurrentStep', {
            description: 'This is the current step',
            resolve: (source, args, ctx) => {
                return ctx.coreData.migration.step === source.name;
            },
        });
        t.nonNull.boolean('isCompleted', {
            description: 'Has the current step been completed',
            resolve: (source, args, ctx) => {
                const indexOfObservedStep = ctx.coreData.migration.filteredSteps.indexOf(source.name);
                const indexOfCurrentStep = ctx.coreData.migration.filteredSteps.indexOf(ctx.coreData.migration.step);
                return indexOfObservedStep < indexOfCurrentStep;
            },
        });
        t.nonNull.int('index', {
            description: 'Index of the step in the list',
            resolve: (source, args, ctx) => {
                return ctx.coreData.migration.filteredSteps.indexOf(source.name) + 1;
            },
        });
    },
});
exports.MigrationFilePart = (0, nexus_1.objectType)({
    name: 'MigrationFilePart',
    node: (obj) => obj.text,
    definition(t) {
        t.nonNull.string('text', {
            description: 'part of filename',
        });
        t.nonNull.boolean('highlight', {
            description: 'should highlight in migration UI',
        });
        t.string('group', {
            description: 'is this part a folder or extension that needs migration',
        });
    },
});
exports.ManualMigrationFile = (0, nexus_1.objectType)({
    name: 'ManualMigrationFile',
    node: 'relative',
    definition(t) {
        t.nonNull.boolean('moved', {
            description: 'has the file been moved since opening the migration helper',
        });
        t.nonNull.string('relative', {
            description: 'name of file to migrate',
        });
    },
});
exports.ManualMigration = (0, nexus_1.objectType)({
    name: 'ManualMigration',
    node: ({ files }) => files.map((f) => f.relative).join(),
    definition(t) {
        t.nonNull.list.nonNull.field('files', {
            type: exports.ManualMigrationFile,
            description: 'files needing manual migration',
        });
        t.nonNull.boolean('completed', {
            description: 'is the manual migration completed (all files are moved)',
        });
    },
});
exports.MigrationFileData = (0, nexus_1.objectType)({
    name: 'MigrationFileData',
    node: (obj) => obj.parts.map((file) => file.text).join(''),
    definition(t) {
        t.nonNull.string('relative');
        t.nonNull.list.nonNull.field('parts', {
            type: exports.MigrationFilePart,
        });
    },
});
exports.MigrationFile = (0, nexus_1.objectType)({
    name: 'MigrationFile',
    definition(t) {
        t.nonNull.field('testingType', {
            type: __1.TestingTypeEnum,
        });
        t.nonNull.field('before', {
            type: exports.MigrationFileData,
        });
        t.nonNull.field('after', {
            type: exports.MigrationFileData,
        });
    },
});
exports.MigrationRegexp = (0, nexus_1.objectType)({
    name: 'MigrationRegexp',
    definition(t) {
        t.nonNull.string('beforeE2E', {
            description: 'regexp to identify existing specs in e2e',
        });
        t.nonNull.string('afterE2E', {
            description: 'regexp to use to rename existing specs in e2e',
        });
        t.nonNull.string('beforeComponent', {
            description: 'regexp to identify existing specs in component',
        });
        t.nonNull.string('afterComponent', {
            description: 'regexp to use to rename existing specs in component',
        });
    },
});
exports.Migration = (0, nexus_1.objectType)({
    name: 'Migration',
    description: 'Contains all data related to the 9.X to 10.0 migration UI',
    definition(t) {
        t.nonNull.list.nonNull.field('filteredSteps', {
            type: exports.MigrationStep,
            description: 'Steps filtered with the current context',
            resolve: (source, args, ctx) => {
                return ctx.coreData.migration.filteredSteps.map((name) => {
                    return {
                        name,
                    };
                });
            },
        });
        t.nonNull.list.nonNull.field('specFiles', {
            description: 'All spec files after conversion',
            type: exports.MigrationFile,
            resolve: async (source, args, ctx) => {
                const result = await ctx.migration.getSpecsForMigrationGuide();
                return result;
            },
        });
        t.field('manualFiles', {
            description: 'List of files needing manual conversion',
            type: exports.ManualMigration,
            resolve: async (source, args, ctx) => {
                // avoid starting the watcher when not on this step
                if (ctx.coreData.migration.step !== 'renameManual') {
                    return null;
                }
                const status = await ctx.migration.getComponentTestingMigrationStatus();
                if (!status) {
                    return null;
                }
                return {
                    completed: status.completed,
                    // we sort it to make sure the endpoint always returns the
                    // specs in the same order, so things don't jump around.
                    files: [...status.files.values()]
                        .sort((x, y) => y.relative.length - x.relative.length),
                };
            },
        });
        t.field('supportFiles', {
            description: 'Support files needing automated rename',
            type: exports.MigrationFile,
            resolve: (source, args, ctx) => {
                return ctx.migration.supportFilesForMigrationGuide();
            },
        });
        t.nonNull.string('configFileNameBefore', {
            description: 'the name of the config file to be migrated',
            resolve: (source, args, ctx) => {
                return ctx.migration.legacyConfigFile;
            },
        });
        t.nonNull.string('configFileNameAfter', {
            description: 'the name of the config file after the migration',
            resolve: (source, args, ctx) => {
                return ctx.migration.configFileNameAfterMigration;
            },
        });
        t.nonNull.string('configBeforeCode', {
            description: 'contents of the cypress.json file before conversion',
            resolve: (source, args, ctx) => {
                return JSON.stringify(ctx.coreData.migration.legacyConfigForMigration, null, 2);
            },
        });
        t.nonNull.string('configAfterCode', {
            description: 'contents of the cypress.json file after conversion',
            resolve: (source, args, ctx) => {
                return ctx.migration.createConfigString();
            },
        });
        t.string('videoEmbedHtml', {
            description: 'Markup for the migration landing page video embed',
            resolve: (source, args, ctx) => {
                if (!ctx.lifecycleManager.metaState.needsCypressJsonMigration) {
                    return null;
                }
                return ctx.migration.getVideoEmbedHtml();
            },
        });
        t.nonNull.string('integrationFolder', {
            description: 'the integration folder path used to store e2e tests',
            resolve: async (source, args, ctx) => (await ctx.migration.integrationFolder()).toString(),
        });
        t.nonNull.string('componentFolder', {
            description: 'the component folder path used to store components tests',
            resolve: async (source, args, ctx) => (await ctx.migration.componentFolder()).toString(),
        });
        t.nonNull.boolean('hasCustomIntegrationFolder', {
            description: 'whether the integration folder is custom or not',
            resolve: (source, args, ctx) => {
                return ctx.coreData.migration.flags.hasCustomIntegrationFolder;
            },
        });
        t.nonNull.boolean('hasCustomIntegrationTestFiles', {
            description: 'whether the testFiles member is custom or not in integration',
            resolve: (source, args, ctx) => {
                return ctx.coreData.migration.flags.hasCustomIntegrationTestFiles;
            },
        });
        t.nonNull.boolean('hasCustomComponentFolder', {
            description: 'whether the component folder is custom or not',
            resolve: (source, args, ctx) => {
                return ctx.coreData.migration.flags.hasCustomComponentFolder;
            },
        });
        t.nonNull.boolean('hasCustomComponentTestFiles', {
            description: 'whether the testFiles member is custom or not in component testing',
            resolve: (source, args, ctx) => {
                return ctx.coreData.migration.flags.hasCustomComponentTestFiles;
            },
        });
        t.nonNull.boolean('hasComponentTesting', {
            description: 'whether component testing is set up in the migrated config or not',
            resolve: (source, args, ctx) => {
                return ctx.coreData.migration.flags.hasComponentTesting;
            },
        });
        t.boolean('isUsingTypeScript', {
            description: 'Whether the project has Typescript',
            resolve(source, args, ctx) {
                return ctx.lifecycleManager.metaState.isUsingTypeScript;
            },
        });
        t.boolean('shouldMigratePreExtension', {
            description: 'whether the pre extension info should be displayed',
            resolve: (source, args, ctx) => {
                return ctx.migration.shouldMigratePreExtension;
            },
        });
    },
});
