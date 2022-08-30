"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTestingTypeData = exports.makeCurrentProjectData = exports.makeCoreData = void 0;
const types_1 = require("../../../types");
/**
 * All state for the app should live here for now
 */
function makeCoreData(modeOptions = {}) {
    var _a, _b, _c, _d;
    return {
        servers: {},
        cliBrowser: (_a = modeOptions.browser) !== null && _a !== void 0 ? _a : null,
        cliTestingType: (_b = modeOptions.testingType) !== null && _b !== void 0 ? _b : null,
        machineBrowsers: null,
        hasInitializedMode: null,
        baseError: null,
        dashboardGraphQLError: null,
        dev: {
            refreshState: null,
        },
        app: {
            isInGlobalMode: Boolean(modeOptions.global),
            browsers: null,
            projects: [],
            nodePath: modeOptions.userNodePath,
            browserStatus: 'closed',
            relaunchBrowser: false,
        },
        localSettings: {
            availableEditors: [],
            preferences: {},
            refreshing: null,
        },
        authState: {
            browserOpened: false,
        },
        currentProject: (_c = modeOptions.projectRoot) !== null && _c !== void 0 ? _c : null,
        currentProjectData: makeCurrentProjectData(modeOptions.projectRoot, modeOptions.testingType),
        currentProjectGitInfo: null,
        currentTestingType: (_d = modeOptions.testingType) !== null && _d !== void 0 ? _d : null,
        wizard: {
            chosenBundler: null,
            chosenFramework: null,
            chosenManualInstall: false,
            detectedBundler: null,
            detectedFramework: null,
        },
        migration: {
            step: 'renameAuto',
            videoEmbedHtml: null,
            legacyConfigForMigration: null,
            filteredSteps: [...types_1.MIGRATION_STEPS],
            flags: {
                hasCustomIntegrationFolder: false,
                hasCustomIntegrationTestFiles: false,
                hasCustomComponentFolder: false,
                hasCustomComponentTestFiles: false,
                hasCustomSupportFile: false,
                hasComponentTesting: true,
                hasE2ESpec: true,
                hasPluginsFile: true,
                shouldAddCustomE2ESpecPattern: false,
            },
        },
        warnings: [],
        activeBrowser: null,
        user: null,
        electron: {
            app: null,
            browserWindow: null,
        },
        scaffoldedFiles: null,
        packageManager: 'npm',
        forceReconfigureProject: null,
        versionData: null,
    };
}
exports.makeCoreData = makeCoreData;
function makeCurrentProjectData(projectRoot, testingType) {
    if (projectRoot) {
        return {
            error: null,
            warnings: [],
            testingTypeData: makeTestingTypeData(testingType),
        };
    }
    return null;
}
exports.makeCurrentProjectData = makeCurrentProjectData;
function makeTestingTypeData(testingType) {
    if (testingType) {
        return {
            error: null,
            warnings: [],
            activeAppData: null,
        };
    }
    return null;
}
exports.makeTestingTypeData = makeTestingTypeData;
