"use strict";
var _RemotePollingDataSource_instances, _RemotePollingDataSource_subscribedCount, _RemotePollingDataSource_specPolling, _RemotePollingDataSource_startPollingForSpecs, _RemotePollingDataSource_stopPolling, _RemotePollingDataSource_sendSpecPollingRequest;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemotePollingDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@urql/core");
const graphql_1 = require("graphql");
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const debug = (0, debug_1.default)('cypress:data-context:sources:RemotePollingDataSource');
const LATEST_RUN_UPDATE_OPERATION_DOC = (0, core_1.gql) `
  query RemotePollingDataSource_latestRunUpdateSpecData(
    $commitBranch: String!
    $projectSlug: String!
    # sinceDateTime: DateTime
  ) {
    cloudLatestRunUpdateSpecData(commitBranch: $commitBranch, projectSlug: $projectSlug) {
      mostRecentUpdate
      pollingInterval
    }
  }
`;
const LATEST_RUN_UPDATE_OPERATION = (0, graphql_1.print)(LATEST_RUN_UPDATE_OPERATION_DOC);
class RemotePollingDataSource {
    constructor(ctx) {
        this.ctx = ctx;
        _RemotePollingDataSource_instances.add(this);
        _RemotePollingDataSource_subscribedCount.set(this, 0);
        _RemotePollingDataSource_specPolling.set(this, void 0);
    }
    subscribeAndPoll(branch, projectSlug) {
        var _a;
        if (!branch || !projectSlug) {
            return this.ctx.emitter.subscribeTo('noopChange', { sendInitial: false });
        }
        debug('Subscribing, subscribed count %d', (0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_subscribedCount, "f"));
        if ((0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_subscribedCount, "f") === 0) {
            debug('Starting polling');
            (0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_instances, "m", _RemotePollingDataSource_startPollingForSpecs).call(this, branch, projectSlug);
        }
        (0, tslib_1.__classPrivateFieldSet)(this, _RemotePollingDataSource_subscribedCount, (_a = (0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_subscribedCount, "f"), _a++, _a), "f");
        return this.ctx.emitter.subscribeTo('specPollingUpdate', {
            sendInitial: false,
            onUnsubscribe: () => {
                var _a;
                debug('Unsubscribing, subscribed count %d', (0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_subscribedCount, "f"));
                (0, tslib_1.__classPrivateFieldSet)(this, _RemotePollingDataSource_subscribedCount, (_a = (0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_subscribedCount, "f"), _a--, _a), "f");
                if ((0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_subscribedCount, "f") === 0) {
                    (0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_instances, "m", _RemotePollingDataSource_stopPolling).call(this);
                }
            },
        });
    }
}
exports.RemotePollingDataSource = RemotePollingDataSource;
_RemotePollingDataSource_subscribedCount = new WeakMap(), _RemotePollingDataSource_specPolling = new WeakMap(), _RemotePollingDataSource_instances = new WeakSet(), _RemotePollingDataSource_startPollingForSpecs = function _RemotePollingDataSource_startPollingForSpecs(branch, projectSlug) {
    // when the page refreshes, a previously started subscription may be running
    // this will reset it and start a new one
    if ((0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_specPolling, "f")) {
        clearTimeout((0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_specPolling, "f"));
    }
    debug(`Sending initial request for startPollingForSpecs`);
    // Send the spec polling request
    (0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_instances, "m", _RemotePollingDataSource_sendSpecPollingRequest).call(this, branch, projectSlug).catch((e) => {
        debug(`Error executing specPollingRequest %o`, e);
    });
}, _RemotePollingDataSource_stopPolling = function _RemotePollingDataSource_stopPolling() {
    if ((0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_specPolling, "f")) {
        clearTimeout((0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_specPolling, "f"));
        (0, tslib_1.__classPrivateFieldSet)(this, _RemotePollingDataSource_specPolling, undefined, "f");
    }
}, _RemotePollingDataSource_sendSpecPollingRequest = async function _RemotePollingDataSource_sendSpecPollingRequest(commitBranch, projectSlug) {
    var _a, _b, _c, _d, _e, _f;
    const result = await this.ctx.cloud.executeRemoteGraphQL({
        fieldName: 'cloudLatestRunUpdateSpecData',
        operationDoc: LATEST_RUN_UPDATE_OPERATION_DOC,
        operation: LATEST_RUN_UPDATE_OPERATION,
        operationVariables: {
            commitBranch,
            projectSlug,
        },
        requestPolicy: 'network-only', // we never want to hit local cache for this request
    });
    debug(`%s Response for startPollingForSpecs %o`, new Date().toISOString(), result);
    const secondsToPollNext = ((_c = (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.cloudLatestRunUpdateSpecData) === null || _b === void 0 ? void 0 : _b.pollingInterval) !== null && _c !== void 0 ? _c : 30);
    const mostRecentUpdate = (_f = (_e = (_d = result.data) === null || _d === void 0 ? void 0 : _d.cloudLatestRunUpdateSpecData) === null || _e === void 0 ? void 0 : _e.mostRecentUpdate) !== null && _f !== void 0 ? _f : null;
    this.ctx.emitter.specPollingUpdate(mostRecentUpdate);
    (0, tslib_1.__classPrivateFieldSet)(this, _RemotePollingDataSource_specPolling, setTimeout(async () => {
        await (0, tslib_1.__classPrivateFieldGet)(this, _RemotePollingDataSource_instances, "m", _RemotePollingDataSource_sendSpecPollingRequest).call(this, commitBranch, projectSlug);
    }, secondsToPollNext * 1000), "f");
    return result;
};
