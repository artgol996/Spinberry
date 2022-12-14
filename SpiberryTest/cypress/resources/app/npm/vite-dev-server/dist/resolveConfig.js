"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createViteDevServerConfig = void 0;
const tslib_1 = require("tslib");
/**
 * The logic inside of this file is heavily reused from
 * Vitest's own config resolution logic.
 * You can find it here https://github.com/vitest-dev/vitest/blob/main/packages/vitest/src/node/create.ts
 */
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const local_pkg_1 = require("local-pkg");
const pathe_1 = require("pathe");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const constants_1 = require("./constants");
const index_1 = require("./plugins/index");
const debug = (0, debug_1.default)('cypress:vite-dev-server:resolve-config');
const createViteDevServerConfig = async (config, vite) => {
    const { specs, cypressConfig, viteConfig: viteOverrides } = config;
    const root = cypressConfig.projectRoot;
    const { default: findUp } = await (0, local_pkg_1.importModule)('find-up');
    const configFile = await findUp(constants_1.configFiles, { cwd: root });
    // INFO logging, a lot is logged here.
    // debug('all dev-server options are', options)
    if (configFile) {
        debug('resolved config file at', configFile, 'using root', root);
    }
    else if (viteOverrides) {
        debug(`Couldn't find a Vite config file, however we received a custom viteConfig`, viteOverrides);
    }
    else {
        if (config.onConfigNotFound) {
            config.onConfigNotFound('vite', root, constants_1.configFiles);
            // The config process will be killed from the parent, but we want to early exit so we don't get
            // any additional errors related to not having a config
            process.exit(0);
        }
        else {
            throw new Error(`Your component devServer config for vite is missing a required viteConfig property, since we could not automatically detect one.\n Please add one to your ${config.cypressConfig.configFile}`);
        }
    }
    // Vite caches its output in the .vite directory in the node_modules where vite lives.
    // So we want to find that node_modules path and ensure it's added to the "allow" list
    const vitePathNodeModules = path_1.default.dirname(path_1.default.dirname(require.resolve(`vite/package.json`, {
        paths: [root],
    })));
    const viteBaseConfig = {
        root,
        base: `${cypressConfig.devServerPublicPathRoute}/`,
        configFile,
        optimizeDeps: {
            esbuildOptions: {
                incremental: true,
                plugins: [
                    {
                        name: 'cypress-esbuild-plugin',
                        setup(build) {
                            build.onEnd(function (result) {
                                // We don't want to completely fail the build here on errors so we treat the errors as warnings
                                // which will handle things more gracefully. Vite will 500 on files that have errors when they
                                // are requested later and Cypress will display an error message.
                                // See: https://github.com/cypress-io/cypress/pull/21599
                                result.warnings = [...result.warnings, ...result.errors];
                                result.errors = [];
                            });
                        },
                    },
                ],
            },
            entries: [
                ...specs.map((s) => (0, pathe_1.relative)(root, s.relative)),
                ...(cypressConfig.supportFile ? [(0, pathe_1.resolve)(root, cypressConfig.supportFile)] : []),
            ].filter((v) => v != null),
        },
        server: {
            fs: {
                allow: [
                    root,
                    vitePathNodeModules,
                    cypressConfig.cypressBinaryRoot,
                ],
            },
        },
        plugins: [
            (0, index_1.Cypress)(config, vite),
            (0, index_1.CypressInspect)(config),
        ].filter((p) => p != null),
    };
    const finalConfig = vite.mergeConfig(viteBaseConfig, viteOverrides);
    debug('The resolved server config is', JSON.stringify(finalConfig, null, 2));
    return finalConfig;
};
exports.createViteDevServerConfig = createViteDevServerConfig;
