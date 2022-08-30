"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardDataSource = void 0;
const scaffold_config_1 = require("../../../scaffold-config");
class WizardDataSource {
    constructor(ctx) {
        this.ctx = ctx;
    }
    packagesToInstall() {
        if (!this.ctx.coreData.wizard.chosenFramework || !this.ctx.coreData.wizard.chosenBundler || !this.ctx.currentProject) {
            return [];
        }
        const packages = [
            ...this.ctx.coreData.wizard.chosenFramework.dependencies(this.ctx.coreData.wizard.chosenBundler.type, this.ctx.currentProject),
        ];
        if (this.ctx.lifecycleManager.metaState.isUsingTypeScript) {
            packages.push({
                ...(0, scaffold_config_1.inPkgJson)(scaffold_config_1.WIZARD_DEPENDENCY_TYPESCRIPT, this.ctx.currentProject),
                dependency: scaffold_config_1.WIZARD_DEPENDENCY_TYPESCRIPT,
            });
        }
        return packages;
    }
    installDependenciesCommand() {
        var _a;
        const commands = {
            'npm': 'npm install -D',
            'pnpm': 'pnpm install -D',
            'yarn': 'yarn add -D',
        };
        const deps = this.ctx.wizard.packagesToInstall()
            .filter((pack) => !pack.satisfied)
            .map((pack) => pack.dependency.installer)
            .join(' ');
        if (!(deps === null || deps === void 0 ? void 0 : deps.length)) {
            return '';
        }
        return `${commands[(_a = this.ctx.coreData.packageManager) !== null && _a !== void 0 ? _a : 'npm']} ${deps}`;
    }
}
exports.WizardDataSource = WizardDataSource;
