"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorTypeEnum = void 0;
const nexus_1 = require("nexus");
const errors_1 = require("../../../../errors");
exports.ErrorTypeEnum = (0, nexus_1.enumType)({
    name: 'ErrorTypeEnum',
    members: Object.keys(errors_1.AllCypressErrors),
});
