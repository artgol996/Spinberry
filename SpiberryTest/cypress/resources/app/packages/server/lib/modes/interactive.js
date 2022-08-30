"use strict";
const tslib_1 = require("tslib");
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const os_1 = (0, tslib_1.__importDefault)(require("os"));
const electron_1 = require("electron");
const cyIcons = (0, tslib_1.__importStar)(require("../../../icons"));
const savedState = (0, tslib_1.__importStar)(require("../saved_state"));
const menu_1 = (0, tslib_1.__importDefault)(require("../gui/menu"));
const Windows = (0, tslib_1.__importStar)(require("../gui/windows"));
const makeGraphQLServer_1 = require("../../../graphql/src/makeGraphQLServer");
const data_context_1 = require("../../../data-context");
const events_1 = require("events");
const events_2 = (0, tslib_1.__importDefault)(require("../gui/events"));
const isDev = () => {
    return Boolean(process.env['CYPRESS_INTERNAL_ENV'] === 'development');
};
module.exports = {
    isMac() {
        return os_1.default.platform() === 'darwin';
    },
    getWindowArgs(state) {
        // Electron Window's arguments
        // These options are passed to Electron's BrowserWindow
        const minWidth = Math.round(/* 13" MacBook Air */ 1792 / 3); // Thirds
        const preferredWidth = 1200;
        const minHeight = 400;
        const preferredHeight = 800;
        const chooseDimensions = ({ preferred, previous, minimum }) => {
            // If the user doesn't have a previous size that's valid or big
            // enough, use the preferred size instead.
            if (!previous || previous < minimum) {
                return preferred;
            }
            return previous;
        };
        const common = {
            // The backgroundColor should match the value we will show in the
            // launchpad frontend.
            // When we use a dist'd launchpad (production), this color won't be
            // as visible. However, in our local dev setup (launchpad running via
            // a dev server), the backgroundColor will flash if it is a
            // different color.
            backgroundColor: 'white',
            // Dimensions of the Electron window on initial launch.
            // Because we are migrating users that may have
            // a width smaller than the min dimensions, we will
            // force the dimensions to be within the minimum bounds.
            //
            // Doing this before launch (instead of relying on minW + minH)
            // prevents the window from jumping.
            width: chooseDimensions({
                preferred: preferredWidth,
                minimum: minWidth,
                previous: state.appWidth,
            }),
            height: chooseDimensions({
                preferred: preferredHeight,
                minimum: minHeight,
                previous: state.appHeight,
            }),
            minWidth,
            minHeight,
            x: state.appX,
            y: state.appY,
            type: 'INDEX',
            devTools: state.isAppDevToolsOpen,
            trackState: {
                width: 'appWidth',
                height: 'appHeight',
                x: 'appX',
                y: 'appY',
                devTools: 'isAppDevToolsOpen',
            },
            onBlur() {
                if (this.webContents.isDevToolsOpened()) {
                    return;
                }
                return Windows.hideAllUnlessAnotherWindowIsFocused();
            },
            onFocus() {
                // hide internal dev tools if in production and previously focused
                // window was the electron browser
                menu_1.default.set({ withInternalDevTools: isDev() });
                return Windows.showAll();
            },
            onClose() {
                electron_1.app.quit();
            },
        };
        return lodash_1.default.extend(common, this.platformArgs());
    },
    platformArgs() {
        const args = {
            darwin: {
                show: true,
                frame: true,
                transparent: false,
            },
            linux: {
                show: true,
                frame: true,
                transparent: false,
                icon: electron_1.nativeImage.createFromPath(cyIcons.getPathToIcon('icon_64x64.png')),
            },
        };
        return args[os_1.default.platform()];
    },
    /**
     * @param {import('@packages/types').LaunchArgs} options
     * @returns
     */
    ready(options = {}, port) {
        const { projectRoot } = options;
        const ctx = (0, data_context_1.getCtx)();
        // TODO: potentially just pass an event emitter
        // instance here instead of callback functions
        menu_1.default.set({
            withInternalDevTools: isDev(),
            onLogOutClicked() {
                return data_context_1.globalPubSub.emit('menu:item:clicked', 'log:out');
            },
            getGraphQLPort: () => {
                return ctx === null || ctx === void 0 ? void 0 : ctx.gqlServerPort;
            },
        });
        return savedState.create(projectRoot, false).then((state) => state.get())
            .then((state) => {
            return Windows.open(projectRoot, port, this.getWindowArgs(state))
                .then((win) => {
                ctx === null || ctx === void 0 ? void 0 : ctx.actions.electron.setBrowserWindow(win);
                events_2.default.start({
                    ...options,
                    onFocusTests() {
                        // @ts-ignore
                        return electron_1.app.focus({ steal: true }) || win.focus();
                    },
                    os: os_1.default.platform(),
                }, new events_1.EventEmitter());
                return win;
            });
        });
    },
    async run(options, ctx) {
        const [, port] = await Promise.all([
            electron_1.app.whenReady(),
            (0, makeGraphQLServer_1.makeGraphQLServer)(),
        ]);
        return this.ready(options, port);
    },
};
