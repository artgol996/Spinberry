"use strict";
/// <reference types="cypress" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.devServer = void 0;
const tslib_1 = require("tslib");
const createWebpackDevServer_1 = require("./createWebpackDevServer");
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const vueCliHandler_1 = require("./helpers/vueCliHandler");
const nuxtHandler_1 = require("./helpers/nuxtHandler");
const createReactAppHandler_1 = require("./helpers/createReactAppHandler");
const nextHandler_1 = require("./helpers/nextHandler");
const sourceRelativeWebpackModules_1 = require("./helpers/sourceRelativeWebpackModules");
const debug = (0, debug_1.default)('cypress:webpack-dev-server:devServer');
const ALL_FRAMEWORKS = ['create-react-app', 'nuxt', 'react', 'vue-cli', 'next', 'vue'];
/**
 * import { devServer } from '@cypress/webpack-dev-server'
 *
 * Creates & returns a WebpackDevServer for serving files related
 * to Cypress Component Testing
 *
 * @param config
 */
function devServer(devServerConfig) {
    return new Promise(async (resolve, reject) => {
        const result = await devServer.create(devServerConfig);
        if (result.version === 3) {
            const srv = result.server.listen(0, '127.0.0.1', () => {
                const port = srv.address().port;
                debug('Component testing webpack server 3 started on port %s', port);
                resolve({
                    port,
                    // Close is for unit testing only. We kill this child process which will handle the closing of the server
                    close: (done) => {
                        srv.close((err) => {
                            if (err) {
                                debug('closing dev server, with error', err);
                            }
                            debug('closed dev server');
                            done === null || done === void 0 ? void 0 : done(err);
                        });
                    },
                });
            });
            return;
        }
        result.server.start().then(() => {
            if (!result.server.options.port) {
                return reject(new Error(`Expected port ${result.server.options.port} to be a number`));
            }
            debug('Component testing webpack server 4 started on port %s', result.server.options.port);
            resolve({
                port: result.server.options.port,
                // Close is for unit testing only. We kill this child process which will handle the closing of the server
                close: async (done) => {
                    debug('closing dev server');
                    result.server.stop().then(() => done === null || done === void 0 ? void 0 : done()).catch(done).finally(() => {
                        debug('closed dev server');
                    });
                },
            });
        }).catch(reject);
    });
}
exports.devServer = devServer;
async function getPreset(devServerConfig) {
    switch (devServerConfig.framework) {
        case 'create-react-app':
            return (0, createReactAppHandler_1.createReactAppHandler)(devServerConfig);
        case 'nuxt':
            return await (0, nuxtHandler_1.nuxtHandler)(devServerConfig);
        case 'vue-cli':
            return (0, vueCliHandler_1.vueCliHandler)(devServerConfig);
        case 'next':
            return await (0, nextHandler_1.nextHandler)(devServerConfig);
        case 'react':
        case 'vue':
        case undefined:
            return { sourceWebpackModulesResult: (0, sourceRelativeWebpackModules_1.sourceDefaultWebpackDependencies)(devServerConfig) };
        default:
            throw new Error(`Unexpected framework ${devServerConfig.framework}, expected one of ${ALL_FRAMEWORKS.join(', ')}`);
    }
}
/**
 * Synchronously create the webpack server instance, without starting.
 * Useful for testing
 *
 * @internal
 */
devServer.create = async function (devServerConfig) {
    const { frameworkConfig, sourceWebpackModulesResult } = await getPreset(devServerConfig);
    const { server, compiler } = await (0, createWebpackDevServer_1.createWebpackDevServer)({
        devServerConfig,
        frameworkConfig,
        sourceWebpackModulesResult,
    });
    const result = {
        server,
        compiler,
        version: sourceWebpackModulesResult.webpackDevServer.majorVersion,
    };
    return result;
};
exports.default = devServer;
