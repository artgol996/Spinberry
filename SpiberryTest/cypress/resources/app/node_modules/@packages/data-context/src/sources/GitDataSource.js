"use strict";
var _GitDataSource_instances, _GitDataSource_specs, _GitDataSource_git, _GitDataSource_gitErrored, _GitDataSource_destroyed, _GitDataSource_gitBaseDir, _GitDataSource_gitBaseDirWatcher, _GitDataSource_gitMeta, _GitDataSource_currentBranch, _GitDataSource_intervalTimer, _GitDataSource_verifyGitRepo, _GitDataSource_refreshAllGitData, _GitDataSource_destroyWatcher, _GitDataSource_loadAndWatchCurrentBranch, _GitDataSource_loadCurrentBranch, _GitDataSource_loadBulkGitInfo, _GitDataSource_getInfoPosix, _GitDataSource_getInfoWindows;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitDataSource = void 0;
const tslib_1 = require("tslib");
const execa_1 = (0, tslib_1.__importDefault)(require("execa"));
const simple_git_1 = (0, tslib_1.__importDefault)(require("simple-git"));
const dayjs_1 = (0, tslib_1.__importDefault)(require("dayjs"));
const relativeTime_1 = (0, tslib_1.__importDefault)(require("dayjs/plugin/relativeTime"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const fs_1 = (0, tslib_1.__importDefault)(require("fs"));
const os_1 = (0, tslib_1.__importDefault)(require("os"));
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const chokidar_1 = (0, tslib_1.__importDefault)(require("chokidar"));
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const debug = (0, debug_1.default)('cypress:data-context:sources:GitDataSource');
const debugVerbose = (0, debug_1.default)('cypress-verbose:data-context:sources:GitDataSource');
dayjs_1.default.extend(relativeTime_1.default);
// We get the last modified time for each spec
// using a shell command. The reason is
// none of the Node.js git wrappers support
// bulk fetching the last modified date and user.
// Doing them one by one in a Node.js for loop is way too slow.
// The fastest way to do it is using a shell command,
// looping over each spec and processing the result of `git log`
// The command is slightly different between macOS/Linux and Windows.
// macOS/Linux: getInfoPosix
// Windows: getInfoWindows
// Where possible, we use SimpleGit to get other git info, like
// the status of untracked files and the current git username.
// matches <timestamp> <when> <author>
// $ git log -1 --pretty=format:%ci %ar %an <file>
// eg '2021-09-14 13:43:19 +1000 2 days ago Lachlan Miller
const GIT_LOG_REGEXP = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} [-+].+?)\s(.+ago)\s([^|]*)\|([^|]*)\|([^|]*)/;
const GIT_LOG_COMMAND = `git log --max-count=1 --pretty="format:%ci %ar %an|%h|%s"`;
const GIT_ROOT_DIR_COMMAND = '--show-toplevel';
const SIXTY_SECONDS = 60 * 1000;
function ensurePosixPathSeparators(text) {
    return text.replace(/\\/g, '/'); // normalize \ to /
}
/**
 * This acts as the manager for all "git" related state for a
 * given project. It caches the git state internally in the class,
 * and manages the watchers & emitting when things are changed. This way,
 * we are loading the git info ahead of time, and not blocking the execution
 * of the Queries on any git data loading lazily
 */
class GitDataSource {
    constructor(config) {
        this.config = config;
        _GitDataSource_instances.add(this);
        _GitDataSource_specs.set(this, void 0);
        _GitDataSource_git.set(this, void 0);
        _GitDataSource_gitErrored.set(this, false);
        _GitDataSource_destroyed.set(this, false);
        _GitDataSource_gitBaseDir.set(this, void 0);
        _GitDataSource_gitBaseDirWatcher.set(this, void 0);
        _GitDataSource_gitMeta.set(this, new Map());
        _GitDataSource_currentBranch.set(this, null);
        _GitDataSource_intervalTimer.set(this, void 0);
        // Simple Git will error if the projectRoot does not exist.
        // This should never happen outside of testing code simulating
        // incorrect scenarios
        debug('config: %o', this.config);
        try {
            (0, tslib_1.__classPrivateFieldSet)(this, _GitDataSource_git, (0, simple_git_1.default)({ baseDir: this.config.projectRoot }), "f");
        }
        catch (_a) {
            // suppress exception if git cannot be found
            debug('exception caught when loading git client');
        }
        if (!config.isRunMode) {
            (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_instances, "m", _GitDataSource_refreshAllGitData).call(this);
        }
    }
    setSpecs(specs) {
        if ((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_destroyed, "f")) {
            return;
        }
        // If we don't have a branch, it's likely b/c they don't have git setup.
        // Let's re-check and see if they have initialized a git repo by now
        if ((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitErrored, "f")) {
            (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_instances, "m", _GitDataSource_loadAndWatchCurrentBranch).call(this).catch(this.config.onError);
        }
        (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_instances, "m", _GitDataSource_loadBulkGitInfo).call(this, specs).catch(this.config.onError);
        (0, tslib_1.__classPrivateFieldSet)(this, _GitDataSource_specs, specs, "f");
    }
    get gitBaseDir() {
        return (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitBaseDir, "f");
    }
    get currentBranch() {
        return (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_currentBranch, "f");
    }
    destroy() {
        (0, tslib_1.__classPrivateFieldSet)(this, _GitDataSource_destroyed, true, "f");
        if ((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_intervalTimer, "f")) {
            clearTimeout((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_intervalTimer, "f"));
        }
        (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_instances, "m", _GitDataSource_destroyWatcher).call(this, (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitBaseDirWatcher, "f"));
    }
    gitInfoFor(path) {
        var _a;
        return (_a = (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitMeta, "f").get(path)) !== null && _a !== void 0 ? _a : null;
    }
}
exports.GitDataSource = GitDataSource;
_GitDataSource_specs = new WeakMap(), _GitDataSource_git = new WeakMap(), _GitDataSource_gitErrored = new WeakMap(), _GitDataSource_destroyed = new WeakMap(), _GitDataSource_gitBaseDir = new WeakMap(), _GitDataSource_gitBaseDirWatcher = new WeakMap(), _GitDataSource_gitMeta = new WeakMap(), _GitDataSource_currentBranch = new WeakMap(), _GitDataSource_intervalTimer = new WeakMap(), _GitDataSource_instances = new WeakSet(), _GitDataSource_verifyGitRepo = async function _GitDataSource_verifyGitRepo() {
    if (!(0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_git, "f")) {
        (0, tslib_1.__classPrivateFieldSet)(this, _GitDataSource_gitErrored, true, "f");
        return;
    }
    try {
        (0, tslib_1.__classPrivateFieldSet)(this, _GitDataSource_gitBaseDir, await (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_git, "f").revparse(GIT_ROOT_DIR_COMMAND), "f");
        (0, tslib_1.__classPrivateFieldSet)(this, _GitDataSource_gitErrored, false, "f");
    }
    catch (_a) {
        (0, tslib_1.__classPrivateFieldSet)(this, _GitDataSource_gitErrored, true, "f");
    }
}, _GitDataSource_refreshAllGitData = function _GitDataSource_refreshAllGitData() {
    (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_instances, "m", _GitDataSource_verifyGitRepo).call(this).then(() => {
        const toAwait = [
            (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_instances, "m", _GitDataSource_loadAndWatchCurrentBranch).call(this),
        ];
        if ((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_specs, "f")) {
            toAwait.push((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_instances, "m", _GitDataSource_loadBulkGitInfo).call(this, (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_specs, "f")));
        }
        Promise.all(toAwait).then(() => {
            (0, tslib_1.__classPrivateFieldSet)(this, _GitDataSource_intervalTimer, setTimeout(() => {
                debug('Refreshing git data');
                (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_instances, "m", _GitDataSource_refreshAllGitData).call(this);
            }, SIXTY_SECONDS), "f");
        }).catch(this.config.onError);
    }).catch(this.config.onError);
}, _GitDataSource_destroyWatcher = function _GitDataSource_destroyWatcher(watcher) {
    // Can't do anything actionable with these errors
    watcher === null || watcher === void 0 ? void 0 : watcher.close().catch((e) => { });
}, _GitDataSource_loadAndWatchCurrentBranch = async function _GitDataSource_loadAndWatchCurrentBranch() {
    if ((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_destroyed, "f")) {
        return;
    }
    try {
        if ((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitErrored, "f")) {
            debug('Skipping branch watching because a git error was reported');
        }
        if ((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_git, "f")) {
            await (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_instances, "m", _GitDataSource_loadCurrentBranch).call(this);
        }
        if ((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_destroyed, "f") || !(0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitBaseDir, "f")) {
            return;
        }
        if (!this.config.isRunMode) {
            (0, tslib_1.__classPrivateFieldSet)(this, _GitDataSource_gitBaseDirWatcher, chokidar_1.default.watch(path_1.default.join((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitBaseDir, "f"), '.git', 'HEAD'), {
                ignoreInitial: true,
                ignorePermissionErrors: true,
            }), "f");
            // Fires when we switch branches
            (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitBaseDirWatcher, "f").on('change', () => {
                const prevBranch = (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_currentBranch, "f");
                (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_instances, "m", _GitDataSource_loadCurrentBranch).call(this).then(() => {
                    if (prevBranch !== (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_currentBranch, "f")) {
                        this.config.onBranchChange((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_currentBranch, "f"));
                    }
                }).catch((e) => {
                    debug('Errored loading branch info on git change %s', e.message);
                    (0, tslib_1.__classPrivateFieldSet)(this, _GitDataSource_currentBranch, null, "f");
                    (0, tslib_1.__classPrivateFieldSet)(this, _GitDataSource_gitErrored, true, "f");
                });
            });
            (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitBaseDirWatcher, "f").on('error', (e) => {
                debug(`Failed to watch for git changes`, e.message);
                this.config.onError(e);
            });
        }
    }
    catch (e) {
        (0, tslib_1.__classPrivateFieldSet)(this, _GitDataSource_gitErrored, true, "f");
        debug(`Error loading & watching current branch %s`, e.message);
    }
}, _GitDataSource_loadCurrentBranch = async function _GitDataSource_loadCurrentBranch() {
    if ((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_git, "f")) {
        try {
            (0, tslib_1.__classPrivateFieldSet)(this, _GitDataSource_currentBranch, (await (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_git, "f").branch()).current, "f");
            debug(`On current branch %s`, (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_currentBranch, "f"));
            this.config.onBranchChange((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_currentBranch, "f"));
        }
        catch (_a) {
            debug('this is not a git repo');
        }
    }
}, _GitDataSource_loadBulkGitInfo = async function _GitDataSource_loadBulkGitInfo(absolutePaths) {
    var _a;
    debugVerbose(`checking %d files`, absolutePaths.length);
    if (absolutePaths.length === 0) {
        return;
    }
    try {
        const changed = [];
        let statusResult = undefined;
        let gitLogOutput = [];
        if (!(0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitErrored, "f")) {
            const [stdout, statusResultReturned] = await Promise.all([
                os_1.default.platform() === 'win32'
                    ? (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_instances, "m", _GitDataSource_getInfoWindows).call(this, absolutePaths)
                    : (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_instances, "m", _GitDataSource_getInfoPosix).call(this, absolutePaths),
                (_a = (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_git, "f")) === null || _a === void 0 ? void 0 : _a.status(),
            ]);
            gitLogOutput = stdout;
            statusResult = statusResultReturned;
            debugVerbose('stdout %s', stdout.toString());
        }
        // Go through each file, updating our gitInfo cache and detecting which
        // entries have changed, to notify the UI
        for (const [i, file] of absolutePaths.entries()) {
            debugVerbose(`checking %s`, file);
            const current = (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitMeta, "f").get(file);
            // first check unstaged/untracked files
            const isUnstaged = statusResult === null || statusResult === void 0 ? void 0 : statusResult.files.find((x) => file.endsWith(x.path));
            let toSet = null;
            const stat = await fs_1.default.promises.stat(file);
            const ctime = (0, dayjs_1.default)(stat.ctime);
            const birthtime = (0, dayjs_1.default)(stat.birthtime);
            // These are the status codes used by SimpleGit.
            // M -> modified
            // ? -> unstaged
            // A or ' ' -> staged, but not yet committed
            // D -> deleted, but we do not show deleted files in the UI, so it's not used.
            if (!(0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitErrored, "f") && isUnstaged && ['M', 'A', ' ', '?'].includes(isUnstaged === null || isUnstaged === void 0 ? void 0 : isUnstaged.working_dir)) {
                toSet = {
                    lastModifiedTimestamp: isUnstaged.working_dir === 'M' ? ctime.format('YYYY-MM-DD HH:mm:ss Z') : birthtime.format('YYYY-MM-DD HH:mm:ss Z'),
                    lastModifiedHumanReadable: isUnstaged.working_dir === 'M' ? ctime.fromNow() : birthtime.fromNow(),
                    author: '',
                    statusType: isUnstaged.working_dir === 'M' ? 'modified' : 'created',
                    subject: null,
                    shortHash: null,
                };
            }
            else if ((0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitErrored, "f")) {
                toSet = {
                    lastModifiedTimestamp: ctime.format('YYYY-MM-DD HH:mm:ss Z'),
                    lastModifiedHumanReadable: ctime.fromNow(),
                    author: '',
                    statusType: 'noGitInfo',
                    subject: null,
                    shortHash: null,
                };
            }
            else {
                const data = gitLogOutput[i];
                const info = data === null || data === void 0 ? void 0 : data.match(GIT_LOG_REGEXP);
                if (file && info && info[1] && info[2] && info[3] && info[4] && info[5]) {
                    toSet = {
                        lastModifiedTimestamp: info[1],
                        lastModifiedHumanReadable: info[2],
                        author: info[3],
                        statusType: 'unmodified',
                        subject: info[5],
                        shortHash: info[4],
                    };
                }
                else {
                    debug(`did not get expected git log for ${file}, expected string with format '<timestamp> <time_ago> <author>|<short_hash>|<subject>'. Got: ${data}`);
                    toSet = null;
                }
            }
            (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitMeta, "f").set(file, toSet);
            if (!lodash_1.default.isEqual(toSet, current)) {
                changed.push(file);
            }
        }
        if (!(0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_destroyed, "f")) {
            debugVerbose(`updated %o`, changed);
            this.config.onGitInfoChange(changed);
        }
    }
    catch (e) {
        // does not have git installed,
        // file is not under source control
        // ... etc ...
        debug('Error getting git info: %s', e);
    }
}, _GitDataSource_getInfoPosix = async function _GitDataSource_getInfoPosix(absolutePaths) {
    debug('getting git info for %o:', absolutePaths);
    const paths = absolutePaths.map((x) => `"${path_1.default.resolve(x)}"`).join(',');
    // for file in {one,two} is valid in bash, but for file {one} is not
    // no need to use a for loop for a single file
    // IFS is needed to handle paths with white space.
    const cmd = absolutePaths.length === 1
        ? `${GIT_LOG_COMMAND} ${absolutePaths[0]}`
        : `IFS=$'\n'; for file in {${paths}}; do echo $(${GIT_LOG_COMMAND} $file); done`;
    debug('executing command `%s`:', cmd);
    debug('gitBaseDir `%s`:', (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitBaseDir, "f"));
    const result = await (0, execa_1.default)(cmd, { shell: process.env.SHELL || '/bin/bash', cwd: (0, tslib_1.__classPrivateFieldGet)(this, _GitDataSource_gitBaseDir, "f") });
    const stdout = result.stdout.split('\n');
    if (result.exitCode !== 0) {
        debug(`command execution error: %o`, result);
    }
    if (stdout.length !== absolutePaths.length) {
        debug('unexpected command execution result: %o', result);
        throw Error(`Expect result array to have same length as input. Input: ${absolutePaths.length} Output: ${stdout.length}`);
    }
    return stdout;
}, _GitDataSource_getInfoWindows = async function _GitDataSource_getInfoWindows(absolutePaths) {
    var _a;
    const paths = absolutePaths.map((x) => `"${path_1.default.resolve(x)}"`).join(',');
    const cmd = `FOR %x in (${paths}) DO (${GIT_LOG_COMMAND} %x)`;
    const result = await (0, execa_1.default)(cmd, { shell: true, cwd: this.config.projectRoot });
    const stdout = ensurePosixPathSeparators(result.stdout).split('\r\n'); // windows uses CRLF for carriage returns
    const output = [];
    for (const p of absolutePaths) {
        const idx = stdout.findIndex((entry) => entry.includes(p));
        const text = (_a = stdout[idx + 1]) !== null && _a !== void 0 ? _a : '';
        output.push(text);
    }
    if (output.length !== absolutePaths.length) {
        debug('stdout', output);
        throw Error(`Expect result array to have same length as input. Input: ${absolutePaths.length} Output: ${output.length}`);
    }
    return output;
};
