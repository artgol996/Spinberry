"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vueCliHandler = void 0;
const tslib_1 = require("tslib");
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const sourceRelativeWebpackModules_1 = require("./sourceRelativeWebpackModules");
const debug = (0, debug_1.default)('cypress:webpack-dev-server:vueCliHandler');
function vueCliHandler(devServerConfig) {
    const sourceWebpackModulesResult = (0, sourceRelativeWebpackModules_1.sourceDefaultWebpackDependencies)(devServerConfig);
    try {
        const config = require.resolve('@vue/cli-service/webpack.config', {
            paths: [devServerConfig.cypressConfig.projectRoot],
        });
        const webpackConfig = require(config);
        debug('webpack config %o', webpackConfig);
        return { frameworkConfig: webpackConfig, sourceWebpackModulesResult };
    }
    catch (e) {
        console.error(e); // eslint-disable-line no-console
        throw Error(`Error loading @vue/cli-service/webpack.config.js. Looked in ${require.resolve.paths(devServerConfig.cypressConfig.projectRoot)}`);
    }
}
exports.vueCliHandler = vueCliHandler;
