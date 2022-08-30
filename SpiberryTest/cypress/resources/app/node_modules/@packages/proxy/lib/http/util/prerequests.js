"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreRequests = void 0;
const tslib_1 = require("tslib");
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const debug = (0, debug_1.default)('cypress:proxy:http:util:prerequests');
const debugVerbose = (0, debug_1.default)('cypress-verbose:proxy:http:util:prerequests');
const metrics = {
    browserPreRequestsReceived: 0,
    proxyRequestsReceived: 0,
    immediatelyMatchedRequests: 0,
    unmatchedRequests: 0,
    unmatchedPreRequests: 0,
};
process.once('exit', () => {
    debug('metrics: %o', metrics);
});
// This class' purpose is to match up incoming "requests" (requests from the browser received by the http proxy)
// with "pre-requests" (events received by our browser extension indicating that the browser is about to make a request).
// Because these come from different sources, they can be out of sync, arriving in either order.
// Basically, when requests come in, we want to provide additional data read from the pre-request. but if no pre-request
// ever comes in, we don't want to block proxied requests indefinitely.
class PreRequests {
    constructor(requestTimeout = 500) {
        this.pendingPreRequests = {};
        this.pendingRequests = {};
        this.prerequestTimestamps = {};
        // If a request comes in and we don't have a matching pre-request after this timeout,
        // we invoke the request callback to tell the server to proceed (we don't want to block
        // user requests indefinitely).
        this.requestTimeout = requestTimeout;
        // Discarding prerequests on the other hand is not urgent, so we do it on a regular interval
        // rather than with a separate timer for each one.
        // 2 times the requestTimeout is arbitrary, chosen to give plenty of time and
        // make sure we don't discard any pre-requests prematurely but that we don't leak memory over time
        // if a large number of pre-requests don't match up
        // fixes: https://github.com/cypress-io/cypress/issues/17853
        this.sweepInterval = setInterval(() => {
            const now = Date.now();
            Object.entries(this.prerequestTimestamps).forEach(([key, timestamp]) => {
                if (timestamp + this.requestTimeout * 2 < now) {
                    debugVerbose('timed out unmatched pre-request %s: %o', key, this.pendingPreRequests[key]);
                    metrics.unmatchedPreRequests++;
                    delete this.pendingPreRequests[key];
                    delete this.prerequestTimestamps[key];
                }
            });
        }, this.requestTimeout * 2);
    }
    addPending(browserPreRequest) {
        metrics.browserPreRequestsReceived++;
        const key = `${browserPreRequest.method}-${browserPreRequest.url}`;
        if (this.pendingRequests[key]) {
            debugVerbose('Incoming pre-request %s matches pending request. %o', key, browserPreRequest);
            clearTimeout(this.pendingRequests[key].timeout);
            this.pendingRequests[key].callback(browserPreRequest);
            delete this.pendingRequests[key];
        }
        debugVerbose('Caching pre-request %s to be matched later. %o', key, browserPreRequest);
        this.pendingPreRequests[key] = browserPreRequest;
        this.prerequestTimestamps[key] = Date.now();
    }
    get(req, ctxDebug, callback) {
        metrics.proxyRequestsReceived++;
        const key = `${req.method}-${req.proxiedUrl}`;
        if (this.pendingPreRequests[key]) {
            metrics.immediatelyMatchedRequests++;
            ctxDebug('Incoming request %s matches known pre-request: %o', key, this.pendingPreRequests[key]);
            callback(this.pendingPreRequests[key]);
            delete this.pendingPreRequests[key];
            delete this.prerequestTimestamps[key];
            return;
        }
        const timeout = setTimeout(() => {
            callback();
            ctxDebug('Never received pre-request for request %s after waiting %sms. Continuing without one.', key, this.requestTimeout);
            metrics.unmatchedRequests++;
            delete this.pendingRequests[key];
        }, this.requestTimeout);
        this.pendingRequests[key] = {
            ctxDebug,
            callback,
            timeout,
        };
    }
}
exports.PreRequests = PreRequests;
