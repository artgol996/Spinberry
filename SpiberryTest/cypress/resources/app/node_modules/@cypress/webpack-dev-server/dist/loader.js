"use strict";
/* global Cypress */
/// <reference types="cypress" />
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const path = (0, tslib_1.__importStar)(require("path"));
const debug = (0, debug_1.default)('cypress:webpack-dev-server:webpack');
/**
 * @param {ComponentSpec} file spec to create import string from.
 * @param {string} filename name of the spec file - this is the same as file.name
 * @param {string} chunkName webpack chunk name. eg: 'spec-0'
 * @param {string} projectRoot absolute path to the project root. eg: /Users/<username>/my-app
 */
const makeImport = (file, filename, chunkName, projectRoot) => {
    // If we want to rename the chunks, we can use this
    const magicComments = chunkName ? `/* webpackChunkName: "${chunkName}" */` : '';
    return `"${filename}": {
    shouldLoad: () => document.location.pathname.includes("${encodeURI(file.absolute)}"),
    load: () => import("${file.absolute}" ${magicComments}),
    chunkName: "${chunkName}",
  }`;
};
/**
 * Creates a object mapping a spec file to an object mapping
 * the spec name to the result of `makeImport`.
 *
 * @returns {Record<string, ReturnType<makeImport>}
 * {
 *   "App.spec.js": {
 *     shouldLoad: () => document.location.pathname.includes("cypress/component/App.spec.js"),
 *     load: () => {
 *       return import("/Users/projects/my-app/cypress/component/App.spec.js" \/* webpackChunkName: "spec-0" *\/)
 *     },
 *     chunkName: "spec-0"
 *   }
 * }
 */
function buildSpecs(projectRoot, files = []) {
    if (!Array.isArray(files))
        return `{}`;
    debug(`projectRoot: ${projectRoot}, files: ${files.map((f) => f.absolute).join(',')}`);
    return `{${files.map((f, i) => {
        return makeImport(f, f.name, `spec-${i}`, projectRoot);
    }).join(',')}}`;
}
// Runs the tests inside the iframe
function loader() {
    const ctx = this;
    // In Webpack 5, a spec added after the dev-server is created won't
    // be included in the compilation. Disabling the caching of this loader ensures
    // we regenerate our specs and include any new ones in the compilation.
    ctx.cacheable(false);
    const { files, projectRoot, supportFile } = ctx._cypress;
    const supportFileAbsolutePath = supportFile ? JSON.stringify(path.resolve(projectRoot, supportFile)) : undefined;
    return `
  var loadSupportFile = ${supportFile ? `() => import(${supportFileAbsolutePath})` : `() => Promise.resolve()`}
  var allTheSpecs = ${buildSpecs(projectRoot, files)};

  var { init } = require(${JSON.stringify(require.resolve('./aut-runner'))})

  var scriptLoaders = Object.values(allTheSpecs).reduce(
    (accSpecLoaders, specLoader) => {
      if (specLoader.shouldLoad()) {
        accSpecLoaders.push(specLoader.load)
      }
      return accSpecLoaders
  }, [loadSupportFile])

  init(scriptLoaders)
  `;
}
exports.default = loader;
