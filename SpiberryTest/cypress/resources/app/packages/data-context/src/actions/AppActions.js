"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppActions = void 0;
class AppActions {
    constructor(ctx) {
        this.ctx = ctx;
    }
    async removeAppDataDir() {
        await this.ctx._apis.appApi.appData.remove();
    }
    async ensureAppDataDirExists() {
        await this.ctx._apis.appApi.appData.ensure();
    }
}
exports.AppActions = AppActions;
