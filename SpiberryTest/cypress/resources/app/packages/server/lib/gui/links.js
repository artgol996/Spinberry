"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openExternal = void 0;
const electron_1 = require("electron");
// NOTE: in order for query params to be passed through on links
// forwardQueryParams: true must be set for that slug in the on package
const openExternal = (url) => {
    return electron_1.shell.openExternal(url);
};
exports.openExternal = openExternal;
