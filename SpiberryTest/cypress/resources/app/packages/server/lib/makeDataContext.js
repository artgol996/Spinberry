"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDataContext = exports.clearCtx = exports.setCtx = exports.getCtx = void 0;
const tslib_1 = require("tslib");
const data_context_1 = require("../../data-context");
Object.defineProperty(exports, "getCtx", { enumerable: true, get: function () { return data_context_1.getCtx; } });
Object.defineProperty(exports, "clearCtx", { enumerable: true, get: function () { return data_context_1.clearCtx; } });
Object.defineProperty(exports, "setCtx", { enumerable: true, get: function () { return data_context_1.setCtx; } });
const electron_1 = (0, tslib_1.__importDefault)(require("electron"));
const root_1 = (0, tslib_1.__importDefault)(require("../../root"));
const configUtils = (0, tslib_1.__importStar)(require("../../config"));
const ensure_url_1 = require("./util/ensure-url");
const windows_1 = require("./gui/windows");
const utils_1 = (0, tslib_1.__importDefault)(require("./browsers/utils"));
const auth_1 = (0, tslib_1.__importDefault)(require("./gui/auth"));
const user_1 = (0, tslib_1.__importDefault)(require("./user"));
const config = (0, tslib_1.__importStar)(require("./config"));
const open_project_1 = require("./open_project");
const cache_1 = (0, tslib_1.__importDefault)(require("./cache"));
const schema_1 = require("../../graphql/src/schema");
const links_1 = require("../lib/gui/links");
const editors_1 = require("./util/editors");
const savedState = (0, tslib_1.__importStar)(require("./saved_state"));
const app_data_1 = (0, tslib_1.__importDefault)(require("./util/app_data"));
const browsers_1 = (0, tslib_1.__importDefault)(require("./browsers"));
const dev_server_1 = (0, tslib_1.__importDefault)(require("./plugins/dev-server"));
const graphql_1 = require("../../graphql");
const { getBrowsers, ensureAndGetByNameOrPath } = utils_1.default;
function makeDataContext(options) {
    const ctx = new data_context_1.DataContext({
        schema: schema_1.graphqlSchema,
        schemaCloud: graphql_1.remoteSchemaWrapped,
        ...options,
        browserApi: {
            close: browsers_1.default.close,
            getBrowsers,
            async ensureAndGetByNameOrPath(nameOrPath) {
                const browsers = await ctx.browser.machineBrowsers();
                return await ensureAndGetByNameOrPath(nameOrPath, false, browsers);
            },
            async focusActiveBrowserWindow() {
                return open_project_1.openProject.sendFocusBrowserMessage();
            },
            relaunchBrowser() {
                return open_project_1.openProject.relaunchBrowser ? open_project_1.openProject.relaunchBrowser() : null;
            },
        },
        configApi: {
            allowedConfig: configUtils.allowed,
            cypressVersion: root_1.default.version,
            validateConfig: configUtils.validate,
            updateWithPluginValues: config.updateWithPluginValues,
            setupFullConfigWithDefaults: config.setupFullConfigWithDefaults,
        },
        appApi: {
            appData: app_data_1.default,
        },
        authApi: {
            getUser() {
                return user_1.default.get();
            },
            logIn(onMessage, utmSource, utmMedium) {
                return auth_1.default.start(onMessage, utmSource, utmMedium);
            },
            logOut() {
                return user_1.default.logOut();
            },
            resetAuthState() {
                auth_1.default.stopServer();
            },
        },
        projectApi: {
            launchProject(browser, spec, options) {
                return open_project_1.openProject.launch({ ...browser }, spec, options);
            },
            openProjectCreate(args, options) {
                return open_project_1.openProject.create(args.projectRoot, args, options);
            },
            insertProjectToCache(projectRoot) {
                return cache_1.default.insertProject(projectRoot);
            },
            async getProjectRootsFromCache() {
                return cache_1.default.getProjectRoots().then((roots) => {
                    return Promise.all(roots.map(async (projectRoot) => {
                        return {
                            projectRoot,
                            savedState: () => savedState.create(projectRoot).then((s) => s.get()),
                        };
                    }));
                });
            },
            clearLatestProjectsCache() {
                return cache_1.default.removeLatestProjects();
            },
            getProjectPreferencesFromCache() {
                return cache_1.default.getProjectPreferences();
            },
            clearProjectPreferences(projectTitle) {
                return cache_1.default.removeProjectPreferences(projectTitle);
            },
            clearAllProjectPreferences() {
                return cache_1.default.removeAllProjectPreferences();
            },
            insertProjectPreferencesToCache(projectTitle, preferences) {
                // FIXME: this should be awaited (since it writes to disk asynchronously) but is not
                // https://cypress-io.atlassian.net/browse/UNIFY-1705
                cache_1.default.insertProjectPreferences(projectTitle, preferences);
            },
            removeProjectFromCache(path) {
                return cache_1.default.removeProject(path);
            },
            closeActiveProject() {
                return open_project_1.openProject.closeActiveProject();
            },
            getCurrentBrowser() {
                var _a, _b;
                return (_b = ((_a = open_project_1.openProject === null || open_project_1.openProject === void 0 ? void 0 : open_project_1.openProject.projectBase) === null || _a === void 0 ? void 0 : _a.browser)) !== null && _b !== void 0 ? _b : undefined;
            },
            getConfig() {
                return open_project_1.openProject.getConfig();
            },
            getRemoteStates() {
                return open_project_1.openProject.getRemoteStates();
            },
            getCurrentProjectSavedState() {
                var _a;
                // TODO: See if this is the best way we should be getting this config,
                // shouldn't we have this already in the DataContext?
                try {
                    return (_a = open_project_1.openProject.getConfig()) === null || _a === void 0 ? void 0 : _a.state;
                }
                catch (_b) {
                    return {};
                }
            },
            setPromptShown(slug) {
                var _a, _b, _c, _d;
                return (_a = open_project_1.openProject.getProject()) === null || _a === void 0 ? void 0 : _a.saveState({
                    promptsShown: {
                        ...((_d = (_c = (_b = open_project_1.openProject.getProject()) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.promptsShown) !== null && _d !== void 0 ? _d : {}),
                        [slug]: Date.now(),
                    },
                });
            },
            makeProjectSavedState(projectRoot) {
                return () => savedState.create(projectRoot).then((s) => s.get());
            },
            getDevServer() {
                return dev_server_1.default;
            },
            isListening: ensure_url_1.isListening,
        },
        electronApi: {
            openExternal(url) {
                (0, links_1.openExternal)(url).catch((e) => {
                    ctx.logTraceError(e);
                });
            },
            showItemInFolder(folder) {
                electron_1.default.shell.showItemInFolder(folder);
            },
            showOpenDialog(props) {
                return electron_1.default.dialog.showOpenDialog(props);
            },
            showSaveDialog(window, props) {
                return electron_1.default.dialog.showSaveDialog(window, props);
            },
            copyTextToClipboard(text) {
                electron_1.default.clipboard.writeText(text);
            },
            isMainWindowFocused() {
                return (0, windows_1.isMainWindowFocused)();
            },
            focusMainWindow() {
                return (0, windows_1.focusMainWindow)();
            },
        },
        localSettingsApi: {
            async setPreferences(object) {
                const state = await savedState.create();
                return state.set(object);
            },
            async getPreferences() {
                return (await savedState.create()).get();
            },
            async getAvailableEditors() {
                const { availableEditors } = await (0, editors_1.getUserEditor)(true);
                return availableEditors;
            },
        },
    });
    return ctx;
}
exports.makeDataContext = makeDataContext;
