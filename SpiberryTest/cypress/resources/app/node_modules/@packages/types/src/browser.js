"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BROWSER_STATUS = exports.browsers = exports.MIN_EDGE_VERSION = exports.MIN_FIREFOX_VERSION = exports.MIN_CHROME_VERSION = exports.BROWSER_FAMILY = void 0;
exports.BROWSER_FAMILY = ['chromium', 'firefox'];
// Chrome started exposing CDP 1.3 in 64
exports.MIN_CHROME_VERSION = 64;
// Firefox started exposing CDP in 86
exports.MIN_FIREFOX_VERSION = 86;
// Edge switched to Blink in 79
exports.MIN_EDGE_VERSION = 79;
exports.browsers = [
    {
        name: 'chrome',
        family: 'chromium',
        channel: 'stable',
        displayName: 'Chrome',
        versionRegex: /Google Chrome (\S+)/m,
        binary: ['google-chrome', 'chrome', 'google-chrome-stable'],
        minSupportedVersion: exports.MIN_CHROME_VERSION,
    },
    {
        name: 'chromium',
        family: 'chromium',
        // technically Chromium is always in development
        channel: 'stable',
        displayName: 'Chromium',
        versionRegex: /Chromium (\S+)/m,
        binary: ['chromium-browser', 'chromium'],
        minSupportedVersion: exports.MIN_CHROME_VERSION,
    },
    {
        name: 'chrome',
        family: 'chromium',
        channel: 'beta',
        displayName: 'Chrome Beta',
        versionRegex: /Google Chrome (\S+) beta/m,
        binary: 'google-chrome-beta',
        minSupportedVersion: exports.MIN_CHROME_VERSION,
    },
    {
        name: 'chrome',
        family: 'chromium',
        channel: 'canary',
        displayName: 'Canary',
        versionRegex: /Google Chrome Canary (\S+)/m,
        binary: 'google-chrome-canary',
        minSupportedVersion: exports.MIN_CHROME_VERSION,
    },
    {
        name: 'firefox',
        family: 'firefox',
        channel: 'stable',
        displayName: 'Firefox',
        // Mozilla Firefox 70.0.1
        versionRegex: /^Mozilla Firefox ([^\sab]+)$/m,
        binary: 'firefox',
        minSupportedVersion: exports.MIN_FIREFOX_VERSION,
    },
    {
        name: 'firefox',
        family: 'firefox',
        channel: 'dev',
        displayName: 'Firefox Developer Edition',
        // Mozilla Firefox 73.0b12
        versionRegex: /^Mozilla Firefox (\S+b\S*)$/m,
        // ubuntu PPAs install it as firefox
        binary: ['firefox-developer-edition', 'firefox'],
        minSupportedVersion: exports.MIN_FIREFOX_VERSION,
    },
    {
        name: 'firefox',
        family: 'firefox',
        channel: 'nightly',
        displayName: 'Firefox Nightly',
        // Mozilla Firefox 74.0a1
        versionRegex: /^Mozilla Firefox (\S+a\S*)$/m,
        // ubuntu PPAs install it as firefox-trunk
        binary: ['firefox-nightly', 'firefox-trunk'],
        minSupportedVersion: exports.MIN_FIREFOX_VERSION,
    },
    {
        name: 'edge',
        family: 'chromium',
        channel: 'stable',
        displayName: 'Edge',
        versionRegex: /Microsoft Edge (\S+)/m,
        binary: ['edge', 'microsoft-edge'],
        minSupportedVersion: exports.MIN_EDGE_VERSION,
    },
    {
        name: 'edge',
        family: 'chromium',
        channel: 'canary',
        displayName: 'Edge Canary',
        versionRegex: /Microsoft Edge Canary (\S+)/m,
        binary: 'edge-canary',
        minSupportedVersion: exports.MIN_EDGE_VERSION,
    },
    {
        name: 'edge',
        family: 'chromium',
        channel: 'beta',
        displayName: 'Edge Beta',
        versionRegex: /Microsoft Edge Beta (\S+)/m,
        binary: 'edge-beta',
        minSupportedVersion: exports.MIN_EDGE_VERSION,
    },
    {
        name: 'edge',
        family: 'chromium',
        channel: 'dev',
        displayName: 'Edge Dev',
        versionRegex: /Microsoft Edge Dev (\S+)/m,
        binary: ['edge-dev', 'microsoft-edge-dev'],
        minSupportedVersion: exports.MIN_EDGE_VERSION,
    },
];
exports.BROWSER_STATUS = ['closed', 'opening', 'open'];
