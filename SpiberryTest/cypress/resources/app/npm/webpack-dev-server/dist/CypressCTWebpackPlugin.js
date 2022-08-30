"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CypressCTWebpackPlugin = exports.normalizeError = void 0;
const tslib_1 = require("tslib");
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const fs_extra_1 = (0, tslib_1.__importDefault)(require("fs-extra"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const normalizeError = (error) => {
    return typeof error === 'string' ? error : error.message;
};
exports.normalizeError = normalizeError;
/**
 * A webpack 4/5 compatible Cypress Component Testing Plugin
 *
 * @internal
 */
class CypressCTWebpackPlugin {
    constructor(options) {
        this.files = [];
        this.compilation = null;
        this.addLoaderContext = (loaderContext, module) => {
            loaderContext._cypress = {
                files: this.files,
                projectRoot: this.projectRoot,
                supportFile: this.supportFile,
            };
        };
        this.beforeCompile = async (compilationParams, callback) => {
            if (!this.compilation) {
                callback();
                return;
            }
            // Ensure we don't try to load files that have been removed from the file system
            // but have not yet been detected by the onSpecsChange handler
            const foundFiles = (await Promise.all(this.files.map(async (file) => {
                try {
                    const exists = await fs_extra_1.default.pathExists(file.absolute);
                    return exists ? file : null;
                }
                catch (e) {
                    return null;
                }
            })));
            this.files = foundFiles.filter((file) => file !== null);
            callback();
        };
        /*
         * `webpack --watch` watches the existing specs and their dependencies for changes,
         * but we also need to add additional dependencies to our dynamic "browser.js" (generated
         * using loader.ts) when new specs are created. This hook informs webpack that browser.js
         * has been "updated on disk", causing a recompliation (and pulling the new specs in as
         * dependencies).
         */
        this.onSpecsChange = async (specs) => {
            var _a;
            if (!this.compilation || lodash_1.default.isEqual(specs, this.files)) {
                return;
            }
            this.files = specs;
            const inputFileSystem = this.compilation.inputFileSystem;
            // TODO: don't use a sync fs method here
            // eslint-disable-next-line no-restricted-syntax
            const utimesSync = (_a = inputFileSystem.fileSystem.utimesSync) !== null && _a !== void 0 ? _a : fs_extra_1.default.utimesSync;
            utimesSync(path_1.default.resolve(__dirname, 'browser.js'), new Date(), new Date());
        };
        /**
         * The webpack compiler generates a new `compilation` each time it compiles, so
         * we have to apply hooks to it fresh each time
         *
         * @param compilation webpack 4 `compilation.Compilation`, webpack 5
         *   `Compilation`
         */
        this.addCompilationHooks = (compilation) => {
            this.compilation = compilation;
            /* istanbul ignore next */
            if ('NormalModule' in this.webpack) {
                // Webpack 5
                const loader = this.webpack.NormalModule.getCompilationHooks(compilation).loader;
                loader.tap('CypressCTPlugin', this.addLoaderContext);
            }
            else {
                // Webpack 4
                compilation.hooks.normalModuleLoader.tap('CypressCTPlugin', this.addLoaderContext);
            }
        };
        this.files = options.files;
        this.supportFile = options.supportFile;
        this.projectRoot = options.projectRoot;
        this.devServerEvents = options.devServerEvents;
        this.webpack = options.webpack;
    }
    /**
     * The plugin's entrypoint, called once by webpack when the compiler is initialized.
     */
    apply(compiler) {
        const _compiler = compiler;
        this.devServerEvents.on('dev-server:specs:changed', this.onSpecsChange);
        _compiler.hooks.beforeCompile.tapAsync('CypressCTPlugin', this.beforeCompile);
        _compiler.hooks.compilation.tap('CypressCTPlugin', (compilation) => this.addCompilationHooks(compilation));
        _compiler.hooks.done.tap('CypressCTPlugin', () => {
            this.devServerEvents.emit('dev-server:compile:success');
        });
    }
}
exports.CypressCTWebpackPlugin = CypressCTWebpackPlugin;
