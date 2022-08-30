"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectByPath = exports.detect = exports.setMajorVersion = void 0;
const tslib_1 = require("tslib");
const bluebird_1 = (0, tslib_1.__importDefault)(require("bluebird"));
const lodash_1 = (0, tslib_1.__importStar)(require("lodash"));
const os_1 = (0, tslib_1.__importDefault)(require("os"));
const browsers_1 = require("./browsers");
const darwinHelper = (0, tslib_1.__importStar)(require("./darwin"));
const errors_1 = require("./errors");
const linuxHelper = (0, tslib_1.__importStar)(require("./linux"));
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const windowsHelper = (0, tslib_1.__importStar)(require("./windows"));
const debug = (0, debug_1.default)('cypress:launcher:detect');
const debugVerbose = (0, debug_1.default)('cypress-verbose:launcher:detect');
const setMajorVersion = (browser) => {
    var _a;
    const ver = (_a = browser.version.split('.')[0]) !== null && _a !== void 0 ? _a : browser.version;
    const majorVersion = parseInt(ver) || browser.version;
    const unsupportedVersion = browser.minSupportedVersion && majorVersion < browser.minSupportedVersion;
    const foundBrowser = (0, lodash_1.extend)({}, browser, { majorVersion });
    if (unsupportedVersion) {
        foundBrowser.unsupportedVersion = true;
        foundBrowser.warning = `Cypress does not support running ${browser.displayName} version ${majorVersion}. To use ${browser.displayName} with Cypress, install a version of ${browser.displayName} newer than or equal to ${browser.minSupportedVersion}.`;
    }
    return foundBrowser;
};
exports.setMajorVersion = setMajorVersion;
const helpers = {
    darwin: darwinHelper,
    linux: linuxHelper,
    win32: windowsHelper,
};
function getHelper(platform) {
    const helper = helpers[platform || os_1.default.platform()];
    if (!helper) {
        throw Error(`Could not find helper for ${platform}`);
    }
    return helper;
}
function lookup(platform, browser) {
    const helper = getHelper(platform);
    if (!helper) {
        throw new Error(`Cannot lookup browser ${browser.name} on ${platform}`);
    }
    return helper.detect(browser);
}
/**
 * Try to detect a single browser definition, which may dispatch multiple `checkOneBrowser` calls,
 * one for each binary. If Windows is detected, only one `checkOneBrowser` will be called, because
 * we don't use the `binary` field on Windows.
 */
function checkBrowser(browser) {
    if (Array.isArray(browser.binary) && os_1.default.platform() !== 'win32') {
        return bluebird_1.default.map(browser.binary, (binary) => {
            return checkOneBrowser((0, lodash_1.extend)({}, browser, { binary }));
        });
    }
    return bluebird_1.default.map([browser], checkOneBrowser);
}
function checkOneBrowser(browser) {
    const platform = os_1.default.platform();
    const pickBrowserProps = [
        'name',
        'family',
        'channel',
        'displayName',
        'type',
        'version',
        'path',
        'profilePath',
        'custom',
        'warning',
        'info',
        'minSupportedVersion',
        'unsupportedVersion',
    ];
    const failed = (err) => {
        if (err.notInstalled) {
            debugVerbose('browser %s not installed', browser.name);
            return false;
        }
        throw err;
    };
    return lookup(platform, browser)
        .then((val) => ({ ...browser, ...val }))
        .then((val) => lodash_1.default.pick(val, pickBrowserProps))
        .then((browser) => (0, exports.setMajorVersion)(browser))
        .catch(failed);
}
/** returns list of detected browsers */
const detect = (goalBrowsers) => {
    // we can detect same browser under different aliases
    // tell them apart by the name and the version property
    if (!goalBrowsers) {
        goalBrowsers = browsers_1.browsers;
    }
    const removeDuplicates = (val) => {
        return lodash_1.default.uniqBy(val, (browser) => {
            return `${browser.name}-${browser.version}`;
        });
    };
    const compactFalse = (browsers) => {
        return (0, lodash_1.compact)(browsers);
    };
    debug('detecting if the following browsers are present %o', goalBrowsers);
    return bluebird_1.default.mapSeries(goalBrowsers, checkBrowser)
        .then((val) => lodash_1.default.flatten(val))
        .then(compactFalse)
        .then(removeDuplicates);
};
exports.detect = detect;
const detectByPath = (path, goalBrowsers) => {
    if (!goalBrowsers) {
        goalBrowsers = browsers_1.browsers;
    }
    const helper = getHelper();
    const detectBrowserByVersionString = (stdout) => {
        return (0, lodash_1.find)(goalBrowsers, (goalBrowser) => {
            return goalBrowser.versionRegex.test(stdout);
        });
    };
    const detectBrowserFromKey = (browserKey) => {
        return (0, lodash_1.find)(goalBrowsers, (goalBrowser) => {
            return (goalBrowser.name === browserKey ||
                goalBrowser.displayName === browserKey ||
                goalBrowser.binary.indexOf(browserKey) > -1);
        });
    };
    const setCustomBrowserData = (browser, path, versionStr) => {
        const version = helper.getVersionNumber(versionStr, browser);
        let parsedBrowser = (0, lodash_1.extend)({}, browser, {
            name: browser.name,
            displayName: `Custom ${browser.displayName}`,
            info: `Loaded from ${path}`,
            custom: true,
            path,
            version,
        });
        return (0, exports.setMajorVersion)(parsedBrowser);
    };
    const pathData = helper.getPathData(path);
    return helper.getVersionString(pathData.path)
        .then((version) => {
        let browser;
        if (pathData.browserKey) {
            browser = detectBrowserFromKey(pathData.browserKey);
        }
        if (!browser) {
            browser = detectBrowserByVersionString(version);
        }
        if (!browser) {
            throw (0, errors_1.notDetectedAtPathErr)(`Unable to find browser with path ${path}`);
        }
        return setCustomBrowserData(browser, pathData.path, version);
    })
        .catch((err) => {
        if (err.notDetectedAtPath) {
            throw err;
        }
        throw (0, errors_1.notDetectedAtPathErr)(err.message);
    });
};
exports.detectByPath = detectByPath;
