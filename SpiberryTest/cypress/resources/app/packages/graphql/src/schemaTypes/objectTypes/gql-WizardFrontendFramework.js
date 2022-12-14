"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardFrontendFramework = void 0;
const gql_WizardBundler_1 = require("./gql-WizardBundler");
const gql_WizardEnums_1 = require("../enumTypes/gql-WizardEnums");
const nexus_1 = require("nexus");
exports.WizardFrontendFramework = (0, nexus_1.objectType)({
    name: 'WizardFrontendFramework',
    description: 'A frontend framework that we can setup within the app',
    node: 'type',
    definition(t) {
        t.nonNull.field('type', {
            type: gql_WizardEnums_1.FrontendFrameworkEnum,
            description: 'The unique identifier for a framework or library',
        }),
            t.nonNull.field('category', {
                type: 'String',
                description: 'The category (framework, like react-scripts, or library, like react',
            }),
            t.nonNull.boolean('isSelected', {
                description: 'Whether this is the selected framework in the wizard',
                resolve: (source, args, ctx) => { var _a; return ((_a = ctx.wizardData.chosenFramework) === null || _a === void 0 ? void 0 : _a.type) === source.type; },
            });
        t.nonNull.boolean('isDetected', {
            description: 'Whether this is the detected framework',
            resolve: (source, args, ctx) => { var _a; return ((_a = ctx.wizardData.detectedFramework) === null || _a === void 0 ? void 0 : _a.type) === source.type; },
        });
        t.nonNull.string('name', {
            description: 'The display name of the framework',
        });
        t.nonNull.field('supportStatus', {
            description: 'Current support status of the framework',
            type: gql_WizardEnums_1.SupportStatusEnum,
        });
        t.nonNull.list.nonNull.field('supportedBundlers', {
            type: gql_WizardBundler_1.WizardBundler,
            description: 'All of the supported bundlers for this framework',
            resolve: (source, args, ctx) => {
                return [...source.supportedBundlers];
            },
        });
    },
    sourceType: {
        module: '@packages/scaffold-config',
        export: 'WizardFrontendFramework',
    },
});
