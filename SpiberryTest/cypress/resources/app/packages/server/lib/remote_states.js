"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteStates = void 0;
const tslib_1 = require("tslib");
const network_1 = require("../../network");
const origin_1 = (0, tslib_1.__importDefault)(require("./util/origin"));
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const DEFAULT_DOMAIN_NAME = 'localhost';
const fullyQualifiedRe = /^https?:\/\//;
const debug = (0, debug_1.default)('cypress:server:remote-states');
/**
 * Class to maintain and manage the remote states of the server.
 *
 * Example file remote state:
 * {
 *   auth: {
 *     username: 'name'
 *     password: 'pass'
 *   }
 *   origin: "http://localhost:2020"
 *   fileServer: "http://localhost:2021"
 *   strategy: "file"
 *   domainName: "localhost"
 *   props: null
 * }
 *
 * Example http remote state:
 * {
 *   auth: {
 *     username: 'name'
 *     password: 'pass'
 *   }
 *   origin: "https://foo.google.com"
 *   fileServer: null
 *   strategy: "http"
 *   domainName: "google.com"
 *   props: {
 *     port: 443
 *     tld: "com"
 *     domain: "google"
 *   }
 * }
 */
class RemoteStates {
    constructor(configure) {
        this.remoteStates = new Map();
        this.originStack = [];
        this.configure = configure;
    }
    get(url) {
        const state = this.remoteStates.get(network_1.cors.getOriginPolicy(url));
        debug('getting remote state: %o for: %s', state, url);
        return lodash_1.default.cloneDeep(state);
    }
    getPrimary() {
        const state = Array.from(this.remoteStates.entries())[0][1];
        debug('getting primary remote state: %o', state);
        return state;
    }
    isInOriginStack(url) {
        return this.originStack.includes(network_1.cors.getOriginPolicy(url));
    }
    isSecondaryOrigin(url) {
        // start at 1 to exclude the primary origin
        return this.originStack.indexOf(network_1.cors.getOriginPolicy(url), 1) !== -1;
    }
    isPrimaryOrigin(url) {
        return this.originStack[0] === network_1.cors.getOriginPolicy(url);
    }
    reset() {
        debug('resetting remote state');
        const stateArray = Array.from(this.remoteStates.entries());
        // reset the remoteStates and originStack to the primary
        this.remoteStates = new Map(stateArray[0] ? [stateArray[0]] : []);
        this.originStack = stateArray[0] ? [stateArray[0][0]] : [];
    }
    current() {
        return this.get(this.originStack[this.originStack.length - 1]);
    }
    set(urlOrState, options = {}) {
        let state;
        if (lodash_1.default.isString(urlOrState)) {
            const remoteOrigin = (0, origin_1.default)(urlOrState);
            const remoteProps = network_1.cors.parseUrlIntoDomainTldPort(remoteOrigin);
            if ((urlOrState === '<root>') || !fullyQualifiedRe.test(urlOrState)) {
                state = {
                    auth: options.auth,
                    origin: `http://${DEFAULT_DOMAIN_NAME}:${this.config.serverPort}`,
                    strategy: 'file',
                    fileServer: lodash_1.default.compact([`http://${DEFAULT_DOMAIN_NAME}`, this.config.fileServerPort]).join(':'),
                    domainName: DEFAULT_DOMAIN_NAME,
                    props: null,
                };
            }
            else {
                state = {
                    auth: options.auth,
                    origin: remoteOrigin,
                    strategy: 'http',
                    fileServer: null,
                    domainName: network_1.cors.getDomainNameFromParsedHost(remoteProps),
                    props: remoteProps,
                };
            }
        }
        else {
            state = urlOrState;
        }
        const remoteOriginPolicy = network_1.cors.getOriginPolicy(state.origin);
        if (options.isCrossOrigin) {
            this.remoteStates.set(remoteOriginPolicy, state);
        }
        else {
            // convert map to array
            const stateArray = Array.from(this.remoteStates.entries());
            // set the primary remote state and convert back to map
            stateArray[0] = [remoteOriginPolicy, state];
            this.remoteStates = new Map(stateArray);
            // automatically update the primary origin stack
            this.originStack[0] = remoteOriginPolicy;
        }
        debug('setting remote state %o for %s', state, remoteOriginPolicy);
        return this.get(remoteOriginPolicy);
    }
    addEventListeners(eventEmitter) {
        eventEmitter.on('cross:origin:bridge:ready', ({ originPolicy }) => {
            debug(`received cross:origin:bridge:ready, add origin ${originPolicy} to remote states`);
            const existingOrigin = this.remoteStates.get(originPolicy);
            // since this is just the cy.origin starting, we don't want to override
            // the existing origin if it already exists
            if (!existingOrigin) {
                this.set(originPolicy, { isCrossOrigin: true });
            }
            this.addOrigin(originPolicy);
        });
        eventEmitter.on('cross:origin:finished', (originPolicy) => {
            debug(`received cross:origin:finished, remove ${originPolicy} from origin stack`);
            this.removeCurrentOrigin(originPolicy);
        });
    }
    get config() {
        if (!this._config) {
            this._config = this.configure();
        }
        return this._config;
    }
    addOrigin(originPolicy) {
        this.originStack.push(originPolicy);
        debug('added origin: ', originPolicy);
    }
    removeCurrentOrigin(originPolicy) {
        const currentOriginPolicy = this.originStack[this.originStack.length - 1];
        if (originPolicy !== currentOriginPolicy) {
            throw new Error(`Tried to remove origin ${originPolicy} but ${currentOriginPolicy} was found. This should never happen and likely is a bug. Please open an issue.`);
        }
        this.originStack.pop();
        debug('removed current origin: ', originPolicy);
    }
}
exports.RemoteStates = RemoteStates;
