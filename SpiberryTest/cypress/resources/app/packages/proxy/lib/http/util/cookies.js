"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookiesHelper = exports.parseCookie = exports.getSameSiteContext = void 0;
const tslib_1 = require("tslib");
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const url_1 = require("url");
const network_1 = require("../../../../network");
const cookie_jar_1 = require("../../../../server/lib/cookie-jar");
// sameSiteContext is a concept for tough-cookie's cookie jar that helps it
// simulate what a browser would do when determining whether or not it should
// be set from a response or a attached to a response. it shouldn't be confused
// with a cookie's SameSite property, though that also plays a role when
// setting/getting a cookie from the tough-cookie cookie jar. see tough-cookie's
// own explanation of sameSiteContext for more information:
// see https://github.com/salesforce/tough-cookie#samesite-cookies
const getSameSiteContext = (autUrl, requestUrl, isAUTFrameRequest) => {
    // if there's no AUT URL, it's a request for the first URL visited, or if
    // the request origin matches the AUT origin; both indicate that it's not
    // a cross-origin request
    if (!autUrl || network_1.cors.urlOriginsMatch(autUrl, requestUrl)) {
        return 'strict';
    }
    // being an AUT frame request means it's via top-level navigation, and we've
    // ruled out same-origin navigation, so the context is 'lax'.
    // anything else is a non-navigation, cross-origin request
    return isAUTFrameRequest ? 'lax' : 'none';
};
exports.getSameSiteContext = getSameSiteContext;
const sameSiteNoneRe = /; +samesite=(?:'none'|"none"|none)/i;
const parseCookie = (cookie) => {
    const toughCookie = cookie_jar_1.CookieJar.parse(cookie);
    if (!toughCookie)
        return;
    // fixes tough-cookie defaulting undefined/invalid SameSite to 'none'
    // https://github.com/salesforce/tough-cookie/issues/191
    const hasUnspecifiedSameSite = toughCookie.sameSite === 'none' && !sameSiteNoneRe.test(cookie);
    // not all browsers currently default to lax, but they're heading in that
    // direction since it's now the standard, so this is more future-proof
    if (hasUnspecifiedSameSite) {
        toughCookie.sameSite = 'lax';
    }
    return toughCookie;
};
exports.parseCookie = parseCookie;
const comparableCookieString = (toughCookie) => {
    return (0, lodash_1.default)(toughCookie)
        .pick('key', 'value', 'domain', 'path')
        .toPairs()
        .sortBy(([key]) => key)
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
};
const areCookiesEqual = (cookieA, cookieB) => {
    return comparableCookieString(cookieA) === comparableCookieString(cookieB);
};
const matchesPreviousCookie = (previousCookies, cookie) => {
    return !!previousCookies.find((previousCookie) => {
        return areCookiesEqual(previousCookie, cookie);
    });
};
const toughCookieToAutomationCookie = (toughCookie, defaultDomain) => {
    const expiry = toughCookie.expiryTime();
    return {
        domain: toughCookie.domain || defaultDomain,
        expiry: isFinite(expiry) ? expiry / 1000 : null,
        httpOnly: toughCookie.httpOnly,
        maxAge: toughCookie.maxAge,
        name: toughCookie.key,
        path: toughCookie.path,
        sameSite: toughCookie.sameSite === 'none' ? 'no_restriction' : toughCookie.sameSite,
        secure: toughCookie.secure,
        value: toughCookie.value,
    };
};
/**
 * Utility for dealing with cross-origin cookies
 * - Tracks which cookies were added to our server-side cookie jar during
 *   a request, so they can be added to the browser via automation
 * - Provides utility cookie-handling methods that rely on aspects of the
 *   request (url, previous request url, etc)
 */
class CookiesHelper {
    constructor({ cookieJar, currentAUTUrl, request, debug }) {
        this.previousCookies = [];
        this.cookieJar = cookieJar;
        this.currentAUTUrl = currentAUTUrl;
        this.request = request;
        this.debug = debug;
        this.sameSiteContext = (0, exports.getSameSiteContext)(currentAUTUrl, request.url, request.isAUTFrame);
        const parsedRequestUrl = new url_1.URL(request.url);
        this.defaultDomain = parsedRequestUrl.hostname;
    }
    capturePreviousCookies() {
        // this plays a part in adding cross-origin cookies to the browser via
        // automation. if the request doesn't need cross-origin handling, this
        // is a noop
        if (!this.request.needsCrossOriginHandling)
            return;
        this.previousCookies = this.cookieJar.getAllCookies();
    }
    getAddedCookies() {
        // this plays a part in adding cross-origin cookies to the browser via
        // automation. if the request doesn't need cross-origin handling, this
        // is a noop
        if (!this.request.needsCrossOriginHandling)
            return [];
        const afterCookies = this.cookieJar.getAllCookies();
        return afterCookies.reduce((memo, afterCookie) => {
            if (matchesPreviousCookie(this.previousCookies, afterCookie))
                return memo;
            return memo.concat(toughCookieToAutomationCookie(afterCookie, this.defaultDomain));
        }, []);
    }
    setCookie(cookie) {
        const toughCookie = (0, exports.parseCookie)(cookie);
        // don't set the cookie in our own cookie jar if the parsed cookie is
        // undefined (meaning it's invalid) or if the browser would not set it
        // because Secure is required for SameSite=None. not all browsers currently
        // currently enforce this, but they're heading in that direction since
        // it's now the standard, so this is more future-proof
        if (!toughCookie || (toughCookie.sameSite === 'none' && !toughCookie.secure)) {
            return;
        }
        try {
            this.cookieJar.setCookie(toughCookie, this.request.url, this.sameSiteContext);
        }
        catch (err) {
            this.debug('adding cookie to jar failed: %s', err.message);
        }
    }
}
exports.CookiesHelper = CookiesHelper;
