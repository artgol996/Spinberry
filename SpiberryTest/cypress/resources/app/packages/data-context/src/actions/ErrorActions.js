"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorActions = void 0;
class ErrorActions {
    constructor(ctx) {
        this.ctx = ctx;
    }
    /**
     * Finds the error from the different possible locations where an can be stored,
     * and nulls it out
     */
    clearError(id) {
        this.ctx.update((d) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (((_d = (_c = (_b = (_a = d.currentProjectData) === null || _a === void 0 ? void 0 : _a.testingTypeData) === null || _b === void 0 ? void 0 : _b.activeAppData) === null || _c === void 0 ? void 0 : _c.error) === null || _d === void 0 ? void 0 : _d.id) === id) {
                d.currentProjectData.testingTypeData.activeAppData.error = null;
            }
            if (((_g = (_f = (_e = d.currentProjectData) === null || _e === void 0 ? void 0 : _e.testingTypeData) === null || _f === void 0 ? void 0 : _f.error) === null || _g === void 0 ? void 0 : _g.id) === id) {
                d.currentProjectData.testingTypeData.error = null;
            }
            if (((_j = (_h = d.currentProjectData) === null || _h === void 0 ? void 0 : _h.error) === null || _j === void 0 ? void 0 : _j.id) === id) {
                d.currentProjectData.error = null;
            }
            if (((_k = d.baseError) === null || _k === void 0 ? void 0 : _k.id) === id) {
                d.baseError === null;
            }
        });
    }
    /**
     * Finds the warning from the different possible locations where warnings can be stored,
     * and removes it from the array
     */
    clearWarning(id) {
        this.ctx.update((d) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            const warningsIndex = d.warnings.findIndex((v) => v.id === id);
            if (warningsIndex != null && warningsIndex !== -1) {
                d.warnings.splice(warningsIndex, 1);
                return;
            }
            const projectWarningsIndex = (_a = d.currentProjectData) === null || _a === void 0 ? void 0 : _a.warnings.findIndex((v) => v.id === id);
            if (projectWarningsIndex != null && projectWarningsIndex !== -1) {
                (_b = d.currentProjectData) === null || _b === void 0 ? void 0 : _b.warnings.splice(projectWarningsIndex, 1);
                return;
            }
            const testingTypeWarningsIndex = (_d = (_c = d.currentProjectData) === null || _c === void 0 ? void 0 : _c.testingTypeData) === null || _d === void 0 ? void 0 : _d.warnings.findIndex((v) => v.id === id);
            if (testingTypeWarningsIndex != null && testingTypeWarningsIndex !== -1) {
                (_f = (_e = d.currentProjectData) === null || _e === void 0 ? void 0 : _e.testingTypeData) === null || _f === void 0 ? void 0 : _f.warnings.splice(testingTypeWarningsIndex, 1);
                return;
            }
            const appWarningsIndex = (_j = (_h = (_g = d.currentProjectData) === null || _g === void 0 ? void 0 : _g.testingTypeData) === null || _h === void 0 ? void 0 : _h.activeAppData) === null || _j === void 0 ? void 0 : _j.warnings.findIndex((v) => v.id === id);
            if (appWarningsIndex != null && appWarningsIndex !== -1) {
                (_m = (_l = (_k = d.currentProjectData) === null || _k === void 0 ? void 0 : _k.testingTypeData) === null || _l === void 0 ? void 0 : _l.activeAppData) === null || _m === void 0 ? void 0 : _m.warnings.splice(appWarningsIndex, 1);
            }
        });
    }
}
exports.ErrorActions = ErrorActions;
