"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.launch = exports.browsers = exports.debug = void 0;
const tslib_1 = require("tslib");
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const cp = (0, tslib_1.__importStar)(require("child_process"));
const types_1 = require("../../types");
Object.defineProperty(exports, "browsers", { enumerable: true, get: function () { return types_1.browsers; } });
exports.debug = (0, debug_1.default)('cypress:launcher:browsers');
function launch(browser, url, debuggingPort, args = [], defaultBrowserEnv = {}) {
    (0, exports.debug)('launching browser %o', { browser, url });
    if (!browser.path) {
        throw new Error(`Browser ${browser.name} is missing path`);
    }
    if (url) {
        args = [url].concat(args);
    }
    (0, exports.debug)('spawning browser with args %o', { args });
    // allow setting default env vars such as MOZ_HEADLESS_WIDTH
    // but only if it's not already set by the environment
    const env = Object.assign({}, defaultBrowserEnv, process.env);
    const proc = cp.spawn(browser.path, args, { stdio: ['ignore', 'pipe', 'pipe'], env });
    proc.stdout.on('data', (buf) => {
        (0, exports.debug)('%s stdout: %s', browser.name, String(buf).trim());
    });
    proc.stderr.on('data', (buf) => {
        (0, exports.debug)('%s stderr: %s', browser.name, String(buf).trim());
    });
    proc.on('exit', (code, signal) => {
        (0, exports.debug)('%s exited: %o', browser.name, { code, signal });
    });
    return proc;
}
exports.launch = launch;
