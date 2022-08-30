"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserDataSource = void 0;
const tslib_1 = require("tslib");
const os_1 = (0, tslib_1.__importDefault)(require("os"));
const execa_1 = (0, tslib_1.__importDefault)(require("execa"));
let isPowerShellAvailable;
let powerShellPromise;
// Only need to worry about checking for PowerShell in windows,
// doing it asynchronously so to not block startup
if (os_1.default.platform() === 'win32') {
    powerShellPromise = (0, execa_1.default)(`[void] ''`, { shell: 'powershell' }).then(() => {
        isPowerShellAvailable = true;
    }).catch(() => {
        // Powershell is unavailable
        isPowerShellAvailable = false;
    }).finally(() => {
        powerShellPromise = undefined;
    });
}
const platform = os_1.default.platform();
class BrowserDataSource {
    constructor(ctx) {
        this.ctx = ctx;
    }
    /**
     * Gets the browsers from the machine, caching the Promise on the coreData
     * so we only look them up once
     */
    machineBrowsers() {
        if (!this.ctx.coreData.machineBrowsers) {
            const p = this.ctx._apis.browserApi.getBrowsers();
            this.ctx.coreData.machineBrowsers = p.then(async (browsers) => {
                if (!browsers[0])
                    throw new Error('no browsers found in machineBrowsers');
                return browsers;
            }).catch((e) => {
                this.ctx.update((coreData) => {
                    coreData.machineBrowsers = null;
                    coreData.baseError = e;
                });
                throw e;
            });
        }
        return this.ctx.coreData.machineBrowsers;
    }
    idForBrowser(obj) {
        return `${obj.name}-${obj.family}-${obj.channel}`;
    }
    isSelected(obj) {
        if (!this.ctx.coreData.activeBrowser) {
            return false;
        }
        return this.idForBrowser(this.ctx.coreData.activeBrowser) === this.idForBrowser(obj);
    }
    async isFocusSupported(obj) {
        if (obj.family !== 'firefox') {
            return true;
        }
        // Only allow focusing if PowerShell is available on Windows, since that's what we use to do it
        if (platform === 'win32') {
            if (powerShellPromise) {
                await powerShellPromise;
            }
            return isPowerShellAvailable !== null && isPowerShellAvailable !== void 0 ? isPowerShellAvailable : false;
        }
        return false;
    }
    isVersionSupported(obj) {
        return Boolean(!obj.unsupportedVersion);
    }
    setBrowserStatus(browserStatus) {
        this.ctx.update((d) => {
            d.app.browserStatus = browserStatus;
        });
        this.ctx.emitter.browserStatusChange();
    }
}
exports.BrowserDataSource = BrowserDataSource;
