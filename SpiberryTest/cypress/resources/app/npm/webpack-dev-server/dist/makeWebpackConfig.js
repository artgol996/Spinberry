"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWebpackConfig = void 0;
const tslib_1 = require("tslib");
const debug_1 = require("debug");
const path = (0, tslib_1.__importStar)(require("path"));
const webpack_merge_1 = require("webpack-merge");
const local_pkg_1 = require("local-pkg");
const makeDefaultWebpackConfig_1 = require("./makeDefaultWebpackConfig");
const CypressCTWebpackPlugin_1 = require("./CypressCTWebpackPlugin");
const constants_1 = require("./constants");
const debug = (0, debug_1.debug)('cypress:webpack-dev-server:makeWebpackConfig');
const removeList = [
    // We provide a webpack-html-plugin config pinned to a specific version (4.x)
    // that we have tested and are confident works with all common configurations.
    // https://github.com/cypress-io/cypress/issues/15865
    'HtmlWebpackPlugin',
    // This plugin is an optimization for HtmlWebpackPlugin for use in
    // production environments, not relevant for testing.
    'PreloadPlugin',
    // Another optimization not relevant in a testing environment.
    'HtmlPwaPlugin',
    // We already reload when webpack recompiles (via listeners on
    // devServerEvents). Removing this plugin can prevent double-refreshes
    // in some setups.
    'HotModuleReplacementPlugin',
];
// CaseSensitivePathsPlugin checks the paths of every loaded module to enforce
// case sensitivity - this helps developers on mac catch issues that will bite
// them later, but on linux the OS already does this by default. The plugin
// is somewhat slow, accounting for ~15% of compile time on a couple of CRA
// based projects (where it's included by default) tested.
if (process.platform === 'linux') {
    removeList.push('CaseSensitivePathsPlugin');
}
const OsSeparatorRE = RegExp(`\\${path.sep}`, 'g');
const posixSeparator = '/';
const CYPRESS_WEBPACK_ENTRYPOINT = path.resolve(__dirname, 'browser.js');
/**
 * Removes and/or modifies certain plugins known to conflict
 * when used with cypress/webpack-dev-server.
 */
function modifyWebpackConfigForCypress(webpackConfig) {
    var _a;
    if (webpackConfig === null || webpackConfig === void 0 ? void 0 : webpackConfig.plugins) {
        webpackConfig.plugins = webpackConfig.plugins.filter((plugin) => {
            if (removeList.includes(plugin.constructor.name)) {
                /* eslint-disable no-console */
                console.warn(`[@cypress/webpack-dev-server]: removing ${plugin.constructor.name} from configuration.`);
                return false;
            }
            return true;
        });
    }
    if (typeof ((_a = webpackConfig === null || webpackConfig === void 0 ? void 0 : webpackConfig.module) === null || _a === void 0 ? void 0 : _a.unsafeCache) === 'function') {
        const originalCachePredicate = webpackConfig.module.unsafeCache;
        webpackConfig.module.unsafeCache = (module) => {
            return originalCachePredicate(module) && !/[\\/]webpack-dev-server[\\/]dist[\\/]browser\.js/.test(module.resource);
        };
    }
    return webpackConfig;
}
/**
 * Creates a webpack 4/5 compatible webpack "configuration"
 * to pass to the sourced webpack function
 */
async function makeWebpackConfig(config) {
    var _a, _b;
    const { module: webpack } = config.sourceWebpackModulesResult.webpack;
    let userWebpackConfig = config.devServerConfig.webpackConfig;
    const frameworkWebpackConfig = config.frameworkConfig;
    const { cypressConfig: { projectRoot, devServerPublicPathRoute, supportFile, }, specs: files, devServerEvents, } = config.devServerConfig;
    let configFile = undefined;
    if (!userWebpackConfig && !frameworkWebpackConfig) {
        debug('Not user or framework webpack config received. Trying to automatically source it');
        const { default: findUp } = await (0, local_pkg_1.importModule)('find-up');
        configFile = await findUp(constants_1.configFiles, { cwd: projectRoot });
        if (configFile) {
            debug('found webpack config %s', configFile);
            const sourcedConfig = await (0, local_pkg_1.importModule)(configFile);
            debug('config contains %o', sourcedConfig);
            if (sourcedConfig && typeof sourcedConfig === 'object') {
                userWebpackConfig = (_a = sourcedConfig.default) !== null && _a !== void 0 ? _a : sourcedConfig;
            }
        }
        if (!userWebpackConfig) {
            debug('could not find webpack.config!');
            if ((_b = config.devServerConfig) === null || _b === void 0 ? void 0 : _b.onConfigNotFound) {
                config.devServerConfig.onConfigNotFound('webpack', projectRoot, constants_1.configFiles);
                // The config process will be killed from the parent, but we want to early exit so we don't get
                // any additional errors related to not having a config
                process.exit(0);
            }
            else {
                throw new Error(`Your Cypress devServer config is missing a required webpackConfig property, since we could not automatically detect one.\nPlease add one to your ${config.devServerConfig.cypressConfig.configFile}`);
            }
        }
    }
    const userAndFrameworkWebpackConfig = modifyWebpackConfigForCypress((0, webpack_merge_1.merge)(frameworkWebpackConfig !== null && frameworkWebpackConfig !== void 0 ? frameworkWebpackConfig : {}, userWebpackConfig !== null && userWebpackConfig !== void 0 ? userWebpackConfig : {}));
    debug(`User passed in user and framework webpack config with values %o`, userAndFrameworkWebpackConfig);
    debug(`New webpack entries %o`, files);
    debug(`Project root`, projectRoot);
    debug(`Support file`, supportFile);
    const publicPath = (path.sep === posixSeparator)
        ? path.join(devServerPublicPathRoute, posixSeparator)
        // The second line here replaces backslashes on windows with posix compatible slash
        // See https://github.com/cypress-io/cypress/issues/16097
        : path.join(devServerPublicPathRoute, posixSeparator)
            .replace(OsSeparatorRE, posixSeparator);
    const dynamicWebpackConfig = {
        output: {
            publicPath,
        },
        plugins: [
            new CypressCTWebpackPlugin_1.CypressCTWebpackPlugin({
                files,
                projectRoot,
                devServerEvents,
                supportFile,
                webpack,
            }),
        ],
    };
    const mergedConfig = (0, webpack_merge_1.merge)(userAndFrameworkWebpackConfig, (0, makeDefaultWebpackConfig_1.makeDefaultWebpackConfig)(config), dynamicWebpackConfig);
    mergedConfig.entry = CYPRESS_WEBPACK_ENTRYPOINT;
    debug('Merged webpack config %o', mergedConfig);
    if (process.env.WEBPACK_PERF_MEASURE) {
        // only for debugging
        const { measureWebpackPerformance } = require('./measureWebpackPerformance');
        return measureWebpackPerformance(mergedConfig);
    }
    return mergedConfig;
}
exports.makeWebpackConfig = makeWebpackConfig;
