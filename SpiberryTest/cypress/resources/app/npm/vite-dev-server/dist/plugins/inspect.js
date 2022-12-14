"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CypressInspect = void 0;
const tslib_1 = require("tslib");
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const debug = (0, debug_1.default)('cypress:vite-dev-server:plugins:inspect');
const CypressInspect = (config) => {
    var _a;
    if (!process.env.CYPRESS_INTERNAL_VITE_INSPECT) {
        debug('skipping vite inspect because CYPRESS_INTERNAL_VITE_INSPECT is not set');
        return null;
    }
    let Inspect;
    try {
        const inspectPluginPath = require.resolve('vite-plugin-inspect', { paths: [config.cypressConfig.projectRoot] });
        const inspectModule = require(inspectPluginPath);
        Inspect = (_a = inspectModule.default) !== null && _a !== void 0 ? _a : inspectModule;
        debug('inspect was found', Inspect);
    }
    catch (err) {
        debug(`Tried to import the inspect plugin 'vite-plugin-inspect'. It's an optional peerDependency so install it if you'd like.`);
        debug(err);
        return null;
    }
    return Object.assign(Object.assign({}, Inspect()), { name: 'cypress:inspect' });
};
exports.CypressInspect = CypressInspect;
