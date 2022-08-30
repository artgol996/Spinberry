"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieJar = exports.CookieJar = exports.Cookie = void 0;
const tough_cookie_1 = require("tough-cookie");
Object.defineProperty(exports, "Cookie", { enumerable: true, get: function () { return tough_cookie_1.Cookie; } });
/**
 * An adapter for tough-cookie's CookieJar
 * Holds onto cookies captured via the proxy, so they can be applied to
 * requests as needed for the sake of cross-origin testing
 */
class CookieJar {
    constructor() {
        this._cookieJar = new tough_cookie_1.CookieJar(undefined, { allowSpecialUseDomain: true });
    }
    static parse(cookie) {
        return tough_cookie_1.Cookie.parse(cookie);
    }
    getCookies(url, sameSiteContext) {
        // @ts-ignore
        return this._cookieJar.getCookiesSync(url, { sameSiteContext });
    }
    getAllCookies() {
        let cookies = [];
        // have to use the internal memstore. looks like an async api, but
        // it's actually synchronous
        // @ts-ignore
        this._cookieJar.store.getAllCookies((_err, _cookies) => {
            cookies = _cookies;
        });
        return cookies;
    }
    setCookie(cookie, url, sameSiteContext) {
        // @ts-ignore
        this._cookieJar.setCookieSync(cookie, url, { sameSiteContext });
    }
    removeCookie(cookieData) {
        // have to use the internal memstore. looks like an async api, but
        // it's actually synchronous
        // @ts-ignore
        this._cookieJar.store.removeCookie(cookieData.domain, cookieData.path || '/', cookieData.name, () => { });
    }
    removeAllCookies() {
        this._cookieJar.removeAllCookiesSync();
    }
}
exports.CookieJar = CookieJar;
exports.cookieJar = new CookieJar();
