"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDefaultWebpackConfig = void 0;
const tslib_1 = require("tslib");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const debug = (0, debug_1.default)('cypress:webpack-dev-server:makeDefaultWebpackConfig');
const OUTPUT_PATH = path_1.default.join(__dirname, 'dist');
/**
 * @returns {import('webpack').Configuration}
 * @internal
 */
function makeDefaultWebpackConfig(config) {
    const { module: _HtmlWebpackPlugin, packageJson: { version }, importPath, } = config.sourceWebpackModulesResult.htmlWebpackPlugin;
    const indexHtmlFile = config.devServerConfig.cypressConfig.indexHtmlFile;
    const HtmlWebpackPlugin = _HtmlWebpackPlugin;
    debug(`Using HtmlWebpackPlugin version ${version} from ${importPath}`);
    const finalConfig = {
        mode: 'development',
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
        output: {
            filename: '[name].js',
            path: OUTPUT_PATH,
        },
        plugins: [
            new HtmlWebpackPlugin({
                // Todo: Add indexHtmlFile when it gets added as a config property
                template: indexHtmlFile,
            }),
        ],
    };
    if (config.sourceWebpackModulesResult.webpackDevServer.majorVersion === 4) {
        return Object.assign(Object.assign({}, finalConfig), { devServer: {
                client: {
                    overlay: false,
                },
            } });
    }
    // @ts-ignore
    return Object.assign(Object.assign({}, finalConfig), { devServer: {
            overlay: false,
        } });
}
exports.makeDefaultWebpackConfig = makeDefaultWebpackConfig;
