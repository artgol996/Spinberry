"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeGenerator = void 0;
const tslib_1 = require("tslib");
const fs = (0, tslib_1.__importStar)(require("fs-extra"));
const isbinaryfile_1 = require("isbinaryfile");
const path = (0, tslib_1.__importStar)(require("path"));
const ejs = (0, tslib_1.__importStar)(require("ejs"));
const front_matter_1 = (0, tslib_1.__importDefault)(require("front-matter"));
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
/**
 * Utility for generating files from ejs templates or for general scaffolding purposes.
 * Given a template directory, all files within will be moved to the target directory specified whilst
 * maintaining the folder hierarchy. It supports both text and binary files, with text files having the
 * additional ability to be rendered with .ejs support meaning any arguments passed in can be interpolated
 * into the file. For custom file naming, front-matter can be used to specify the output fileName.
 */
async function codeGenerator(action, args) {
    const templateFiles = await allFilesInDir(action.templateDir);
    const codeGenResults = { files: [], failed: [] };
    const scaffoldResults = await Promise.all(templateFiles.map(async (file) => {
        const isBinary = await (0, isbinaryfile_1.isBinaryFile)(file);
        const parsedFile = path.parse(file);
        const processBinaryFile = async () => {
            const rawFileContent = await fs.readFile(file);
            const computedPath = computePath(action.templateDir, action.target, file, args);
            return { computedPath, content: rawFileContent, type: 'binary' };
        };
        const processTextFile = async () => {
            const fileContent = (await fs.readFile(file)).toString();
            const { body, renderedAttributes } = frontMatter(fileContent, args);
            const computedPath = computePath(action.templateDir, action.target, path.join(parsedFile.dir, renderedAttributes.fileName || parsedFile.base), args);
            const renderedTemplate = ejs.render(body, args);
            return { computedPath, content: renderedTemplate, type: 'text' };
        };
        try {
            const { content, computedPath, type } = isBinary
                ? await processBinaryFile()
                : await processTextFile();
            const exists = await fileExists(computedPath);
            const status = !exists
                ? 'add'
                : exists && action.overwrite
                    ? 'overwrite'
                    : 'skipped';
            if (status === 'add' || status === 'overwrite') {
                await fs.outputFile(computedPath, content);
            }
            return {
                file: computedPath,
                type,
                status,
                content: content.toString(),
            };
        }
        catch (e) {
            return e instanceof Error ? e : new Error(String(e));
        }
    }));
    return scaffoldResults.reduce((accum, result) => {
        if (result instanceof Error) {
            accum.failed.push(result);
        }
        else {
            accum.files.push(result);
        }
        return accum;
    }, codeGenResults);
}
exports.codeGenerator = codeGenerator;
function computePath(srcFolder, target, filePath, substitutions) {
    const relativeFromSrcFolder = path.relative(srcFolder, filePath);
    let computedPath = path.join(target, relativeFromSrcFolder);
    Object.entries(substitutions).forEach(([propertyName, value]) => {
        computedPath = computedPath.split(`{{${propertyName}}}`).join(value);
    });
    return computedPath;
}
async function allFilesInDir(parent) {
    const dirs = await fs.readdir(parent);
    const result = await Promise.all(dirs.map(async (dir) => {
        const child = path.join(parent, dir);
        const isDir = (await fs.stat(child)).isDirectory();
        return isDir ? await allFilesInDir(child) : child;
    }));
    return lodash_1.default.flatten(result);
}
function frontMatter(content, args) {
    const { attributes, body } = (0, front_matter_1.default)(content, { allowUnsafe: true });
    const renderedAttributes = Object.entries(attributes).reduce((acc, [key, val]) => ({ ...acc, [key]: ejs.render(val, args) }), {});
    return { body, renderedAttributes };
}
async function fileExists(absolute) {
    try {
        await fs.access(absolute, fs.constants.F_OK);
        return true;
    }
    catch (e) {
        return false;
    }
}
