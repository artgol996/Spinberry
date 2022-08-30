"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMigrationFile = void 0;
const tslib_1 = require("tslib");
const dedent_1 = (0, tslib_1.__importDefault)(require("dedent"));
const autoRename_1 = require("./autoRename");
function formatMigrationFile(file, regexp, options = autoRename_1.defaultMigrationTransformOptions) {
    const match = regexp.exec(file);
    if (!(match === null || match === void 0 ? void 0 : match.groups)) {
        throw new Error((0, dedent_1.default) `
      Expected groups main,ext or file in ${file} using ${regexp} when matching ${file}
      Perhaps this isn't a spec file, or it is an unexpected format?`);
    }
    const { folder, fileName, preExtension, extension, supportFileName } = match.groups;
    if (supportFileName && extension) {
        return [{
                text: `${file.slice(0, match.index)}cypress/support/`,
                highlight: false,
            }, {
                text: supportFileName,
                highlight: true,
                group: 'supportFileName',
            },
            {
                text: extension,
                highlight: false,
            }];
    }
    return [{
            text: file.slice(0, match.index),
            highlight: false,
        },
        {
            text: folder ? 'cypress/' : '',
            highlight: false,
        },
        {
            text: folder || '',
            highlight: true,
            group: 'folder',
        },
        {
            text: (folder ? '/' : '') + fileName,
            highlight: false,
            group: 'fileName',
        },
        {
            text: preExtension || '',
            highlight: options.shouldMigratePreExtension,
            group: 'preExtension',
        }, {
            text: extension || '',
            highlight: false,
        }].filter((f) => f.text.length);
}
exports.formatMigrationFile = formatMigrationFile;
