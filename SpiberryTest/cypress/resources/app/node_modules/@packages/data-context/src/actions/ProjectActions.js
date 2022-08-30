"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectActions = void 0;
const tslib_1 = require("tslib");
const execa_1 = (0, tslib_1.__importDefault)(require("execa"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
const codegen_1 = require("../codegen");
const templates_1 = (0, tslib_1.__importDefault)(require("../codegen/templates"));
const util_1 = require("../util");
const errors_1 = require("../../../errors");
const config_1 = require("../../../config");
class ProjectActions {
    constructor(ctx) {
        this.ctx = ctx;
    }
    get api() {
        return this.ctx._apis.projectApi;
    }
    async clearCurrentProject() {
        this.ctx.update((d) => {
            d.baseError = null;
            d.activeBrowser = null;
            d.currentProject = null;
            d.currentProjectData = null;
            d.currentTestingType = null;
            d.forceReconfigureProject = null;
            d.scaffoldedFiles = null;
            d.app.browserStatus = 'closed';
        });
        this.ctx.lifecycleManager.clearCurrentProject();
        (0, config_1.resetIssuedWarnings)();
        await this.api.closeActiveProject();
    }
    get projects() {
        return this.ctx.projectsList;
    }
    set projects(projects) {
        this.ctx.coreData.app.projects = projects;
    }
    openDirectoryInIDE(projectPath) {
        this.ctx.debug(`opening ${projectPath} in ${this.ctx.coreData.localSettings.preferences.preferredEditorBinary}`);
        if (!this.ctx.coreData.localSettings.preferences.preferredEditorBinary) {
            return;
        }
        if (this.ctx.coreData.localSettings.preferences.preferredEditorBinary === 'computer') {
            this.ctx.actions.electron.showItemInFolder(projectPath);
        }
        (0, execa_1.default)(this.ctx.coreData.localSettings.preferences.preferredEditorBinary, [projectPath]);
    }
    setAndLoadCurrentTestingType(type) {
        this.ctx.lifecycleManager.setAndLoadCurrentTestingType(type);
    }
    async setCurrentProject(projectRoot) {
        await this.updateProjectList(() => this.api.insertProjectToCache(projectRoot));
        await this.clearCurrentProject();
        this.ctx.lifecycleManager.setCurrentProject(projectRoot);
    }
    // Temporary: remove after other refactor lands
    setCurrentProjectAndTestingTypeForTestSetup(projectRoot) {
        this.ctx.lifecycleManager.clearCurrentProject();
        this.ctx.lifecycleManager.setCurrentProject(projectRoot);
        this.ctx.lifecycleManager.setCurrentTestingType('e2e');
        // @ts-expect-error - we are setting this as a convenience for our integration tests
        this.ctx._modeOptions = {};
    }
    async loadProjects() {
        const projectRoots = await this.api.getProjectRootsFromCache();
        this.ctx.update((d) => {
            d.app.projects = [...projectRoots];
        });
        return this.projects;
    }
    async initializeActiveProject(options = {}) {
        (0, assert_1.default)(this.ctx.currentProject, 'Cannot initialize project without an active project');
        (0, assert_1.default)(this.ctx.coreData.currentTestingType, 'Cannot initialize project without choosing testingType');
        const allModeOptionsWithLatest = {
            ...this.ctx.modeOptions,
            projectRoot: this.ctx.currentProject,
            testingType: this.ctx.coreData.currentTestingType,
        };
        try {
            await this.api.closeActiveProject();
            return await this.api.openProjectCreate(allModeOptionsWithLatest, {
                ...options,
                ctx: this.ctx,
            }).finally(async () => {
                // When switching testing type, the project should be relaunched in the previously selected browser
                if (this.ctx.coreData.app.relaunchBrowser) {
                    this.ctx.project.setRelaunchBrowser(false);
                    await this.ctx.actions.project.launchProject(this.ctx.coreData.currentTestingType, {});
                }
            });
        }
        catch (e) {
            // TODO(tim): remove / replace with ctx.log.error
            // eslint-disable-next-line
            console.error(e);
            throw e;
        }
    }
    async updateProjectList(updater) {
        return updater().then(() => this.loadProjects());
    }
    async addProjectFromElectronNativeFolderSelect() {
        const path = await this.ctx.actions.electron.showOpenDialog();
        if (!path) {
            return;
        }
        await this.addProject({ path, open: true });
        this.ctx.emitter.toLaunchpad();
    }
    async addProject(args) {
        const projectRoot = await this.getDirectoryPath(args.path);
        if (args.open) {
            this.setCurrentProject(projectRoot).catch(this.ctx.onError);
        }
        else {
            await this.updateProjectList(() => this.api.insertProjectToCache(projectRoot));
        }
    }
    async getDirectoryPath(projectRoot) {
        try {
            const { dir, base } = path_1.default.parse(projectRoot);
            const fullPath = path_1.default.join(dir, base);
            const dirStat = await this.ctx.fs.stat(fullPath);
            if (dirStat.isDirectory()) {
                return fullPath;
            }
            return dir;
        }
        catch (exception) {
            throw Error(`Cannot add ${projectRoot} to projects as it does not exist in the file system`);
        }
    }
    async launchProject(testingType, options, specPath) {
        if (!this.ctx.currentProject) {
            return null;
        }
        testingType = testingType || this.ctx.coreData.currentTestingType;
        // It's strange to have no testingType here, but `launchProject` is called when switching testing types,
        // so it needs to short-circuit and return here.
        // TODO: Untangle this. https://cypress-io.atlassian.net/browse/UNIFY-1528
        if (!testingType)
            return;
        this.ctx.coreData.currentTestingType = testingType;
        const browser = this.ctx.coreData.activeBrowser;
        if (!browser)
            throw new Error('Missing browser in launchProject');
        let activeSpec;
        if (specPath) {
            activeSpec = this.ctx.project.getCurrentSpecByAbsolute(specPath);
        }
        // launchProject expects a spec when opening browser for url navigation.
        // We give it an empty spec if none is passed so as to land on home page
        const emptySpec = {
            name: '',
            absolute: '',
            relative: '',
            specType: testingType === 'e2e' ? 'integration' : 'component',
        };
        await this.api.launchProject(browser, activeSpec !== null && activeSpec !== void 0 ? activeSpec : emptySpec, options);
        return;
    }
    removeProject(projectRoot) {
        return this.updateProjectList(() => this.api.removeProjectFromCache(projectRoot));
    }
    async createConfigFile(type) {
        const project = this.ctx.currentProject;
        if (!project) {
            throw Error(`Cannot create config file without currentProject.`);
        }
        let obj = {
            e2e: {},
            component: {},
        };
        if (type) {
            obj = {
                [type]: {},
            };
        }
        await this.ctx.fs.writeFile(this.ctx.lifecycleManager.configFilePath, `module.exports = ${JSON.stringify(obj, null, 2)}`);
    }
    async setProjectIdInConfigFile(projectId) {
        return (0, util_1.insertValuesInConfigFile)(this.ctx.lifecycleManager.configFilePath, { projectId }, { get(id) {
                return Error(id);
            } });
    }
    async clearLatestProjectCache() {
        await this.api.clearLatestProjectsCache();
    }
    async clearProjectPreferencesCache(projectTitle) {
        await this.api.clearProjectPreferences(projectTitle);
    }
    async clearAllProjectPreferencesCache() {
        await this.api.clearAllProjectPreferences();
    }
    setPromptShown(slug) {
        this.api.setPromptShown(slug);
    }
    setSpecs(specs) {
        this.ctx.project.setSpecs(specs);
        this.refreshSpecs(specs);
        if (this.ctx.coreData.currentTestingType === 'component') {
            this.api.getDevServer().updateSpecs(specs);
        }
        this.ctx.emitter.specsChange();
    }
    refreshSpecs(specs) {
        var _a;
        (_a = this.ctx.lifecycleManager.git) === null || _a === void 0 ? void 0 : _a.setSpecs(specs.map((s) => s.absolute));
    }
    setProjectPreferences(args) {
        if (!this.ctx.currentProject) {
            throw Error(`Cannot save preferences without currentProject.`);
        }
        this.api.insertProjectPreferencesToCache(this.ctx.lifecycleManager.projectTitle, args);
    }
    async codeGenSpec(codeGenCandidate, codeGenType, erroredCodegenCandidate) {
        var _a, _b;
        const project = this.ctx.currentProject;
        if (!project) {
            throw Error(`Cannot create spec without currentProject.`);
        }
        const getCodeGenPath = () => {
            return codeGenType === 'e2e' || erroredCodegenCandidate
                ? this.ctx.path.join(project, codeGenCandidate)
                : codeGenCandidate;
        };
        const codeGenPath = getCodeGenPath();
        const newSpecCodeGenOptions = new codegen_1.SpecOptions(this.ctx, {
            codeGenPath,
            codeGenType,
            erroredCodegenCandidate,
        });
        let codeGenOptions = await newSpecCodeGenOptions.getCodeGenOptions();
        const codeGenResults = await (0, codegen_1.codeGenerator)({ templateDir: templates_1.default[codeGenType], target: path_1.default.parse(codeGenPath).dir }, codeGenOptions);
        if (!codeGenResults.files[0] || codeGenResults.failed[0]) {
            throw (codeGenResults.failed[0] || 'Unable to generate spec');
        }
        const [newSpec] = codeGenResults.files;
        const cfg = await this.ctx.project.getConfig();
        if (cfg && this.ctx.currentProject) {
            const testingType = (codeGenType === 'component') ? 'component' : 'e2e';
            await this.setSpecsFoundBySpecPattern({
                projectRoot: this.ctx.currentProject,
                testingType,
                specPattern: (_a = cfg.specPattern) !== null && _a !== void 0 ? _a : [],
                configSpecPattern: (_b = cfg.specPattern) !== null && _b !== void 0 ? _b : [],
                excludeSpecPattern: cfg.excludeSpecPattern,
                additionalIgnorePattern: cfg.additionalIgnorePattern,
            });
        }
        return {
            status: 'valid',
            file: { absolute: newSpec.file, contents: newSpec.content },
            description: 'Generated spec',
        };
    }
    async setSpecsFoundBySpecPattern({ projectRoot, testingType, specPattern, configSpecPattern, excludeSpecPattern, additionalIgnorePattern }) {
        const toArray = (val) => val ? typeof val === 'string' ? [val] : val : [];
        configSpecPattern = toArray(configSpecPattern);
        specPattern = toArray(specPattern);
        excludeSpecPattern = toArray(excludeSpecPattern) || [];
        // exclude all specs matching e2e if in component testing
        additionalIgnorePattern = toArray(additionalIgnorePattern) || [];
        if (!specPattern || !configSpecPattern) {
            throw Error('could not find pattern to load specs');
        }
        const specs = await this.ctx.project.findSpecs({
            projectRoot,
            testingType,
            specPattern,
            configSpecPattern,
            excludeSpecPattern,
            additionalIgnorePattern,
        });
        this.ctx.actions.project.setSpecs(specs);
        this.ctx.project.startSpecWatcher({
            projectRoot,
            testingType,
            specPattern,
            configSpecPattern,
            excludeSpecPattern,
            additionalIgnorePattern,
        });
    }
    setForceReconfigureProjectByTestingType({ forceReconfigureProject, testingType }) {
        const testingTypeToReconfigure = testingType !== null && testingType !== void 0 ? testingType : this.ctx.coreData.currentTestingType;
        if (!testingTypeToReconfigure) {
            return;
        }
        this.ctx.update((coreData) => {
            coreData.forceReconfigureProject = {
                ...coreData.forceReconfigureProject,
                [testingTypeToReconfigure]: forceReconfigureProject,
            };
        });
    }
    async reconfigureProject() {
        await this.ctx.actions.browser.closeBrowser();
        this.ctx.actions.wizard.resetWizard();
        this.ctx.actions.wizard.initialize();
        this.ctx.actions.electron.refreshBrowserWindow();
        this.ctx.actions.electron.showBrowserWindow();
    }
    get defaultE2EPath() {
        const projectRoot = this.ctx.currentProject;
        (0, assert_1.default)(projectRoot, `Cannot create e2e directory without currentProject.`);
        return path_1.default.join(projectRoot, 'cypress', 'e2e');
    }
    async scaffoldIntegration() {
        const projectRoot = this.ctx.currentProject;
        (0, assert_1.default)(projectRoot, `Cannot create spec without currentProject.`);
        const results = await (0, codegen_1.codeGenerator)({ templateDir: templates_1.default['scaffoldIntegration'], target: this.defaultE2EPath }, {});
        if (results.failed.length) {
            throw new Error(`Failed generating files: ${results.failed.map((e) => `${e}`)}`);
        }
        return results.files.map(({ status, file, content }) => {
            return {
                status: (status === 'add' || status === 'overwrite') ? 'valid' : 'skipped',
                file: { absolute: file, contents: content },
                description: 'Generated spec',
            };
        });
    }
    async pingBaseUrl() {
        var _a;
        const baseUrl = (_a = (await this.ctx.project.getConfig())) === null || _a === void 0 ? void 0 : _a.baseUrl;
        // Should never happen
        if (!baseUrl) {
            return;
        }
        const baseUrlWarning = this.ctx.warnings.find((e) => e.cypressError.type === 'CANNOT_CONNECT_BASE_URL_WARNING');
        if (baseUrlWarning) {
            this.ctx.actions.error.clearWarning(baseUrlWarning.id);
            this.ctx.emitter.errorWarningChange();
        }
        return this.api.isListening(baseUrl)
            .catch(() => this.ctx.onWarning((0, errors_1.getError)('CANNOT_CONNECT_BASE_URL_WARNING', baseUrl)));
    }
    async switchTestingTypesAndRelaunch(testingType) {
        const isTestingTypeConfigured = this.ctx.lifecycleManager.isTestingTypeConfigured(testingType);
        this.ctx.project.setRelaunchBrowser(isTestingTypeConfigured);
        this.setAndLoadCurrentTestingType(testingType);
        await this.reconfigureProject();
        if (testingType === 'e2e' && !isTestingTypeConfigured) {
            // E2E doesn't have a wizard, so if we have a testing type on load we just create/update their cypress.config.js.
            await this.ctx.actions.wizard.scaffoldTestingType();
        }
    }
}
exports.ProjectActions = ProjectActions;
