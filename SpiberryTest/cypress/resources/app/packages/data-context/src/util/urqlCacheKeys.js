"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urqlCacheKeys = void 0;
const extras_1 = require("@urql/exchange-graphcache/extras");
/**
 * These are located in data-context, because we use them in the
 * both the server-side and client-side urql, since we cache & hydrate
 * the page on load
 *
 * We want to to keep the key definitions in sync between the
 * server & client so we only define them once
 */
exports.urqlCacheKeys = {
    keys: {
        DevState: (data) => data.__typename,
        Wizard: (data) => data.__typename,
        Migration: (data) => data.__typename,
        CloudRunCommitInfo: () => null,
        GitInfo: () => null,
        MigrationFile: () => null,
        MigrationFilePart: () => null,
        CodeFrame: () => null,
        ProjectPreferences: (data) => data.__typename,
        VersionData: () => null,
        ScaffoldedFile: () => null,
        SpecDataAggregate: () => null,
        LocalSettings: (data) => data.__typename,
        LocalSettingsPreferences: () => null,
        AuthState: () => null,
        CloudProjectNotFound: (data) => null,
        CloudProjectSpecNotFound: (data) => null,
        CloudProjectUnauthorized: (data) => null,
        CloudLatestRunUpdateSpecData: (data) => null,
        GeneratedSpecError: () => null,
        GenerateSpecResponse: (data) => data.__typename,
    },
    resolvers: {
        CloudProject: {
            runs: (0, extras_1.relayPagination)({ mergeMode: 'outwards' }),
        },
    },
};
