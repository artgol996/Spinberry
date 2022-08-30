import { d as defineComponent, bD as useSlots, o as openBlock, v as createElementBlock, a as createBaseVNode, D as renderSlot, c as createBlock, z as resolveDynamicComponent, p as normalizeClass, t as toDisplayString, f as unref, s as createCommentVNode, u as useI18n, j as gql, k as ref, m as computed, b as createVNode, w as withCtx, e as createTextVNode, q as _sfc_main$2, Z as _sfc_main$3, F as Fragment } from "./index.ec96dfd6.js";
import { C as ConnectIcon, U as UserIcon, _ as _sfc_main$4 } from "./CloudConnectModals.c13a7dc4.js";
const _hoisted_1 = { class: "rounded flex text-left w-full py-14px items-center" };
const _hoisted_2 = { class: "flex h-40px px-24px items-center" };
const _hoisted_3 = { class: "flex-grow h-auto border-gray-100 border-l-1px px-16px" };
const _hoisted_4 = { class: "font-normal text-sm text-gray-600 select-none" };
const _hoisted_5 = {
  key: 0,
  class: "flex px-16px items-center"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    description: { default: void 0 },
    icon: { default: void 0 },
    gray: { type: Boolean, default: false },
    bigHeader: { type: Boolean, default: false }
  },
  setup(__props) {
    const slots = useSlots();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            (openBlock(), createBlock(resolveDynamicComponent(__props.icon), { class: "h-24px w-24px" }))
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("h2", {
            class: normalizeClass(["text-indigo-500 whitespace-nowrap", { "text-size-18px leading-24px": __props.bigHeader }])
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2),
          createBaseVNode("p", _hoisted_4, [
            renderSlot(_ctx.$slots, "description", {}, () => [
              createBaseVNode("span", null, toDisplayString(__props.description), 1)
            ])
          ])
        ]),
        unref(slots).right ? (openBlock(), createElementBlock("div", _hoisted_5, [
          renderSlot(_ctx.$slots, "right")
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    class: null
  },
  emits: ["success"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment CloudConnectButton on Query {
  ...CloudConnectModals
  ...LoginModal
}
`;
    const isLoginOpen = ref(false);
    const isProjectConnectOpen = ref(false);
    const isLoggedIn = computed(() => {
      var _a;
      return Boolean((_a = props.gql.cloudViewer) == null ? void 0 : _a.id);
    });
    function openConnection() {
      if (!isLoggedIn.value) {
        isLoginOpen.value = true;
      } else {
        isProjectConnectOpen.value = true;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$2, {
          class: normalizeClass(props.class),
          "prefix-icon": unref(isLoggedIn) ? unref(ConnectIcon) : unref(UserIcon),
          "prefix-icon-class": "icon-dark-white icon-light-transparent",
          onClick: openConnection
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(isLoggedIn) ? unref(t)("runs.connect.buttonProject") : unref(t)("runs.connect.buttonUser")), 1)
          ]),
          _: 1
        }, 8, ["class", "prefix-icon"]),
        createVNode(_sfc_main$3, {
          modelValue: isLoginOpen.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isLoginOpen.value = $event),
          gql: props.gql,
          "utm-medium": "Runs Tab"
        }, null, 8, ["modelValue", "gql"]),
        isProjectConnectOpen.value ? (openBlock(), createBlock(_sfc_main$4, {
          key: 0,
          show: isProjectConnectOpen.value,
          gql: props.gql,
          onCancel: _cache[1] || (_cache[1] = ($event) => isProjectConnectOpen.value = false),
          onSuccess: _cache[2] || (_cache[2] = ($event) => {
            isProjectConnectOpen.value = false;
            emit("success");
          })
        }, null, 8, ["show", "gql"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export { _sfc_main$1 as _, _sfc_main as a };
