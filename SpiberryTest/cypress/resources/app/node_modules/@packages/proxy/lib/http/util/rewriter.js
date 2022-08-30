"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.security = exports.html = void 0;
const tslib_1 = require("tslib");
const inject = (0, tslib_1.__importStar)(require("./inject"));
const astRewriter = (0, tslib_1.__importStar)(require("./ast-rewriter"));
const regexRewriter = (0, tslib_1.__importStar)(require("./regex-rewriter"));
const doctypeRe = /(<\!doctype.*?>)/i;
const headRe = /(<head(?!er).*?>)/i;
const bodyRe = /(<body.*?>)/i;
const htmlRe = /(<html.*?>)/i;
function getRewriter(useAstSourceRewriting) {
    return useAstSourceRewriting ? astRewriter : regexRewriter;
}
function getHtmlToInject({ domainName, wantsInjection }) {
    switch (wantsInjection) {
        case 'full':
            return inject.full(domainName);
        case 'fullCrossOrigin':
            return inject.fullCrossOrigin(domainName);
        case 'partial':
            return inject.partial(domainName);
        default:
            return;
    }
}
async function html(html, opts) {
    const replace = (re, str) => {
        return html.replace(re, str);
    };
    const htmlToInject = await Promise.resolve(getHtmlToInject(opts));
    // strip clickjacking and framebusting
    // from the HTML if we've been told to
    if (opts.wantsSecurityRemoved) {
        html = await Promise.resolve(getRewriter(opts.useAstSourceRewriting).strip(html, opts));
    }
    if (!htmlToInject) {
        return html;
    }
    // TODO: move this into regex-rewriting and have ast-rewriting handle this in its own way
    switch (false) {
        case !headRe.test(html):
            return replace(headRe, `$1 ${htmlToInject}`);
        case !bodyRe.test(html):
            return replace(bodyRe, `<head> ${htmlToInject} </head> $1`);
        case !htmlRe.test(html):
            return replace(htmlRe, `$1 <head> ${htmlToInject} </head>`);
        case !doctypeRe.test(html):
            // if only <!DOCTYPE> content, inject <head> after doctype
            return `${html}<head> ${htmlToInject} </head>`;
        default:
            return `<head> ${htmlToInject} </head>${html}`;
    }
}
exports.html = html;
function security(opts) {
    return getRewriter(opts.useAstSourceRewriting).stripStream(opts);
}
exports.security = security;
