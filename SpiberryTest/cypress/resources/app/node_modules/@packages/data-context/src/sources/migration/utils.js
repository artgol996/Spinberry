"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDefaultSupportFile = void 0;
const tslib_1 = require("tslib");
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const isDefaultSupportFile = (supportFile) => {
    if (lodash_1.default.isNil(supportFile) || !lodash_1.default.isBoolean(supportFile) && supportFile.match(/(^|\.+\/)cypress\/support($|\/index($|\.(ts|js|coffee)$))/)) {
        return true;
    }
    return false;
};
exports.isDefaultSupportFile = isDefaultSupportFile;
