"use strict";
var _VersionsDataSource_instances, _VersionsDataSource_populateVersionMetadata, _VersionsDataSource_getVersionMetadata, _VersionsDataSource_getLatestVersion;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionsDataSource = void 0;
const tslib_1 = require("tslib");
const os_1 = (0, tslib_1.__importDefault)(require("os"));
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const debug = (0, debug_1.default)('cypress:data-context:sources:VersionsDataSource');
const pkg = require('../../../root');
const nmi = require('node-machine-id');
const REMOTE_MANIFEST_URL = 'https://download.cypress.io/desktop.json';
const NPM_CYPRESS_REGISTRY = 'https://registry.npmjs.org/cypress';
class VersionsDataSource {
    constructor(ctx) {
        this.ctx = ctx;
        _VersionsDataSource_instances.add(this);
        this._initialLaunch = true;
        this._currentTestingType = this.ctx.coreData.currentTestingType;
    }
    /**
     * Returns most recent and current version of Cypress
     * {
     *   current: {
     *     id: '8.7.0',
     *     version: '8.7.0',
     *     released: '2021-10-15T21:38:59.983Z'
     *   },
     *   latest: {
     *     id: '8.8.0',
     *     version: '8.8.0',
     *     released: '2021-10-25T21:38:59.983Z'
     *   }
     * }
     */
    async versionData() {
        var _a, _b;
        const versionData = (0, tslib_1.__classPrivateFieldGet)(this, _VersionsDataSource_instances, "m", _VersionsDataSource_populateVersionMetadata).call(this);
        const [latestVersion, npmMetadata] = await Promise.all([
            versionData.latestVersion,
            versionData.npmMetadata,
        ]);
        const latestVersionMetadata = {
            id: latestVersion,
            version: latestVersion,
            released: (_a = npmMetadata[latestVersion]) !== null && _a !== void 0 ? _a : new Date().toISOString(),
        };
        return {
            latest: latestVersionMetadata,
            current: {
                id: pkg.version,
                version: pkg.version,
                released: (_b = npmMetadata[pkg.version]) !== null && _b !== void 0 ? _b : new Date().toISOString(),
            },
        };
    }
    resetLatestVersionTelemetry() {
        if (this.ctx.coreData.currentTestingType !== this._currentTestingType) {
            debug('resetting latest version telemetry call due to a different testing type');
            this._currentTestingType = this.ctx.coreData.currentTestingType;
            this.ctx.update((d) => {
                if (d.versionData) {
                    d.versionData.latestVersion = (0, tslib_1.__classPrivateFieldGet)(this, _VersionsDataSource_instances, "m", _VersionsDataSource_getLatestVersion).call(this);
                }
            });
        }
    }
    static async machineId() {
        try {
            return await nmi.machineId();
        }
        catch (error) {
            return undefined;
        }
    }
}
exports.VersionsDataSource = VersionsDataSource;
_VersionsDataSource_instances = new WeakSet(), _VersionsDataSource_populateVersionMetadata = function _VersionsDataSource_populateVersionMetadata() {
    let versionData = this.ctx.coreData.versionData;
    if (!versionData) {
        versionData = {
            latestVersion: (0, tslib_1.__classPrivateFieldGet)(this, _VersionsDataSource_instances, "m", _VersionsDataSource_getLatestVersion).call(this).catch((e) => pkg.version),
            npmMetadata: (0, tslib_1.__classPrivateFieldGet)(this, _VersionsDataSource_instances, "m", _VersionsDataSource_getVersionMetadata).call(this).catch((e) => ({})),
        };
        this.ctx.update((d) => {
            d.versionData = versionData;
        });
    }
    return versionData;
}, _VersionsDataSource_getVersionMetadata = async function _VersionsDataSource_getVersionMetadata() {
    var _a;
    const now = new Date().toISOString();
    const DEFAULT_RESPONSE = {
        [pkg.version]: now,
    };
    if (this.ctx.isRunMode) {
        return DEFAULT_RESPONSE;
    }
    let response;
    try {
        response = await this.ctx.util.fetch(NPM_CYPRESS_REGISTRY);
        const responseJson = await response.json();
        debug('NPM release dates received %o', { modified: responseJson.time.modified });
        return (_a = responseJson.time) !== null && _a !== void 0 ? _a : now;
    }
    catch (e) {
        // ignore any error from this fetch, they are gracefully handled
        // by showing the current version only
        debug('Error fetching %o', NPM_CYPRESS_REGISTRY, e);
        return DEFAULT_RESPONSE;
    }
}, _VersionsDataSource_getLatestVersion = async function _VersionsDataSource_getLatestVersion() {
    var _a, _b, _c, _d;
    if (this.ctx.isRunMode) {
        return pkg.version;
    }
    const id = await VersionsDataSource.machineId();
    const manifestHeaders = {
        'Content-Type': 'application/json',
        'x-cypress-version': pkg.version,
        'x-os-name': os_1.default.platform(),
        'x-arch': os_1.default.arch(),
        'x-initial-launch': String(this._initialLaunch),
    };
    if (this._currentTestingType) {
        manifestHeaders['x-testing-type'] = this._currentTestingType;
    }
    if (id) {
        manifestHeaders['x-machine-id'] = id;
    }
    const devServer = (_c = (_b = (_a = this.ctx.lifecycleManager) === null || _a === void 0 ? void 0 : _a.loadedConfigFile) === null || _b === void 0 ? void 0 : _b.component) === null || _c === void 0 ? void 0 : _c.devServer;
    if (typeof devServer === 'object') {
        if (devServer.bundler) {
            manifestHeaders['x-dev-server'] = devServer.bundler;
        }
        if (devServer.framework) {
            manifestHeaders['x-framework'] = devServer.framework;
        }
    }
    try {
        const manifestResponse = await this.ctx.util.fetch(REMOTE_MANIFEST_URL, {
            headers: manifestHeaders,
        });
        debug('retrieving latest version information with headers: %o', manifestHeaders);
        const manifest = await manifestResponse.json();
        debug('latest version information: %o', manifest);
        return (_d = manifest.version) !== null && _d !== void 0 ? _d : pkg.version;
    }
    catch (e) {
        // ignore any error from this fetch, they are gracefully handled
        // by showing the current version only
        debug('Error fetching %s: %o', REMOTE_MANIFEST_URL, e);
        return pkg.version;
    }
    finally {
        this._initialLaunch = false;
    }
};
