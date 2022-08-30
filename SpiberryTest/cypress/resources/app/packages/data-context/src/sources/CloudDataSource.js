"use strict";
var _CloudDataSource_instances, _CloudDataSource_cloudUrqlClient, _CloudDataSource_lastCache, _CloudDataSource_user_get, _CloudDataSource_additionalHeaders_get, _CloudDataSource_pendingPromises, _CloudDataSource_hashRemoteRequest, _CloudDataSource_sha1, _CloudDataSource_formatWithErrors, _CloudDataSource_maybeQueueDeferredExecute;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudDataSource = void 0;
const tslib_1 = require("tslib");
// @ts-ignore
const root_1 = (0, tslib_1.__importDefault)(require("../../../root"));
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const exchange_graphcache_1 = require("@urql/exchange-graphcache");
const cross_fetch_1 = require("cross-fetch");
const crypto_1 = (0, tslib_1.__importDefault)(require("crypto"));
const getenv_1 = (0, tslib_1.__importDefault)(require("getenv"));
const core_1 = require("@urql/core");
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const delegate_1 = require("@graphql-tools/delegate");
const urqlCacheKeys_1 = require("../util/urqlCacheKeys");
const urql_introspection_gen_1 = require("../gen/urql-introspection.gen");
const Path_1 = require("graphql/jsutils/Path");
const debug = (0, debug_1.default)('cypress:data-context:sources:CloudDataSource');
const cloudEnv = (0, getenv_1.default)('CYPRESS_INTERNAL_CLOUD_ENV', process.env.CYPRESS_INTERNAL_ENV || 'development');
const REMOTE_SCHEMA_URLS = {
    staging: 'https://dashboard-staging.cypress.io',
    development: 'http://localhost:3000',
    production: 'https://dashboard.cypress.io',
};
/**
 * The CloudDataSource manages the interaction with the remote GraphQL server
 * It maintains a normalized cache of all data we have seen from the cloud and
 * ensures the data is kept up-to-date as it changes
 */
class CloudDataSource {
    constructor(params) {
        this.params = params;
        _CloudDataSource_instances.add(this);
        _CloudDataSource_cloudUrqlClient.set(this, void 0);
        _CloudDataSource_lastCache.set(this, void 0);
        _CloudDataSource_pendingPromises.set(this, new Map());
        _CloudDataSource_formatWithErrors.set(this, async (data) => {
            var _a, _b, _c;
            // If we receive a 401 from the dashboard, we need to logout the user
            if (((_b = (_a = data.error) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.status) === 401) {
                await this.params.logout();
            }
            if (data.error && data.operation.kind === 'mutation') {
                await this.invalidate({ __typename: 'Query' });
            }
            return {
                ...data,
                errors: (_c = data.error) === null || _c === void 0 ? void 0 : _c.graphQLErrors,
            };
        });
        (0, tslib_1.__classPrivateFieldSet)(this, _CloudDataSource_cloudUrqlClient, this.reset(), "f");
    }
    reset() {
        return (0, tslib_1.__classPrivateFieldSet)(this, _CloudDataSource_cloudUrqlClient, (0, core_1.createClient)({
            url: `${REMOTE_SCHEMA_URLS[cloudEnv]}/test-runner-graphql`,
            exchanges: [
                core_1.dedupExchange,
                (0, exchange_graphcache_1.cacheExchange)({
                    // @ts-ignore
                    schema: urql_introspection_gen_1.urqlSchema,
                    ...urqlCacheKeys_1.urqlCacheKeys,
                    updates: {
                        Mutation: {
                            _cloudCacheInvalidate: (parent, { args }, cache, info) => {
                                cache.invalidate(...args);
                            },
                            _showUrqlCache: (parent, { args }, cache, info) => {
                                (0, tslib_1.__classPrivateFieldSet)(this, _CloudDataSource_lastCache, JSON.stringify(cache, function replacer(key, value) {
                                    if (value instanceof Map) {
                                        const reducer = (obj, mapKey) => {
                                            obj[mapKey] = value.get(mapKey);
                                            return obj;
                                        };
                                        return [...value.keys()].sort().reduce(reducer, {});
                                    }
                                    if (value instanceof Set) {
                                        return [...value].sort();
                                    }
                                    return value;
                                }), "f");
                            },
                        },
                    },
                }),
                core_1.fetchExchange,
            ],
            // Set this way so we can intercept the fetch on the context for testing
            fetch: async (uri, init) => {
                const internalResponse = lodash_1.default.get(init, 'headers.INTERNAL_REQUEST');
                if (internalResponse) {
                    return Promise.resolve(new cross_fetch_1.Response(internalResponse, { status: 200 }));
                }
                return this.params.fetch(uri, {
                    ...init,
                    headers: {
                        ...init === null || init === void 0 ? void 0 : init.headers,
                        ...(0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_instances, "a", _CloudDataSource_additionalHeaders_get),
                    },
                });
            },
        }), "f");
    }
    delegateCloudField(params) {
        return (0, delegate_1.delegateToSchema)({
            operation: 'query',
            schema: params.ctx.schemaCloud,
            fieldName: params.field,
            fieldNodes: params.info.fieldNodes,
            info: params.info,
            args: params.args,
            context: params.ctx,
            operationName: this.makeOperationName(params.info),
        });
    }
    makeOperationName(info) {
        var _a, _b;
        return `${(_b = (_a = info.operation.name) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 'Anonymous'}_${(0, Path_1.pathToArray)(info.path).map((p) => typeof p === 'number' ? 'idx' : p).join('_')}`;
    }
    isResolving(config) {
        const stableKey = (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_instances, "m", _CloudDataSource_hashRemoteRequest).call(this, config);
        return Boolean((0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_pendingPromises, "f").get(stableKey));
    }
    hasResolved(config) {
        const eagerResult = (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_cloudUrqlClient, "f").readQuery(config.operationDoc, config.operationVariables);
        return Boolean(eagerResult);
    }
    readFromCache(config) {
        return (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_cloudUrqlClient, "f").readQuery(config.operationDoc, config.operationVariables);
    }
    /**
     * Executes the query against a remote schema. Keeps an urql client for the normalized caching,
     * so we can respond quickly on first-load if we have data. Since this is ultimately being used
     * as a remote request mechanism for a stitched schema, we reject the promise if we see any errors.
     */
    executeRemoteGraphQL(config) {
        // We do not want unauthenticated requests to hit the remote schema
        if (!(0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_instances, "a", _CloudDataSource_user_get)) {
            return { data: null };
        }
        if (config.operationType === 'mutation') {
            return (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_cloudUrqlClient, "f").mutation(config.operationDoc, config.operationVariables).toPromise().then((0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_formatWithErrors, "f"));
        }
        // First, we check the cache to see if we have the data to fulfill this query
        const eagerResult = this.readFromCache(config);
        // If we do have a synchronous result, return it, and determine if we want to check for
        // updates to this field
        if (eagerResult && config.requestPolicy !== 'network-only') {
            debug(`eagerResult found stale? %s, %o`, eagerResult.stale, eagerResult.data);
            // If we have some of the fields, but not the full thing, return what we do have and follow up
            // with an update we send to the client.
            if ((eagerResult === null || eagerResult === void 0 ? void 0 : eagerResult.stale) || config.requestPolicy === 'cache-and-network') {
                return { ...eagerResult, executing: (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_instances, "m", _CloudDataSource_maybeQueueDeferredExecute).call(this, config, eagerResult) };
            }
            return eagerResult;
        }
        // If we don't have a result here, queue this for execution if we haven't already,
        // and resolve with null
        return (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_instances, "m", _CloudDataSource_maybeQueueDeferredExecute).call(this, config);
    }
    // Invalidate individual fields in the GraphQL by hitting a "fake"
    // mutation and calling cache.invalidate on the internal cache
    // https://formidable.com/open-source/urql/docs/api/graphcache/#invalidate
    invalidate(...args) {
        return (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_cloudUrqlClient, "f").mutation(`
      mutation Internal_cloudCacheInvalidate($args: JSON) { 
        _cloudCacheInvalidate(args: $args) 
      }
    `, { args }, {
            fetchOptions: {
                headers: {
                    // Not urgent, but a nice-to-have, replace this with an exchange to
                    // be more explicit about filtering out this request, rather than looking at headers
                    // in the in the "fetch" exchange
                    INTERNAL_REQUEST: JSON.stringify({ data: { _cloudCacheInvalidate: true } }),
                },
            },
        }).toPromise();
    }
    async getCache() {
        var _a;
        await (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_cloudUrqlClient, "f").mutation(`
      mutation Internal_showUrqlCache { 
        _showUrqlCache
      }
    `, {}, {
            fetchOptions: {
                headers: {
                    // Same note as above on the "invalidate", we could make this a bit clearer
                    INTERNAL_REQUEST: JSON.stringify({ data: { _cloudCacheInvalidate: true } }),
                },
            },
        }).toPromise();
        return JSON.parse((_a = (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_lastCache, "f")) !== null && _a !== void 0 ? _a : '');
    }
}
exports.CloudDataSource = CloudDataSource;
_CloudDataSource_cloudUrqlClient = new WeakMap(), _CloudDataSource_lastCache = new WeakMap(), _CloudDataSource_pendingPromises = new WeakMap(), _CloudDataSource_formatWithErrors = new WeakMap(), _CloudDataSource_instances = new WeakSet(), _CloudDataSource_user_get = function _CloudDataSource_user_get() {
    return this.params.getUser();
}, _CloudDataSource_additionalHeaders_get = function _CloudDataSource_additionalHeaders_get() {
    return {
        'Authorization': (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_instances, "a", _CloudDataSource_user_get) ? `bearer ${(0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_instances, "a", _CloudDataSource_user_get).authToken}` : '',
        'x-cypress-version': root_1.default.version,
    };
}, _CloudDataSource_hashRemoteRequest = function _CloudDataSource_hashRemoteRequest(config) {
    var _a;
    return `${(_a = config.operationHash) !== null && _a !== void 0 ? _a : (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_instances, "m", _CloudDataSource_sha1).call(this, config.operation)}-${(0, core_1.stringifyVariables)(config.operationVariables)}`;
}, _CloudDataSource_sha1 = function _CloudDataSource_sha1(str) {
    return crypto_1.default.createHash('sha1').update(str).digest('hex');
}, _CloudDataSource_maybeQueueDeferredExecute = function _CloudDataSource_maybeQueueDeferredExecute(config, initialResult) {
    const stableKey = (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_instances, "m", _CloudDataSource_hashRemoteRequest).call(this, config);
    let loading = (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_pendingPromises, "f").get(stableKey);
    if (loading) {
        return loading;
    }
    loading = (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_cloudUrqlClient, "f").query(config.operationDoc, config.operationVariables, { requestPolicy: 'network-only' }).toPromise().then((0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_formatWithErrors, "f"))
        .then(async (op) => {
        (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_pendingPromises, "f").delete(stableKey);
        // If we have an initial result, by this point we expect that the query should be fully resolved in the cache.
        // If it's not, it means that we need to clear the cache on the client/server, otherwise it's going to fall into
        // an infinite loop trying to resolve the stale data. This likely only happens in contrived test cases, but
        // it's good to handle regardless.
        if (initialResult) {
            const eagerResult = this.readFromCache(config);
            if (eagerResult === null || eagerResult === void 0 ? void 0 : eagerResult.stale) {
                await this.invalidate({ __typename: 'Query' });
                this.params.invalidateClientUrqlCache();
                return op;
            }
        }
        if (initialResult && !lodash_1.default.isEqual(op.data, initialResult.data)) {
            debug('Different Query Value %j, %j', op.data, initialResult.data);
            if (typeof config.onUpdatedResult === 'function') {
                config.onUpdatedResult(op.data);
            }
            return op;
        }
        return op;
    });
    (0, tslib_1.__classPrivateFieldGet)(this, _CloudDataSource_pendingPromises, "f").set(stableKey, loading);
    return loading;
};
