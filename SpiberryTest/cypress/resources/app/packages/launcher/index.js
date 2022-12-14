"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.launch = exports.detectByPath = exports.detect = void 0;
const tslib_1 = require("tslib");
const detect_1 = require("./lib/detect");
Object.defineProperty(exports, "detect", { enumerable: true, get: function () { return detect_1.detect; } });
Object.defineProperty(exports, "detectByPath", { enumerable: true, get: function () { return detect_1.detectByPath; } });
const browsers_1 = require("./lib/browsers");
Object.defineProperty(exports, "launch", { enumerable: true, get: function () { return browsers_1.launch; } });
(0, tslib_1.__exportStar)(require("./lib/types"), exports);
