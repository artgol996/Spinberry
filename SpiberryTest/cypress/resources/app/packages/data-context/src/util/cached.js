"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cached = void 0;
/**
 * A cached decorator means the value is lazily evaluated once and
 * the result is cached on the class instance.
 */
const cached = (target, key, descriptor) => {
    if (!descriptor) {
        descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    const originalMethod = descriptor.get;
    const isStatic = Object.getPrototypeOf(target) === Function.prototype;
    if (isStatic) {
        throw new Error(`Don't use @cached decorator on static properties`);
    }
    if (!originalMethod) {
        throw new Error('@cached can only decorate getters!');
    }
    else if (!descriptor.configurable) {
        throw new Error('@cached target must be configurable');
    }
    else {
        descriptor.get = function () {
            // eslint-disable-next-line
            const value = originalMethod.apply(this, arguments);
            const newDescriptor = {
                configurable: false,
                enumerable: false,
                value,
            };
            Object.defineProperty(this, key, newDescriptor);
            return value;
        };
    }
};
exports.cached = cached;
