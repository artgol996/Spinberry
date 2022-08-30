"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path = (0, tslib_1.__importStar)(require("path"));
const example_1 = (0, tslib_1.__importDefault)(require("../../../example"));
const getPath = (dir) => path.join(__dirname, dir);
exports.default = {
    component: getPath('./templates/empty-component'),
    e2e: getPath('./templates/empty-e2e'),
    scaffoldIntegration: example_1.default.getPathToE2E(),
};
