"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilDataSource = void 0;
const tslib_1 = require("tslib");
const cross_fetch_1 = (0, tslib_1.__importDefault)(require("cross-fetch"));
// Require rather than import since data-context is stricter than network and there are a fair amount of errors in agent.
const { agent } = require('../../../network');
/**
 * this.ctx.util....
 *
 * Used as a central location for grab-bag utilities used
 * within the DataContext layer
 */
class UtilDataSource {
    constructor(ctx) {
        this.ctx = ctx;
    }
    fetch(input, init) {
        // @ts-ignore agent isn't a part of cross-fetch's API since it's not a part of the browser's fetch but it is a part of node-fetch
        // which is what will be used here
        return (0, cross_fetch_1.default)(input, { agent, ...init });
    }
}
exports.UtilDataSource = UtilDataSource;
