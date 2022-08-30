"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDataSource = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
const path = (0, tslib_1.__importStar)(require("path"));
const globby_1 = (0, tslib_1.__importDefault)(require("globby"));
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const file_1 = require("../util/file");
const debug = (0, debug_1.default)('cypress:data-context:sources:FileDataSource');
class FileDataSource {
    constructor(ctx) {
        this.ctx = ctx;
    }
    async checkIfFileExists(relativePath) {
        (0, assert_1.default)(this.ctx.currentProject, `Cannot checkIfFileExists without active project`);
        const filePath = path.join(this.ctx.currentProject, relativePath);
        try {
            return await this.ctx.fs.stat(filePath);
        }
        catch (_a) {
            return null;
        }
    }
    async readFileInProject(relative) {
        (0, assert_1.default)(this.ctx.currentProject, `Cannot readFileInProject without active project`);
        return this.ctx.fs.readFile(path.join(this.ctx.currentProject, relative), 'utf-8');
    }
    async getFilesByGlob(cwd, glob, globOptions) {
        var _a;
        const globs = [].concat(glob);
        const ignoreGlob = ((_a = globOptions === null || globOptions === void 0 ? void 0 : globOptions.ignore) !== null && _a !== void 0 ? _a : []).concat('**/node_modules/**');
        if (process.platform === 'win32') {
            // globby can't work with backwards slashes
            // https://github.com/sindresorhus/globby/issues/179
            for (const i in globs) {
                const cur = globs[i];
                if (!cur)
                    throw new Error('undefined glob received');
                globs[i] = (0, file_1.toPosix)(cur);
            }
        }
        try {
            const files = await (0, globby_1.default)(globs, { onlyFiles: true, absolute: true, cwd, ...globOptions, ignore: ignoreGlob });
            return files;
        }
        catch (e) {
            debug('error in getFilesByGlob %o', e);
            return [];
        }
    }
}
exports.FileDataSource = FileDataSource;
