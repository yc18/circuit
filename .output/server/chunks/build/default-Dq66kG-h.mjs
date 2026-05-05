import { _ as __nuxt_component_0 } from './nuxt-link-Ca7qwuWp.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { u as useHead } from './v3-Cy3KEOAS.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'vue-i18n';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const mobileMenuOpen = ref(false);
    useHead({
      htmlAttrs: {
        lang: locale.value === "zh" ? "zh-CN" : "en-US"
      },
      link: [
        { rel: "alternate", hreflang: "zh-CN", href: "https://circuitfiles.com/zh" },
        { rel: "alternate", hreflang: "en-US", href: "https://circuitfiles.com/en" },
        { rel: "alternate", hreflang: "x-default", href: "https://circuitfiles.com/" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-dark" }, _attrs))} data-v-00b76984><header class="sticky top-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-primary/20" data-v-00b76984><nav class="container mx-auto px-4 py-4" data-v-00b76984><div class="flex items-center justify-between" data-v-00b76984>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center" data-v-00b76984${_scopeId}><svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-00b76984${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" data-v-00b76984${_scopeId}></path></svg></div><span class="text-xl font-bold text-gradient hidden sm:block" data-v-00b76984${_scopeId}>CircuitFiles</span>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center" }, [
                (openBlock(), createBlock("svg", {
                  class: "w-6 h-6 text-dark",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  })
                ]))
              ]),
              createVNode("span", { class: "text-xl font-bold text-gradient hidden sm:block" }, "CircuitFiles")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-6" data-v-00b76984><div class="hidden md:flex items-center gap-6" data-v-00b76984>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.products"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.products")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-3" data-v-00b76984><button class="${ssrRenderClass(["lang-btn", { "active": unref(locale) === "zh" }])}" data-v-00b76984> \u4E2D </button><span class="text-primary/30" data-v-00b76984>|</span><button class="${ssrRenderClass(["lang-btn", { "active": unref(locale) === "en" }])}" data-v-00b76984> EN </button></div><button class="md:hidden mobile-menu-btn" data-v-00b76984><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-00b76984><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-00b76984></path></svg></button></div></div>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div class="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4" data-v-00b76984><div class="flex flex-col gap-4" data-v-00b76984>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "nav-link",
          onClick: ($event) => mobileMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("nav.home"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("nav.home")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "nav-link",
          onClick: ($event) => mobileMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("nav.products"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("nav.products")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/about",
          class: "nav-link",
          onClick: ($event) => mobileMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("nav.about"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("nav.about")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav></header><main class="flex-1" data-v-00b76984>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-dark-lighter border-t border-primary/20 mt-16" data-v-00b76984><div class="container mx-auto px-4 py-12" data-v-00b76984><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-00b76984><div data-v-00b76984><div class="flex items-center gap-2 mb-4" data-v-00b76984><div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center" data-v-00b76984><svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-00b76984><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" data-v-00b76984></path></svg></div><span class="text-xl font-bold text-gradient" data-v-00b76984>CircuitFiles</span></div><p class="text-gray-400 text-sm" data-v-00b76984>${ssrInterpolate(unref(locale) === "zh" ? "\u4E13\u4E1A\u7535\u8DEF\u8BBE\u8BA1\u6E90\u6587\u4EF6\u5546\u5E97" : "Professional Circuit Design Source Files Store")}</p></div><div data-v-00b76984><h3 class="text-lg font-semibold mb-4 text-primary" data-v-00b76984>${ssrInterpolate(_ctx.$t("footer.contact"))}</h3><a href="mailto:357854360@qq.com" class="text-gray-400 hover:text-primary transition-colors flex items-center gap-2" data-v-00b76984><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-00b76984><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-00b76984></path></svg> 357854360@qq.com </a></div><div data-v-00b76984><h3 class="text-lg font-semibold mb-4 text-primary" data-v-00b76984>${ssrInterpolate(unref(locale) === "zh" ? "\u5FEB\u901F\u94FE\u63A5" : "Quick Links")}</h3><div class="flex flex-col gap-2" data-v-00b76984>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-gray-400 hover:text-primary transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "text-gray-400 hover:text-primary transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.products"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.products")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-gray-400 hover:text-primary transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="border-t border-primary/20 mt-8 pt-8 text-center text-gray-500 text-sm" data-v-00b76984><p data-v-00b76984>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} CircuitFiles. ${ssrInterpolate(_ctx.$t("footer.allRights"))}</p></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00b76984"]]);

export { _default as default };
//# sourceMappingURL=default-Dq66kG-h.mjs.map
