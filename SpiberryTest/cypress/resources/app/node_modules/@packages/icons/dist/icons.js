"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathToLogo = exports.getPathToIcon = exports.getPathToFavicon = void 0;
const tslib_1 = require("tslib");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const dist = [__dirname, '..', 'dist'];
function distPath(...args) {
    return path_1.default.join.apply(path_1.default, dist.concat([...args]));
}
const getPathToFavicon = (filename) => {
    return distPath('favicon', filename);
};
exports.getPathToFavicon = getPathToFavicon;
const getPathToIcon = (filename) => {
    return distPath('icons', filename);
};
exports.getPathToIcon = getPathToIcon;
const getPathToLogo = (filename) => {
    return distPath('logo', filename);
};
exports.getPathToLogo = getPathToLogo;
