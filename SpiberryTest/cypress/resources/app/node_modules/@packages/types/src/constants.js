"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PACKAGE_MANAGERS = exports.MIGRATION_STEPS = exports.CODE_LANGUAGES = exports.PLUGINS_STATE = void 0;
exports.PLUGINS_STATE = ['uninitialized', 'initializing', 'initialized', 'error'];
exports.CODE_LANGUAGES = [
    {
        type: 'js',
        name: 'JavaScript',
    },
    {
        type: 'ts',
        name: 'TypeScript',
    },
];
exports.MIGRATION_STEPS = ['renameAuto', 'renameManual', 'renameSupport', 'configFile', 'setupComponent'];
exports.PACKAGE_MANAGERS = ['npm', 'yarn', 'pnpm'];
