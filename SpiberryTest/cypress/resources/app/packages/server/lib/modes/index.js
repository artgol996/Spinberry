"use strict";
const tslib_1 = require("tslib");
const data_context_1 = require("../../../data-context");
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const makeDataContext_1 = require("../makeDataContext");
const random_1 = (0, tslib_1.__importDefault)(require("../util/random"));
module.exports = (mode, options) => {
    if (mode === 'record') {
        return require('./record').run(options);
    }
    if (mode === 'smokeTest') {
        return require('./smoke_test').run(options);
    }
    // When we're in testing mode, this is setup automatically as a beforeEach
    (0, data_context_1.clearCtx)();
    if (mode === 'run') {
        lodash_1.default.defaults(options, {
            socketId: random_1.default.id(10),
            isTextTerminal: true,
            browser: 'electron',
            quiet: false,
            morgan: false,
            report: true,
        });
    }
    const ctx = (0, data_context_1.setCtx)((0, makeDataContext_1.makeDataContext)({ mode: mode === 'run' ? mode : 'open', modeOptions: options }));
    const loadingPromise = ctx.initializeMode();
    if (mode === 'run') {
        if (options.testingType === 'component') {
            return require('./run-ct').run(options, loadingPromise);
        }
        // run must always be deterministic - if the user doesn't specify
        // a testingType, we default to e2e
        options.testingType = 'e2e';
        return require('./run-e2e').run(options, loadingPromise);
    }
    if (mode === 'interactive') {
        // Either launchpad or straight to e2e tests
        return require('./interactive').run(options, loadingPromise);
    }
};
