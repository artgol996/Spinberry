"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNeedToRestartOnChange = exports.validateNoReadOnlyConfig = exports.validateNoBreakingTestingTypeConfig = exports.validateNoBreakingConfigLaunchpad = exports.validateNoBreakingConfig = exports.validateNoBreakingConfigRoot = exports.validate = exports.matchesConfigKey = exports.getPublicConfigKeys = exports.getDefaultValues = exports.getBreakingRootKeys = exports.getBreakingKeys = exports.allowed = exports.resetIssuedWarnings = exports.breakingOptions = exports.options = exports.validation = exports.defaultSpecPattern = void 0;
const tslib_1 = require("tslib");
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const options_1 = require("./options");
Object.defineProperty(exports, "defaultSpecPattern", { enumerable: true, get: function () { return options_1.defaultSpecPattern; } });
Object.defineProperty(exports, "options", { enumerable: true, get: function () { return options_1.options; } });
Object.defineProperty(exports, "breakingOptions", { enumerable: true, get: function () { return options_1.breakingOptions; } });
// this export has to be done in 2 lines because of a bug in babel typescript
const validation = (0, tslib_1.__importStar)(require("./validation"));
exports.validation = validation;
const debug = (0, debug_1.default)('cypress:config:browser');
const dashesOrUnderscoresRe = /^(_-)+/;
// takes an array and creates an index object of [keyKey]: [valueKey]
function createIndex(arr, keyKey, valueKey) {
    return lodash_1.default.reduce(arr, (memo, item) => {
        if (item[valueKey] !== undefined) {
            memo[item[keyKey]] = item[valueKey];
        }
        return memo;
    }, {});
}
const breakingKeys = lodash_1.default.map(options_1.breakingOptions, 'name');
const defaultValues = createIndex(options_1.options, 'name', 'defaultValue');
const publicConfigKeys = (0, lodash_1.default)([...options_1.options, ...options_1.additionalOptionsToResolveConfig]).reject({ isInternal: true }).map('name').value();
const validationRules = createIndex(options_1.options, 'name', 'validation');
const testConfigOverrideOptions = createIndex(options_1.options, 'name', 'canUpdateDuringTestTime');
const restartOnChangeOptionsKeys = lodash_1.default.filter(options_1.options, 'requireRestartOnChange');
const issuedWarnings = new Set();
function resetIssuedWarnings() {
    issuedWarnings.clear();
}
exports.resetIssuedWarnings = resetIssuedWarnings;
const validateNoBreakingOptions = (breakingCfgOptions, cfg, onWarning, onErr, testingType) => {
    breakingCfgOptions.forEach(({ name, errorKey, newName, isWarning, value }) => {
        if (lodash_1.default.has(cfg, name)) {
            if (value && cfg[name] !== value) {
                // Bail if a value is specified but the config does not have that value.
                return;
            }
            if (isWarning) {
                if (issuedWarnings.has(errorKey)) {
                    return;
                }
                // avoid re-issuing the same warning more than once
                issuedWarnings.add(errorKey);
                return onWarning(errorKey, {
                    name,
                    newName,
                    value,
                    configFile: cfg.configFile,
                    testingType,
                });
            }
            return onErr(errorKey, {
                name,
                newName,
                value,
                configFile: cfg.configFile,
                testingType,
            });
        }
    });
};
const allowed = (obj = {}) => {
    const propertyNames = publicConfigKeys.concat(breakingKeys);
    return lodash_1.default.pick(obj, propertyNames);
};
exports.allowed = allowed;
const getBreakingKeys = () => {
    return breakingKeys;
};
exports.getBreakingKeys = getBreakingKeys;
const getBreakingRootKeys = () => {
    return options_1.breakingRootOptions;
};
exports.getBreakingRootKeys = getBreakingRootKeys;
const getDefaultValues = (runtimeOptions = {}) => {
    // Default values can be functions, in which case they are evaluated
    // at runtime - for example, slowTestThreshold where the default value
    // varies between e2e and component testing.
    const defaultsForRuntime = lodash_1.default.mapValues(defaultValues, (value) => (typeof value === 'function' ? value(runtimeOptions) : value));
    // As we normalize the config based on the selected testing type, we need
    // to do the same with the default values to resolve those correctly
    return { ...defaultsForRuntime, ...defaultsForRuntime[runtimeOptions.testingType] };
};
exports.getDefaultValues = getDefaultValues;
const getPublicConfigKeys = () => {
    return publicConfigKeys;
};
exports.getPublicConfigKeys = getPublicConfigKeys;
const matchesConfigKey = (key) => {
    if (lodash_1.default.has(defaultValues, key)) {
        return key;
    }
    key = key.toLowerCase().replace(dashesOrUnderscoresRe, '');
    key = lodash_1.default.camelCase(key);
    if (lodash_1.default.has(defaultValues, key)) {
        return key;
    }
    return;
};
exports.matchesConfigKey = matchesConfigKey;
const validate = (cfg, onErr) => {
    debug('validating configuration');
    return lodash_1.default.each(cfg, (value, key) => {
        const validationFn = validationRules[key];
        // key has a validation rule & value different from the default
        if (validationFn && value !== defaultValues[key]) {
            const result = validationFn(key, value);
            if (result !== true) {
                return onErr(result);
            }
        }
    });
};
exports.validate = validate;
const validateNoBreakingConfigRoot = (cfg, onWarning, onErr, testingType) => {
    return validateNoBreakingOptions(options_1.breakingRootOptions, cfg, onWarning, onErr, testingType);
};
exports.validateNoBreakingConfigRoot = validateNoBreakingConfigRoot;
const validateNoBreakingConfig = (cfg, onWarning, onErr, testingType) => {
    return validateNoBreakingOptions(options_1.breakingOptions, cfg, onWarning, onErr, testingType);
};
exports.validateNoBreakingConfig = validateNoBreakingConfig;
const validateNoBreakingConfigLaunchpad = (cfg, onWarning, onErr) => {
    return validateNoBreakingOptions(options_1.breakingOptions.filter((option) => option.showInLaunchpad), cfg, onWarning, onErr);
};
exports.validateNoBreakingConfigLaunchpad = validateNoBreakingConfigLaunchpad;
const validateNoBreakingTestingTypeConfig = (cfg, testingType, onWarning, onErr) => {
    const options = options_1.testingTypeBreakingOptions[testingType];
    return validateNoBreakingOptions(options, cfg, onWarning, onErr, testingType);
};
exports.validateNoBreakingTestingTypeConfig = validateNoBreakingTestingTypeConfig;
const validateNoReadOnlyConfig = (config, onErr) => {
    let errProperty;
    Object.keys(config).some((option) => {
        return errProperty = testConfigOverrideOptions[option] === false ? option : undefined;
    });
    if (errProperty) {
        return onErr(errProperty);
    }
};
exports.validateNoReadOnlyConfig = validateNoReadOnlyConfig;
const validateNeedToRestartOnChange = (cachedConfig, updatedConfig) => {
    const restartOnChange = {
        browser: false,
        server: false,
    };
    if (!cachedConfig || !updatedConfig) {
        return restartOnChange;
    }
    const configDiff = lodash_1.default.reduce(cachedConfig, (result, value, key) => lodash_1.default.isEqual(value, updatedConfig[key]) ? result : result.concat(key), []);
    restartOnChangeOptionsKeys.forEach((o) => {
        if (o.requireRestartOnChange && configDiff.includes(o.name)) {
            restartOnChange[o.requireRestartOnChange] = true;
        }
    });
    // devServer property is not part of the options, but we should trigger a server
    // restart if we identify any change
    if (!lodash_1.default.isEqual(cachedConfig.devServer, updatedConfig.devServer)) {
        restartOnChange.server = true;
    }
    return restartOnChange;
};
exports.validateNeedToRestartOnChange = validateNeedToRestartOnChange;
