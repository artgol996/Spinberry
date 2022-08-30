"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRemoteDebuggingPort = exports._connectAsync = exports._getDelayMsForRetry = void 0;
const tslib_1 = require("tslib");
const network_1 = require("../../../network");
const bluebird_1 = (0, tslib_1.__importDefault)(require("bluebird"));
const utils_1 = (0, tslib_1.__importDefault)(require("./utils"));
const errors = require('../errors');
function _getDelayMsForRetry(i, browserName) {
    if (i < 10) {
        return 100;
    }
    if (i < 18) {
        return 500;
    }
    if (i < 63) { // after 5 seconds, begin logging and retrying
        errors.warning('CDP_RETRYING_CONNECTION', i, browserName);
        return 1000;
    }
    return;
}
exports._getDelayMsForRetry = _getDelayMsForRetry;
function _connectAsync(opts) {
    return bluebird_1.default.fromCallback((cb) => {
        network_1.connect.createRetryingSocket(opts, cb);
    })
        .then((sock) => {
        // can be closed, just needed to test the connection
        sock.end();
    });
}
exports._connectAsync = _connectAsync;
async function getRemoteDebuggingPort() {
    const port = Number(process.env.CYPRESS_REMOTE_DEBUGGING_PORT) || await utils_1.default.getPort();
    return port;
}
exports.getRemoteDebuggingPort = getRemoteDebuggingPort;
