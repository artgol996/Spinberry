"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const run = (options, loadingPromise) => {
    // TODO: make sure if we need to run this in electron by default to match e2e behavior?
    options.browser = options.browser || 'electron';
    options.runAllSpecsInSameBrowserSession = true;
    return require('./run').run(options, loadingPromise);
};
exports.run = run;
