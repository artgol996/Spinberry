"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WIZARD_BUNDLERS = exports.WIZARD_DEPENDENCIES = exports.WIZARD_DEPENDENCY_NEXT = exports.WIZARD_DEPENDENCY_NUXT = exports.WIZARD_DEPENDENCY_VITE = exports.WIZARD_DEPENDENCY_VUE_CLI_SERVICE = exports.WIZARD_DEPENDENCY_REACT_SCRIPTS = exports.WIZARD_DEPENDENCY_TYPESCRIPT = exports.WIZARD_DEPENDENCY_REACT = exports.WIZARD_DEPENDENCY_VUE_3 = exports.WIZARD_DEPENDENCY_VUE_2 = exports.WIZARD_DEPENDENCY_WEBPACK = void 0;
exports.WIZARD_DEPENDENCY_WEBPACK = {
    type: 'webpack',
    name: 'Webpack',
    package: 'webpack',
    installer: 'webpack',
    description: 'Webpack is a module bundler',
    minVersion: '>=4.0.0',
};
exports.WIZARD_DEPENDENCY_VUE_2 = {
    type: 'vue',
    name: 'Vue.js 2',
    package: 'vue',
    installer: 'vue@2',
    description: 'The Progressive JavaScript Framework',
    minVersion: '^2.0.0',
};
exports.WIZARD_DEPENDENCY_VUE_3 = {
    type: 'vue',
    name: 'Vue.js 3',
    package: 'vue',
    installer: 'vue',
    description: 'The Progressive JavaScript Framework',
    minVersion: '^3.0.0',
};
exports.WIZARD_DEPENDENCY_REACT = {
    type: 'react',
    name: 'React.js',
    package: 'react',
    installer: 'react',
    description: 'A JavaScript library for building user interfaces',
    minVersion: '>=16.x',
};
exports.WIZARD_DEPENDENCY_TYPESCRIPT = {
    type: 'typescript',
    name: 'TypeScript',
    package: 'typescript',
    installer: 'typescript',
    description: 'TypeScript is a language for application-scale JavaScript',
    minVersion: '>=3.0.0',
};
exports.WIZARD_DEPENDENCY_REACT_SCRIPTS = {
    type: 'reactscripts',
    name: 'React Scripts',
    package: 'react-scripts',
    installer: 'react-scripts',
    description: 'Create React apps with no build configuration',
    minVersion: '>=4.0.0',
};
exports.WIZARD_DEPENDENCY_VUE_CLI_SERVICE = {
    type: 'vuecliservice',
    name: 'Vue CLI',
    package: '@vue/cli-service',
    installer: '@vue/cli-service',
    description: 'Standard Tooling for Vue.js Development',
    minVersion: '>=4.0.0',
};
exports.WIZARD_DEPENDENCY_VITE = {
    type: 'vite',
    name: 'Vite',
    package: 'vite',
    installer: 'vite',
    description: 'Vite is dev server that serves your source files over native ES modules',
    minVersion: '>=2.0.0',
};
exports.WIZARD_DEPENDENCY_NUXT = {
    type: 'nuxt',
    name: 'Nuxt',
    package: 'nuxt',
    installer: 'nuxt@2',
    description: 'The Intuitive Vue Framework',
    minVersion: '^2.0.0',
};
exports.WIZARD_DEPENDENCY_NEXT = {
    type: 'next',
    name: 'Next',
    package: 'next',
    installer: 'next',
    description: 'The React Framework for Production',
    minVersion: '>=10.0.0',
};
exports.WIZARD_DEPENDENCIES = [
    exports.WIZARD_DEPENDENCY_WEBPACK,
    exports.WIZARD_DEPENDENCY_TYPESCRIPT,
    exports.WIZARD_DEPENDENCY_REACT_SCRIPTS,
    exports.WIZARD_DEPENDENCY_VUE_CLI_SERVICE,
    exports.WIZARD_DEPENDENCY_VITE,
    exports.WIZARD_DEPENDENCY_NUXT,
    exports.WIZARD_DEPENDENCY_NEXT,
    exports.WIZARD_DEPENDENCY_REACT,
    exports.WIZARD_DEPENDENCY_VUE_2,
    exports.WIZARD_DEPENDENCY_VUE_3,
];
exports.WIZARD_BUNDLERS = [
    exports.WIZARD_DEPENDENCY_WEBPACK,
    exports.WIZARD_DEPENDENCY_VITE,
];
