"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOriginPolicy = exports.urlMatchesOriginProtectionSpace = exports.urlOriginsMatch = exports.urlMatchesOriginPolicyProps = exports.getDomainNameFromParsedHost = exports.getDomainNameFromUrl = exports.parseUrlIntoDomainTldPort = exports.parseDomain = exports.getSuperDomain = void 0;
const tslib_1 = require("tslib");
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const uri = (0, tslib_1.__importStar)(require("./uri"));
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const parse_domain_1 = (0, tslib_1.__importDefault)(require("@cypress/parse-domain"));
const debug = (0, debug_1.default)('cypress:network:cors');
// match IP addresses or anything following the last .
const customTldsRe = /(^[\d\.]+$|\.[^\.]+$)/;
function getSuperDomain(url) {
    const parsed = parseUrlIntoDomainTldPort(url);
    return lodash_1.default.compact([parsed.domain, parsed.tld]).join('.');
}
exports.getSuperDomain = getSuperDomain;
function parseDomain(domain, options = {}) {
    return (0, parse_domain_1.default)(domain, lodash_1.default.defaults(options, {
        privateTlds: true,
        customTlds: customTldsRe,
    }));
}
exports.parseDomain = parseDomain;
function parseUrlIntoDomainTldPort(str) {
    let { hostname, port, protocol } = uri.parse(str);
    if (!hostname) {
        hostname = '';
    }
    if (!port) {
        port = protocol === 'https:' ? '443' : '80';
    }
    let parsed = parseDomain(hostname);
    // if we couldn't get a parsed domain
    if (!parsed) {
        // then just fall back to a dumb check
        // based on assumptions that the tld
        // is the last segment after the final
        // '.' and that the domain is the segment
        // before that
        const segments = hostname.split('.');
        parsed = {
            tld: segments[segments.length - 1] || '',
            domain: segments[segments.length - 2] || '',
        };
    }
    const obj = {};
    obj.port = port;
    obj.tld = parsed.tld;
    obj.domain = parsed.domain;
    debug('Parsed URL %o', obj);
    return obj;
}
exports.parseUrlIntoDomainTldPort = parseUrlIntoDomainTldPort;
function getDomainNameFromUrl(url) {
    const parsedHost = parseUrlIntoDomainTldPort(url);
    return getDomainNameFromParsedHost(parsedHost);
}
exports.getDomainNameFromUrl = getDomainNameFromUrl;
function getDomainNameFromParsedHost(parsedHost) {
    return lodash_1.default.compact([parsedHost.domain, parsedHost.tld]).join('.');
}
exports.getDomainNameFromParsedHost = getDomainNameFromParsedHost;
function urlMatchesOriginPolicyProps(urlStr, props) {
    // take a shortcut here in the case
    // where remoteHostAndPort is null
    if (!props) {
        return false;
    }
    const parsedUrl = parseUrlIntoDomainTldPort(urlStr);
    // does the parsedUrl match the parsedHost?
    return lodash_1.default.isEqual(parsedUrl, props);
}
exports.urlMatchesOriginPolicyProps = urlMatchesOriginPolicyProps;
function urlOriginsMatch(url1, url2) {
    if (!url1 || !url2)
        return false;
    const parsedUrl1 = parseUrlIntoDomainTldPort(url1);
    const parsedUrl2 = parseUrlIntoDomainTldPort(url2);
    return lodash_1.default.isEqual(parsedUrl1, parsedUrl2);
}
exports.urlOriginsMatch = urlOriginsMatch;
function urlMatchesOriginProtectionSpace(urlStr, origin) {
    const normalizedUrl = uri.addDefaultPort(urlStr).format();
    const normalizedOrigin = uri.addDefaultPort(origin).format();
    return lodash_1.default.startsWith(normalizedUrl, normalizedOrigin);
}
exports.urlMatchesOriginProtectionSpace = urlMatchesOriginProtectionSpace;
function getOriginPolicy(url) {
    // @ts-ignore
    const { port, protocol } = new URL(url);
    // origin policy is comprised of:
    // protocol + superdomain + port (subdomain is not factored in)
    return lodash_1.default.compact([`${protocol}//${getSuperDomain(url)}`, port]).join(':');
}
exports.getOriginPolicy = getOriginPolicy;
