"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WIZARD_FRAMEWORKS = exports.inPkgJson = void 0;
const tslib_1 = require("tslib");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const fs_extra_1 = (0, tslib_1.__importDefault)(require("fs-extra"));
const dependencies = (0, tslib_1.__importStar)(require("./dependencies"));
const component_index_template_1 = (0, tslib_1.__importDefault)(require("./component-index-template"));
const semver_1 = (0, tslib_1.__importDefault)(require("semver"));
function inPkgJson(dependency, projectPath) {
    try {
        const loc = require.resolve(path_1.default.join(dependency.package, 'package.json'), {
            paths: [projectPath],
        });
        // TODO: convert to async FS method
        // eslint-disable-next-line no-restricted-syntax
        const pkg = fs_extra_1.default.readJsonSync(loc);
        const pkgVersion = semver_1.default.coerce(pkg.version);
        if (!pkgVersion) {
            throw Error(`${pkg.version} for ${dependency.package} is not a valid semantic version.`);
        }
        return {
            dependency,
            detectedVersion: pkg.version,
            loc,
            satisfied: Boolean(pkg.version && semver_1.default.satisfies(pkgVersion, dependency.minVersion)),
        };
    }
    catch (e) {
        return {
            dependency,
            detectedVersion: null,
            loc: null,
            satisfied: false,
        };
    }
}
exports.inPkgJson = inPkgJson;
function getBundlerDependency(bundler, projectPath) {
    switch (bundler) {
        case 'vite': return inPkgJson(dependencies.WIZARD_DEPENDENCY_VITE, projectPath);
        case 'webpack': return inPkgJson(dependencies.WIZARD_DEPENDENCY_WEBPACK, projectPath);
        default: throw Error(`Unknown bundler ${bundler}`);
    }
}
exports.WIZARD_FRAMEWORKS = [
    {
        type: 'reactscripts',
        configFramework: 'create-react-app',
        category: 'template',
        name: 'Create React App',
        supportedBundlers: [dependencies.WIZARD_DEPENDENCY_WEBPACK],
        detectors: [dependencies.WIZARD_DEPENDENCY_REACT_SCRIPTS],
        dependencies: (bundler, projectPath) => {
            return [
                inPkgJson(dependencies.WIZARD_DEPENDENCY_REACT_SCRIPTS, projectPath),
                inPkgJson(dependencies.WIZARD_DEPENDENCY_WEBPACK, projectPath),
                inPkgJson(dependencies.WIZARD_DEPENDENCY_REACT, projectPath),
            ];
        },
        codeGenFramework: 'react',
        mountModule: 'cypress/react',
        supportStatus: 'full',
        componentIndexHtml: (0, component_index_template_1.default)(),
    },
    {
        type: 'vueclivue2',
        configFramework: 'vue-cli',
        category: 'template',
        name: 'Vue CLI (Vue 2)',
        detectors: [dependencies.WIZARD_DEPENDENCY_VUE_CLI_SERVICE, dependencies.WIZARD_DEPENDENCY_VUE_2],
        supportedBundlers: [dependencies.WIZARD_DEPENDENCY_WEBPACK],
        dependencies: (bundler, projectPath) => {
            return [
                inPkgJson(dependencies.WIZARD_DEPENDENCY_VUE_CLI_SERVICE, projectPath),
                inPkgJson(dependencies.WIZARD_DEPENDENCY_WEBPACK, projectPath),
                inPkgJson(dependencies.WIZARD_DEPENDENCY_VUE_2, projectPath),
            ];
        },
        codeGenFramework: 'vue',
        mountModule: 'cypress/vue2',
        supportStatus: 'full',
        componentIndexHtml: (0, component_index_template_1.default)(),
    },
    {
        type: 'vueclivue3',
        configFramework: 'vue-cli',
        category: 'template',
        name: 'Vue CLI (Vue 3)',
        supportedBundlers: [dependencies.WIZARD_DEPENDENCY_WEBPACK],
        detectors: [dependencies.WIZARD_DEPENDENCY_VUE_CLI_SERVICE, dependencies.WIZARD_DEPENDENCY_VUE_3],
        dependencies: (bundler, projectPath) => {
            return [
                inPkgJson(dependencies.WIZARD_DEPENDENCY_VUE_CLI_SERVICE, projectPath),
                inPkgJson(dependencies.WIZARD_DEPENDENCY_WEBPACK, projectPath),
                inPkgJson(dependencies.WIZARD_DEPENDENCY_VUE_3, projectPath),
            ];
        },
        codeGenFramework: 'vue',
        mountModule: 'cypress/vue',
        supportStatus: 'full',
        componentIndexHtml: (0, component_index_template_1.default)(),
    },
    {
        type: 'nextjs',
        category: 'template',
        configFramework: 'next',
        name: 'Next.js',
        detectors: [dependencies.WIZARD_DEPENDENCY_NEXT],
        supportedBundlers: [dependencies.WIZARD_DEPENDENCY_WEBPACK],
        dependencies: (bundler, projectPath) => {
            return [
                inPkgJson(dependencies.WIZARD_DEPENDENCY_NEXT, projectPath),
                inPkgJson(dependencies.WIZARD_DEPENDENCY_REACT, projectPath),
            ];
        },
        codeGenFramework: 'react',
        mountModule: 'cypress/react',
        supportStatus: 'alpha',
        /**
         * Next.js uses style-loader to inject CSS and requires this element to exist in the HTML.
         * @see: https://github.com/vercel/next.js/blob/5f3351dbb8de71bcdbc91d869c04bc862a25da5f/packages/next/build/webpack/config/blocks/css/loaders/client.ts#L24
         */
        componentIndexHtml: (0, component_index_template_1.default)([
            `<!-- Used by Next.js to inject CSS. -->\n`,
            `<div id="__next_css__DO_NOT_USE__"></div>`,
        ].join(' '.repeat(8))),
    },
    {
        type: 'nuxtjs',
        configFramework: 'nuxt',
        category: 'template',
        name: 'Nuxt.js (v2)',
        detectors: [dependencies.WIZARD_DEPENDENCY_NUXT],
        supportedBundlers: [dependencies.WIZARD_DEPENDENCY_WEBPACK],
        dependencies: (bundler, projectPath) => {
            return [
                inPkgJson(dependencies.WIZARD_DEPENDENCY_NUXT, projectPath),
                inPkgJson(dependencies.WIZARD_DEPENDENCY_VUE_2, projectPath),
            ];
        },
        codeGenFramework: 'vue',
        mountModule: 'cypress/vue2',
        supportStatus: 'alpha',
        componentIndexHtml: (0, component_index_template_1.default)(),
    },
    {
        type: 'vue2',
        configFramework: 'vue',
        category: 'library',
        name: 'Vue.js 2',
        detectors: [dependencies.WIZARD_DEPENDENCY_VUE_2],
        supportedBundlers: [dependencies.WIZARD_DEPENDENCY_WEBPACK, dependencies.WIZARD_DEPENDENCY_VITE],
        dependencies: (bundler, projectPath) => {
            return [
                getBundlerDependency(bundler, projectPath),
                inPkgJson(dependencies.WIZARD_DEPENDENCY_VUE_2, projectPath),
            ];
        },
        codeGenFramework: 'vue',
        mountModule: 'cypress/vue2',
        supportStatus: 'full',
        componentIndexHtml: (0, component_index_template_1.default)(),
    },
    {
        type: 'vue3',
        configFramework: 'vue',
        category: 'library',
        name: 'Vue.js 3',
        detectors: [dependencies.WIZARD_DEPENDENCY_VUE_3],
        supportedBundlers: [dependencies.WIZARD_DEPENDENCY_WEBPACK, dependencies.WIZARD_DEPENDENCY_VITE],
        dependencies: (bundler, projectPath) => {
            return [
                getBundlerDependency(bundler, projectPath),
                inPkgJson(dependencies.WIZARD_DEPENDENCY_VUE_3, projectPath),
            ];
        },
        codeGenFramework: 'vue',
        mountModule: 'cypress/vue',
        supportStatus: 'full',
        componentIndexHtml: (0, component_index_template_1.default)(),
    },
    {
        type: 'react',
        configFramework: 'react',
        category: 'library',
        name: 'React.js',
        detectors: [dependencies.WIZARD_DEPENDENCY_REACT],
        supportedBundlers: [dependencies.WIZARD_DEPENDENCY_WEBPACK, dependencies.WIZARD_DEPENDENCY_VITE],
        dependencies: (bundler, projectPath) => {
            return [
                getBundlerDependency(bundler, projectPath),
                inPkgJson(dependencies.WIZARD_DEPENDENCY_REACT, projectPath),
            ];
        },
        codeGenFramework: 'react',
        mountModule: 'cypress/react',
        supportStatus: 'full',
        componentIndexHtml: (0, component_index_template_1.default)(),
    },
];
