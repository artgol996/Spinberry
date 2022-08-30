"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalSettingsActions = void 0;
const tslib_1 = require("tslib");
const types_1 = require("../../../types");
const p_defer_1 = (0, tslib_1.__importDefault)(require("p-defer"));
class LocalSettingsActions {
    constructor(ctx) {
        this.ctx = ctx;
    }
    setPreferences(stringifiedJson) {
        const toJson = JSON.parse(stringifiedJson);
        // update local data
        for (const [key, value] of Object.entries(toJson)) {
            this.ctx.coreData.localSettings.preferences[key] = value;
        }
        // persist to appData
        return this.ctx._apis.localSettingsApi.setPreferences(toJson);
    }
    async refreshLocalSettings() {
        var _a;
        if ((_a = this.ctx.coreData.localSettings) === null || _a === void 0 ? void 0 : _a.refreshing) {
            return;
        }
        const dfd = (0, p_defer_1.default)();
        this.ctx.coreData.localSettings.refreshing = dfd.promise;
        // TODO(tim): global unhandled error concept
        const availableEditors = await this.ctx._apis.localSettingsApi.getAvailableEditors();
        this.ctx.coreData.localSettings.availableEditors = availableEditors;
        this.ctx.coreData.localSettings.preferences = {
            ...types_1.defaultPreferences,
            ...(await this.ctx._apis.localSettingsApi.getPreferences()),
        };
        dfd.resolve();
    }
}
exports.LocalSettingsActions = LocalSettingsActions;
