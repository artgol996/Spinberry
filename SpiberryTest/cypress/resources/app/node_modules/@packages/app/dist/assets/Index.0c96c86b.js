import { d as defineComponent, u as useI18n, g as getUrlWithParams, r as resolveComponent, o as openBlock, c as createBlock, w as withCtx, a as createBaseVNode, b as createVNode, e as createTextVNode, t as toDisplayString, f as unref, h as _sfc_main$h, i as _sfc_main$i, j as gql, k as ref, l as onMounted, m as computed, n as useMutation, S as SpecHeaderCloudDataTooltip_RequestAccessDocument, p as normalizeClass, q as _sfc_main$j, s as createCommentVNode, _ as _export_sfc, v as createElementBlock, x as __unplugin_components_0$2, I as Input, y as __unplugin_components_1$1, z as resolveDynamicComponent, A as mergeProps, B as renderList, F as Fragment, C as useTimeout, D as renderSlot, E as withModifiers, G as __unplugin_components_1$3, H as createStaticVNode, J as __unplugin_components_0$3, K as StandardModalFooter, L as _sfc_main$o, M as useRoute, N as useOnline, O as watch, P as useSubscription, Q as useDebounce, R as useResizeObserver, T as CloudData_RefetchDocument, U as _sfc_main$q, V as RefreshIcon, W as normalizeStyle, X as withDirectives, Y as vShow, Z as _sfc_main$r, $ as SpecsList_GitInfoUpdatedDocument, a0 as useQuery, a1 as SpecsPageContainer_BranchInfoDocument, a2 as SpecsPageContainer_SpecsChangeDocument, a3 as SpecsPageContainer_SpecListPollingDocument, a4 as SpecsPageContainerDocument } from "./index.ec96dfd6.js";
import { U as UserIcon, C as ConnectIcon, W as WarningIcon, _ as _sfc_main$s } from "./CloudConnectModals.c13a7dc4.js";
import { S as SendIcon, _ as _sfc_main$k } from "./ResultCounts.7131e939.js";
import { _ as __unplugin_components_1 } from "./add-large_x16.39c4466e.js";
import { _ as __unplugin_components_1$2, a as _sfc_main$l, D as DocumentIconBlank, u as useCachedSpecs, m as makeFuzzyFoundSpec, f as fuzzySortSpecs, b as useCollapsibleTree, c as buildSpecTree, d as useVirtualList, e as _sfc_main$p, g as getDirIndexes, h as getFilteredGeneratorList, i as _sfc_main$t, j as _sfc_main$u } from "./CreateSpecModal.80ae7454.js";
import { _ as _sfc_main$m, a as _sfc_main$n } from "./SpecPatterns.79ed1074.js";
import { S as SettingsIcon } from "./settings_x16.1b2f8006.js";
const _hoisted_1$t = {
  class: "cursor-default decoration-dotted underline underline-gray-300 underline-offset-4",
  tabindex: "0",
  "data-cy": "last-updated-header"
};
const _hoisted_2$p = { class: "flex flex-col text-sm text-center max-w-300px p-4 items-center" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  props: {
    isGitAvailable: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const docsUrl = getUrlWithParams({
      url: "https://on.cypress.io/specs-last-updated",
      params: {
        utm_medium: "Specs Last Updated Tooltip",
        utm_campaign: "Last Updated"
      }
    });
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$i, {
        placement: "top",
        "is-interactive": true,
        "show-group": "last-updated-header"
      }, {
        popper: withCtx(() => [
          createBaseVNode("div", _hoisted_2$p, [
            props.isGitAvailable ? (openBlock(), createBlock(_component_i18n_t, {
              key: 0,
              scope: "global",
              keypath: "specPage.lastUpdated.tooltip.gitInfoAvailable"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$h, {
                  href: unref(docsUrl),
                  class: "font-medium text-indigo-500 contents group-hocus:text-indigo-600"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("specPage.lastUpdated.tooltip.gitStatus")), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              _: 1
            })) : (openBlock(), createBlock(_component_i18n_t, {
              key: 1,
              scope: "global",
              keypath: "specPage.lastUpdated.tooltip.gitInfoUnavailable"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$h, {
                  href: unref(docsUrl),
                  class: "font-medium text-indigo-500 contents group-hocus:text-indigo-600"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("specPage.lastUpdated.tooltip.gitInfo")), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              _: 1
            }))
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$t, toDisplayString(unref(t)("specPage.lastUpdated.header")), 1)
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$s = {
  class: "cursor-default decoration-dotted underline underline-gray-300 underline-offset-4",
  tabindex: "0"
};
const _hoisted_2$o = {
  class: "hidden lg:flex",
  "data-cy": "full-header-text"
};
const _hoisted_3$k = {
  class: "lg:hidden",
  "data-cy": "short-header-text"
};
const _hoisted_4$d = {
  class: "flex flex-col mx-4 text-sm text-center p-4 items-center",
  "data-cy": "cloud-data-tooltip-content"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    mode: null
  },
  emits: ["showLogin", "showConnectToProject"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n();
    const VALUES = {
      LATEST_RUNS: {
        header: "specPage.latestRuns.header",
        shortHeader: "specPage.latestRuns.headerShort",
        connected: "specPage.latestRuns.tooltip.connected",
        notConnected: "specPage.latestRuns.tooltip.notConnected",
        noAccess: "specPage.latestRuns.tooltip.noAccess",
        docsUrl: getUrlWithParams({
          url: "https://on.cypress.io/specs-latest-runs",
          params: {
            utm_medium: "Specs Latest Runs Tooltip",
            utm_campaign: "Latest Runs"
          }
        }),
        docs: "specPage.latestRuns.tooltip.linkText"
      },
      AVG_DURATION: {
        header: "specPage.averageDuration.header",
        shortHeader: "specPage.averageDuration.headerShort",
        connected: "specPage.averageDuration.tooltip.connected",
        notConnected: "specPage.averageDuration.tooltip.notConnected",
        noAccess: "specPage.averageDuration.tooltip.noAccess",
        docsUrl: getUrlWithParams({
          url: "https://on.cypress.io/specs-average-duration",
          params: {
            utm_medium: "Specs Average Duration Tooltip",
            utm_campaign: "Average Duration"
          }
        }),
        docs: "specPage.averageDuration.tooltip.linkText"
      }
    };
    gql`
fragment SpecHeaderCloudDataTooltip on Query {
  currentProject {
    id
    cloudProject{
      __typename
      ... on CloudProjectUnauthorized {
        hasRequestedAccess
      }
    }
  }
  ...Auth
  ...CloudConnectModals
}
`;
    gql`
mutation SpecHeaderCloudDataTooltip_RequestAccess( $projectId: String! ) {
  cloudProjectRequestAccess(projectSlug: $projectId) {
    __typename
    ... on CloudProjectUnauthorized {
      message
      hasRequestedAccess
    }
  }
}
`;
    const hasRequestedAccess = ref(false);
    onMounted(() => {
      var _a, _b, _c;
      if (((_b = (_a = props.gql.currentProject) == null ? void 0 : _a.cloudProject) == null ? void 0 : _b.__typename) === "CloudProjectUnauthorized") {
        hasRequestedAccess.value = (_c = props.gql.currentProject.cloudProject.hasRequestedAccess) != null ? _c : false;
      }
    });
    const projectConnectionStatus = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      if (!props.gql.cloudViewer)
        return "LOGGED_OUT";
      if (!((_b = (_a = props.gql.currentProject) == null ? void 0 : _a.cloudProject) == null ? void 0 : _b.__typename))
        return "NOT_CONNECTED";
      if (((_d = (_c = props.gql.currentProject) == null ? void 0 : _c.cloudProject) == null ? void 0 : _d.__typename) === "CloudProjectNotFound")
        return "NOT_FOUND";
      if (((_f = (_e = props.gql.currentProject) == null ? void 0 : _e.cloudProject) == null ? void 0 : _f.__typename) === "CloudProjectUnauthorized") {
        if (hasRequestedAccess.value) {
          return "ACCESS_REQUESTED";
        }
        return "UNAUTHORIZED";
      }
      return "CONNECTED";
    });
    const requestAccessMutation = useMutation(SpecHeaderCloudDataTooltip_RequestAccessDocument);
    async function requestAccess() {
      var _a, _b, _c, _d;
      const projectId = (_a = props.gql.currentProject) == null ? void 0 : _a.projectId;
      if (projectId) {
        const result = await requestAccessMutation.executeMutation({ projectId });
        if (((_c = (_b = result.data) == null ? void 0 : _b.cloudProjectRequestAccess) == null ? void 0 : _c.__typename) === "CloudProjectUnauthorized") {
          hasRequestedAccess.value = (_d = result.data.cloudProjectRequestAccess.hasRequestedAccess) != null ? _d : false;
        } else {
          hasRequestedAccess.value = false;
        }
      }
    }
    const tooltipTextKey = computed(() => {
      if (projectConnectionStatus.value === "CONNECTED")
        return VALUES[props.mode].connected;
      if (["UNAUTHORIZED", "ACCESS_REQUESTED"].includes(projectConnectionStatus.value))
        return VALUES[props.mode].noAccess;
      return VALUES[props.mode].notConnected;
    });
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$i, {
        placement: "top",
        "is-interactive": true,
        "show-group": VALUES[__props.mode].header
      }, {
        popper: withCtx(() => [
          createBaseVNode("div", _hoisted_4$d, [
            createBaseVNode("div", {
              class: normalizeClass([{ "m-2": unref(projectConnectionStatus) !== "CONNECTED" }, "max-w-235px"])
            }, [
              createVNode(_component_i18n_t, {
                scope: "global",
                keypath: unref(tooltipTextKey)
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$h, {
                    href: VALUES[__props.mode].docsUrl,
                    class: "font-medium text-indigo-500 contents group-hocus:text-indigo-600"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)(VALUES[__props.mode].docs)), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              }, 8, ["keypath"])
            ], 2),
            createBaseVNode("div", null, [
              unref(projectConnectionStatus) === "LOGGED_OUT" ? (openBlock(), createBlock(_sfc_main$j, {
                key: 0,
                "prefix-icon": unref(UserIcon),
                "prefix-icon-class": "icon-dark-white icon-light-transparent",
                "data-cy": "login-button",
                onClick: _cache[0] || (_cache[0] = ($event) => emits("showLogin"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("specPage.dashboardLoginButton")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon"])) : unref(projectConnectionStatus) === "NOT_CONNECTED" ? (openBlock(), createBlock(_sfc_main$j, {
                key: 1,
                "prefix-icon": unref(ConnectIcon),
                "prefix-icon-class": "icon-dark-white icon-light-transparent",
                "data-cy": "connect-button",
                onClick: _cache[1] || (_cache[1] = ($event) => emits("showConnectToProject"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("specPage.connectProjectButton")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon"])) : unref(projectConnectionStatus) === "NOT_FOUND" ? (openBlock(), createBlock(_sfc_main$j, {
                key: 2,
                "prefix-icon": unref(ConnectIcon),
                "prefix-icon-class": "icon-dark-white icon-light-transparent",
                "data-cy": "reconnect-button",
                onClick: _cache[2] || (_cache[2] = ($event) => emits("showConnectToProject"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("specPage.reconnectProjectButton")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon"])) : unref(projectConnectionStatus) === "UNAUTHORIZED" ? (openBlock(), createBlock(_sfc_main$j, {
                key: 3,
                "prefix-icon": unref(SendIcon),
                "prefix-icon-class": "icon-dark-white icon-light-transparent",
                "data-cy": "request-access-button",
                onClick: requestAccess
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("specPage.requestAccessButton")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon"])) : unref(projectConnectionStatus) === "ACCESS_REQUESTED" ? (openBlock(), createBlock(_sfc_main$j, {
                key: 4,
                "prefix-icon": unref(SendIcon),
                "prefix-icon-class": "icon-dark-white icon-light-transparent",
                "data-cy": "access-requested-button",
                class: "bg-gray-800 border-gray-800",
                disabled: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("specPage.requestSentButton")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon"])) : createCommentVNode("", true)
            ])
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$s, [
            createBaseVNode("span", _hoisted_2$o, toDisplayString(unref(t)(VALUES[__props.mode].header)), 1),
            createBaseVNode("span", _hoisted_3$k, toDisplayString(unref(t)(VALUES[__props.mode].shortHeader || VALUES[__props.mode].header)), 1)
          ])
        ]),
        _: 1
      }, 8, ["show-group"]);
    };
  }
});
var SpecsListHeader_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$r = { class: "flex w-full gap-16px relative" };
const _hoisted_2$n = ["aria-label"];
const _hoisted_3$j = { class: "bg-white border-transparent rounded-r flex h-full border-t-1 border-b-1 border-r-1 mr-1px px-16px transition-all items-center matches-button group-hocus:bg-indigo-50 group-hocus:text-indigo-500" };
const _hoisted_4$c = { key: 0 };
const _hoisted_5$5 = { key: 1 };
const _hoisted_6$4 = { class: "sr-only" };
const _hoisted_7$3 = { class: "flex h-40px min-w-127px gap-16px" };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: null,
    resultCount: { default: 0 },
    specCount: { default: 0 },
    specsListInputRefFn: { type: Function, default: void 0 }
  },
  emits: ["update:modelValue", "showSpecPatternModal", "showCreateSpecModal"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const onInput = (e) => {
      const value = e.target.value;
      emit("update:modelValue", value);
    };
    const clearInput = (e) => {
      emit("update:modelValue", "");
    };
    return (_ctx, _cache) => {
      const _component_i_cy_delete_x16 = __unplugin_components_1$1;
      return openBlock(), createElementBlock("div", _hoisted_1$r, [
        createVNode(Input, {
          id: "spec-filter",
          "input-ref": props.specsListInputRefFn,
          type: "search",
          class: "flex-grow h-full min-w-200px",
          "prefix-icon-classes": "icon-light-gray-50 icon-dark-gray-500",
          "prefix-icon": unref(__unplugin_components_0$2),
          "model-value": props.modelValue,
          placeholder: unref(t)("specPage.searchPlaceholder"),
          "aria-label": unref(t)("specPage.searchPlaceholder"),
          onInput
        }, {
          suffix: withCtx(() => [
            props.modelValue ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              "data-cy": "clear-search-button",
              class: "border-transparent rounded-md flex outline-none h-24px mr-16px w-24px duration-300 items-center justify-center group hocus-default hocus:ring-0 hocus:bg-indigo-50",
              "aria-label": unref(t)("specPage.clearSearch"),
              onClick: clearInput
            }, [
              createVNode(_component_i_cy_delete_x16, { class: "icon-light-gray-50 icon-dark-gray-500 group-hocus:icon-dark-indigo-500" })
            ], 8, _hoisted_2$n)) : createCommentVNode("", true),
            createBaseVNode("button", {
              class: "rounded-r-md outline-none h-38px mr-[-0.75rem] group relative",
              "aria-live": "polite",
              onClick: _cache[0] || (_cache[0] = ($event) => emit("showSpecPatternModal"))
            }, [
              createBaseVNode("span", _hoisted_3$j, [
                props.modelValue ? (openBlock(), createElementBlock("span", _hoisted_4$c, toDisplayString(unref(t)("components.fileSearch.matchesIndicator", { count: __props.specCount, denominator: __props.specCount, numerator: __props.resultCount })), 1)) : (openBlock(), createElementBlock("span", _hoisted_5$5, toDisplayString(unref(t)("components.fileSearch.matchesIndicatorEmptyFileSearch", { count: __props.specCount, denominator: __props.specCount })), 1)),
                createBaseVNode("span", _hoisted_6$4, toDisplayString(unref(t)(`createSpec.viewSpecPatternButton`)), 1)
              ])
            ])
          ]),
          _: 1
        }, 8, ["input-ref", "prefix-icon", "model-value", "placeholder", "aria-label"]),
        createBaseVNode("div", _hoisted_7$3, [
          createVNode(_sfc_main$j, {
            "data-cy": "new-spec-button",
            "prefix-icon": unref(__unplugin_components_1),
            "prefix-icon-class": "justify-center text-lg text-center icon-light-transparent icon-dark-white",
            class: "min-w-127px",
            size: "lg",
            onClick: _cache[1] || (_cache[1] = ($event) => emit("showCreateSpecModal"))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("specPage.newSpecButton")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])
        ])
      ]);
    };
  }
});
var SpecsListHeader = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-00f5f15b"]]);
const _hoisted_1$q = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$m = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 15C2.44772 15 2 14.5523 2 14V2C2 1.44772 2.44772 1 3 1H13C13.5523 1 14 1.44772 14 2V14C14 14.5523 13.5523 15 13 15H3Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$i = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6 8H10M8 10V6M13 1H3C2.44772 1 2 1.44772 2 2V14C2 14.5523 2.44772 15 3 15H13C13.5523 15 14 14.5523 14 14V2C14 1.44772 13.5523 1 13 1Z",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$b = [
  _hoisted_2$m,
  _hoisted_3$i
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, _hoisted_4$b);
}
var DocumentIconPlus = { name: "cy-document-plus_x16", render: render$c };
const _hoisted_1$p = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$l = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 15C2.44772 15 2 14.5523 2 14V2C2 1.44772 2.44772 1 3 1L13 1C13.5523 1 14 1.44772 14 2V14C14 14.5523 13.5523 15 13 15H3Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$h = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6 6.5H10M8 8.5V4.5M6 11.5H10M13 1L3 1C2.44772 1 2 1.44772 2 2V14C2 14.5523 2.44772 15 3 15H13C13.5523 15 14 14.5523 14 14V2C14 1.44772 13.5523 1 13 1Z",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$a = [
  _hoisted_2$l,
  _hoisted_3$h
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_4$a);
}
var DocumentIconPlusMinus = { name: "cy-document-plus-minus_x16", render: render$b };
const _hoisted_1$o = {
  height: "1em",
  width: "1em",
  style: { "min-width": "14px", "min-height": "14px" },
  viewBox: "0 0 14 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$k = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4Z",
  fill: "#E1E3ED"
}, null, -1);
const _hoisted_3$g = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4M10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4M10 4H13M4 4H1",
  stroke: "#9095AD",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$9 = [
  _hoisted_2$k,
  _hoisted_3$g
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_4$9);
}
var CommitIcon = { name: "cy-commit_x14", render: render$a };
const _hoisted_1$n = {
  class: "h-full grid grid-col-1 git-info-row justify-start items-center",
  "data-cy": "git-info-row"
};
const _hoisted_2$j = { class: "flex h-full gap-9px justify-start items-center" };
const _hoisted_3$f = { class: "text-gray-700 overflow-hidden truncate" };
const _hoisted_4$8 = { "data-cy": "git-info-tooltip" };
const _hoisted_5$4 = { class: "max-w-sm text-sm truncate overflow-hidden" };
const _hoisted_6$3 = {
  key: 0,
  class: "text-xs"
};
const _hoisted_7$2 = {
  key: 1,
  class: "text-gray-700 overflow-hidden truncate"
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment SpecListRow on GitInfo {
  lastModifiedTimestamp
  lastModifiedHumanReadable
  author
  statusType
  shortHash
  subject
}
`;
    const classes = computed(() => {
      var _a;
      return {
        created: {
          icon: DocumentIconPlus,
          iconClasses: "icon-dark-jade-400 icon-light-jade-50",
          testId: "created-icon"
        },
        modified: {
          icon: DocumentIconPlusMinus,
          iconClasses: "icon-dark-orange-400 icon-light-orange-50",
          testId: "modified-icon"
        },
        unmodified: {
          icon: CommitIcon,
          iconClasses: "icon-light-gray-500",
          testId: "unmodified-icon"
        },
        noGitInfo: {}
      }[((_a = props.gql) == null ? void 0 : _a.statusType) || "unmodified"];
    });
    const tooltipMainText = computed(() => {
      var _a, _b;
      switch ((_a = props.gql) == null ? void 0 : _a.statusType) {
        case "unmodified":
          return (_b = props.gql) == null ? void 0 : _b.subject;
        case "created":
          return t("file.git.created");
        case "modified":
          return t("file.git.modified");
        default:
          return null;
      }
    });
    const tooltipSubtext = computed(() => {
      var _a;
      if (((_a = props.gql) == null ? void 0 : _a.statusType) === "unmodified") {
        return t("specPage.rows.gitTooltipSubtext", {
          author: props.gql.author,
          shortHash: props.gql.shortHash
        });
      }
      return "";
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
        unref(classes).icon ? (openBlock(), createBlock(_sfc_main$i, {
          key: (_b = (_a = props.gql) == null ? void 0 : _a.statusType) != null ? _b : void 0,
          placement: "top",
          class: "h-full truncate",
          "data-cy": "tooltip"
        }, {
          popper: withCtx(() => [
            createBaseVNode("div", _hoisted_4$8, [
              createBaseVNode("p", _hoisted_5$4, toDisplayString(unref(tooltipMainText)), 1),
              unref(tooltipSubtext) ? (openBlock(), createElementBlock("p", _hoisted_6$3, toDisplayString(unref(tooltipSubtext)), 1)) : createCommentVNode("", true)
            ])
          ]),
          default: withCtx(() => {
            var _a2, _b2;
            return [
              createBaseVNode("button", _hoisted_2$j, [
                createBaseVNode("div", null, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(classes).icon), {
                    class: normalizeClass(unref(classes).iconClasses),
                    "data-cy": unref(classes).testId
                  }, null, 8, ["class", "data-cy"]))
                ]),
                createBaseVNode("div", _hoisted_3$f, toDisplayString((_b2 = (_a2 = props.gql) == null ? void 0 : _a2.lastModifiedHumanReadable) != null ? _b2 : ""), 1)
              ])
            ];
          }),
          _: 1
        })) : (openBlock(), createElementBlock("div", _hoisted_7$2, toDisplayString((_d = (_c = props.gql) == null ? void 0 : _c.lastModifiedHumanReadable) != null ? _d : ""), 1))
      ]);
    };
  }
});
const _hoisted_1$m = {
  height: "1em",
  width: "1em",
  style: { "min-width": "4px", "min-height": "4px" },
  viewBox: "0 0 4 4",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$i = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "2",
  cy: "2",
  r: "2",
  fill: "#1FA971",
  class: "icon-light"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$i
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_3$e);
}
var __unplugin_components_0$1 = { name: "cy-dot-solid_x4", render: render$9 };
const _hoisted_1$l = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$h = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H5Z",
  fill: "#AFB3C7"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$h
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_3$d);
}
var CancelledIcon = { name: "cy-cancelled-solid_x16", render: render$8 };
const _hoisted_1$k = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$g = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8V5ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z",
  fill: "#DB7903"
}, null, -1);
const _hoisted_3$c = [
  _hoisted_2$g
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_3$c);
}
var ErroredIcon = { name: "cy-errored-solid_x16", render: render$7 };
const _hoisted_1$j = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$f = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "7",
  fill: "#E45770"
}, null, -1);
const _hoisted_3$b = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L6.70711 5.29289ZM9.29289 10.7071C9.68342 11.0976 10.3166 11.0976 10.7071 10.7071C11.0976 10.3166 11.0976 9.68342 10.7071 9.29289L9.29289 10.7071ZM10.7071 6.70711C11.0976 6.31658 11.0976 5.68342 10.7071 5.29289C10.3166 4.90237 9.68342 4.90237 9.29289 5.29289L10.7071 6.70711ZM5.29289 9.29289C4.90237 9.68342 4.90237 10.3166 5.29289 10.7071C5.68342 11.0976 6.31658 11.0976 6.70711 10.7071L5.29289 9.29289ZM5.29289 6.70711L9.29289 10.7071L10.7071 9.29289L6.70711 5.29289L5.29289 6.70711ZM9.29289 5.29289L5.29289 9.29289L6.70711 10.7071L10.7071 6.70711L9.29289 5.29289Z",
  fill: "white"
}, null, -1);
const _hoisted_4$7 = [
  _hoisted_2$f,
  _hoisted_3$b
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_4$7);
}
var FailedIcon = { name: "cy-failed-solid_x16", render: render$6 };
const _hoisted_1$i = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$e = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "7",
  fill: "#1FA971"
}, null, -1);
const _hoisted_3$a = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 6L7.5 10L6 8.5",
  stroke: "white",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$6 = [
  _hoisted_2$e,
  _hoisted_3$a
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_4$6);
}
var PassedIcon = { name: "cy-passed-solid_x16", render: render$5 };
const _hoisted_1$h = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$d = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "7",
  fill: "#D0D2E0"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$d
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_3$9);
}
var PlaceholderIcon = { name: "cy-placeholder-solid_x16", render: render$4 };
const _hoisted_1$g = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$c = /* @__PURE__ */ createBaseVNode("g", { id: "Dimensions=x16" }, [
  /* @__PURE__ */ createBaseVNode("circle", {
    id: "Circle",
    cx: "8",
    cy: "8",
    r: "6",
    stroke: "#E1E3ED",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1);
const _hoisted_3$8 = [
  _hoisted_2$c
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_3$8);
}
var QueuedIcon = { name: "cy-queued-solid_x16", render: render$3 };
const _hoisted_1$f = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$b = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "6",
  stroke: "#E1E3ED",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M14 8C14 4.68629 11.3137 2 8 2",
  stroke: "#6470F3",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$5 = [
  _hoisted_2$b,
  _hoisted_3$7
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_4$5);
}
var RunningIcon = { name: "cy-running-outline_x16", render: render$2 };
const locale = "en";
const long = {
  year: {
    previous: "last year",
    current: "this year",
    next: "next year",
    past: {
      one: "{0} year ago",
      other: "{0} years ago"
    },
    future: {
      one: "in {0} year",
      other: "in {0} years"
    }
  },
  quarter: {
    previous: "last quarter",
    current: "this quarter",
    next: "next quarter",
    past: {
      one: "{0} quarter ago",
      other: "{0} quarters ago"
    },
    future: {
      one: "in {0} quarter",
      other: "in {0} quarters"
    }
  },
  month: {
    previous: "last month",
    current: "this month",
    next: "next month",
    past: {
      one: "{0} month ago",
      other: "{0} months ago"
    },
    future: {
      one: "in {0} month",
      other: "in {0} months"
    }
  },
  week: {
    previous: "last week",
    current: "this week",
    next: "next week",
    past: {
      one: "{0} week ago",
      other: "{0} weeks ago"
    },
    future: {
      one: "in {0} week",
      other: "in {0} weeks"
    }
  },
  day: {
    previous: "yesterday",
    current: "today",
    next: "tomorrow",
    past: {
      one: "{0} day ago",
      other: "{0} days ago"
    },
    future: {
      one: "in {0} day",
      other: "in {0} days"
    }
  },
  hour: {
    current: "this hour",
    past: {
      one: "{0} hour ago",
      other: "{0} hours ago"
    },
    future: {
      one: "in {0} hour",
      other: "in {0} hours"
    }
  },
  minute: {
    current: "this minute",
    past: {
      one: "{0} minute ago",
      other: "{0} minutes ago"
    },
    future: {
      one: "in {0} minute",
      other: "in {0} minutes"
    }
  },
  second: {
    current: "now",
    past: {
      one: "{0} second ago",
      other: "{0} seconds ago"
    },
    future: {
      one: "in {0} second",
      other: "in {0} seconds"
    }
  }
};
const short = {
  year: {
    previous: "last yr.",
    current: "this yr.",
    next: "next yr.",
    past: "{0} yr. ago",
    future: "in {0} yr."
  },
  quarter: {
    previous: "last qtr.",
    current: "this qtr.",
    next: "next qtr.",
    past: {
      one: "{0} qtr. ago",
      other: "{0} qtrs. ago"
    },
    future: {
      one: "in {0} qtr.",
      other: "in {0} qtrs."
    }
  },
  month: {
    previous: "last mo.",
    current: "this mo.",
    next: "next mo.",
    past: "{0} mo. ago",
    future: "in {0} mo."
  },
  week: {
    previous: "last wk.",
    current: "this wk.",
    next: "next wk.",
    past: "{0} wk. ago",
    future: "in {0} wk."
  },
  day: {
    previous: "yesterday",
    current: "today",
    next: "tomorrow",
    past: {
      one: "{0} day ago",
      other: "{0} days ago"
    },
    future: {
      one: "in {0} day",
      other: "in {0} days"
    }
  },
  hour: {
    current: "this hour",
    past: "{0} hr. ago",
    future: "in {0} hr."
  },
  minute: {
    current: "this minute",
    past: "{0} min. ago",
    future: "in {0} min."
  },
  second: {
    current: "now",
    past: "{0} sec. ago",
    future: "in {0} sec."
  }
};
const narrow = {
  year: {
    previous: "last yr.",
    current: "this yr.",
    next: "next yr.",
    past: "{0} yr. ago",
    future: "in {0} yr."
  },
  quarter: {
    previous: "last qtr.",
    current: "this qtr.",
    next: "next qtr.",
    past: {
      one: "{0} qtr. ago",
      other: "{0} qtrs. ago"
    },
    future: {
      one: "in {0} qtr.",
      other: "in {0} qtrs."
    }
  },
  month: {
    previous: "last mo.",
    current: "this mo.",
    next: "next mo.",
    past: "{0} mo. ago",
    future: "in {0} mo."
  },
  week: {
    previous: "last wk.",
    current: "this wk.",
    next: "next wk.",
    past: "{0} wk. ago",
    future: "in {0} wk."
  },
  day: {
    previous: "yesterday",
    current: "today",
    next: "tomorrow",
    past: {
      one: "{0} day ago",
      other: "{0} days ago"
    },
    future: {
      one: "in {0} day",
      other: "in {0} days"
    }
  },
  hour: {
    current: "this hour",
    past: "{0} hr. ago",
    future: "in {0} hr."
  },
  minute: {
    current: "this minute",
    past: "{0} min. ago",
    future: "in {0} min."
  },
  second: {
    current: "now",
    past: "{0} sec. ago",
    future: "in {0} sec."
  }
};
const now = {
  now: {
    current: "now",
    future: "in a moment",
    past: "just now"
  }
};
const mini$1 = {
  year: "{0}yr",
  month: "{0}mo",
  week: "{0}wk",
  day: "{0}d",
  hour: "{0}h",
  minute: "{0}m",
  second: "{0}s",
  now: "now"
};
var enTimeAgo = {
  locale,
  long,
  short,
  narrow,
  now,
  mini: mini$1,
  "short-time": {
    year: "{0} yr.",
    month: "{0} mo.",
    week: "{0} wk.",
    day: {
      one: "{0} day",
      other: "{0} days"
    },
    hour: "{0} hr.",
    minute: "{0} min.",
    second: "{0} sec."
  },
  "long-time": {
    year: {
      one: "{0} year",
      other: "{0} years"
    },
    month: {
      one: "{0} month",
      other: "{0} months"
    },
    week: {
      one: "{0} week",
      other: "{0} weeks"
    },
    day: {
      one: "{0} day",
      other: "{0} days"
    },
    hour: {
      one: "{0} hour",
      other: "{0} hours"
    },
    minute: {
      one: "{0} minute",
      other: "{0} minutes"
    },
    second: {
      one: "{0} second",
      other: "{0} seconds"
    }
  }
};
var defaultLocale$1 = "en";
var localesData$1 = {};
var lowercaseLocaleLookup = {};
function getDefaultLocale() {
  return defaultLocale$1;
}
function setDefaultLocale(locale2) {
  defaultLocale$1 = locale2;
}
function getLocaleData$1(locale2) {
  return localesData$1[locale2];
}
function addLocaleData$1(localeData) {
  if (!localeData) {
    throw new Error("No locale data passed");
  }
  localesData$1[localeData.locale] = localeData;
  lowercaseLocaleLookup[localeData.locale.toLowerCase()] = localeData.locale;
}
function resolveLocale$1(locale2) {
  if (localesData$1[locale2]) {
    return locale2;
  }
  if (lowercaseLocaleLookup[locale2.toLowerCase()]) {
    return lowercaseLocaleLookup[locale2.toLowerCase()];
  }
}
function resolveLocale(locale2) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var localeMatcher = options.localeMatcher || "lookup";
  switch (localeMatcher) {
    case "lookup":
      return resolveLocaleLookup(locale2);
    case "best fit":
      return resolveLocaleLookup(locale2);
    default:
      throw new RangeError('Invalid "localeMatcher" option: '.concat(localeMatcher));
  }
}
function resolveLocaleLookup(locale2) {
  var resolvedLocale = resolveLocale$1(locale2);
  if (resolvedLocale) {
    return resolvedLocale;
  }
  var parts = locale2.split("-");
  while (locale2.length > 1) {
    parts.pop();
    locale2 = parts.join("-");
    var _resolvedLocale = resolveLocale$1(locale2);
    if (_resolvedLocale) {
      return _resolvedLocale;
    }
  }
}
var $ = {
  af: function classify(n) {
    return n == 1 ? "one" : "other";
  },
  am: function classify2(n) {
    return n >= 0 && n <= 1 ? "one" : "other";
  },
  ar: function classify3(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
    return n == 0 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n100 >= 3 && n100 <= 10 ? "few" : n100 >= 11 && n100 <= 99 ? "many" : "other";
  },
  ast: function classify4(n) {
    var s = String(n).split("."), v0 = !s[1];
    return n == 1 && v0 ? "one" : "other";
  },
  be: function classify5(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
    return n10 == 1 && n100 != 11 ? "one" : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? "few" : t0 && n10 == 0 || n10 >= 5 && n10 <= 9 || n100 >= 11 && n100 <= 14 ? "many" : "other";
  },
  br: function classify6(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), n1000000 = t0 && s[0].slice(-6);
    return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? "one" : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? "two" : (n10 == 3 || n10 == 4 || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? "few" : n != 0 && t0 && n1000000 == 0 ? "many" : "other";
  },
  bs: function classify7(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? "few" : "other";
  },
  cs: function classify8(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1];
    return n == 1 && v0 ? "one" : i >= 2 && i <= 4 && v0 ? "few" : !v0 ? "many" : "other";
  },
  cy: function classify9(n) {
    return n == 0 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n == 3 ? "few" : n == 6 ? "many" : "other";
  },
  da: function classify10(n) {
    var s = String(n).split("."), i = s[0], t0 = Number(s[0]) == n;
    return n == 1 || !t0 && (i == 0 || i == 1) ? "one" : "other";
  },
  dsb: function classify11(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i100 = i.slice(-2), f100 = f.slice(-2);
    return v0 && i100 == 1 || f100 == 1 ? "one" : v0 && i100 == 2 || f100 == 2 ? "two" : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? "few" : "other";
  },
  dz: function classify12(n) {
    return "other";
  },
  fil: function classify13(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i10 = i.slice(-1), f10 = f.slice(-1);
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? "one" : "other";
  },
  fr: function classify14(n) {
    return n >= 0 && n < 2 ? "one" : "other";
  },
  ga: function classify15(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n;
    return n == 1 ? "one" : n == 2 ? "two" : t0 && n >= 3 && n <= 6 ? "few" : t0 && n >= 7 && n <= 10 ? "many" : "other";
  },
  gd: function classify16(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n;
    return n == 1 || n == 11 ? "one" : n == 2 || n == 12 ? "two" : t0 && n >= 3 && n <= 10 || t0 && n >= 13 && n <= 19 ? "few" : "other";
  },
  he: function classify17(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1);
    return n == 1 && v0 ? "one" : i == 2 && v0 ? "two" : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? "many" : "other";
  },
  is: function classify18(n) {
    var s = String(n).split("."), i = s[0], t0 = Number(s[0]) == n, i10 = i.slice(-1), i100 = i.slice(-2);
    return t0 && i10 == 1 && i100 != 11 || !t0 ? "one" : "other";
  },
  ksh: function classify19(n) {
    return n == 0 ? "zero" : n == 1 ? "one" : "other";
  },
  lt: function classify20(n) {
    var s = String(n).split("."), f = s[1] || "", t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
    return n10 == 1 && (n100 < 11 || n100 > 19) ? "one" : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? "few" : f != 0 ? "many" : "other";
  },
  lv: function classify21(n) {
    var s = String(n).split("."), f = s[1] || "", v = f.length, t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), f100 = f.slice(-2), f10 = f.slice(-1);
    return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? "zero" : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? "one" : "other";
  },
  mk: function classify22(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : "other";
  },
  mt: function classify23(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
    return n == 1 ? "one" : n == 0 || n100 >= 2 && n100 <= 10 ? "few" : n100 >= 11 && n100 <= 19 ? "many" : "other";
  },
  pa: function classify24(n) {
    return n == 0 || n == 1 ? "one" : "other";
  },
  pl: function classify25(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
    return n == 1 && v0 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? "many" : "other";
  },
  pt: function classify26(n) {
    var s = String(n).split("."), i = s[0];
    return i == 0 || i == 1 ? "one" : "other";
  },
  ro: function classify27(n) {
    var s = String(n).split("."), v0 = !s[1], t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
    return n == 1 && v0 ? "one" : !v0 || n == 0 || n != 1 && n100 >= 1 && n100 <= 19 ? "few" : "other";
  },
  ru: function classify28(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
    return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? "many" : "other";
  },
  se: function classify29(n) {
    return n == 1 ? "one" : n == 2 ? "two" : "other";
  },
  si: function classify30(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "";
    return n == 0 || n == 1 || i == 0 && f == 1 ? "one" : "other";
  },
  sl: function classify31(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1], i100 = i.slice(-2);
    return v0 && i100 == 1 ? "one" : v0 && i100 == 2 ? "two" : v0 && (i100 == 3 || i100 == 4) || !v0 ? "few" : "other";
  }
};
$.as = $.am;
$.az = $.af;
$.bg = $.af;
$.bn = $.am;
$.ca = $.ast;
$.ce = $.af;
$.chr = $.af;
$.de = $.ast;
$.ee = $.af;
$.el = $.af;
$.en = $.ast;
$.es = $.af;
$.et = $.ast;
$.eu = $.af;
$.fa = $.am;
$.fi = $.ast;
$.fo = $.af;
$.fur = $.af;
$.fy = $.ast;
$.gl = $.ast;
$.gu = $.am;
$.hi = $.am;
$.hr = $.bs;
$.hsb = $.dsb;
$.hu = $.af;
$.hy = $.fr;
$.ia = $.ast;
$.id = $.dz;
$.it = $.ast;
$.ja = $.dz;
$.jgo = $.af;
$.jv = $.dz;
$.ka = $.af;
$.kea = $.dz;
$.kk = $.af;
$.kl = $.af;
$.km = $.dz;
$.kn = $.am;
$.ko = $.dz;
$.ku = $.af;
$.ky = $.af;
$.lb = $.af;
$.lkt = $.dz;
$.lo = $.dz;
$.ml = $.af;
$.mn = $.af;
$.mr = $.am;
$.ms = $.dz;
$.my = $.dz;
$.nb = $.af;
$.ne = $.af;
$.nl = $.ast;
$.nn = $.af;
$.or = $.af;
$.ps = $.af;
$["pt-PT"] = $.ast;
$.sah = $.dz;
$.sd = $.af;
$.sk = $.cs;
$.so = $.af;
$.sq = $.af;
$.sr = $.bs;
$.sv = $.ast;
$.sw = $.ast;
$.ta = $.af;
$.te = $.af;
$.th = $.dz;
$.ti = $.pa;
$.tk = $.af;
$.to = $.dz;
$.tr = $.af;
$.ug = $.af;
$.uk = $.ru;
$.ur = $.ast;
$.uz = $.af;
$.vi = $.dz;
$.wae = $.af;
$.yi = $.ast;
$.yue = $.dz;
$.zh = $.dz;
$.zu = $.am;
var PluralRuleFunctions = $;
function getPluralRulesLocale(locale2) {
  if (locale2 === "pt-PT") {
    return locale2;
  }
  return getLanguageFromLanguageTag(locale2);
}
var LANGUAGE_REG_EXP = /^([a-z0-9]+)/i;
function getLanguageFromLanguageTag(languageTag) {
  var match = languageTag.match(LANGUAGE_REG_EXP);
  if (!match) {
    throw new TypeError("Invalid locale: ".concat(languageTag));
  }
  return match[1];
}
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$3(Constructor, staticProps);
  return Constructor;
}
var PluralRules = /* @__PURE__ */ function() {
  function PluralRules2(locale2, options) {
    _classCallCheck$3(this, PluralRules2);
    var locales = PluralRules2.supportedLocalesOf(locale2);
    if (locales.length === 0) {
      throw new RangeError("Unsupported locale: " + locale2);
    }
    if (options && options.type !== "cardinal") {
      throw new RangeError('Only "cardinal" "type" is supported');
    }
    this.$ = PluralRuleFunctions[getPluralRulesLocale(locales[0])];
  }
  _createClass$3(PluralRules2, [{
    key: "select",
    value: function select(number) {
      return this.$(number);
    }
  }], [{
    key: "supportedLocalesOf",
    value: function supportedLocalesOf(locales) {
      if (typeof locales === "string") {
        locales = [locales];
      }
      return locales.filter(function(locale2) {
        return PluralRuleFunctions[getPluralRulesLocale(locale2)];
      });
    }
  }]);
  return PluralRules2;
}();
function _typeof$4(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$4 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$4 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$4(obj);
}
function _objectSpread$9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$a(target, key, source[key]);
    });
  }
  return target;
}
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit$1(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$2(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$a(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var UNITS = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"];
var NUMERIC_VALUES = ["auto", "always"];
var STYLE_VALUES = ["long", "short", "narrow"];
var LOCALE_MATCHER_VALUES = ["lookup", "best fit"];
var RelativeTimeFormat = /* @__PURE__ */ function() {
  function RelativeTimeFormat2() {
    var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck$2(this, RelativeTimeFormat2);
    _defineProperty$a(this, "numeric", "always");
    _defineProperty$a(this, "style", "long");
    _defineProperty$a(this, "localeMatcher", "lookup");
    var numeric = options.numeric, style = options.style, localeMatcher = options.localeMatcher;
    if (numeric !== void 0) {
      if (NUMERIC_VALUES.indexOf(numeric) < 0) {
        throw new RangeError('Invalid "numeric" option: '.concat(numeric));
      }
      this.numeric = numeric;
    }
    if (style !== void 0) {
      if (STYLE_VALUES.indexOf(style) < 0) {
        throw new RangeError('Invalid "style" option: '.concat(style));
      }
      this.style = style;
    }
    if (localeMatcher !== void 0) {
      if (LOCALE_MATCHER_VALUES.indexOf(localeMatcher) < 0) {
        throw new RangeError('Invalid "localeMatcher" option: '.concat(localeMatcher));
      }
      this.localeMatcher = localeMatcher;
    }
    if (typeof locales === "string") {
      locales = [locales];
    }
    locales.push(getDefaultLocale());
    this.locale = RelativeTimeFormat2.supportedLocalesOf(locales, {
      localeMatcher: this.localeMatcher
    })[0];
    if (!this.locale) {
      throw new Error("No supported locale was found");
    }
    if (PluralRules.supportedLocalesOf(this.locale).length > 0) {
      this.pluralRules = new PluralRules(this.locale);
    } else {
      console.warn('"'.concat(this.locale, '" locale is not supported'));
    }
    if (typeof Intl !== "undefined" && Intl.NumberFormat) {
      this.numberFormat = new Intl.NumberFormat(this.locale);
      this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem;
    } else {
      this.numberingSystem = "latn";
    }
    this.locale = resolveLocale(this.locale, {
      localeMatcher: this.localeMatcher
    });
  }
  _createClass$2(RelativeTimeFormat2, [{
    key: "format",
    value: function format3() {
      var _parseFormatArgs = parseFormatArgs(arguments), _parseFormatArgs2 = _slicedToArray$1(_parseFormatArgs, 2), number = _parseFormatArgs2[0], unit = _parseFormatArgs2[1];
      return this.getRule(number, unit).replace("{0}", this.formatNumber(Math.abs(number)));
    }
  }, {
    key: "formatToParts",
    value: function formatToParts() {
      var _parseFormatArgs3 = parseFormatArgs(arguments), _parseFormatArgs4 = _slicedToArray$1(_parseFormatArgs3, 2), number = _parseFormatArgs4[0], unit = _parseFormatArgs4[1];
      var rule = this.getRule(number, unit);
      var valueIndex = rule.indexOf("{0}");
      if (valueIndex < 0) {
        return [{
          type: "literal",
          value: rule
        }];
      }
      var parts = [];
      if (valueIndex > 0) {
        parts.push({
          type: "literal",
          value: rule.slice(0, valueIndex)
        });
      }
      parts = parts.concat(this.formatNumberToParts(Math.abs(number)).map(function(part) {
        return _objectSpread$9({}, part, {
          unit
        });
      }));
      if (valueIndex + "{0}".length < rule.length - 1) {
        parts.push({
          type: "literal",
          value: rule.slice(valueIndex + "{0}".length)
        });
      }
      return parts;
    }
  }, {
    key: "getRule",
    value: function getRule(value, unit) {
      var unitMessages = getLocaleData$1(this.locale)[this.style][unit];
      if (this.numeric === "auto") {
        if (value === -2 || value === -1) {
          var message = unitMessages["previous".concat(value === -1 ? "" : "-" + Math.abs(value))];
          if (message) {
            return message;
          }
        } else if (value === 1 || value === 2) {
          var _message = unitMessages["next".concat(value === 1 ? "" : "-" + Math.abs(value))];
          if (_message) {
            return _message;
          }
        } else if (value === 0) {
          if (unitMessages.current) {
            return unitMessages.current;
          }
        }
      }
      var pluralizedMessages = unitMessages[isNegative(value) ? "past" : "future"];
      if (typeof pluralizedMessages === "string") {
        return pluralizedMessages;
      }
      var quantifier = this.pluralRules && this.pluralRules.select(Math.abs(value)) || "other";
      return pluralizedMessages[quantifier] || pluralizedMessages.other;
    }
  }, {
    key: "formatNumber",
    value: function formatNumber(number) {
      return this.numberFormat ? this.numberFormat.format(number) : String(number);
    }
  }, {
    key: "formatNumberToParts",
    value: function formatNumberToParts(number) {
      return this.numberFormat && this.numberFormat.formatToParts ? this.numberFormat.formatToParts(number) : [{
        type: "integer",
        value: this.formatNumber(number)
      }];
    }
  }, {
    key: "resolvedOptions",
    value: function resolvedOptions() {
      return {
        locale: this.locale,
        style: this.style,
        numeric: this.numeric,
        numberingSystem: this.numberingSystem
      };
    }
  }]);
  return RelativeTimeFormat2;
}();
RelativeTimeFormat.supportedLocalesOf = function(locales) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof locales === "string") {
    locales = [locales];
  } else if (!Array.isArray(locales)) {
    throw new TypeError('Invalid "locales" argument');
  }
  return locales.filter(function(locale2) {
    return resolveLocale(locale2, options);
  });
};
RelativeTimeFormat.addLocale = addLocaleData$1;
RelativeTimeFormat.setDefaultLocale = setDefaultLocale;
RelativeTimeFormat.getDefaultLocale = getDefaultLocale;
RelativeTimeFormat.PluralRules = PluralRules;
var UNIT_ERROR = 'Invalid "unit" argument';
function parseUnit(unit) {
  if (_typeof$4(unit) === "symbol") {
    throw new TypeError(UNIT_ERROR);
  }
  if (typeof unit !== "string") {
    throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
  }
  if (unit[unit.length - 1] === "s") {
    unit = unit.slice(0, unit.length - 1);
  }
  if (UNITS.indexOf(unit) < 0) {
    throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
  }
  return unit;
}
var NUMBER_ERROR = 'Invalid "number" argument';
function parseNumber(value) {
  value = Number(value);
  if (Number.isFinite) {
    if (!Number.isFinite(value)) {
      throw new RangeError("".concat(NUMBER_ERROR, ": ").concat(value));
    }
  }
  return value;
}
function isNegativeZero(number) {
  return 1 / number === -Infinity;
}
function isNegative(number) {
  return number < 0 || number === 0 && isNegativeZero(number);
}
function parseFormatArgs(args) {
  if (args.length < 2) {
    throw new TypeError('"unit" argument is required');
  }
  return [parseNumber(args[0]), parseUnit(args[1])];
}
function _typeof$3(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$3 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$3(obj);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Cache = /* @__PURE__ */ function() {
  function Cache2() {
    _classCallCheck$1(this, Cache2);
    _defineProperty$9(this, "cache", {});
  }
  _createClass$1(Cache2, [{
    key: "get",
    value: function get() {
      var cache = this.cache;
      for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
        keys[_key] = arguments[_key];
      }
      for (var _i = 0; _i < keys.length; _i++) {
        var key = keys[_i];
        if (_typeof$3(cache) !== "object") {
          return;
        }
        cache = cache[key];
      }
      return cache;
    }
  }, {
    key: "put",
    value: function put() {
      for (var _len2 = arguments.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        keys[_key2] = arguments[_key2];
      }
      var value = keys.pop();
      var lastKey = keys.pop();
      var cache = this.cache;
      for (var _i2 = 0; _i2 < keys.length; _i2++) {
        var key = keys[_i2];
        if (_typeof$3(cache[key]) !== "object") {
          cache[key] = {};
        }
        cache = cache[key];
      }
      return cache[lastKey] = value;
    }
  }]);
  return Cache2;
}();
function _typeof$2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$2 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$2(obj);
}
function chooseLocale(locales, isLocaleDataAvailable) {
  for (var _iterator = locales, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
    var _ref;
    if (_isArray) {
      if (_i >= _iterator.length)
        break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done)
        break;
      _ref = _i.value;
    }
    var locale2 = _ref;
    if (isLocaleDataAvailable(locale2)) {
      return locale2;
    }
    var parts = locale2.split("-");
    while (parts.length > 1) {
      parts.pop();
      locale2 = parts.join("-");
      if (isLocaleDataAvailable(locale2)) {
        return locale2;
      }
    }
  }
  throw new Error("No locale data has been registered for any of the locales: ".concat(locales.join(", ")));
}
function intlDateTimeFormatSupported() {
  var isIntlAvailable = (typeof Intl === "undefined" ? "undefined" : _typeof$2(Intl)) === "object";
  return isIntlAvailable && typeof Intl.DateTimeFormat === "function";
}
var minute = 60;
var hour = 60 * minute;
var day = 24 * hour;
var week = 7 * day;
var month = 30.44 * day;
var year = 146097 / 400 * day;
function getSecondsInUnit(unit) {
  switch (unit) {
    case "second":
      return 1;
    case "minute":
      return minute;
    case "hour":
      return hour;
    case "day":
      return day;
    case "week":
      return week;
    case "month":
      return month;
    case "year":
      return year;
  }
}
function getStepDenominator(step) {
  if (step.factor !== void 0) {
    return step.factor;
  }
  return getSecondsInUnit(step.unit || step.formatAs) || 1;
}
function getRoundFunction(round2) {
  switch (round2) {
    case "floor":
      return Math.floor;
    default:
      return Math.round;
  }
}
function getDiffRatioToNextRoundedNumber(round2) {
  switch (round2) {
    case "floor":
      return 1;
    default:
      return 0.5;
  }
}
function _typeof$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$1 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$1(obj);
}
function getStepMinTime(step, _ref) {
  var prevStep = _ref.prevStep, timestamp = _ref.timestamp, now2 = _ref.now, future = _ref.future, round2 = _ref.round;
  var minTime3;
  if (prevStep) {
    if (prevStep.id || prevStep.unit) {
      minTime3 = step["threshold_for_".concat(prevStep.id || prevStep.unit)];
    }
  }
  if (minTime3 === void 0) {
    if (step.threshold !== void 0) {
      minTime3 = step.threshold;
      if (typeof minTime3 === "function") {
        minTime3 = minTime3(now2, future);
      }
    }
  }
  if (minTime3 === void 0) {
    minTime3 = step.minTime;
  }
  if (_typeof$1(minTime3) === "object") {
    if (prevStep && prevStep.id && minTime3[prevStep.id] !== void 0) {
      minTime3 = minTime3[prevStep.id];
    } else {
      minTime3 = minTime3.default;
    }
  }
  if (typeof minTime3 === "function") {
    minTime3 = minTime3(timestamp, {
      future,
      getMinTimeForUnit: function getMinTimeForUnit(toUnit, fromUnit) {
        return _getMinTimeForUnit(toUnit, fromUnit || prevStep && prevStep.formatAs, {
          round: round2
        });
      }
    });
  }
  if (minTime3 === void 0) {
    if (step.test) {
      if (step.test(timestamp, {
        now: now2,
        future
      })) {
        minTime3 = 0;
      } else {
        minTime3 = 9007199254740991;
      }
    }
  }
  if (minTime3 === void 0) {
    if (prevStep) {
      if (step.formatAs && prevStep.formatAs) {
        minTime3 = _getMinTimeForUnit(step.formatAs, prevStep.formatAs, {
          round: round2
        });
      }
    } else {
      minTime3 = 0;
    }
  }
  if (minTime3 === void 0) {
    console.warn("[javascript-time-ago] A step should specify `minTime`:\n" + JSON.stringify(step, null, 2));
  }
  return minTime3;
}
function _getMinTimeForUnit(toUnit, fromUnit, _ref2) {
  var round2 = _ref2.round;
  var toUnitAmount = getSecondsInUnit(toUnit);
  var fromUnitAmount;
  if (fromUnit === "now") {
    fromUnitAmount = getSecondsInUnit(toUnit);
  } else {
    fromUnitAmount = getSecondsInUnit(fromUnit);
  }
  if (toUnitAmount !== void 0 && fromUnitAmount !== void 0) {
    return toUnitAmount - fromUnitAmount * (1 - getDiffRatioToNextRoundedNumber(round2));
  }
}
function _objectSpread$8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$8(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function getStep(steps2, secondsPassed, _ref) {
  var now2 = _ref.now, future = _ref.future, round2 = _ref.round, units = _ref.units, getNextStep = _ref.getNextStep;
  steps2 = filterStepsByUnits(steps2, units);
  var step = _getStep(steps2, secondsPassed, {
    now: now2,
    future,
    round: round2
  });
  if (getNextStep) {
    if (step) {
      var prevStep = steps2[steps2.indexOf(step) - 1];
      var nextStep = steps2[steps2.indexOf(step) + 1];
      return [prevStep, step, nextStep];
    }
    return [void 0, void 0, steps2[0]];
  }
  return step;
}
function _getStep(steps2, secondsPassed, _ref2) {
  var now2 = _ref2.now, future = _ref2.future, round2 = _ref2.round;
  if (steps2.length === 0) {
    return;
  }
  var i = getStepIndex(steps2, secondsPassed, {
    now: now2,
    future: future || secondsPassed < 0,
    round: round2
  });
  if (i === -1) {
    return;
  }
  var step = steps2[i];
  if (step.granularity) {
    var secondsPassedGranular = getRoundFunction(round2)(Math.abs(secondsPassed) / getStepDenominator(step) / step.granularity) * step.granularity;
    if (secondsPassedGranular === 0 && i > 0) {
      return steps2[i - 1];
    }
  }
  return step;
}
function getStepIndex(steps2, secondsPassed, options) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  var minTime3 = getStepMinTime(steps2[i], _objectSpread$8({
    prevStep: steps2[i - 1],
    timestamp: options.now - secondsPassed * 1e3
  }, options));
  if (minTime3 === void 0) {
    return i - 1;
  }
  if (Math.abs(secondsPassed) < minTime3) {
    return i - 1;
  }
  if (i === steps2.length - 1) {
    return i;
  }
  return getStepIndex(steps2, secondsPassed, options, i + 1);
}
function filterStepsByUnits(steps2, units) {
  return steps2.filter(function(_ref3) {
    var unit = _ref3.unit, formatAs = _ref3.formatAs;
    unit = unit || formatAs;
    if (unit) {
      return units.indexOf(unit) >= 0;
    }
    return true;
  });
}
function getTimeToNextUpdateForUnit(unit, timestamp, _ref) {
  var now2 = _ref.now, round2 = _ref.round;
  if (!getSecondsInUnit(unit)) {
    return;
  }
  var unitDenominator = getSecondsInUnit(unit) * 1e3;
  var future = timestamp > now2;
  var preciseAmount = Math.abs(timestamp - now2);
  var roundedAmount = getRoundFunction(round2)(preciseAmount / unitDenominator) * unitDenominator;
  if (future) {
    if (roundedAmount > 0) {
      return preciseAmount - roundedAmount + getDiffToPreviousRoundedNumber(round2, unitDenominator);
    } else {
      return preciseAmount - roundedAmount + 1;
    }
  }
  return -(preciseAmount - roundedAmount) + getDiffToNextRoundedNumber(round2, unitDenominator);
}
function getDiffToNextRoundedNumber(round2, unitDenominator) {
  return getDiffRatioToNextRoundedNumber(round2) * unitDenominator;
}
function getDiffToPreviousRoundedNumber(round2, unitDenominator) {
  return (1 - getDiffRatioToNextRoundedNumber(round2)) * unitDenominator + 1;
}
var YEAR = 365 * 24 * 60 * 60 * 1e3;
var INFINITY = 1e3 * YEAR;
function getTimeToNextUpdate(date, step, _ref) {
  var prevStep = _ref.prevStep, nextStep = _ref.nextStep, now2 = _ref.now, future = _ref.future, round2 = _ref.round;
  var timestamp = date.getTime ? date.getTime() : date;
  var getTimeToNextUpdateForUnit$1 = function getTimeToNextUpdateForUnit$12(unit2) {
    return getTimeToNextUpdateForUnit(unit2, timestamp, {
      now: now2,
      round: round2
    });
  };
  var timeToStepChange = getTimeToStepChange(future ? step : nextStep, timestamp, {
    future,
    now: now2,
    round: round2,
    prevStep: future ? prevStep : step
  });
  if (timeToStepChange === void 0) {
    return;
  }
  var timeToNextUpdate;
  if (step) {
    if (step.getTimeToNextUpdate) {
      timeToNextUpdate = step.getTimeToNextUpdate(timestamp, {
        getTimeToNextUpdateForUnit: getTimeToNextUpdateForUnit$1,
        getRoundFunction,
        now: now2,
        future,
        round: round2
      });
    }
    if (timeToNextUpdate === void 0) {
      var unit = step.unit || step.formatAs;
      if (unit) {
        timeToNextUpdate = getTimeToNextUpdateForUnit$1(unit);
      }
    }
  }
  if (timeToNextUpdate === void 0) {
    return timeToStepChange;
  }
  return Math.min(timeToNextUpdate, timeToStepChange);
}
function getStepChangesAt(currentOrNextStep, timestamp, _ref2) {
  var now2 = _ref2.now, future = _ref2.future, round2 = _ref2.round, prevStep = _ref2.prevStep;
  var minTime3 = getStepMinTime(currentOrNextStep, {
    timestamp,
    now: now2,
    future,
    round: round2,
    prevStep
  });
  if (minTime3 === void 0) {
    return;
  }
  if (future) {
    return timestamp - minTime3 * 1e3 + 1;
  } else {
    if (minTime3 === 0 && timestamp === now2) {
      return INFINITY;
    }
    return timestamp + minTime3 * 1e3;
  }
}
function getTimeToStepChange(step, timestamp, _ref3) {
  var now2 = _ref3.now, future = _ref3.future, round2 = _ref3.round, prevStep = _ref3.prevStep;
  if (step) {
    var stepChangesAt = getStepChangesAt(step, timestamp, {
      now: now2,
      future,
      round: round2,
      prevStep
    });
    if (stepChangesAt === void 0) {
      return;
    }
    return stepChangesAt - now2;
  } else {
    if (future) {
      return timestamp - now2 + 1;
    } else {
      return INFINITY;
    }
  }
}
var localesData = {};
function getLocaleData(locale2) {
  return localesData[locale2];
}
function addLocaleData(localeData) {
  if (!localeData) {
    throw new Error("[javascript-time-ago] No locale data passed.");
  }
  localesData[localeData.locale] = localeData;
}
var round$1 = [{
  formatAs: "now"
}, {
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}, {
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
}];
var round = {
  steps: round$1,
  labels: "long"
};
function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$7(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var defaultStyle = _objectSpread$7({}, round, {
  steps: round.steps.filter(function(step) {
    return step.formatAs !== "second";
  })
});
var approximate$1 = [{
  factor: 1,
  unit: "now"
}, {
  threshold: 1,
  threshold_for_now: 45.5,
  factor: 1,
  unit: "second"
}, {
  threshold: 45.5,
  factor: minute,
  unit: "minute"
}, {
  threshold: 2.5 * minute,
  granularity: 5,
  factor: minute,
  unit: "minute"
}, {
  threshold: 22.5 * minute,
  factor: 0.5 * hour,
  unit: "half-hour"
}, {
  threshold: 42.5 * minute,
  threshold_for_minute: 52.5 * minute,
  factor: hour,
  unit: "hour"
}, {
  threshold: 20.5 / 24 * day,
  factor: day,
  unit: "day"
}, {
  threshold: 5.5 * day,
  factor: week,
  unit: "week"
}, {
  threshold: 3.5 * week,
  factor: month,
  unit: "month"
}, {
  threshold: 10.5 * month,
  factor: year,
  unit: "year"
}];
var approximate = {
  gradation: approximate$1,
  flavour: "long",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
};
var approximateTime = {
  gradation: approximate$1,
  flavour: "long-time",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
};
function getDate(value) {
  return value instanceof Date ? value : new Date(value);
}
var steps = [{
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}];
var formatters = {};
var monthAndDay = {
  minTime: function minTime(timestamp, _ref) {
    _ref.future;
    var getMinTimeForUnit = _ref.getMinTimeForUnit;
    return getMinTimeForUnit("day");
  },
  format: function format(value, locale2) {
    if (!formatters[locale2]) {
      formatters[locale2] = {};
    }
    if (!formatters[locale2].dayMonth) {
      formatters[locale2].dayMonth = new Intl.DateTimeFormat(locale2, {
        month: "short",
        day: "numeric"
      });
    }
    return formatters[locale2].dayMonth.format(getDate(value));
  }
};
var yearMonthAndDay = {
  minTime: function minTime2(timestamp, _ref2) {
    var future = _ref2.future;
    if (future) {
      var maxFittingNow = new Date(new Date(timestamp).getFullYear(), 0).getTime() - 1;
      return (timestamp - maxFittingNow) / 1e3;
    } else {
      var minFittingNow = new Date(new Date(timestamp).getFullYear() + 1, 0).getTime();
      return (minFittingNow - timestamp) / 1e3;
    }
  },
  format: function format2(value, locale2) {
    if (!formatters[locale2]) {
      formatters[locale2] = {};
    }
    if (!formatters[locale2].dayMonthYear) {
      formatters[locale2].dayMonthYear = new Intl.DateTimeFormat(locale2, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }
    return formatters[locale2].dayMonthYear.format(getDate(value));
  }
};
if (intlDateTimeFormatSupported()) {
  steps.push(monthAndDay, yearMonthAndDay);
} else {
  steps.push({
    formatAs: "day"
  }, {
    formatAs: "week"
  }, {
    formatAs: "month"
  }, {
    formatAs: "year"
  });
}
var twitter = {
  steps,
  labels: [
    "mini",
    "short-time",
    "narrow",
    "short"
  ]
};
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$6(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var twitterNow = _objectSpread$6({}, twitter, {
  steps: [{
    formatAs: "now"
  }].concat(twitter.steps)
});
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$5(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var twitterMinute = _objectSpread$5({}, twitter, {
  steps: twitter.steps.filter(function(step) {
    return step.formatAs !== "second";
  })
});
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$4(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var twitterMinuteNow = _objectSpread$4({}, twitterMinute, {
  steps: [{
    formatAs: "now"
  }].concat(twitterMinute.steps)
});
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$3(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var twitterFirstMinute = _objectSpread$3({}, twitter, {
  steps: twitter.steps.filter(function(step) {
    return step.formatAs !== "second";
  }).map(function(step) {
    return step.formatAs === "minute" ? _objectSpread$3({}, step, {
      minTime: minute
    }) : step;
  })
});
var mini = {
  steps: [{
    formatAs: "second"
  }, {
    formatAs: "minute"
  }, {
    formatAs: "hour"
  }, {
    formatAs: "day"
  }, {
    formatAs: "month"
  }, {
    formatAs: "year"
  }],
  labels: [
    "mini",
    "short-time",
    "narrow",
    "short"
  ]
};
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var miniNow = _objectSpread$2({}, mini, {
  steps: [{
    formatAs: "now"
  }].concat(mini.steps)
});
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var miniMinute = _objectSpread$1({}, mini, {
  steps: mini.steps.filter(function(step) {
    return step.formatAs !== "second";
  })
});
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var miniMinuteNow = _objectSpread({}, miniMinute, {
  steps: [{
    formatAs: "now"
  }].concat(miniMinute.steps)
});
function getStyleByName(style) {
  switch (style) {
    case "default":
    case "round":
      return round;
    case "round-minute":
      return defaultStyle;
    case "approximate":
      return approximate;
    case "time":
    case "approximate-time":
      return approximateTime;
    case "mini":
      return mini;
    case "mini-now":
      return miniNow;
    case "mini-minute":
      return miniMinute;
    case "mini-minute-now":
      return miniMinuteNow;
    case "twitter":
      return twitter;
    case "twitter-now":
      return twitterNow;
    case "twitter-minute":
      return twitterMinute;
    case "twitter-minute-now":
      return twitterMinuteNow;
    case "twitter-first-minute":
      return twitterFirstMinute;
    default:
      return approximate;
  }
}
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var TimeAgo = /* @__PURE__ */ function() {
  function TimeAgo2() {
    var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, polyfill = _ref.polyfill;
    _classCallCheck(this, TimeAgo2);
    if (typeof locales === "string") {
      locales = [locales];
    }
    this.locale = chooseLocale(locales.concat(TimeAgo2.getDefaultLocale()), getLocaleData);
    if (typeof Intl !== "undefined") {
      if (Intl.NumberFormat) {
        this.numberFormat = new Intl.NumberFormat(this.locale);
      }
    }
    if (polyfill === false) {
      this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat;
      this.IntlPluralRules = Intl.PluralRules;
    } else {
      this.IntlRelativeTimeFormat = RelativeTimeFormat;
      this.IntlPluralRules = RelativeTimeFormat.PluralRules;
    }
    this.relativeTimeFormatCache = new Cache();
    this.pluralRulesCache = new Cache();
  }
  _createClass(TimeAgo2, [{
    key: "format",
    value: function format3(input, style, options) {
      if (!options) {
        if (style && !isStyle(style)) {
          options = style;
          style = void 0;
        } else {
          options = {};
        }
      }
      if (!style) {
        style = defaultStyle;
      }
      if (typeof style === "string") {
        style = getStyleByName(style);
      }
      var timestamp = getTimestamp(input);
      var _this$getLabels = this.getLabels(style.flavour || style.labels), labels = _this$getLabels.labels, labelsType = _this$getLabels.labelsType;
      var now2;
      if (style.now !== void 0) {
        now2 = style.now;
      }
      if (now2 === void 0 && options.now !== void 0) {
        now2 = options.now;
      }
      if (now2 === void 0) {
        now2 = Date.now();
      }
      var secondsPassed = (now2 - timestamp) / 1e3;
      var future = options.future || secondsPassed < 0;
      var nowLabel = getNowLabel(labels, getLocaleData(this.locale).now, getLocaleData(this.locale).long, future);
      if (style.custom) {
        var custom = style.custom({
          now: now2,
          date: new Date(timestamp),
          time: timestamp,
          elapsed: secondsPassed,
          locale: this.locale
        });
        if (custom !== void 0) {
          return custom;
        }
      }
      var units = getTimeIntervalMeasurementUnits(style.units, labels, nowLabel);
      var round2 = options.round || style.round;
      var _getStep2 = getStep(style.gradation || style.steps || defaultStyle.steps, secondsPassed, {
        now: now2,
        units,
        round: round2,
        future,
        getNextStep: true
      }), _getStep22 = _slicedToArray(_getStep2, 3), prevStep = _getStep22[0], step = _getStep22[1], nextStep = _getStep22[2];
      var formattedDate = this.formatDateForStep(timestamp, step, secondsPassed, {
        labels,
        labelsType,
        nowLabel,
        now: now2,
        future,
        round: round2
      }) || "";
      if (options.getTimeToNextUpdate) {
        var timeToNextUpdate = getTimeToNextUpdate(timestamp, step, {
          nextStep,
          prevStep,
          now: now2,
          future,
          round: round2
        });
        return [formattedDate, timeToNextUpdate];
      }
      return formattedDate;
    }
  }, {
    key: "formatDateForStep",
    value: function formatDateForStep(timestamp, step, secondsPassed, _ref2) {
      var _this = this;
      var labels = _ref2.labels, labelsType = _ref2.labelsType, nowLabel = _ref2.nowLabel, now2 = _ref2.now, future = _ref2.future, round2 = _ref2.round;
      if (!step) {
        return;
      }
      if (step.format) {
        return step.format(timestamp, this.locale, {
          formatAs: function formatAs(unit2, value) {
            return _this.formatValue(value, unit2, {
              labels,
              future
            });
          },
          now: now2,
          future
        });
      }
      var unit = step.unit || step.formatAs;
      if (!unit) {
        throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(step)));
      }
      if (unit === "now") {
        return nowLabel;
      }
      var amount = Math.abs(secondsPassed) / getStepDenominator(step);
      if (step.granularity) {
        amount = getRoundFunction(round2)(amount / step.granularity) * step.granularity;
      }
      var valueForFormatting = -1 * Math.sign(secondsPassed) * getRoundFunction(round2)(amount);
      if (valueForFormatting === 0) {
        if (future) {
          valueForFormatting = 0;
        } else {
          valueForFormatting = -0;
        }
      }
      switch (labelsType) {
        case "long":
        case "short":
        case "narrow":
          return this.getFormatter(labelsType).format(valueForFormatting, unit);
        default:
          return this.formatValue(valueForFormatting, unit, {
            labels,
            future
          });
      }
    }
  }, {
    key: "formatValue",
    value: function formatValue(value, unit, _ref3) {
      var labels = _ref3.labels, future = _ref3.future;
      return this.getFormattingRule(labels, unit, value, {
        future
      }).replace("{0}", this.formatNumber(Math.abs(value)));
    }
  }, {
    key: "getFormattingRule",
    value: function getFormattingRule(formattingRules, unit, value, _ref4) {
      var future = _ref4.future;
      this.locale;
      formattingRules = formattingRules[unit];
      if (typeof formattingRules === "string") {
        return formattingRules;
      }
      var pastOrFuture = value === 0 ? future ? "future" : "past" : value < 0 ? "past" : "future";
      var quantifierRules = formattingRules[pastOrFuture] || formattingRules;
      if (typeof quantifierRules === "string") {
        return quantifierRules;
      }
      var quantifier = this.getPluralRules().select(Math.abs(value));
      return quantifierRules[quantifier] || quantifierRules.other;
    }
  }, {
    key: "formatNumber",
    value: function formatNumber(number) {
      return this.numberFormat ? this.numberFormat.format(number) : String(number);
    }
  }, {
    key: "getFormatter",
    value: function getFormatter(labelsType) {
      return this.relativeTimeFormatCache.get(this.locale, labelsType) || this.relativeTimeFormatCache.put(this.locale, labelsType, new this.IntlRelativeTimeFormat(this.locale, {
        style: labelsType
      }));
    }
  }, {
    key: "getPluralRules",
    value: function getPluralRules() {
      return this.pluralRulesCache.get(this.locale) || this.pluralRulesCache.put(this.locale, new this.IntlPluralRules(this.locale));
    }
  }, {
    key: "getLabels",
    value: function getLabels() {
      var labelsType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      if (typeof labelsType === "string") {
        labelsType = [labelsType];
      }
      labelsType = labelsType.map(function(labelsType2) {
        switch (labelsType2) {
          case "tiny":
          case "mini-time":
            return "mini";
          default:
            return labelsType2;
        }
      });
      labelsType = labelsType.concat("long");
      var localeData = getLocaleData(this.locale);
      for (var _iterator = labelsType, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
        var _ref5;
        if (_isArray) {
          if (_i2 >= _iterator.length)
            break;
          _ref5 = _iterator[_i2++];
        } else {
          _i2 = _iterator.next();
          if (_i2.done)
            break;
          _ref5 = _i2.value;
        }
        var _labelsType = _ref5;
        if (localeData[_labelsType]) {
          return {
            labelsType: _labelsType,
            labels: localeData[_labelsType]
          };
        }
      }
    }
  }]);
  return TimeAgo2;
}();
var defaultLocale = "en";
TimeAgo.getDefaultLocale = function() {
  return defaultLocale;
};
TimeAgo.setDefaultLocale = function(locale2) {
  return defaultLocale = locale2;
};
TimeAgo.addDefaultLocale = function(localeData) {
  if (defaultLocaleHasBeenSpecified) {
    return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");
  }
  defaultLocaleHasBeenSpecified = true;
  TimeAgo.setDefaultLocale(localeData.locale);
  TimeAgo.addLocale(localeData);
};
var defaultLocaleHasBeenSpecified;
TimeAgo.addLocale = function(localeData) {
  addLocaleData(localeData);
  RelativeTimeFormat.addLocale(localeData);
};
TimeAgo.locale = TimeAgo.addLocale;
TimeAgo.addLabels = function(locale2, name, labels) {
  var localeData = getLocaleData(locale2);
  if (!localeData) {
    addLocaleData({
      locale: locale2
    });
    localeData = getLocaleData(locale2);
  }
  localeData[name] = labels;
};
function getTimestamp(input) {
  if (input.constructor === Date || isMockedDate(input)) {
    return input.getTime();
  }
  if (typeof input === "number") {
    return input;
  }
  throw new Error("Unsupported relative time formatter input: ".concat(_typeof(input), ", ").concat(input));
}
function isMockedDate(object) {
  return _typeof(object) === "object" && typeof object.getTime === "function";
}
function getTimeIntervalMeasurementUnits(allowedUnits, labels, nowLabel) {
  var units = Object.keys(labels);
  if (nowLabel) {
    units.push("now");
  }
  if (allowedUnits) {
    units = allowedUnits.filter(function(unit) {
      return unit === "now" || units.indexOf(unit) >= 0;
    });
  }
  return units;
}
function getNowLabel(labels, nowLabels, longLabels, future) {
  var nowLabel = labels.now || nowLabels && nowLabels.now;
  if (nowLabel) {
    if (typeof nowLabel === "string") {
      return nowLabel;
    }
    if (future) {
      return nowLabel.future;
    } else {
      return nowLabel.past;
    }
  }
  if (longLabels && longLabels.second && longLabels.second.current) {
    return longLabels.second.current;
  }
}
var OBJECT_CONSTRUCTOR = {}.constructor;
function isObject(object) {
  return _typeof(object) !== void 0 && object !== null && object.constructor === OBJECT_CONSTRUCTOR;
}
function isStyle(variable) {
  return typeof variable === "string" || isStyleObject(variable);
}
function isStyleObject(object) {
  return isObject(object) && (Array.isArray(object.steps) || Array.isArray(object.gradation) || Array.isArray(object.flavour) || typeof object.flavour === "string" || Array.isArray(object.labels) || typeof object.labels === "string" || Array.isArray(object.units) || typeof object.custom === "function");
}
TimeAgo.addDefaultLocale(enTimeAgo);
const timeAgo = new TimeAgo("en-US");
function getTimeAgo(iso8601) {
  return timeAgo.format(new Date(iso8601));
}
function getDurationString(totalSeconds) {
  const roundedTotalSeconds = Math.floor(totalSeconds / 1e3);
  const seconds = roundedTotalSeconds % 60;
  const roundedTotalMinutes = Math.floor(roundedTotalSeconds / 60);
  const minutes = roundedTotalMinutes % 60;
  const roundedTotalHours = Math.floor(roundedTotalMinutes / 60);
  const hours = roundedTotalHours % 60;
  if (hours) {
    return `${hours}:${minutes.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}:${seconds.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}`;
  }
  return `${minutes}:${seconds.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}`;
}
var SpecRunSummary_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$e = {
  class: "max-w-60 truncate overflow-hidden",
  "data-cy": "spec-run-filename"
};
const _hoisted_2$a = { class: "font-semibold text-gray-800" };
const _hoisted_3$6 = { class: "text-gray-600" };
const _hoisted_4$4 = { class: "flex flex-row text-gray-700 text-size-14px gap-2 items-center" };
const _hoisted_5$3 = {
  key: 2,
  "data-cy": "spec-run-time-ago"
};
const _hoisted_6$2 = { "data-cy": "spec-run-duration-1" };
const _hoisted_7$1 = {
  key: 3,
  class: "m-[-5px] text-gray-200"
};
const _hoisted_8$2 = {
  key: 4,
  "data-cy": "spec-run-duration-2"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  props: {
    run: null,
    specFileNoExtension: null,
    specFileExtension: null
  },
  setup(__props) {
    const props = __props;
    const getAggregateTestCountString = (agg) => {
      if (agg.min == null)
        return "0";
      if (!agg.max || agg.min === agg.max)
        return agg.min;
      return `${agg.min}-${agg.max}`;
    };
    const durationText1 = computed(() => {
      var _a, _b, _c, _d;
      if (((_b = (_a = props.run) == null ? void 0 : _a.specDuration) == null ? void 0 : _b.min) == null)
        return "--";
      return getDurationString((_d = (_c = props.run) == null ? void 0 : _c.specDuration) == null ? void 0 : _d.min);
    });
    const durationText2 = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      if (((_b = (_a = props.run) == null ? void 0 : _a.specDuration) == null ? void 0 : _b.min) == null)
        return null;
      if (!((_d = (_c = props.run) == null ? void 0 : _c.specDuration) == null ? void 0 : _d.max) || Math.round(((_f = (_e = props.run) == null ? void 0 : _e.specDuration) == null ? void 0 : _f.min) / 1e3) === Math.round(((_h = (_g = props.run) == null ? void 0 : _g.specDuration) == null ? void 0 : _h.max) / 1e3))
        return null;
      return getDurationString((_j = (_i = props.run) == null ? void 0 : _i.specDuration) == null ? void 0 : _j.max);
    });
    const runResults = computed(() => {
      var _a, _b, _c, _d;
      if (!props.run)
        return null;
      return {
        id: props.run.id,
        totalFailed: getAggregateTestCountString((_a = props.run.testsFailed) != null ? _a : {}),
        totalPassed: getAggregateTestCountString((_b = props.run.testsPassed) != null ? _b : {}),
        totalPending: getAggregateTestCountString((_c = props.run.testsPending) != null ? _c : {}),
        totalSkipped: getAggregateTestCountString((_d = props.run.testsSkipped) != null ? _d : {})
      };
    });
    const statusText = computed(() => {
      var _a;
      if (!((_a = props.run) == null ? void 0 : _a.status))
        return null;
      switch (props.run.status) {
        case "CANCELLED":
          return "Canceled";
        case "ERRORED":
          return "Errored";
        case "FAILED":
          return "Failed";
        case "NOTESTS":
          return "No tests";
        case "PASSED":
          return "Passed";
        case "UNCLAIMED":
          return "Queued";
        case "RUNNING":
          return "Running";
        case "TIMEDOUT":
          return "Timed out";
        default:
          return null;
      }
    });
    const statusColor = computed(() => {
      var _a;
      if (!((_a = props.run) == null ? void 0 : _a.status))
        return "gray";
      switch (props.run.status) {
        case "ERRORED":
        case "TIMEDOUT":
          return "orange";
        case "FAILED":
          return "red";
        case "PASSED":
          return "jade";
        case "RUNNING":
          return "indigo";
        case "CANCELLED":
        case "NOTESTS":
        case "UNCLAIMED":
        default:
          return "gray";
      }
    });
    const highlightColor = computed(() => {
      const color = statusColor.value;
      if (color === "gray")
        return "gray-500";
      return `${color}-400`;
    });
    const statusTextColor = computed(() => {
      const color = statusColor.value;
      if (color === "gray")
        return "gray-700";
      return `${color}-500`;
    });
    return (_ctx, _cache) => {
      const _component_i_cy_dot_solid_x4 = __unplugin_components_0$1;
      return props.run ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["flex flex-col p-4 gap-2 items-center", unref(highlightColor)]),
        "data-cy": "spec-run-summary"
      }, [
        createBaseVNode("div", _hoisted_1$e, [
          createBaseVNode("span", _hoisted_2$a, toDisplayString(props.specFileNoExtension), 1),
          createBaseVNode("span", _hoisted_3$6, toDisplayString(props.specFileExtension), 1)
        ]),
        createBaseVNode("div", _hoisted_4$4, [
          unref(statusText) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["text-" + unref(statusTextColor), "font-medium"]),
            "data-cy": "spec-run-status"
          }, toDisplayString(unref(statusText)), 3)) : createCommentVNode("", true),
          unref(statusText) ? (openBlock(), createBlock(_component_i_cy_dot_solid_x4, {
            key: 1,
            width: "4px",
            height: "4px",
            class: "icon-light-gray-200"
          })) : createCommentVNode("", true),
          props.run.createdAt ? (openBlock(), createElementBlock("div", _hoisted_5$3, toDisplayString(unref(getTimeAgo)(props.run.createdAt)), 1)) : createCommentVNode("", true),
          createVNode(_component_i_cy_dot_solid_x4, {
            width: "4px",
            height: "4px",
            class: "icon-light-gray-200"
          }),
          createBaseVNode("div", _hoisted_6$2, toDisplayString(unref(durationText1)), 1),
          unref(durationText2) ? (openBlock(), createElementBlock("div", _hoisted_7$1, " - ")) : createCommentVNode("", true),
          unref(durationText2) ? (openBlock(), createElementBlock("div", _hoisted_8$2, toDisplayString(unref(durationText2)), 1)) : createCommentVNode("", true)
        ]),
        unref(runResults) ? (openBlock(), createBlock(_sfc_main$k, mergeProps({ key: 0 }, unref(runResults), {
          class: "my-2",
          "data-cy": "spec-run-result-counts"
        }), null, 16)) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var SpecRunSummary = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-30eea18a"]]);
var RunStatusDots_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$d = {
  class: "flex justify-end items-center",
  "data-cy": "run-status-dots",
  tabindex: "0"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    specFileName: null,
    specFileExtension: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment RunStatusDots on RemoteFetchableCloudProjectSpecResult {
  id
  data {
    __typename
    ... on CloudProjectSpecNotFound {
      retrievedAt
      # We query for message even though we don't use it so GQL can discriminate these two types properly
      message
    }
    ... on CloudProjectSpec {
      id
      retrievedAt
      specRuns(first: 4, fromBranch: $fromBranch) {
        nodes {
          id
          runNumber
          testsFailed{
            min
            max
          }
          testsPassed{
            min
            max
          }
          testsPending{
            min
            max
          }
          testsSkipped{
            min
            max
          }
          createdAt
          groupCount
          specDuration{
            min
            max
          }
          status
          url
        }
      }
    }
  }
}
`;
    const runs = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return ((_b = (_a = props.gql) == null ? void 0 : _a.data) == null ? void 0 : _b.__typename) === "CloudProjectSpec" ? (_f = (_e = (_d = (_c = props.gql) == null ? void 0 : _c.data) == null ? void 0 : _d.specRuns) == null ? void 0 : _e.nodes) != null ? _f : [] : [];
    });
    const dotClasses = computed(() => {
      var _a, _b;
      const statuses = ["placeholder", "placeholder", "placeholder"];
      if (runs.value && runs.value.length > 0) {
        for (let i = 1; i < Math.min(runs.value.length, 4); i++) {
          statuses[i - 1] = (_b = (_a = runs.value[i]) == null ? void 0 : _a.status) != null ? _b : "";
        }
      }
      return statuses.reverse().map((s) => {
        switch (s) {
          case "PASSED":
            return "icon-light-jade-400";
          case "RUNNING":
            return "icon-light-indigo-400";
          case "FAILED":
            return "icon-light-red-400";
          case "ERRORED":
          case "TIMEDOUT":
            return "icon-light-orange-400";
          case "UNCLAIMED":
          case "NOTESTS":
            return "icon-light-gray-400";
          case "CANCELLED":
          default:
            return "icon-light-gray-300";
        }
      });
    });
    const latestRun = computed(() => {
      var _a, _b;
      return (_b = (_a = runs.value) == null ? void 0 : _a[0]) != null ? _b : null;
    });
    const latestDot = computed(() => {
      var _a;
      const status = (_a = latestRun.value) == null ? void 0 : _a.status;
      switch (status) {
        case "PASSED":
          return { icon: PassedIcon, spin: false, status };
        case "RUNNING":
          return { icon: RunningIcon, spin: true, status };
        case "UNCLAIMED":
          return { icon: QueuedIcon, spin: false, status };
        case "FAILED":
          return { icon: FailedIcon, spin: false, status };
        case "ERRORED":
        case "TIMEDOUT":
          return { icon: ErroredIcon, spin: false, status };
        case "NOTESTS":
        case "CANCELLED":
          return { icon: CancelledIcon, spin: false, status };
        default:
          return { icon: PlaceholderIcon, spin: false, status: "PLACEHOLDER" };
      }
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_i_cy_dot_solid_x4 = __unplugin_components_0$1;
      return openBlock(), createBlock(resolveDynamicComponent(unref(latestRun) ? _sfc_main$i : "div"), {
        placement: "top",
        "is-interactive": true,
        class: "h-16px",
        "hide-delay": 0,
        "show-group": (_a = props.gql) == null ? void 0 : _a.id,
        distance: 7,
        "popper-class": "RunStatusDots_Tooltip"
      }, {
        popper: withCtx(() => {
          var _a2;
          return [
            unref(latestRun) ? (openBlock(), createBlock(_sfc_main$h, {
              key: 0,
              href: (_a2 = unref(latestRun).url) != null ? _a2 : "#",
              "use-default-hocus": false
            }, {
              default: withCtx(() => [
                createVNode(SpecRunSummary, {
                  run: unref(latestRun),
                  "spec-file-no-extension": props.specFileName,
                  "spec-file-extension": props.specFileExtension
                }, null, 8, ["run", "spec-file-no-extension", "spec-file-extension"])
              ]),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ];
        }),
        default: withCtx(() => {
          var _a2;
          return [
            (openBlock(), createBlock(resolveDynamicComponent(unref(latestRun) ? _sfc_main$h : "div"), {
              href: ((_a2 = unref(latestRun)) == null ? void 0 : _a2.url) || "#",
              "use-default-hocus": false
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_1$d, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dotClasses), (dot, i) => {
                    return openBlock(), createElementBlock("div", {
                      key: i,
                      class: "ml-4px"
                    }, [
                      createVNode(_component_i_cy_dot_solid_x4, {
                        width: "4",
                        height: "4",
                        class: normalizeClass(dot),
                        "data-cy": "run-status-dot-" + i
                      }, null, 8, ["class", "data-cy"])
                    ]);
                  }), 128)),
                  createBaseVNode("div", null, [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(latestDot).icon), {
                      width: "16",
                      height: "16",
                      class: normalizeClass([{ "animate-spin": unref(latestDot).spin }, "ml-4px"]),
                      "data-cy": "run-status-dot-latest",
                      "data-cy-run-status": unref(latestDot).status
                    }, null, 8, ["class", "data-cy-run-status"]))
                  ])
                ])
              ]),
              _: 1
            }, 8, ["href"]))
          ];
        }),
        _: 1
      }, 8, ["show-group"]);
    };
  }
});
const _hoisted_1$c = {
  key: 0,
  class: "h-full grid text-gray-700 justify-end items-center",
  "data-cy": "average-duration"
};
const _hoisted_2$9 = {
  key: 1,
  class: "h-full grid text-gray-400 justify-end items-center"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment AverageDuration on RemoteFetchableCloudProjectSpecResult {
  id
  data {
    ... on CloudProjectSpecNotFound {
      retrievedAt
    }
    ... on CloudProjectSpec {
      id
      retrievedAt
      averageDuration(fromBranch: $fromBranch)
    }
  }
}
`;
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return ((_b = (_a = props.gql) == null ? void 0 : _a.data) == null ? void 0 : _b.__typename) === "CloudProjectSpec" && ((_d = (_c = props.gql) == null ? void 0 : _c.data) == null ? void 0 : _d.averageDuration) ? (openBlock(), createElementBlock("div", _hoisted_1$c, toDisplayString(unref(getDurationString)(props.gql.data.averageDuration)), 1)) : (openBlock(), createElementBlock("div", _hoisted_2$9, " -- "));
    };
  }
});
const _hoisted_1$b = { "data-cy": "specs-list-row" };
const _hoisted_2$8 = {
  "data-cy": "specs-list-row-file",
  class: "col-span-4"
};
const _hoisted_3$5 = {
  "data-cy": "specs-list-row-git-info",
  class: "col-span-2"
};
const _hoisted_4$3 = { class: "invisible md:col-span-2 md:visible" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    isLeaf: { type: Boolean },
    route: null
  },
  emits: ["toggleRow"],
  setup(__props, { emit }) {
    const lazyRender = useTimeout(50);
    function handleCtrlClick() {
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        (openBlock(), createBlock(resolveDynamicComponent(__props.isLeaf ? "RouterLink" : "div"), {
          class: "h-full outline-none border-gray-50 ring-inset grid pr-20px grid-cols-7 group md:grid-cols-9 focus:outline-transparent focus-within:ring-indigo-300 focus-within:ring-1 children:cursor-pointer",
          to: __props.route,
          "data-cy": __props.isLeaf ? "spec-item-link" : "spec-item-directory",
          onClick: [
            _cache[0] || (_cache[0] = ($event) => emit("toggleRow")),
            withModifiers(handleCtrlClick, ["meta", "prevent"]),
            withModifiers(handleCtrlClick, ["ctrl", "prevent"])
          ]
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$8, [
              renderSlot(_ctx.$slots, "file")
            ]),
            unref(lazyRender) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("div", _hoisted_3$5, [
                renderSlot(_ctx.$slots, "git-info")
              ]),
              createBaseVNode("div", null, [
                renderSlot(_ctx.$slots, "latest-runs")
              ]),
              createBaseVNode("div", _hoisted_4$3, [
                renderSlot(_ctx.$slots, "average-duration")
              ])
            ], 64)) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["to", "data-cy", "onClick"]))
      ]);
    };
  }
});
const _hoisted_1$a = ["data-cy", "aria-expanded"];
const _hoisted_2$7 = ["title"];
const _hoisted_3$4 = { class: "sr-only" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    name: { default: "" },
    expanded: { type: Boolean, default: false },
    indexes: { default: () => [] },
    depth: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_i_cy_chevron_down_small_x16 = __unplugin_components_1$3;
      return openBlock(), createElementBlock("button", {
        class: "h-full grid gap-8px grid-cols-[14px,16px,auto] items-center focus:outline-none",
        "data-cy": `row-directory-depth-${__props.depth}`,
        "aria-expanded": __props.expanded
      }, [
        createVNode(_component_i_cy_chevron_down_small_x16, {
          class: normalizeClass(["mr-8px text-sm icon-dark-gray-300 group-hocus:icon-dark-gray-700", { "transform rotate-270": !__props.expanded }])
        }, null, 8, ["class"]),
        (openBlock(), createBlock(resolveDynamicComponent(unref(__unplugin_components_1$2)), { class: "icon-dark-white icon-light-gray-200" })),
        createBaseVNode("div", {
          title: props.name,
          class: "text-gray-600 truncate"
        }, [
          createVNode(_sfc_main$l, {
            text: props.name,
            indexes: props.indexes,
            class: "font-medium",
            "highlight-classes": "text-gray-1000"
          }, null, 8, ["text", "indexes"])
        ], 8, _hoisted_2$7),
        createBaseVNode("span", _hoisted_3$4, toDisplayString(__props.expanded ? "collapse" : "expand"), 1)
      ], 8, _hoisted_1$a);
    };
  }
});
const _hoisted_1$9 = {
  class: "h-full grid gap-8px grid-cols-[16px,auto,auto] items-center",
  "data-cy": "spec-item"
};
const _hoisted_2$6 = ["title"];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    fileName: null,
    extension: null,
    indexes: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_i_cy_document_blank_x16 = DocumentIconBlank;
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createVNode(_component_i_cy_document_blank_x16, { class: "icon-light-gray-50 icon-dark-gray-200 group-hocus:icon-light-indigo-200 group-hocus:icon-dark-indigo-400" }),
        createBaseVNode("div", {
          title: __props.fileName + __props.extension,
          class: "text-gray-400 text-indigo-500 truncate group-hocus:text-indigo-600"
        }, [
          createVNode(_sfc_main$l, {
            text: __props.fileName,
            indexes: __props.indexes.filter((idx) => idx < __props.fileName.length),
            class: "font-medium text-indigo-500 group-hocus:text-indigo-700",
            "highlight-classes": "text-gray-1000"
          }, null, 8, ["text", "indexes"]),
          createVNode(_sfc_main$l, {
            text: __props.extension,
            indexes: __props.indexes.filter((idx) => idx >= __props.fileName.length).map((idx) => idx - __props.fileName.length),
            class: "font-light group-hocus:text-gray-400",
            "highlight-classes": "text-gray-1000"
          }, null, 8, ["text", "indexes"])
        ], 8, _hoisted_2$6)
      ]);
    };
  }
});
const _hoisted_1$8 = {
  width: "160",
  height: "160",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<path d="M71.4 47.379H5.334v79.884h66.068V47.379Z" fill="#D0D2E0"></path><path d="M58.33 59.353H18.388v5.384H58.33v-5.384ZM58.33 71.249H18.388v5.383H58.33V71.25ZM58.33 82.779H18.388v5.384H58.33v-5.384Z" fill="#9095AD"></path><path d="M113.392 22.667H49.023v73.31h64.369v-73.31ZM128.689 106.013l-5.502 5.503 6.715 6.715 5.503-5.503-6.716-6.715Z" fill="#6470F3"></path><path d="m127.311 120.788 10.646-10.646 14.992 14.992a2.433 2.433 0 0 1 0 3.436l-7.199 7.199a2.426 2.426 0 0 1-3.436 0l-14.992-14.992-.011.011Z" fill="#D0D2E0"></path><circle cx="106.667" cy="89.333" r="20" fill="#9095AD"></circle><path d="M125.954 70.375a27.161 27.161 0 0 1 5.89 29.597 27.153 27.153 0 0 1-25.091 16.767 27.154 27.154 0 0 1-25.09-16.767 27.158 27.158 0 0 1 44.291-29.597Zm-31.43 6.988a17.295 17.295 0 1 0 24.458 0 17.283 17.283 0 0 0-18.848-3.753 17.28 17.28 0 0 0-5.61 3.753ZM69.75 34.514a6.066 6.066 0 0 1 1.953 4.765 5.607 5.607 0 0 1-1.938 4.605 7.94 7.94 0 0 1-5.145 1.589l-.127 2.366h-3.78l-.159-5.225h1.255a9.528 9.528 0 0 0 4.113-.715 2.62 2.62 0 0 0 1.445-2.589 2.89 2.89 0 0 0-.778-2.144 2.843 2.843 0 0 0-2.144-.81 2.956 2.956 0 0 0-2.192.779 2.827 2.827 0 0 0-.794 2.112h-4.066a6.542 6.542 0 0 1 .81-3.351 5.734 5.734 0 0 1 2.446-2.303 8.163 8.163 0 0 1 3.796-.842 7.464 7.464 0 0 1 5.304 1.763Zm-9.085 19.98a2.383 2.383 0 0 1-.746-1.811 2.35 2.35 0 0 1 .746-1.795 2.7 2.7 0 0 1 1.922-.73 2.59 2.59 0 0 1 1.874.73 2.413 2.413 0 0 1 .746 1.795 2.445 2.445 0 0 1-.746 1.81 2.572 2.572 0 0 1-1.874.715 2.683 2.683 0 0 1-2.001-.715h.08Z" fill="#D0D2E0"></path>', 6);
const _hoisted_8$1 = [
  _hoisted_2$5
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_8$1);
}
var NoResultsIllustration = { render: render$1 };
const _hoisted_1$7 = {
  key: 0,
  "data-testid": "no-results",
  class: "text-center"
};
const _hoisted_2$4 = { class: "leading-normal text-gray-500 text-18px" };
const _hoisted_3$3 = {
  key: 0,
  class: "text-purple-500 truncate"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    search: null,
    message: null,
    emptySearch: { type: Boolean }
  },
  emits: ["clear"],
  setup(__props, { emit }) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      const _component_i_cy_delete_x12 = __unplugin_components_0$3;
      return __props.search || __props.emptySearch ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(unref(NoResultsIllustration), {
          class: "mx-auto",
          alt: ""
        }),
        createBaseVNode("p", _hoisted_2$4, [
          createTextVNode(toDisplayString(__props.message || unref(t)("noResults.defaultMessage")) + " ", 1),
          __props.search ? (openBlock(), createElementBlock("span", _hoisted_3$3, toDisplayString(__props.search), 1)) : createCommentVNode("", true)
        ]),
        createVNode(_sfc_main$j, {
          "data-cy": "no-results-clear",
          class: "mx-auto mt-20px",
          size: "lg",
          variant: "outline",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("clear"))
        }, {
          prefix: withCtx(() => [
            createVNode(_component_i_cy_delete_x12, { class: "w-12px icon-dark-gray-400" })
          ]),
          default: withCtx(() => [
            createTextVNode(" " + toDisplayString(unref(t)("noResults.clearSearch")), 1)
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$6 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M15 3C15 1.89543 14.1046 1 13 1H3C1.89543 1 1 1.89543 1 3V4H15V3Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M15 3C15 1.89543 14.1046 1 13 1H3C1.89543 1 1 1.89543 1 3V4H15V3Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M1 4V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V4M1 4V3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V4M1 4H15M10 8L11.5 9.5L10 11M6 8L4.5 9.5L6 11",
  stroke: "#1B1E2E",
  class: "icon-dark",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_5$2 = [
  _hoisted_2$3,
  _hoisted_3$2,
  _hoisted_4$2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_5$2);
}
var __unplugin_components_0 = { name: "cy-code-editor_x16", render };
const _hoisted_1$5 = { class: "w-full p-24px sm:min-w-640px" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    const props = __props;
    gql`
fragment SpecPatternModal on CurrentProject {
  id
  ...SpecPatterns
  ...OpenConfigFileInIDE
}
`;
    const { t } = useI18n();
    return (_ctx, _cache) => {
      const _component_i_cy_code_editor_x16 = __unplugin_components_0;
      return openBlock(), createBlock(_sfc_main$o, {
        class: "transition-all transition duration-200",
        variant: "bare",
        title: unref(t)("components.specPatternModal.title"),
        "model-value": __props.show,
        "data-cy": "spec-pattern-modal",
        "help-link": "https://on.cypress.io/test-type-options",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => emits("close"))
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$5, [
            createVNode(_sfc_main$m, {
              gql: props.gql,
              class: "border-px rounded border-gray-100"
            }, null, 8, ["gql"])
          ]),
          createVNode(StandardModalFooter, { class: "flex gap-16px items-center" }, {
            default: withCtx(() => [
              createVNode(_sfc_main$n, {
                gql: props.gql
              }, {
                default: withCtx(({ onClick }) => [
                  createVNode(_sfc_main$j, {
                    size: "lg",
                    "data-cy": "open-config-file",
                    onClick
                  }, {
                    prefix: withCtx(() => [
                      createVNode(_component_i_cy_code_editor_x16, { class: "icon-dark-white" })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" " + toDisplayString(unref(t)("createSpec.updateSpecPattern")), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              }, 8, ["gql"]),
              createVNode(_sfc_main$j, {
                variant: "outline",
                size: "lg",
                onClick: _cache[0] || (_cache[0] = ($event) => emits("close"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("components.modal.dismiss")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title", "model-value"]);
    };
  }
});
var SpecsList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$4 = { class: "p-24px spec-container" };
const _hoisted_2$2 = { class: "mb-24px" };
const _hoisted_3$1 = { class: "mb-24px" };
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode(" Status Page ");
const _hoisted_5$1 = {
  class: "flex col-span-4 items-center justify-between",
  "data-cy": "specs-testing-type-header"
};
const _hoisted_6$1 = { class: "flex col-span-2 items-center justify-between truncate" };
const _hoisted_7 = { class: "flex items-center justify-end whitespace-nowrap" };
const _hoisted_8 = { class: "hidden items-center justify-end truncate md:flex md:col-span-2" };
const _hoisted_9 = { class: "h-full grid justify-items-end items-center" };
const _hoisted_10 = {
  key: 1,
  class: "bg-gray-50 rounded-[20px] h-24px w-full animate-pulse",
  "data-cy": "run-status-dots-loading"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    mostRecentUpdate: { default: null }
  },
  emits: ["showCreateSpecModal"],
  setup(__props, { emit }) {
    var _a;
    const props = __props;
    const route = useRoute();
    const { t } = useI18n();
    const isOnline = useOnline();
    const isOffline = ref(false);
    watch(isOnline, (newIsOnlineValue) => isOffline.value = !newIsOnlineValue, { immediate: true });
    const isProjectConnectOpen = ref(false);
    const isLoginOpen = ref(false);
    const loginUtmMedium = ref("");
    const showLogin = (utmMedium) => {
      loginUtmMedium.value = utmMedium;
      isLoginOpen.value = true;
    };
    const showConnectToProject = () => {
      isProjectConnectOpen.value = true;
    };
    const isGitAvailable = computed(() => {
      var _a2, _b;
      return !((_b = (_a2 = props.gql.currentProject) == null ? void 0 : _a2.specs.some((s) => {
        var _a3;
        return ((_a3 = s.gitInfo) == null ? void 0 : _a3.statusType) === "noGitInfo";
      })) != null ? _b : false);
    });
    const hasCloudErrors = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.gql.currentProject) == null ? void 0 : _a2.specs.some((s) => {
        var _a3;
        return ((_a3 = s.cloudSpec) == null ? void 0 : _a3.fetchingStatus) === "ERRORED";
      })) != null ? _b : false;
    });
    const shouldShowFetchError = ref(false);
    watch(hasCloudErrors, (wasErrorFound) => shouldShowFetchError.value = wasErrorFound, { immediate: true });
    gql`
subscription SpecsList_GitInfoUpdated {
  gitInfoChange {
    id
    absolute
    gitInfo {
      ...SpecListRow
    }
  }
}
`;
    gql`
fragment SpecsList on Spec {
  id
  name
  specType
  absolute
  baseName
  fileName
  specFileExtension
  fileExtension
  relative
  gitInfo {
    ...SpecListRow
  }
  cloudSpec(name: "cloudSpec") @include(if: $hasBranch) {
    id
    fetchingStatus
    ...AverageDuration
    ...RunStatusDots
  }
}
`;
    gql`
fragment Specs_SpecsList on Query {
  currentProject {
    id
    projectRoot
    currentTestingType
    cloudProject {
      __typename
      ... on CloudProject {
        id
      }
    }
    specs {
      id
      ...SpecsList
    }
    config
    ...SpecPatternModal
  }
  ...SpecHeaderCloudDataTooltip
}
`;
    useSubscription({ query: SpecsList_GitInfoUpdatedDocument });
    const showSpecPatternModal = ref(false);
    const isAlertOpen = ref(!!((_a = route.params) == null ? void 0 : _a.unrunnable));
    const cachedSpecs = useCachedSpecs(computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.gql.currentProject) == null ? void 0 : _a2.specs) != null ? _b : [];
    }));
    const search = ref("");
    const specsListInputRef = ref();
    const debouncedSearchString = useDebounce(search, 200);
    const specsListInputRefFn = () => specsListInputRef;
    function handleClear() {
      var _a2;
      search.value = "";
      (_a2 = specsListInputRef.value) == null ? void 0 : _a2.focus();
    }
    const specs = computed(() => {
      const fuzzyFoundSpecs = cachedSpecs.value.map(makeFuzzyFoundSpec);
      if (!debouncedSearchString.value) {
        return fuzzyFoundSpecs;
      }
      return fuzzySortSpecs(fuzzyFoundSpecs, debouncedSearchString.value);
    });
    const treeExpansionCache = ref(/* @__PURE__ */ new Map());
    watch([() => search.value, () => specs.value.length], () => treeExpansionCache.value.clear());
    const collapsible = computed(() => {
      return useCollapsibleTree(buildSpecTree(specs.value), { dropRoot: true, cache: treeExpansionCache.value });
    });
    const treeSpecList = computed(() => collapsible.value.tree.filter((item) => !item.hidden.value));
    const { containerProps, list, wrapperProps, scrollTo } = useVirtualList(treeSpecList, { itemHeight: 40, overscan: 10 });
    const scrollbarOffset = ref(0);
    useResizeObserver(containerProps.ref, (entries) => {
      const specListContainer = entries == null ? void 0 : entries[0];
      const containerElement = specListContainer == null ? void 0 : specListContainer.target;
      if (containerElement) {
        const displayedScrollbarWidth = containerElement.offsetWidth - containerElement.clientWidth;
        scrollbarOffset.value = displayedScrollbarWidth;
      } else {
        scrollbarOffset.value = 0;
      }
    });
    watch(() => debouncedSearchString.value, () => scrollTo(0));
    function getIdIfDirectory(row) {
      if (row.data.isLeaf && row.data) {
        return void 0;
      }
      return `speclist-${row.data.data.relative.replace(row.data.data.baseName, "")}`;
    }
    gql`
mutation CloudData_Refetch ($ids: [ID!]!) {
  loadRemoteFetchables(ids: $ids){
    id
    fetchingStatus
  }
}
`;
    const refetchMutation = useMutation(CloudData_RefetchDocument);
    const isProjectDisconnected = computed(() => {
      var _a2, _b, _c;
      return ((_a2 = props.gql.cloudViewer) == null ? void 0 : _a2.id) === void 0 || ((_c = (_b = props.gql.currentProject) == null ? void 0 : _b.cloudProject) == null ? void 0 : _c.__typename) !== "CloudProject";
    });
    const refetch = async (ids) => {
      if (!isProjectDisconnected.value && !refetchMutation.fetching.value) {
        await refetchMutation.executeMutation({ ids });
      }
    };
    function shouldRefetch(item) {
      var _a2, _b;
      if (isOffline.value) {
        return false;
      }
      if (item.fetchingStatus === "NOT_FETCHED" || item.fetchingStatus === void 0) {
        return true;
      }
      if (props.mostRecentUpdate) {
        if ((((_a2 = item.data) == null ? void 0 : _a2.__typename) === "CloudProjectSpecNotFound" || ((_b = item.data) == null ? void 0 : _b.__typename) === "CloudProjectSpec") && (item.data.retrievedAt && props.mostRecentUpdate > item.data.retrievedAt)) {
          return true;
        }
      }
      return false;
    }
    function getIdsToRefetch() {
      var _a2;
      return (_a2 = list.value.map((spec) => {
        var _a3;
        return (_a3 = spec.data.data) == null ? void 0 : _a3.cloudSpec;
      }).filter((cloudSpec) => Boolean(cloudSpec && shouldRefetch(cloudSpec))).map((cloudSpec) => cloudSpec.id)) != null ? _a2 : [];
    }
    async function fetchMissingOrErroneousItems() {
      const cloudSpecIds = getIdsToRefetch();
      if (cloudSpecIds.length > 0) {
        await refetch(cloudSpecIds);
      }
    }
    const displayedSpecIds = computed(() => list.value.map((v) => {
      var _a2, _b;
      return (_b = (_a2 = v.data.data) == null ? void 0 : _a2.cloudSpec) == null ? void 0 : _b.id;
    }).join("|"));
    const debouncedDisplayedSpecIds = useDebounce(displayedSpecIds, 200);
    watch([debouncedDisplayedSpecIds, isOnline, isProjectDisconnected, () => props.mostRecentUpdate], fetchMissingOrErroneousItems);
    async function refetchFailedCloudData() {
      var _a2, _b;
      const latestRunsIds = (_b = (_a2 = props.gql.currentProject) == null ? void 0 : _a2.specs.map((s) => s.cloudSpec).filter((cloudSpec) => Boolean((cloudSpec == null ? void 0 : cloudSpec.fetchingStatus) === "ERRORED")).map((cloudSpec) => cloudSpec.id)) != null ? _b : [];
      await refetchMutation.executeMutation({ ids: [...latestRunsIds] });
    }
    function refreshPage() {
      location.reload();
    }
    return (_ctx, _cache) => {
      var _a2;
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$4, [
          isAlertOpen.value ? (openBlock(), createBlock(_sfc_main$q, {
            key: 0,
            modelValue: isAlertOpen.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isAlertOpen.value = $event),
            status: "error",
            title: unref(t)("specPage.noSpecError.title"),
            class: "mb-16px",
            icon: unref(WarningIcon),
            dismissible: ""
          }, {
            default: withCtx(() => [
              createBaseVNode("p", _hoisted_2$2, [
                createTextVNode(toDisplayString(unref(t)("specPage.noSpecError.intro")) + " ", 1),
                createVNode(_sfc_main$p, { variant: "error" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(route).params.unrunnable), 1)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("p", null, toDisplayString(unref(t)("specPage.noSpecError.explainer")), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "title", "icon"])) : createCommentVNode("", true),
          isOffline.value ? (openBlock(), createBlock(_sfc_main$q, {
            key: 1,
            modelValue: isOffline.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isOffline.value = $event),
            "data-cy": "offline-alert",
            status: "warning",
            title: unref(t)("specPage.offlineWarning.title"),
            class: "mb-16px",
            icon: unref(WarningIcon),
            dismissible: ""
          }, {
            default: withCtx(() => [
              createBaseVNode("p", _hoisted_3$1, toDisplayString(unref(t)("specPage.offlineWarning.explainer")), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "title", "icon"])) : createCommentVNode("", true),
          shouldShowFetchError.value ? (openBlock(), createBlock(_sfc_main$q, {
            key: 2,
            modelValue: shouldShowFetchError.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => shouldShowFetchError.value = $event),
            status: "warning",
            title: unref(t)("specPage.fetchFailedWarning.title"),
            class: "mb-16px",
            icon: unref(WarningIcon),
            dismissible: ""
          }, {
            default: withCtx(() => [
              createBaseVNode("p", null, toDisplayString(unref(t)("specPage.fetchFailedWarning.explainer1")), 1),
              createBaseVNode("p", null, [
                createVNode(_component_i18n_t, {
                  scope: "global",
                  keypath: "specPage.fetchFailedWarning.explainer2"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$h, {
                      href: "https://www.cypressstatus.com",
                      class: "font-medium text-indigo-500 contents group-hocus:text-indigo-600"
                    }, {
                      default: withCtx(() => [
                        _hoisted_4$1
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_sfc_main$j, {
                "prefix-icon": unref(RefreshIcon),
                class: "mt-24px",
                onClick: refetchFailedCloudData
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("specPage.fetchFailedWarning.refreshButton")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon"])
            ]),
            _: 1
          }, 8, ["modelValue", "title", "icon"])) : createCommentVNode("", true),
          createVNode(SpecsListHeader, {
            modelValue: search.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => search.value = $event),
            "specs-list-input-ref-fn": specsListInputRefFn,
            class: "pb-32px",
            "result-count": unref(specs).length,
            "spec-count": unref(cachedSpecs).length,
            onShowCreateSpecModal: _cache[4] || (_cache[4] = ($event) => emit("showCreateSpecModal")),
            onShowSpecPatternModal: _cache[5] || (_cache[5] = ($event) => showSpecPatternModal.value = true)
          }, null, 8, ["modelValue", "result-count", "spec-count"]),
          props.gql.currentProject ? (openBlock(), createBlock(_sfc_main$5, {
            key: 3,
            show: showSpecPatternModal.value,
            gql: props.gql.currentProject,
            onClose: _cache[6] || (_cache[6] = ($event) => showSpecPatternModal.value = false)
          }, null, 8, ["show", "gql"])) : createCommentVNode("", true),
          unref(specs).length ? (openBlock(), createElementBlock("div", {
            key: 4,
            class: "mb-4 grid grid-cols-7 md:grid-cols-9 children:font-medium children:text-gray-800",
            style: normalizeStyle(`padding-right: ${scrollbarOffset.value + 20}px`)
          }, [
            createBaseVNode("div", _hoisted_5$1, toDisplayString(((_a2 = props.gql.currentProject) == null ? void 0 : _a2.currentTestingType) === "component" ? unref(t)("specPage.componentSpecsHeader") : unref(t)("specPage.e2eSpecsHeader")), 1),
            createBaseVNode("div", _hoisted_6$1, [
              createVNode(_sfc_main$g, { "is-git-available": unref(isGitAvailable) }, null, 8, ["is-git-available"])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_sfc_main$f, {
                gql: props.gql,
                mode: "LATEST_RUNS",
                "data-cy": "latest-runs-header",
                onShowLogin: _cache[7] || (_cache[7] = ($event) => showLogin("Specs Latest Runs Tooltip")),
                onShowConnectToProject: showConnectToProject
              }, null, 8, ["gql"])
            ]),
            createBaseVNode("div", _hoisted_8, [
              createVNode(_sfc_main$f, {
                gql: props.gql,
                mode: "AVG_DURATION",
                "data-cy": "average-duration-header",
                onShowLogin: _cache[8] || (_cache[8] = ($event) => showLogin("Specs Average Duration Tooltip")),
                onShowConnectToProject: showConnectToProject
              }, null, 8, ["gql"])
            ])
          ], 4)) : createCommentVNode("", true),
          createBaseVNode("div", mergeProps({
            class: ["pb-32px spec-list-container", unref(specs).length ? "grid" : "hidden"]
          }, unref(containerProps)), [
            createBaseVNode("div", mergeProps(unref(wrapperProps), { class: "divide-y-1 children:h-40px" }), [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (row) => {
                var _a3, _b, _c;
                return openBlock(), createBlock(_sfc_main$9, {
                  id: getIdIfDirectory(row),
                  key: row.index,
                  "data-cy": row.data.isLeaf ? "spec-list-file" : "spec-list-directory",
                  "data-cy-row": (_a3 = row.data.data) == null ? void 0 : _a3.baseName,
                  "is-leaf": row.data.isLeaf,
                  route: { path: "/specs/runner", query: { file: (_c = (_b = row.data.data) == null ? void 0 : _b.relative) == null ? void 0 : _c.replace(/\\/g, "/") } },
                  onToggleRow: row.data.toggle
                }, {
                  file: withCtx(() => {
                    var _a4, _b2, _c2;
                    return [
                      row.data.isLeaf ? (openBlock(), createBlock(_sfc_main$7, {
                        key: 0,
                        "file-name": ((_a4 = row.data.data) == null ? void 0 : _a4.fileName) || row.data.name,
                        extension: ((_b2 = row.data.data) == null ? void 0 : _b2.specFileExtension) || "",
                        indexes: (_c2 = row.data.data) == null ? void 0 : _c2.fileIndexes,
                        style: normalizeStyle({ paddingLeft: `${(row.data.depth - 2) * 10 + 22}px` })
                      }, null, 8, ["file-name", "extension", "indexes", "style"])) : (openBlock(), createBlock(_sfc_main$8, {
                        key: 1,
                        name: row.data.name,
                        expanded: unref(treeSpecList)[row.index].expanded.value,
                        depth: row.data.depth - 2,
                        style: normalizeStyle({ paddingLeft: `${(row.data.depth - 2) * 10}px` }),
                        indexes: unref(getDirIndexes)(row.data),
                        "aria-controls": getIdIfDirectory(row),
                        onClick: withModifiers(row.data.toggle, ["stop"])
                      }, null, 8, ["name", "expanded", "depth", "style", "indexes", "aria-controls", "onClick"]))
                    ];
                  }),
                  "git-info": withCtx(() => {
                    var _a4, _b2;
                    return [
                      row.data.isLeaf && ((_a4 = row.data.data) == null ? void 0 : _a4.gitInfo) ? (openBlock(), createBlock(_sfc_main$d, {
                        key: 0,
                        gql: (_b2 = row.data.data) == null ? void 0 : _b2.gitInfo
                      }, null, 8, ["gql"])) : createCommentVNode("", true)
                    ];
                  }),
                  "latest-runs": withCtx(() => {
                    var _a4, _b2, _c2, _d, _e;
                    return [
                      createBaseVNode("div", _hoisted_9, [
                        row.data.isLeaf && row.data.data && (((_a4 = row.data.data.cloudSpec) == null ? void 0 : _a4.data) || ((_b2 = row.data.data.cloudSpec) == null ? void 0 : _b2.fetchingStatus) !== "FETCHING") ? (openBlock(), createBlock(_sfc_main$b, {
                          key: 0,
                          gql: (_c2 = row.data.data.cloudSpec) != null ? _c2 : null,
                          "spec-file-extension": row.data.data.fileExtension,
                          "spec-file-name": row.data.data.fileName
                        }, null, 8, ["gql", "spec-file-extension", "spec-file-name"])) : row.data.isLeaf && ((_e = (_d = row.data.data) == null ? void 0 : _d.cloudSpec) == null ? void 0 : _e.fetchingStatus) === "FETCHING" ? (openBlock(), createElementBlock("div", _hoisted_10)) : createCommentVNode("", true)
                      ])
                    ];
                  }),
                  "average-duration": withCtx(() => {
                    var _a4, _b2;
                    return [
                      row.data.isLeaf ? (openBlock(), createBlock(_sfc_main$a, {
                        key: 0,
                        gql: (_b2 = (_a4 = row.data.data) == null ? void 0 : _a4.cloudSpec) != null ? _b2 : null
                      }, null, 8, ["gql"])) : createCommentVNode("", true)
                    ];
                  }),
                  _: 2
                }, 1032, ["id", "data-cy", "data-cy-row", "is-leaf", "route", "onToggleRow"]);
              }), 128))
            ], 16)
          ], 16),
          withDirectives(createVNode(_sfc_main$6, {
            search: search.value,
            message: unref(t)("specPage.noResultsMessage"),
            class: "mt-56px",
            onClear: handleClear
          }, null, 8, ["search", "message"]), [
            [vShow, !unref(specs).length]
          ])
        ]),
        createVNode(_sfc_main$r, {
          modelValue: isLoginOpen.value,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => isLoginOpen.value = $event),
          gql: props.gql,
          "utm-medium": loginUtmMedium.value,
          onLoggedin: refreshPage
        }, null, 8, ["modelValue", "gql", "utm-medium"]),
        isProjectConnectOpen.value ? (openBlock(), createBlock(_sfc_main$s, {
          key: 0,
          gql: props.gql,
          onCancel: _cache[10] || (_cache[10] = ($event) => isProjectConnectOpen.value = false),
          onSuccess: refreshPage
        }, null, 8, ["gql"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var SpecsList = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b770b1d4"]]);
const _hoisted_1$3 = { class: "border-t-1 mt-32px text-center pt-32px" };
const _hoisted_2$1 = {
  "data-cy": "no-specs-message",
  class: "leading-normal mb-16px text-gray-600 text-16px"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  emits: ["showCreateSpecModal"],
  setup(__props, { emit }) {
    var _a;
    const props = __props;
    const { t } = useI18n();
    gql`
fragment CreateSpecContent on Query {
  ...CreateSpecCards
  currentProject {
    id
    ...SpecPatternModal
  }
}
`;
    const filteredGenerators = getFilteredGeneratorList((_a = props.gql.currentProject) == null ? void 0 : _a.currentTestingType);
    const selectSpecCard = (id) => {
      emit("showCreateSpecModal", id);
    };
    const showSpecPatternModal = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        props.gql.currentProject ? (openBlock(), createBlock(_sfc_main$5, {
          key: 0,
          show: showSpecPatternModal.value,
          gql: props.gql.currentProject,
          onClose: _cache[0] || (_cache[0] = ($event) => showSpecPatternModal.value = false)
        }, null, 8, ["show", "gql"])) : createCommentVNode("", true),
        createVNode(_sfc_main$t, {
          "data-cy": "create-spec-page-cards",
          gql: props.gql,
          generators: unref(filteredGenerators),
          onSelect: selectSpecCard
        }, null, 8, ["gql", "generators"]),
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("p", _hoisted_2$1, toDisplayString(unref(t)("createSpec.noSpecsMessage")), 1),
          createVNode(_sfc_main$j, {
            "data-cy": "view-spec-pattern",
            variant: "outline",
            "prefix-icon-class": "icon-light-gray-50 icon-dark-gray-400",
            "prefix-icon": unref(SettingsIcon),
            class: "mx-auto duration-300 hocus:ring-gray-50 hocus:border-gray-200",
            onClick: _cache[1] || (_cache[1] = ($event) => showSpecPatternModal.value = true)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("createSpec.viewSpecPatternButton")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])
        ])
      ], 64);
    };
  }
});
const _hoisted_1$2 = { class: "flex mt-32px gap-16px justify-center" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  emits: ["showCreateSpecModal"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment CustomPatternNoSpecContent on CurrentProject {
  id
  ...SpecPatterns
  ...OpenConfigFileInIDE
  configFileAbsolutePath
}
`;
    return (_ctx, _cache) => {
      const _component_i_cy_code_editor_x16 = __unplugin_components_0;
      const _component_i_cy_add_large_x16 = __unplugin_components_1;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$m, {
          gql: props.gql
        }, null, 8, ["gql"]),
        createBaseVNode("div", _hoisted_1$2, [
          createVNode(_sfc_main$n, {
            gql: props.gql
          }, {
            default: withCtx(({ onClick }) => [
              createVNode(_sfc_main$j, {
                size: "lg",
                onClick
              }, {
                prefix: withCtx(() => [
                  createVNode(_component_i_cy_code_editor_x16, { class: "icon-dark-white" })
                ]),
                default: withCtx(() => [
                  createTextVNode(" " + toDisplayString(unref(t)("createSpec.updateSpecPattern")), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]),
            _: 1
          }, 8, ["gql"]),
          createVNode(_sfc_main$j, {
            size: "lg",
            variant: "outline",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("showCreateSpecModal"))
          }, {
            prefix: withCtx(() => [
              createVNode(_component_i_cy_add_large_x16, { class: "icon-dark-gray-500" })
            ]),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(unref(t)("createSpec.newSpec")), 1)
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "mx-auto text-center max-w-642px py-40px"
};
const _hoisted_2 = { class: "m-x-auto max-w-600px" };
const _hoisted_3 = {
  "data-cy": "create-spec-page-title",
  class: "text-gray-900 mb-12px text-32px"
};
const _hoisted_4 = {
  "data-cy": "create-spec-page-description",
  class: "leading-normal text-gray-600 mb-32px text-18px"
};
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    title: null,
    isDefaultSpecPattern: { type: Boolean }
  },
  emits: ["showCreateSpecModal"],
  setup(__props, { emit }) {
    const props = __props;
    gql`
fragment NoSpecsPage on Query {
  ...CreateSpecCards
  ...ChooseExternalEditor
  currentProject {
    id
    currentTestingType
    configFileAbsolutePath
    ...CustomPatternNoSpecContent
    ...OpenConfigFileInIDE
  }
}
`;
    const showCreateSpecModal = (id) => {
      emit("showCreateSpecModal", id);
    };
    const descriptionKeyPath = computed(() => {
      var _a;
      return props.isDefaultSpecPattern ? `createSpec.page.defaultPatternNoSpecs.${(_a = props.gql.currentProject) == null ? void 0 : _a.currentTestingType}.description` : "createSpec.page.customPatternNoSpecs.description";
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_i18n_t = resolveComponent("i18n-t");
      return ((_a = props.gql.currentProject) == null ? void 0 : _a.currentTestingType) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h1", _hoisted_3, toDisplayString(props.title), 1),
          createBaseVNode("p", _hoisted_4, [
            createVNode(_component_i18n_t, {
              scope: "global",
              keypath: unref(descriptionKeyPath)
            }, {
              default: withCtx(() => [
                props.gql.currentProject.configFileAbsolutePath ? (openBlock(), createBlock(_sfc_main$n, {
                  key: 0,
                  gql: props.gql.currentProject
                }, {
                  default: withCtx(({ onClick }) => [
                    createBaseVNode("button", {
                      class: "text-purple-500 hocus-link-default",
                      "data-cy": "no-specs-specPattern",
                      onClick
                    }, " specPattern ", 8, _hoisted_5)
                  ]),
                  _: 1
                }, 8, ["gql"])) : (openBlock(), createElementBlock("span", _hoisted_6, "specPattern"))
              ]),
              _: 1
            }, 8, ["keypath"])
          ])
        ]),
        props.isDefaultSpecPattern ? (openBlock(), createBlock(_sfc_main$3, {
          key: 0,
          gql: props.gql,
          onShowCreateSpecModal: showCreateSpecModal
        }, null, 8, ["gql"])) : (openBlock(), createBlock(_sfc_main$2, {
          key: 1,
          gql: props.gql.currentProject,
          onShowCreateSpecModal: showCreateSpecModal
        }, null, 8, ["gql"]))
      ])) : createCommentVNode("", true);
    };
  }
});
var block0 = {};
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    gql`
query SpecsPageContainer_BranchInfo {
  currentProject {
    id
    branch
    projectId
  }
}
`;
    gql`
query SpecsPageContainer($fromBranch: String!, $hasBranch: Boolean!) {
  ...Specs_SpecsList
  ...NoSpecsPage
  ...CreateSpecModal
  currentProject {
    id
    isDefaultSpecPattern
  }
}
`;
    gql`
subscription SpecsPageContainer_specsChange($fromBranch: String!, $hasBranch: Boolean!) {
  specsChange {
    id
    specs {
      id
      ...SpecsList
    }
  }
}
`;
    gql`
subscription SpecsPageContainer_specListPolling($fromBranch: String, $projectId: String) {
  startPollingForSpecs(branchName: $fromBranch, projectId: $projectId)
}
`;
    const branchInfo = useQuery({ query: SpecsPageContainer_BranchInfoDocument });
    const variables = computed(() => {
      var _a, _b, _c;
      const fromBranch = (_c = (_b = (_a = branchInfo.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.branch) != null ? _c : "";
      const hasBranch = Boolean(fromBranch);
      return { fromBranch, hasBranch };
    });
    const pollingVariables = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const fromBranch = (_c = (_b = (_a = branchInfo.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.branch) != null ? _c : null;
      const projectId = (_f = (_e = (_d = branchInfo.data.value) == null ? void 0 : _d.currentProject) == null ? void 0 : _e.projectId) != null ? _f : null;
      return { fromBranch, projectId };
    });
    useSubscription({
      query: SpecsPageContainer_SpecsChangeDocument,
      variables
    });
    const mostRecentUpdate = ref(null);
    const updateMostRecentUpdate = (_, reportedUpdate) => {
      var _a;
      mostRecentUpdate.value = (_a = reportedUpdate == null ? void 0 : reportedUpdate.startPollingForSpecs) != null ? _a : null;
    };
    useSubscription({
      query: SpecsPageContainer_SpecListPollingDocument,
      variables: pollingVariables
    }, updateMostRecentUpdate);
    const query = useQuery({
      query: SpecsPageContainerDocument,
      variables
    });
    const isDefaultSpecPattern = computed(() => {
      var _a, _b;
      return !!((_b = (_a = query.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.isDefaultSpecPattern);
    });
    const title = computed(() => {
      return isDefaultSpecPattern.value ? t("createSpec.page.defaultPatternNoSpecs.title") : t("createSpec.page.customPatternNoSpecs.title");
    });
    const modalIsShown = ref(false);
    const generator = ref();
    const showCreateSpecModal = (generatorId) => {
      modalIsShown.value = true;
      generator.value = generatorId || null;
    };
    const closeCreateSpecModal = () => {
      modalIsShown.value = false;
      generator.value = null;
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return unref(query).data.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        ((_a = unref(query).data.value.currentProject) == null ? void 0 : _a.currentTestingType) ? (openBlock(), createBlock(_sfc_main$u, {
          key: generator.value,
          "initial-generator": generator.value,
          show: modalIsShown.value,
          gql: unref(query).data.value,
          onClose: closeCreateSpecModal
        }, null, 8, ["initial-generator", "show", "gql"])) : createCommentVNode("", true),
        ((_b = unref(query).data.value.currentProject) == null ? void 0 : _b.specs.length) ? (openBlock(), createBlock(SpecsList, {
          key: 1,
          gql: unref(query).data.value,
          "most-recent-update": mostRecentUpdate.value,
          onShowCreateSpecModal: showCreateSpecModal
        }, null, 8, ["gql", "most-recent-update"])) : (openBlock(), createBlock(_sfc_main$1, {
          key: 2,
          gql: unref(query).data.value,
          title: unref(title),
          "is-default-spec-pattern": unref(isDefaultSpecPattern),
          onShowCreateSpecModal: showCreateSpecModal
        }, null, 8, ["gql", "title", "is-default-spec-pattern"]))
      ])) : createCommentVNode("", true);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export { _sfc_main as default };
