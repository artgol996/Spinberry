"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const tslib_1 = require("tslib");
const socket_io_client_1 = (0, tslib_1.__importDefault)(require("socket.io-client"));
exports.client = socket_io_client_1.default;
