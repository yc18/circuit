import { _ as __nuxt_component_0 } from './nuxt-link-Ca7qwuWp.mjs';
import { defineComponent, computed, unref, withCtx, createTextVNode, toDisplayString, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { g as getProductById } from './products-RsVuN6vP.mjs';
import { u as useRoute } from './server.mjs';
import { u as useHead } from './v3-Cy3KEOAS.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { locale } = useI18n();
    const product = computed(() => {
      const id = route.params.id;
      return getProductById(id);
    });
    const mailtoLink = computed(() => {
      if (!product.value) return "#";
      const email = "357854360@qq.com";
      const subject = locale.value === "zh" ? `\u7D22\u53D6\u6E90\u6587\u4EF6\uFF1A${product.value.name}` : `Request Source Files: ${product.value.nameEn}`;
      return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    });
    useHead(() => ({
      title: product.value ? (locale.value === "zh" ? product.value.name : product.value.nameEn) + " | CircuitFiles" : "Product Not Found | CircuitFiles",
      meta: [
        {
          name: "description",
          content: product.value ? locale.value === "zh" ? product.value.description : product.value.descriptionEn : ""
        },
        {
          name: "keywords",
          content: product.value ? `${product.value.formats.join(", ")}, ${locale.value === "zh" ? product.value.category : product.value.categoryEn}` : ""
        }
      ],
      script: product.value ? [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: locale.value === "zh" ? product.value.name : product.value.nameEn,
            description: locale.value === "zh" ? product.value.description : product.value.descriptionEn,
            image: product.value.image,
            offers: {
              "@type": "Offer",
              price: product.value.price,
              priceCurrency: "CNY",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "CircuitFiles",
                email: "357854360@qq.com"
              }
            }
          })
        }
      ] : []
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(product)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-8 bg-dark-lighter"><div class="container mx-auto px-4"><nav class="flex items-center gap-2 text-sm text-gray-400">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "hover:text-primary transition-colors"
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
        _push(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "hover:text-primary transition-colors"
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
        _push(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><span class="text-primary truncate max-w-[200px]">${ssrInterpolate(unref(locale) === "zh" ? unref(product).name : unref(product).nameEn)}</span></nav></div></section><section class="py-12 bg-dark"><div class="container mx-auto px-4"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"><div class="animate-fade-in"><div class="relative overflow-hidden rounded-2xl bg-dark-lighter"><img${ssrRenderAttr("src", unref(product).image)}${ssrRenderAttr("alt", unref(locale) === "zh" ? unref(product).name : unref(product).nameEn)} class="w-full aspect-square object-cover"><div class="absolute top-4 left-4 px-4 py-2 bg-primary/90 text-dark text-sm font-medium rounded-lg">${ssrInterpolate(unref(locale) === "zh" ? unref(product).category : unref(product).categoryEn)}</div></div></div><div class="animate-slide-up"><h1 class="text-3xl md:text-4xl font-bold mb-4">${ssrInterpolate(unref(locale) === "zh" ? unref(product).name : unref(product).nameEn)}</h1><div class="flex items-center gap-4 mb-6"><span class="text-3xl text-accent font-bold">\xA5${ssrInterpolate(unref(product).price)}</span><span class="text-gray-500">CNY</span></div><p class="text-gray-400 mb-8 leading-relaxed">${ssrInterpolate(unref(locale) === "zh" ? unref(product).description : unref(product).descriptionEn)}</p><div class="mb-8"><h3 class="text-lg font-semibold mb-3 text-primary">${ssrInterpolate(_ctx.$t("product.fileFormats"))}</h3><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(unref(product).formats, (format) => {
          _push(`<span class="px-4 py-2 bg-dark-lighter border border-primary/30 rounded-lg text-sm">${ssrInterpolate(format)}</span>`);
        });
        _push(`<!--]--></div></div><div class="mb-8 p-6 bg-dark-lighter rounded-xl border border-primary/20"><h3 class="text-lg font-semibold mb-4 text-primary">${ssrInterpolate(_ctx.$t("product.specifications"))}</h3><dl class="grid grid-cols-2 gap-4">`);
        if (unref(locale) === "zh") {
          _push(`<!--[-->`);
          ssrRenderList(unref(product).specifications, (value, key) => {
            _push(`<div><dt class="text-gray-500 text-sm">${ssrInterpolate(key)}</dt><dd class="font-medium">${ssrInterpolate(value)}</dd></div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!--[-->`);
          ssrRenderList(unref(product).specificationsEn, (value, key) => {
            _push(`<div><dt class="text-gray-500 text-sm">${ssrInterpolate(key)}</dt><dd class="font-medium">${ssrInterpolate(value)}</dd></div>`);
          });
          _push(`<!--]-->`);
        }
        _push(`</dl></div><a${ssrRenderAttr("href", unref(mailtoLink))} class="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 text-lg px-8 py-4"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> ${ssrInterpolate(_ctx.$t("product.getSource"))}</a><p class="text-gray-500 text-sm mt-4">${ssrInterpolate(unref(locale) === "zh" ? "\u70B9\u51FB\u6309\u94AE\u5C06\u6253\u5F00\u90AE\u4EF6\u5BA2\u6237\u7AEF\uFF0C\u4E3B\u9898\u5DF2\u81EA\u52A8\u586B\u5165\u5546\u54C1\u540D\u79F0" : "Click the button to open your email client with the product name as subject")}</p></div></div></div></section><section class="py-16 bg-dark-lighter"><div class="container mx-auto px-4"><div class="max-w-3xl mx-auto"><h2 class="text-2xl font-bold mb-8 text-center">${ssrInterpolate(unref(locale) === "zh" ? "\u60A8\u5C06\u83B7\u5F97\u7684\u5185\u5BB9" : "What You Will Receive")}</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><div><h3 class="font-semibold mb-1">${ssrInterpolate(unref(locale) === "zh" ? "\u539F\u7406\u56FE\u6587\u4EF6" : "Schematic Files")}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(unref(locale) === "zh" ? "\u5B8C\u6574\u7684\u7535\u8DEF\u539F\u7406\u56FE\uFF08PDF\u548C\u539F\u59CB\u683C\u5F0F\uFF09" : "Complete circuit schematics (PDF and source format)")}</p></div></div><div class="card flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg></div><div><h3 class="font-semibold mb-1">${ssrInterpolate(unref(locale) === "zh" ? "PCB\u8BBE\u8BA1\u6587\u4EF6" : "PCB Design Files")}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(unref(locale) === "zh" ? "PCB\u5E03\u5C40\u6587\u4EF6Gerber\u6587\u4EF6\uFF0C\u53EF\u76F4\u63A5\u6253\u6837" : "PCB layout files and Gerber files for manufacturing")}</p></div></div><div class="card flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg></div><div><h3 class="font-semibold mb-1">${ssrInterpolate(unref(locale) === "zh" ? "BOM\u6E05\u5355" : "Bill of Materials")}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(unref(locale) === "zh" ? "\u5143\u5668\u4EF6\u6E05\u5355\uFF0C\u5305\u542B\u4F9B\u5E94\u5546\u548C\u53C2\u8003\u4EF7\u683C" : "Component list with suppliers and reference prices")}</p></div></div><div class="card flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div><h3 class="font-semibold mb-1">${ssrInterpolate(unref(locale) === "zh" ? "\u4F7F\u7528\u8BF4\u660E" : "Usage Guide")}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(unref(locale) === "zh" ? "\u57FA\u672C\u7684\u4F7F\u7528\u8BF4\u660E\u548C\u6CE8\u610F\u4E8B\u9879" : "Basic usage instructions and notes")}</p></div></div></div></div></div></section><section class="py-16 bg-dark"><div class="container mx-auto px-4"><div class="max-w-3xl mx-auto text-center"><h2 class="text-2xl font-bold mb-4">${ssrInterpolate(unref(locale) === "zh" ? "\u8FD8\u6709\u5176\u4ED6\u95EE\u9898\uFF1F" : "Have More Questions?")}</h2><p class="text-gray-400 mb-6">${ssrInterpolate(unref(locale) === "zh" ? "\u8BF7\u901A\u8FC7\u90AE\u4EF6\u8054\u7CFB\u6211\u4EEC\uFF0C\u6211\u4EEC\u4F1A\u572824\u5C0F\u65F6\u5185\u56DE\u590D" : "Contact us via email, we will respond within 24 hours")}</p><a href="mailto:357854360@qq.com" class="btn-secondary inline-flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 357854360@qq.com </a></div></div></section></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-dark" }, _attrs))}><div class="text-center"><h1 class="text-2xl font-bold mb-4">${ssrInterpolate(_ctx.$t("common.error"))}</h1><p class="text-gray-400 mb-6">${ssrInterpolate(unref(locale) === "zh" ? "\u4EA7\u54C1\u672A\u627E\u5230" : "Product not found")}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(locale) === "zh" ? "\u8FD4\u56DE\u4EA7\u54C1\u5217\u8868" : "Back to Products")}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(locale) === "zh" ? "\u8FD4\u56DE\u4EA7\u54C1\u5217\u8868" : "Back to Products"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-m3qiCCJQ.mjs.map
