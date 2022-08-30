var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { o as openBlock, v as createElementBlock, a as createBaseVNode, _ as _export_sfc, d as defineComponent, t as toDisplayString, F as Fragment, B as renderList, D as renderSlot, H as createStaticVNode, u as useI18n, N as useOnline, j as gql, k as ref, m as computed, ac as lodash, n as useMutation, ap as SelectCloudProjectModal_CreateCloudProjectDocument, aq as SelectCloudProjectModal_SetProjectIdDocument, r as resolveComponent, c as createBlock, ar as createSlots, f as unref, w as withCtx, b as createVNode, e as createTextVNode, q as _sfc_main$5, as as _sfc_main$6, U as _sfc_main$7, h as _sfc_main$8, s as createCommentVNode, at as _sfc_main$9, p as normalizeClass, I as Input, L as _sfc_main$a, au as CreateCloudOrgModal_CloudOrganizationsCheckDocument, av as onBeforeUnmount, aw as useDebounceFn, ax as __unplugin_components_0$1, af as ShikiHighlight, P as useSubscription, ay as CheckCloudOrganizationsDocument } from "./index.ec96dfd6.js";
import { _ as __unplugin_components_1 } from "./add-large_x16.39c4466e.js";
const _hoisted_1$8 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 3C9.44771 3 9 3.44772 9 4C9 4.55228 9.44771 5 10 5V3ZM10 11C9.44771 11 9 11.4477 9 12C9 12.5523 9.44771 13 10 13V11ZM6 5C6.55228 5 7 4.55228 7 4C7 3.44772 6.55228 3 6 3V5ZM6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11V13ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9V7ZM11 9C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7V9ZM10 5H11V3H10V5ZM11 11H10V13H11V11ZM5 5H6V3H5V5ZM6 11H5V13H6V11ZM5 9H11V7H5V9ZM2 8C2 6.34315 3.34315 5 5 5V3C2.23858 3 0 5.23858 0 8H2ZM0 8C0 10.7614 2.23858 13 5 13V11C3.34315 11 2 9.65685 2 8H0ZM14 8C14 9.65685 12.6569 11 11 11V13C13.7614 13 16 10.7614 16 8H14ZM16 8C16 5.23858 13.7614 3 11 3V5C12.6569 5 14 6.34315 14 8H16Z",
  fill: "currentColor",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$8
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$7);
}
var ConnectIcon = { name: "cy-chain-link_x16", render: render$4 };
const _hoisted_1$7 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M8 1C4.13401 1 1 4.13401 1 8C1 9.95827 1.80412 11.7287 3.10018 12.9992C3.43799 11.3365 4.60091 9.97347 6.14289 9.35625C5.4468 8.80686 5 7.95561 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7C11 7.95561 10.5532 8.80686 9.85711 9.35625C11.3991 9.97347 12.562 11.3365 12.8998 12.9992C14.1959 11.7287 15 9.95827 15 8C15 4.13401 11.866 1 8 1Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6.14289 9.35625C6.6537 9.7594 7.29875 10 8 10C8.70125 10 9.3463 9.7594 9.85711 9.35625M6.14289 9.35625C5.4468 8.80686 5 7.95561 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7C11 7.95561 10.5532 8.80686 9.85711 9.35625M6.14289 9.35625C4.60091 9.97347 3.43799 11.3365 3.10018 12.9992M9.85711 9.35625C11.3991 9.97347 12.562 11.3365 12.8998 12.9992M12.8998 12.9992C14.1959 11.7287 15 9.95827 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 9.95827 1.80412 11.7287 3.10018 12.9992M12.8998 12.9992C11.6372 14.2369 9.90772 15 8 15C6.09228 15 4.36279 14.2369 3.10018 12.9992",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$4 = [
  _hoisted_2$7,
  _hoisted_3$6
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_4$4);
}
var UserIcon = { name: "cy-user-outline_x16", render: render$3 };
var Radio_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$6 = ["for"];
const _hoisted_2$6 = { class: "flex text-16px leading-24px items-center" };
const _hoisted_3$5 = ["name", "value", "checked", "onClick"];
const _hoisted_4$3 = { class: "text-gray-800" };
const _hoisted_5$1 = { class: "text-gray-500" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    name: null,
    label: null,
    value: null,
    options: null
  },
  emits: ["update:value"],
  setup(__props, { emit: emits }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("label", {
          class: "mt-24px text-gray-800 block font-bold",
          for: props.name
        }, toDisplayString(props.label), 9, _hoisted_1$6),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (opt) => {
          return openBlock(), createElementBlock("div", {
            key: opt.value,
            class: "mt-8px"
          }, [
            createBaseVNode("label", _hoisted_2$6, [
              createBaseVNode("input", {
                type: "radio",
                name: props.name,
                value: opt.value,
                class: "mr-8px radio hocus-default checked:bg-transparent checked:border-indigo-500",
                checked: props.value === opt.value,
                onClick: ($event) => emits("update:value", opt.value)
              }, null, 8, _hoisted_3$5),
              renderSlot(_ctx.$slots, "option", {
                option: opt,
                checked: props.value === opt.value
              }, () => [
                createBaseVNode("span", _hoisted_4$3, toDisplayString(opt.label), 1),
                createBaseVNode("span", _hoisted_5$1, " - " + toDisplayString(opt.description), 1)
              ], true)
            ])
          ]);
        }), 128))
      ], 64);
    };
  }
});
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2d51d117"]]);
const _hoisted_1$5 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M7.29289 2.29289C7.10536 2.10536 6.851 2 6.58579 2H2C1.44772 2 1 2.44772 1 3V6H6.58579C6.851 6 7.10536 5.89464 7.29289 5.70711L9 4L7.29289 2.29289Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M9 4L7.29289 2.29289C7.10536 2.10536 6.851 2 6.58579 2H2C1.44772 2 1 2.44772 1 3V6M9 4H14C14.5523 4 15 4.44772 15 5V13C15 13.5523 14.5523 14 14 14H2C1.44772 14 1 13.5523 1 13V6M9 4L7.29289 5.70711C7.10536 5.89464 6.851 6 6.58579 6H1",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$5,
  _hoisted_3$4
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_4$2);
}
var FolderIcon = { name: "cy-folder-outline_x16", render: render$2 };
const _hoisted_1$4 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /* @__PURE__ */ createStaticVNode('<path d="M10 4V14H14C14.5523 14 15 13.5523 15 13V5C15 4.44772 14.5523 4 14 4H10Z" class="icon-light" fill="#D0D2E0"></path><path d="M10 14H2C1.44772 14 1 13.5523 1 13V2C1 1.44772 1.44772 1 2 1H9C9.55228 1 10 1.44772 10 2V4M10 14V4M10 14H14C14.5523 14 15 13.5523 15 13V5C15 4.44772 14.5523 4 14 4H10" stroke="#1B1E2E" stroke-width="2" class="icon-dark"></path><path d="M3 3.5C3 3.22386 3.22386 3 3.5 3H4.5C4.77614 3 5 3.22386 5 3.5V4.5C5 4.77614 4.77614 5 4.5 5H3.5C3.22386 5 3 4.77614 3 4.5V3.5Z" fill="#1B1E2E" class="icon-dark"></path><path d="M12 6.5C12 6.22386 12.2239 6 12.5 6C12.7761 6 13 6.22386 13 6.5V7.5C13 7.77614 12.7761 8 12.5 8C12.2239 8 12 7.77614 12 7.5V6.5Z" fill="#1B1E2E" class="icon-dark"></path><path d="M12 9.5C12 9.22386 12.2239 9 12.5 9C12.7761 9 13 9.22386 13 9.5V10.5C13 10.7761 12.7761 11 12.5 11C12.2239 11 12 10.7761 12 10.5V9.5Z" fill="#1B1E2E" class="icon-dark"></path><path d="M3 6.5C3 6.22386 3.22386 6 3.5 6H4.5C4.77614 6 5 6.22386 5 6.5V7.5C5 7.77614 4.77614 8 4.5 8H3.5C3.22386 8 3 7.77614 3 7.5V6.5Z" fill="#1B1E2E" class="icon-dark"></path><path d="M3 9.5C3 9.22386 3.22386 9 3.5 9H4.5C4.77614 9 5 9.22386 5 9.5V10.5C5 10.7761 4.77614 11 4.5 11H3.5C3.22386 11 3 10.7761 3 10.5V9.5Z" fill="#1B1E2E" class="icon-dark"></path><path d="M6 3.5C6 3.22386 6.22386 3 6.5 3H7.5C7.77614 3 8 3.22386 8 3.5V4.5C8 4.77614 7.77614 5 7.5 5H6.5C6.22386 5 6 4.77614 6 4.5V3.5Z" fill="#1B1E2E" class="icon-dark"></path><path d="M6 6.5C6 6.22386 6.22386 6 6.5 6H7.5C7.77614 6 8 6.22386 8 6.5V7.5C8 7.77614 7.77614 8 7.5 8H6.5C6.22386 8 6 7.77614 6 7.5V6.5Z" fill="#1B1E2E" class="icon-dark"></path><path d="M6 9.5C6 9.22386 6.22386 9 6.5 9H7.5C7.77614 9 8 9.22386 8 9.5V10.5C8 10.7761 7.77614 11 7.5 11H6.5C6.22386 11 6 10.7761 6 10.5V9.5Z" fill="#1B1E2E" class="icon-dark"></path>', 10);
const _hoisted_12$1 = [
  _hoisted_2$4
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_12$1);
}
var __unplugin_components_0 = { name: "cy-office-building_x16", render: render$1 };
const _hoisted_1$3 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8ZM8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8V5ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z",
  fill: "currentColor",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var WarningIcon = { name: "cy-warning_x16", render };
const _hoisted_1$2 = {
  key: 1,
  class: "w-640px"
};
const _hoisted_2$2 = { key: 0 };
const _hoisted_3$2 = { class: "flex font-normal my-8px text-16px leading-24px items-end" };
const _hoisted_4$1 = { class: "" };
const _hoisted_5 = { class: "flex font-normal text-16px leading-24px items-center" };
const _hoisted_6 = { class: "text-gray-800" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-4px text-red-500" }, "*", -1);
const _hoisted_8 = { class: "flex font-normal mt-24px text-16px leading-24px items-center" };
const _hoisted_9 = {
  class: "flex-grow",
  for: "projectName"
};
const _hoisted_10 = { class: "text-gray-800" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-4px text-red-500" }, "*", -1);
const _hoisted_12 = { class: "ml-8px text-gray-500" };
const _hoisted_13 = { class: "flex gap-16px" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  emits: ["success", "cancel", "update-projectId-failed"],
  setup(__props, { emit }) {
    var _a, _b;
    const props = __props;
    const { t } = useI18n();
    const online = useOnline();
    gql`
fragment SelectCloudProjectModal on Query {
  cloudViewer {
    id
    cloudOrganizationsUrl
    organizations(first: 100) { # Not expecting there will be > 100 orgs for a user. If there are we will implement pagination
      nodes {
        id
        name
        projects(first: 100) { # Not expecting there will be > 100 projects. If there are we will implement pagination
          nodes {
            id
            slug
            name
          }
        }
      }
    }
    ...CreateCloudOrgModal
  }
  currentProject{
    id
    title
    ...NeedManualUpdateModal
  }
}
`;
    gql`
mutation SelectCloudProjectModal_SetProjectId( $projectId: String! ) {
  setProjectIdInConfigFile(projectId: $projectId) {
    currentProject{
      id
      projectId
      cloudProject {
        __typename
        ... on CloudProject {
          id
          runs(first: 10) {
            nodes {
              id
              ...RunCard
            }
          }
        }
      }
    }
  }
}
`;
    gql`
mutation SelectCloudProjectModal_CreateCloudProject( $name: String!, $orgId: ID!, $public: Boolean! ) {
  cloudProjectCreate(name: $name, orgId: $orgId, public: $public) {
    id
    slug
  }
}
`;
    const isInternalServerError = ref(false);
    const graphqlError = ref();
    const projectName = ref(((_a = props.gql.currentProject) == null ? void 0 : _a.title) || "");
    const projectAccess = ref("private");
    const organizations = computed(() => {
      var _a2, _b2;
      return lodash.exports.sortBy(((_b2 = (_a2 = props.gql.cloudViewer) == null ? void 0 : _a2.organizations) == null ? void 0 : _b2.nodes.map((org) => {
        var _a3;
        return __spreadProps(__spreadValues({}, org), {
          projects: __spreadProps(__spreadValues({}, org.projects), {
            nodes: lodash.exports.sortBy((_a3 = org.projects) == null ? void 0 : _a3.nodes, "name")
          }),
          icon: FolderIcon
        });
      })) || [], "name");
    });
    const pickedOrganization = ref(organizations.value.length >= 1 ? organizations.value[0] : void 0);
    const projects = computed(() => {
      var _a2, _b2;
      return ((_b2 = (_a2 = pickedOrganization.value) == null ? void 0 : _a2.projects) == null ? void 0 : _b2.nodes) || [];
    });
    const newProject = ref(projects.value.length === 0);
    const pickedProject = ref(((_b = pickedOrganization.value) == null ? void 0 : _b.projects) ? pickedOrganization.value.projects.nodes.find((p) => p.name === projectName.value) : void 0);
    const orgPlaceholder = t("runs.connect.modal.selectProject.placeholderOrganizations");
    const projectPlaceholder = computed(() => {
      return pickedOrganization.value ? t("runs.connect.modal.selectProject.placeholderProjects") : t("runs.connect.modal.selectProject.placeholderProjectsPending");
    });
    const organizationUrl = computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.gql.cloudViewer) == null ? void 0 : _a2.cloudOrganizationsUrl) != null ? _b2 : "#";
    });
    const createCloudProjectMutation = useMutation(SelectCloudProjectModal_CreateCloudProjectDocument);
    const setProjectIdMutation = useMutation(SelectCloudProjectModal_SetProjectIdDocument);
    async function createOrConnectProject() {
      var _a2, _b2, _c, _d, _e;
      let projectId;
      const isNewProject = Boolean(newProject.value && pickedOrganization.value);
      if (isNewProject) {
        const { data, error } = await createCloudProjectMutation.executeMutation({
          orgId: pickedOrganization.value.id,
          name: projectName.value,
          public: projectAccess.value === "public"
        });
        if (error == null ? void 0 : error.graphQLErrors.length) {
          const err = error.graphQLErrors[0];
          const extension = (_a2 = err.extensions) == null ? void 0 : _a2.code;
          isInternalServerError.value = extension === "INTERNAL_SERVER_ERROR";
          graphqlError.value = {
            extension,
            message: err.message
          };
        } else {
          graphqlError.value = void 0;
        }
        projectId = (_b2 = data == null ? void 0 : data.cloudProjectCreate) == null ? void 0 : _b2.slug;
      } else {
        projectId = (_c = pickedProject.value) == null ? void 0 : _c.slug;
      }
      if (projectId) {
        const { data } = await setProjectIdMutation.executeMutation({ projectId });
        const updatedProjectId = (_e = (_d = data == null ? void 0 : data.setProjectIdInConfigFile) == null ? void 0 : _d.currentProject) == null ? void 0 : _e.projectId;
        if (updatedProjectId === projectId) {
          emit("success");
        } else {
          emit("update-projectId-failed", projectId);
        }
      }
    }
    const isOnline = computed(() => online.value);
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$a, {
        "model-value": "",
        title: newProject.value ? unref(t)("runs.connect.modal.selectProject.createProject") : unref(t)("runs.connect.modal.title"),
        "help-link": "https://on.cypress.io/adding-new-project",
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => emit("cancel"))
      }, createSlots({
        default: withCtx(() => [
          !unref(isOnline) ? (openBlock(), createBlock(_sfc_main$6, {
            key: 0,
            class: "mt-24px"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("launchpadErrors.noInternet.message")), 1)
            ]),
            _: 1
          })) : (openBlock(), createElementBlock("div", _hoisted_1$2, [
            graphqlError.value ? (openBlock(), createBlock(_sfc_main$7, {
              key: 0,
              "v-model": Boolean(graphqlError.value),
              status: "error",
              title: isInternalServerError.value ? unref(t)("runs.connect.errors.internalServerError.title") : unref(t)("runs.connect.errors.baseError.title"),
              class: "mb-16px",
              icon: unref(WarningIcon),
              dismissible: isInternalServerError.value
            }, {
              default: withCtx(() => [
                !isInternalServerError.value ? (openBlock(), createElementBlock("p", _hoisted_2$2, toDisplayString(graphqlError.value.message), 1)) : (openBlock(), createBlock(_component_i18n_t, {
                  key: 1,
                  scope: "global",
                  keypath: "runs.connect.errors.internalServerError.description"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$8, { href: "https://www.cypressstatus.com/" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("runs.connect.errors.internalServerError.link")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["v-model", "title", "icon", "dismissible"])) : createCommentVNode("", true),
            createVNode(_sfc_main$9, {
              modelValue: pickedOrganization.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => pickedOrganization.value = $event),
              options: unref(organizations),
              "item-value": "name",
              "item-key": "id",
              placeholder: unref(orgPlaceholder),
              "data-cy": "selectOrganization"
            }, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_3$2, [
                  createBaseVNode("span", _hoisted_4$1, toDisplayString(unref(t)("runs.connect.modal.selectProject.organization")), 1),
                  createVNode(_sfc_main$8, {
                    class: "cursor-pointer flex-grow text-right text-indigo-500 hover:underline",
                    href: unref(organizationUrl)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("runs.connect.modal.selectProject.manageOrgs")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ]),
              "input-prefix": withCtx(() => [
                createVNode(unref(__unplugin_components_0), { class: "h-16px w-16px icon-dark-gray-500" })
              ]),
              "item-prefix": withCtx(() => [
                createVNode(unref(__unplugin_components_0), { class: "h-16px w-16px icon-dark-gray-500" })
              ]),
              _: 1
            }, 8, ["modelValue", "options", "placeholder"]),
            !newProject.value ? (openBlock(), createBlock(_sfc_main$9, {
              key: 1,
              modelValue: pickedProject.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => pickedProject.value = $event),
              class: normalizeClass(["mt-16px transition-all", pickedOrganization.value ? void 0 : "opacity-50"]),
              options: unref(projects),
              "item-value": "name",
              "item-key": "id",
              disabled: !pickedOrganization.value,
              placeholder: unref(projectPlaceholder),
              "data-cy": "selectProject"
            }, {
              label: withCtx(() => [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("p", _hoisted_6, toDisplayString(unref(t)("runs.connect.modal.selectProject.project")), 1),
                  _hoisted_7,
                  createBaseVNode("a", {
                    class: "cursor-pointer flex-grow my-8px text-right text-indigo-500 hover:underline",
                    onClick: _cache[1] || (_cache[1] = ($event) => newProject.value = true)
                  }, toDisplayString(unref(t)("runs.connect.modal.selectProject.createNewProject")), 1)
                ])
              ]),
              "input-prefix": withCtx(() => [
                createVNode(unref(FolderIcon), { class: "h-16px w-16px icon-dark-gray-500" })
              ]),
              "item-prefix": withCtx(() => [
                createVNode(unref(FolderIcon), { class: "h-16px w-16px icon-dark-gray-500" })
              ]),
              _: 1
            }, 8, ["modelValue", "class", "options", "disabled", "placeholder"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("label", _hoisted_9, [
                  createBaseVNode("span", _hoisted_10, toDisplayString(unref(t)("runs.connect.modal.selectProject.projectName")), 1),
                  _hoisted_11,
                  createBaseVNode("span", _hoisted_12, toDisplayString(unref(t)("runs.connect.modal.selectProject.projectNameDisclaimer")), 1)
                ]),
                unref(projects).length > 0 ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  class: "cursor-pointer text-indigo-500 hover:underline",
                  onClick: _cache[3] || (_cache[3] = ($event) => newProject.value = false)
                }, toDisplayString(unref(t)("runs.connect.modal.selectProject.chooseExistingProject")), 1)) : createCommentVNode("", true)
              ]),
              createVNode(Input, {
                id: "projectName",
                modelValue: projectName.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => projectName.value = $event),
                class: "mt-8px",
                "input-classes": "h-38px",
                "prefix-icon": unref(FolderIcon),
                "prefix-icon-classes": "icon-dark-gray-500"
              }, null, 8, ["modelValue", "prefix-icon"]),
              createVNode(Radio, {
                value: projectAccess.value,
                "onUpdate:value": _cache[5] || (_cache[5] = ($event) => projectAccess.value = $event),
                name: "projectAccess",
                label: unref(t)("runs.connect.modal.selectProject.newProjectAccess"),
                options: [
                  {
                    label: unref(t)("runs.connect.modal.selectProject.privateLabel"),
                    description: unref(t)("runs.connect.modal.selectProject.privateDescription"),
                    value: "private"
                  },
                  {
                    label: unref(t)("runs.connect.modal.selectProject.publicLabel"),
                    description: unref(t)("runs.connect.modal.selectProject.publicDescription"),
                    value: "public"
                  }
                ]
              }, null, 8, ["value", "label", "options"])
            ], 64))
          ]))
        ]),
        _: 2
      }, [
        unref(isOnline) ? {
          name: "footer",
          fn: withCtx(() => [
            createBaseVNode("div", _hoisted_13, [
              createVNode(_sfc_main$5, {
                size: "lg",
                "prefix-icon": newProject.value ? unref(__unplugin_components_1) : unref(ConnectIcon),
                "prefix-icon-class": "icon-dark-white",
                onClick: createOrConnectProject
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(newProject.value ? unref(t)("runs.connect.modal.selectProject.createProject") : unref(t)("runs.connect.modal.selectProject.connectProject")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon"]),
              createVNode(_sfc_main$5, {
                variant: "outline",
                size: "lg",
                onClick: _cache[6] || (_cache[6] = ($event) => emit("cancel"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("runs.connect.modal.cancel")), 1)
                ]),
                _: 1
              })
            ])
          ])
        } : void 0
      ]), 1032, ["title"]);
    };
  }
});
const _hoisted_1$1 = {
  key: 1,
  class: "border border-dashed rounded border-gray-100 text-center p-24px w-592px"
};
const _hoisted_2$1 = { class: "mb-16px text-gray-700" };
const _hoisted_3$1 = { class: "flex gap-16px" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  emits: ["cancel"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const online = useOnline();
    gql`
fragment CreateCloudOrgModal on CloudUser {
  id
  createCloudOrganizationUrl
}
`;
    gql`
mutation CreateCloudOrgModal_CloudOrganizationsCheck {
  refreshOrganizations {
    ...CloudConnectModals
  }
}
`;
    const refreshOrgs = useMutation(CreateCloudOrgModal_CloudOrganizationsCheckDocument);
    const refetch = useDebounceFn(() => refreshOrgs.executeMutation({}), 1e3);
    const waitingOrgToBeCreated = ref(false);
    let timer;
    function startWaitingOrgToBeCreated() {
      waitingOrgToBeCreated.value = true;
      timer = setTimeout(() => {
        waitingOrgToBeCreated.value = false;
      }, 6e4);
    }
    onBeforeUnmount(() => {
      window.clearTimeout(timer);
    });
    const createOrgUrl = computed(() => props.gql.createCloudOrganizationUrl || "#");
    const isOnline = computed(() => online.value);
    return (_ctx, _cache) => {
      const _component_i_cy_office_building_x16 = __unplugin_components_0;
      const _component_i_cy_loading_x16 = __unplugin_components_0$1;
      return openBlock(), createBlock(_sfc_main$a, {
        "model-value": "",
        title: unref(t)("runs.connect.modal.title"),
        "help-link": "https://on.cypress.io/adding-new-project",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => emit("cancel"))
      }, createSlots({
        default: withCtx(() => [
          !unref(isOnline) ? (openBlock(), createBlock(_sfc_main$6, {
            key: 0,
            class: "mt-24px"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("launchpadErrors.noInternet.message")), 1)
            ]),
            _: 1
          })) : (openBlock(), createElementBlock("div", _hoisted_1$1, [
            createBaseVNode("p", _hoisted_2$1, toDisplayString(unref(t)("runs.connect.modal.createOrg.description")), 1),
            createVNode(_sfc_main$8, {
              class: "border rounded mx-auto outline-none bg-indigo-500 border-indigo-500 text-white max-h-60px py-11px px-16px inline-block hocus-default",
              href: unref(createOrgUrl),
              "include-graphql-port": true,
              onClick: _cache[0] || (_cache[0] = ($event) => startWaitingOrgToBeCreated())
            }, {
              default: withCtx(() => [
                createVNode(_component_i_cy_office_building_x16, { class: "inline-block icon-dark-white" }),
                createTextVNode(" " + toDisplayString(unref(t)("runs.connect.modal.createOrg.button")), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ]))
        ]),
        _: 2
      }, [
        unref(isOnline) ? {
          name: "footer",
          fn: withCtx(() => [
            createBaseVNode("div", _hoisted_3$1, [
              waitingOrgToBeCreated.value ? (openBlock(), createBlock(_sfc_main$5, {
                key: 0,
                size: "lg",
                variant: "pending"
              }, {
                prefix: withCtx(() => [
                  createVNode(_component_i_cy_loading_x16, { class: "animate-spin icon-dark-white icon-light-gray-400" })
                ]),
                default: withCtx(() => [
                  createTextVNode(" " + toDisplayString(unref(t)("runs.connect.modal.createOrg.waitingButton")), 1)
                ]),
                _: 1
              })) : (openBlock(), createBlock(_sfc_main$5, {
                key: 1,
                size: "lg",
                onClick: _cache[1] || (_cache[1] = ($event) => unref(refetch)())
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("runs.connect.modal.createOrg.refreshButton")), 1)
                ]),
                _: 1
              })),
              createVNode(_sfc_main$5, {
                variant: "outline",
                size: "lg",
                onClick: _cache[2] || (_cache[2] = ($event) => emit("cancel"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("runs.connect.modal.cancel")), 1)
                ]),
                _: 1
              })
            ])
          ])
        } : void 0
      ]), 1032, ["title"]);
    };
  }
});
const _hoisted_1 = { class: "mt-24px mb-16px text-16px leading-24px" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("code", { class: "border rounded border-gray-200 m-2px py-2px px-3px text-purple-500 text-16px" }, "projectId", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "text-indigo-500" }, "cypress.config.js", -1);
const _hoisted_4 = { class: "flex gap-16px" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    newProjectId: null
  },
  emits: ["cancel"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment NeedManualUpdateModal on CurrentProject {
  id
  projectId
}`;
    const projectIdCode = computed(() => `projectId: '${props.newProjectId}'`);
    const helpCode = computed(() => {
      return `
export ${"default"} {
  ${projectIdCode.value}, // <- add this line
}`;
    });
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_i_cy_loading_x16 = __unplugin_components_0$1;
      return openBlock(), createBlock(_sfc_main$a, {
        "model-value": "",
        title: unref(t)("runs.connect.modal.connectManually.title"),
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => emit("cancel"))
      }, {
        footer: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            createVNode(_sfc_main$5, {
              size: "lg",
              variant: "pending"
            }, {
              prefix: withCtx(() => [
                createVNode(_component_i_cy_loading_x16, { class: "animate-spin icon-dark-white icon-light-gray-400" })
              ]),
              default: withCtx(() => [
                createTextVNode(" " + toDisplayString(unref(t)("runs.connect.modal.connectManually.waitingButton")), 1)
              ]),
              _: 1
            }),
            createVNode(_sfc_main$5, {
              variant: "outline",
              size: "lg",
              onClick: _cache[0] || (_cache[0] = ($event) => emit("cancel"))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("runs.connect.modal.cancel")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: withCtx(() => [
          createVNode(_sfc_main$7, {
            status: "warning",
            title: unref(t)("runs.connect.modal.connectManually.warning"),
            icon: unref(WarningIcon),
            "icon-classes": "icon-dark-orange-400"
          }, null, 8, ["title", "icon"]),
          createBaseVNode("p", _hoisted_1, [
            createVNode(_component_i18n_t, {
              scope: "global",
              keypath: "runs.connect.modal.connectManually.mainMessage"
            }, {
              projectId: withCtx(() => [
                _hoisted_2
              ]),
              configFile: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            })
          ]),
          createVNode(ShikiHighlight, {
            class: "rounded border-1 border-gray-200",
            lang: "javascript",
            code: unref(helpCode),
            "line-numbers": "",
            "copy-button": ""
          }, null, 8, ["code"])
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  emits: ["success", "cancel"],
  setup(__props, { emit }) {
    const props = __props;
    gql`
fragment CloudConnectModals on Query {
  ...SelectCloudProjectModal
  cloudViewer {
    id
    ...CreateCloudOrgModal
  }
  currentProject{
    id
    ...NeedManualUpdateModal
  }
}
`;
    gql`
subscription CheckCloudOrganizations {
  cloudViewerChange {
    ...CloudConnectModals
  }
}
`;
    useSubscription({ query: CheckCloudOrganizationsDocument });
    const newProjectId = ref("");
    const isManualUpdateOpen = ref(false);
    function showManualUpdate(projectId) {
      newProjectId.value = projectId;
      isManualUpdateOpen.value = true;
    }
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return isManualUpdateOpen.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        props.gql.currentProject ? (openBlock(), createBlock(_sfc_main$1, {
          key: 0,
          gql: props.gql.currentProject,
          "new-project-id": newProjectId.value,
          onCancel: _cache[0] || (_cache[0] = ($event) => emit("cancel"))
        }, null, 8, ["gql", "new-project-id"])) : createCommentVNode("", true)
      ], 64)) : ((_c = (_b = (_a = props.gql.cloudViewer) == null ? void 0 : _a.organizations) == null ? void 0 : _b.nodes.length) != null ? _c : 0 > 0) ? (openBlock(), createBlock(_sfc_main$3, {
        key: 1,
        gql: props.gql,
        show: "",
        onUpdateProjectIdFailed: showManualUpdate,
        onSuccess: _cache[1] || (_cache[1] = ($event) => emit("success")),
        onCancel: _cache[2] || (_cache[2] = ($event) => emit("cancel"))
      }, null, 8, ["gql"])) : props.gql.cloudViewer ? (openBlock(), createBlock(_sfc_main$2, {
        key: 2,
        gql: props.gql.cloudViewer,
        onCancel: _cache[3] || (_cache[3] = ($event) => emit("cancel"))
      }, null, 8, ["gql"])) : createCommentVNode("", true);
    };
  }
});
export { ConnectIcon as C, UserIcon as U, WarningIcon as W, _sfc_main as _ };
