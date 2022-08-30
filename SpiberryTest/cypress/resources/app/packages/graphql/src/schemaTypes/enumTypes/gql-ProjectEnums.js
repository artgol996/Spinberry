"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsStateEnum = void 0;
const types_1 = require("../../../../types");
const nexus_1 = require("nexus");
exports.PluginsStateEnum = (0, nexus_1.enumType)({
    name: 'PluginsState',
    members: types_1.PLUGINS_STATE,
});
