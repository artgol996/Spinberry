"use strict";
var _a, _DataContext_activeRequestCount, _DataContext_awaitingEmptyRequestCount;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataContext = void 0;
const tslib_1 = require("tslib");
const fs_extra_1 = (0, tslib_1.__importDefault)(require("fs-extra"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const util_1 = (0, tslib_1.__importDefault)(require("util"));
const chalk_1 = (0, tslib_1.__importDefault)(require("chalk"));
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
const underscore_string_1 = (0, tslib_1.__importDefault)(require("underscore.string"));
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
require("server-destroy");
const actions_1 = require("./actions");
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const coreDataShape_1 = require("./data/coreDataShape");
const DataActions_1 = require("./DataActions");
const sources_1 = require("./sources/");
const cached_1 = require("./util/cached");
const VersionsDataSource_1 = require("./sources/VersionsDataSource");
const _1 = require(".");
const ProjectLifecycleManager_1 = require("./data/ProjectLifecycleManager");
const ErrorDataSource_1 = require("./sources/ErrorDataSource");
const GraphQLDataSource_1 = require("./sources/GraphQLDataSource");
const RemoteRequestDataSource_1 = require("./sources/RemoteRequestDataSource");
const config_1 = require("../../config");
const RemotePollingDataSource_1 = require("./sources/RemotePollingDataSource");
const IS_DEV_ENV = process.env.CYPRESS_INTERNAL_ENV !== 'production';
class DataContext {
    constructor(_config) {
        var _b;
        /**
         * This will be replaced with Immer, for immutable state updates.
         */
        this.update = (updater) => {
            updater(this._coreData);
        };
        this.debug = (0, debug_1.default)('cypress:data-context');
        this._debugCache = {};
        this.debugNs = (ns, evt, ...args) => {
            var _b;
            var _c;
            const _debug = (_b = (_c = this._debugCache)[ns]) !== null && _b !== void 0 ? _b : (_c[ns] = (0, debug_1.default)(`cypress:data-context:${ns}`));
            _debug(evt, ...args);
        };
        this.onError = (cypressError, title = 'Unexpected Error') => {
            var _b;
            if (this.isRunMode) {
                if ((_b = this.lifecycleManager) === null || _b === void 0 ? void 0 : _b.runModeExitEarly) {
                    this.lifecycleManager.runModeExitEarly(cypressError);
                }
                else {
                    throw cypressError;
                }
            }
            else {
                const err = {
                    id: lodash_1.default.uniqueId('Error'),
                    title,
                    cypressError,
                };
                this.update((d) => {
                    var _b, _c, _d;
                    if ((_c = (_b = d.currentProjectData) === null || _b === void 0 ? void 0 : _b.testingTypeData) === null || _c === void 0 ? void 0 : _c.activeAppData) {
                        d.currentProjectData.testingTypeData.activeAppData.error = err;
                    }
                    else if ((_d = d.currentProjectData) === null || _d === void 0 ? void 0 : _d.testingTypeData) {
                        d.currentProjectData.testingTypeData.error = err;
                    }
                    else if (d.currentProjectData) {
                        d.currentProjectData.error = err;
                    }
                    else {
                        d.baseError = err;
                    }
                });
                this.emitter.errorWarningChange();
            }
        };
        this.onWarning = (err) => {
            var _b;
            if (this.isRunMode) {
                // eslint-disable-next-line
                console.log(chalk_1.default.yellow(err.message));
            }
            else {
                const warning = {
                    id: lodash_1.default.uniqueId('Warning'),
                    title: `Warning: ${underscore_string_1.default.titleize(underscore_string_1.default.humanize((_b = err.type) !== null && _b !== void 0 ? _b : ''))}`,
                    cypressError: err,
                };
                this.update((d) => {
                    var _b, _c, _d;
                    if ((_c = (_b = d.currentProjectData) === null || _b === void 0 ? void 0 : _b.testingTypeData) === null || _c === void 0 ? void 0 : _c.activeAppData) {
                        d.currentProjectData.testingTypeData.activeAppData.warnings.push(warning);
                    }
                    else if ((_d = d.currentProjectData) === null || _d === void 0 ? void 0 : _d.testingTypeData) {
                        d.currentProjectData.testingTypeData.warnings.push(warning);
                    }
                    else if (d.currentProjectData) {
                        d.currentProjectData.warnings.push(warning);
                    }
                    else {
                        d.warnings.push(warning);
                    }
                });
                this.emitter.errorWarningChange();
            }
        };
        const { modeOptions, ...rest } = _config;
        this._config = rest;
        this._modeOptions = modeOptions !== null && modeOptions !== void 0 ? modeOptions : {}; // {} For legacy tests
        this._coreData = (_b = _config.coreData) !== null && _b !== void 0 ? _b : (0, coreDataShape_1.makeCoreData)(this._modeOptions);
        this.lifecycleManager = new ProjectLifecycleManager_1.ProjectLifecycleManager(this);
    }
    get schema() {
        return this._config.schema;
    }
    get schemaCloud() {
        return this._config.schemaCloud;
    }
    get isRunMode() {
        return this._config.mode === 'run';
    }
    get graphql() {
        return new GraphQLDataSource_1.GraphQLDataSource();
    }
    get remoteRequest() {
        return new RemoteRequestDataSource_1.RemoteRequestDataSource();
    }
    get electronApp() {
        return this._config.electronApp;
    }
    get electronApi() {
        return this._config.electronApi;
    }
    get localSettingsApi() {
        return this._config.localSettingsApi;
    }
    get isGlobalMode() {
        return this.appData.isInGlobalMode;
    }
    get modeOptions() {
        return this._modeOptions;
    }
    get coreData() {
        return this._coreData;
    }
    get user() {
        return this.coreData.user;
    }
    get browserList() {
        return this.coreData.app.browsers;
    }
    get nodePath() {
        return this.coreData.app.nodePath;
    }
    get baseError() {
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return (_l = (_k = (_h = (_e = (_d = (_c = (_b = this.coreData.currentProjectData) === null || _b === void 0 ? void 0 : _b.testingTypeData) === null || _c === void 0 ? void 0 : _c.activeAppData) === null || _d === void 0 ? void 0 : _d.error) !== null && _e !== void 0 ? _e : (_g = (_f = this.coreData.currentProjectData) === null || _f === void 0 ? void 0 : _f.testingTypeData) === null || _g === void 0 ? void 0 : _g.error) !== null && _h !== void 0 ? _h : (_j = this.coreData.currentProjectData) === null || _j === void 0 ? void 0 : _j.error) !== null && _k !== void 0 ? _k : this.coreData.baseError) !== null && _l !== void 0 ? _l : null;
    }
    get warnings() {
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return [
            ...(_e = (_d = (_c = (_b = this.coreData.currentProjectData) === null || _b === void 0 ? void 0 : _b.testingTypeData) === null || _c === void 0 ? void 0 : _c.activeAppData) === null || _d === void 0 ? void 0 : _d.warnings) !== null && _e !== void 0 ? _e : [],
            ...(_h = (_g = (_f = this.coreData.currentProjectData) === null || _f === void 0 ? void 0 : _f.testingTypeData) === null || _g === void 0 ? void 0 : _g.warnings) !== null && _h !== void 0 ? _h : [],
            ...(_k = (_j = this.coreData.currentProjectData) === null || _j === void 0 ? void 0 : _j.warnings) !== null && _k !== void 0 ? _k : [],
            ...(_l = this.coreData.warnings) !== null && _l !== void 0 ? _l : [],
        ];
    }
    get file() {
        return new sources_1.FileDataSource(this);
    }
    get versions() {
        return new VersionsDataSource_1.VersionsDataSource(this);
    }
    get browser() {
        return new sources_1.BrowserDataSource(this);
    }
    /**
     * All mutations (update / delete / create), fs writes, etc.
     * should run through this namespace. Everything else should be a "getter"
     */
    get actions() {
        return new DataActions_1.DataActions(this);
    }
    get appData() {
        return this.coreData.app;
    }
    get wizard() {
        return new sources_1.WizardDataSource(this);
    }
    get wizardData() {
        return this.coreData.wizard;
    }
    get currentProject() {
        return this.coreData.currentProject;
    }
    get project() {
        return new sources_1.ProjectDataSource(this);
    }
    get remotePolling() {
        return new RemotePollingDataSource_1.RemotePollingDataSource(this);
    }
    get cloud() {
        return new sources_1.CloudDataSource({
            fetch: (...args) => this.util.fetch(...args),
            getUser: () => this.user,
            logout: () => this.actions.auth.logout().catch(this.logTraceError),
            invalidateClientUrqlCache: () => this.graphql.invalidateClientUrqlCache(this),
        });
    }
    get env() {
        return new sources_1.EnvDataSource(this);
    }
    get emitter() {
        return new actions_1.DataEmitterActions(this);
    }
    get html() {
        return new sources_1.HtmlDataSource(this);
    }
    get error() {
        return new ErrorDataSource_1.ErrorDataSource(this);
    }
    get util() {
        return new sources_1.UtilDataSource(this);
    }
    get migration() {
        return new sources_1.MigrationDataSource(this);
    }
    get projectsList() {
        return this.coreData.app.projects;
    }
    // Servers
    setAppServerPort(port) {
        this.update((d) => {
            d.servers.appServerPort = port !== null && port !== void 0 ? port : null;
        });
    }
    setAppSocketServer(socketServer) {
        this.update((d) => {
            var _b, _c;
            (_b = d.servers.appSocketServer) === null || _b === void 0 ? void 0 : _b.disconnectSockets(true);
            (_c = d.servers.appSocketNamespace) === null || _c === void 0 ? void 0 : _c.disconnectSockets(true);
            d.servers.appSocketServer = socketServer;
            d.servers.appSocketNamespace = socketServer === null || socketServer === void 0 ? void 0 : socketServer.of('/data-context');
        });
    }
    setGqlServer(srv) {
        this.update((d) => {
            d.servers.gqlServer = srv;
            d.servers.gqlServerPort = srv.address().port;
        });
    }
    setGqlSocketServer(socketServer) {
        this.update((d) => {
            var _b;
            (_b = d.servers.gqlSocketServer) === null || _b === void 0 ? void 0 : _b.disconnectSockets(true);
            d.servers.gqlSocketServer = socketServer;
        });
    }
    get appServerPort() {
        return this.coreData.servers.appServerPort;
    }
    get gqlServerPort() {
        return this.coreData.servers.gqlServerPort;
    }
    // Utilities
    get fs() {
        return fs_extra_1.default;
    }
    get path() {
        return path_1.default;
    }
    get _apis() {
        return {
            appApi: this._config.appApi,
            authApi: this._config.authApi,
            browserApi: this._config.browserApi,
            configApi: this._config.configApi,
            projectApi: this._config.projectApi,
            electronApi: this._config.electronApi,
            localSettingsApi: this._config.localSettingsApi,
        };
    }
    makeId(typeName, nodeString) {
        return Buffer.from(`${typeName}:${nodeString}`).toString('base64');
    }
    // TODO(tim): type check
    fromId(str, accepted) {
        const result = Buffer.from(str, 'base64').toString('utf-8');
        const [type, val] = result.split(':');
        if (type !== accepted) {
            throw new Error(`Expecting node with type ${accepted} saw ${type}`);
        }
        return val;
    }
    logTraceError(e) {
        // TODO(tim): handle this consistently
        // eslint-disable-next-line no-console
        console.error(e);
    }
    async destroy() {
        var _b;
        const destroy = util_1.default.promisify(((_b = this.coreData.servers.gqlServer) === null || _b === void 0 ? void 0 : _b.destroy) || (() => { }));
        return Promise.all([
            destroy(),
            this._reset(),
        ]);
    }
    /**
     * Resets all of the state for the data context,
     * so we can initialize fresh for each E2E test
     */
    async reinitializeCypress(modeOptions = {}) {
        await this._reset();
        this._modeOptions = modeOptions;
        this._coreData = (0, coreDataShape_1.makeCoreData)(modeOptions);
        // @ts-expect-error - we've already cleaned up, this is for testing only
        this.lifecycleManager = new ProjectLifecycleManager_1.ProjectLifecycleManager(this);
        _1.globalPubSub.emit('reset:data-context', this);
    }
    _reset() {
        this.setAppSocketServer(undefined);
        this.setGqlSocketServer(undefined);
        (0, config_1.resetIssuedWarnings)();
        return Promise.all([
            this.lifecycleManager.destroy(),
            this.cloud.reset(),
            this.actions.project.clearCurrentProject(),
            this.actions.dev.dispose(),
        ]);
    }
    async initializeMode() {
        (0, assert_1.default)(!this.coreData.hasInitializedMode);
        this.coreData.hasInitializedMode = this._config.mode;
        if (this._config.mode === 'run') {
            await this.lifecycleManager.initializeRunMode(this.coreData.currentTestingType);
        }
        else if (this._config.mode === 'open') {
            await this.initializeOpenMode();
            await this.lifecycleManager.initializeOpenMode(this.coreData.currentTestingType);
        }
        else {
            throw new Error(`Missing DataContext config "mode" setting, expected run | open`);
        }
    }
    async initializeOpenMode() {
        if (IS_DEV_ENV && !process.env.CYPRESS_INTERNAL_E2E_TESTING_SELF) {
            this.actions.dev.watchForRelaunch();
        }
        // We want to fetch the user immediately, but we don't need to block the UI on this
        this.actions.auth.getUser().catch((e) => {
            // This error should never happen, since it's internally handled by getUser
            // Log anyway, just incase
            this.logTraceError(e);
        });
        const toAwait = [
            this.actions.localSettings.refreshLocalSettings(),
        ];
        // load projects from cache on start
        toAwait.push(this.actions.project.loadProjects());
        await Promise.all(toAwait);
    }
    static addActiveRequest() {
        var _b;
        (0, tslib_1.__classPrivateFieldSet)(this, _a, (_b = (0, tslib_1.__classPrivateFieldGet)(this, _a, "f", _DataContext_activeRequestCount), _b++, _b), "f", _DataContext_activeRequestCount);
    }
    static finishActiveRequest() {
        var _b;
        (0, tslib_1.__classPrivateFieldSet)(this, _a, (_b = (0, tslib_1.__classPrivateFieldGet)(this, _a, "f", _DataContext_activeRequestCount), _b--, _b), "f", _DataContext_activeRequestCount);
        if ((0, tslib_1.__classPrivateFieldGet)(this, _a, "f", _DataContext_activeRequestCount) === 0) {
            (0, tslib_1.__classPrivateFieldGet)(this, _a, "f", _DataContext_awaitingEmptyRequestCount).forEach((fn) => fn());
            (0, tslib_1.__classPrivateFieldSet)(this, _a, [], "f", _DataContext_awaitingEmptyRequestCount);
        }
    }
    static async waitForActiveRequestsToFlush() {
        if ((0, tslib_1.__classPrivateFieldGet)(this, _a, "f", _DataContext_activeRequestCount) === 0) {
            return;
        }
        return new Promise((resolve) => {
            (0, tslib_1.__classPrivateFieldGet)(this, _a, "f", _DataContext_awaitingEmptyRequestCount).push(resolve);
        });
    }
}
_a = DataContext;
_DataContext_activeRequestCount = { value: 0 };
_DataContext_awaitingEmptyRequestCount = { value: [] };
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "graphql", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "remoteRequest", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "file", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "versions", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "browser", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "actions", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "wizard", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "project", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "remotePolling", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "cloud", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "env", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "emitter", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "html", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "error", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "util", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "migration", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "fs", null);
(0, tslib_1.__decorate)([
    cached_1.cached
], DataContext.prototype, "path", null);
exports.DataContext = DataContext;
