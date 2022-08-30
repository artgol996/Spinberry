"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecOptions = exports.expectedSpecExtensions = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
// Spec file extensions that we will preserve when updating the file name
// due the existence of duplicate files.
//
// Example:
//   Button.cy.ts   -> Button-copy-1.cy.ts
//   Button_spec.js -> Button-copy-1_spec.js
//   Button.foo.js  -> Button.foo-copy-1.js
exports.expectedSpecExtensions = ['.cy', '.spec', '.test', '-spec', '-test', '_spec'];
class SpecOptions {
    constructor(ctx, options) {
        this.ctx = ctx;
        this.options = options;
        this.getSpecExtension = () => {
            if (this.options.erroredCodegenCandidate) {
                return '';
            }
            const foundSpecExtension = exports.expectedSpecExtensions.find((specExtension) => {
                return this.parsedPath.base.endsWith(specExtension + this.parsedPath.ext);
            });
            return foundSpecExtension || '';
        };
        (0, assert_1.default)(this.ctx.currentProject);
        this.parsedPath = this.ctx.path.parse(options.codeGenPath);
    }
    async getCodeGenOptions() {
        return {
            codeGenType: this.options.codeGenType,
            fileName: await this.getFilename(),
        };
    }
    async getFilename() {
        const { dir, base, ext } = this.parsedPath;
        const cyWithExt = this.getSpecExtension() + ext;
        const name = base.slice(0, -cyWithExt.length);
        // At this point, for a filePath of `/foo/bar/baz.cy.js`
        // - name = `baz`
        // - cyWithExt = `.cy.js`
        let fileToTry = this.ctx.path.join(dir, `${name}${cyWithExt}`);
        let i = 0;
        while (await this.fileExists(fileToTry)) {
            fileToTry = this.ctx.path.join(dir, `${name}-copy-${++i}${cyWithExt}`);
        }
        return this.ctx.path.parse(fileToTry).base;
    }
    async fileExists(absolute) {
        try {
            await this.ctx.fs.access(absolute, this.ctx.fs.constants.F_OK);
            return true;
        }
        catch (e) {
            return false;
        }
    }
}
exports.SpecOptions = SpecOptions;
