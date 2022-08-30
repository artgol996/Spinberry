"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataActions = void 0;
const tslib_1 = require("tslib");
const actions_1 = require("./actions");
const ErrorActions_1 = require("./actions/ErrorActions");
const VersionsActions_1 = require("./actions/VersionsActions");
const util_1 = require("./util");
class DataActions {
    constructor(ctx) {
        this.ctx = ctx;
    }
    get error() {
        return new ErrorActions_1.ErrorActions(this.ctx);
    }
    get file() {
        return new actions_1.FileActions(this.ctx);
    }
    get dev() {
        return new actions_1.DevActions(this.ctx);
    }
    get app() {
        return new actions_1.AppActions(this.ctx);
    }
    get auth() {
        return new actions_1.AuthActions(this.ctx);
    }
    get localSettings() {
        return new actions_1.LocalSettingsActions(this.ctx);
    }
    get wizard() {
        return new actions_1.WizardActions(this.ctx);
    }
    get project() {
        return new actions_1.ProjectActions(this.ctx);
    }
    get electron() {
        return new actions_1.ElectronActions(this.ctx);
    }
    get migration() {
        return new actions_1.MigrationActions(this.ctx);
    }
    get browser() {
        return new actions_1.BrowserActions(this.ctx);
    }
    get versions() {
        return new VersionsActions_1.VersionsActions(this.ctx);
    }
}
(0, tslib_1.__decorate)([
    util_1.cached
], DataActions.prototype, "error", null);
(0, tslib_1.__decorate)([
    util_1.cached
], DataActions.prototype, "file", null);
(0, tslib_1.__decorate)([
    util_1.cached
], DataActions.prototype, "dev", null);
(0, tslib_1.__decorate)([
    util_1.cached
], DataActions.prototype, "app", null);
(0, tslib_1.__decorate)([
    util_1.cached
], DataActions.prototype, "auth", null);
(0, tslib_1.__decorate)([
    util_1.cached
], DataActions.prototype, "localSettings", null);
(0, tslib_1.__decorate)([
    util_1.cached
], DataActions.prototype, "wizard", null);
(0, tslib_1.__decorate)([
    util_1.cached
], DataActions.prototype, "project", null);
(0, tslib_1.__decorate)([
    util_1.cached
], DataActions.prototype, "electron", null);
(0, tslib_1.__decorate)([
    util_1.cached
], DataActions.prototype, "migration", null);
(0, tslib_1.__decorate)([
    util_1.cached
], DataActions.prototype, "browser", null);
(0, tslib_1.__decorate)([
    util_1.cached
], DataActions.prototype, "versions", null);
exports.DataActions = DataActions;
