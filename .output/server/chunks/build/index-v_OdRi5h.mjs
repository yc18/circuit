import { _ as __nuxt_component_0 } from './nuxt-link-Ca7qwuWp.mjs';
import { defineComponent, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as products } from './products-RsVuN6vP.mjs';
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
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'vue-i18n';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    useHead({
      title: locale.value === "zh" ? "\u7535\u8DEF\u8BBE\u8BA1\u6E90\u6587\u4EF6\u4EA7\u54C1\u5217\u8868 | PCB Layout Files | CircuitFiles" : "Circuit Design Source Files | PCB Layout Files | CircuitFiles",
      meta: [
        {
          name: "description",
          content: locale.value === "zh" ? "\u6D4F\u89C8\u6211\u4EEC\u7684\u7535\u8DEF\u8BBE\u8BA1\u6E90\u6587\u4EF6\u4EA7\u54C1\u5217\u8868\uFF0C\u5305\u62ECSTM32\u3001Arduino\u3001\u7535\u6E90\u6A21\u5757\u7B49\u5404\u7C7B\u7535\u5B50\u8BBE\u8BA1\u6587\u4EF6\u3002" : "Browse our circuit design source files including STM32, Arduino, power modules and more electronics design files."
        },
        {
          name: "keywords",
          content: "\u7535\u8DEF\u8BBE\u8BA1\u6E90\u6587\u4EF6, PCB Layout Files, STM32, Arduino, \u7535\u6E90\u6A21\u5757, Altium Designer"
        }
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: locale.value === "zh" ? "\u7535\u8DEF\u8BBE\u8BA1\u6E90\u6587\u4EF6\u4EA7\u54C1\u5217\u8868" : "Circuit Design Source Files",
            description: locale.value === "zh" ? "\u7CBE\u9009\u7535\u8DEF\u8BBE\u8BA1\u6E90\u6587\u4EF6\uFF0C\u5305\u62EC\u539F\u7406\u56FE\u548CPCB\u8BBE\u8BA1" : "Premium circuit design source files including schematics and PCB layouts",
            itemListElement: products.map((product, index) => ({
              "@type": "Product",
              position: index + 1,
              name: locale.value === "zh" ? product.name : product.nameEn,
              description: locale.value === "zh" ? product.description : product.descriptionEn,
              image: product.image,
              offers: {
                "@type": "Offer",
                price: product.price,
                priceCurrency: "CNY",
                availability: "https://schema.org/InStock"
              }
            }))
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-16 bg-dark-lighter circuit-pattern"><div class="container mx-auto px-4"><div class="text-center"><h1 class="text-4xl md:text-5xl font-bold mb-4"><span class="text-gradient">${ssrInterpolate(_ctx.$t("product.title"))}</span></h1><p class="text-gray-400 text-lg max-w-2xl mx-auto">${ssrInterpolate(_ctx.$t("product.subtitle"))}</p></div></div></section><section class="py-12 bg-dark"><div class="container mx-auto px-4"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(unref(products), (product, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: product.id,
          to: `/products/${product.id}`,
          class: "card group cursor-pointer hover:scale-[1.02] transition-all duration-300 animate-fade-in",
          style: { animationDelay: `${index * 50}ms` }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative overflow-hidden rounded-lg mb-4"${_scopeId}><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", unref(locale) === "zh" ? product.name : product.nameEn)} class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"${_scopeId}></div><span class="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-dark text-xs font-medium rounded-full"${_scopeId}>${ssrInterpolate(unref(locale) === "zh" ? product.category : product.categoryEn)}</span></div><h3 class="text-base font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2"${_scopeId}>${ssrInterpolate(unref(locale) === "zh" ? product.name : product.nameEn)}</h3><p class="text-gray-500 text-sm mb-4 line-clamp-2"${_scopeId}>${ssrInterpolate(unref(locale) === "zh" ? product.description : product.descriptionEn)}</p><div class="flex items-center justify-between pt-4 border-t border-gray-800"${_scopeId}><div${_scopeId}><span class="text-accent font-bold text-lg"${_scopeId}>\xA5${ssrInterpolate(product.price)}</span><span class="text-gray-500 text-sm ml-1"${_scopeId}>CNY</span></div><div class="flex flex-wrap gap-1"${_scopeId}><!--[-->`);
              ssrRenderList(product.formats.slice(0, 2), (format) => {
                _push2(`<span class="px-2 py-0.5 bg-dark text-xs text-gray-400 rounded"${_scopeId}>${ssrInterpolate(format)}</span>`);
              });
              _push2(`<!--]-->`);
              if (product.formats.length > 2) {
                _push2(`<span class="px-2 py-0.5 bg-dark text-xs text-gray-400 rounded"${_scopeId}> +${ssrInterpolate(product.formats.length - 2)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"${_scopeId}>${ssrInterpolate(_ctx.$t("product.getSource"))} <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg></div>`);
            } else {
              return [
                createVNode("div", { class: "relative overflow-hidden rounded-lg mb-4" }, [
                  createVNode("img", {
                    src: product.image,
                    alt: unref(locale) === "zh" ? product.name : product.nameEn,
                    class: "w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500",
                    loading: "lazy"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" }),
                  createVNode("span", { class: "absolute top-3 left-3 px-3 py-1 bg-primary/90 text-dark text-xs font-medium rounded-full" }, toDisplayString(unref(locale) === "zh" ? product.category : product.categoryEn), 1)
                ]),
                createVNode("h3", { class: "text-base font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2" }, toDisplayString(unref(locale) === "zh" ? product.name : product.nameEn), 1),
                createVNode("p", { class: "text-gray-500 text-sm mb-4 line-clamp-2" }, toDisplayString(unref(locale) === "zh" ? product.description : product.descriptionEn), 1),
                createVNode("div", { class: "flex items-center justify-between pt-4 border-t border-gray-800" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-accent font-bold text-lg" }, "\xA5" + toDisplayString(product.price), 1),
                    createVNode("span", { class: "text-gray-500 text-sm ml-1" }, "CNY")
                  ]),
                  createVNode("div", { class: "flex flex-wrap gap-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(product.formats.slice(0, 2), (format) => {
                      return openBlock(), createBlock("span", {
                        key: format,
                        class: "px-2 py-0.5 bg-dark text-xs text-gray-400 rounded"
                      }, toDisplayString(format), 1);
                    }), 128)),
                    product.formats.length > 2 ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "px-2 py-0.5 bg-dark text-xs text-gray-400 rounded"
                    }, " +" + toDisplayString(product.formats.length - 2), 1)) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity" }, [
                  createTextVNode(toDisplayString(_ctx.$t("product.getSource")) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "w-4 h-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M14 5l7 7m0 0l-7 7m7-7H3"
                    })
                  ]))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-16 bg-dark-lighter"><div class="container mx-auto px-4"><div class="max-w-3xl mx-auto text-center"><div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"><svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div><h2 class="text-2xl md:text-3xl font-bold mb-4">${ssrInterpolate(unref(locale) === "zh" ? "\u6CA1\u6709\u627E\u5230\u60A8\u9700\u8981\u7684\uFF1F" : "Didn't Find What You Need?")}</h2><p class="text-gray-400 mb-6">${ssrInterpolate(unref(locale) === "zh" ? "\u6211\u4EEC\u8FD8\u63D0\u4F9B\u5B9A\u5236\u7535\u8DEF\u8BBE\u8BA1\u670D\u52A1\u3002\u5982\u679C\u60A8\u6709\u7279\u6B8A\u9700\u6C42\uFF0C\u8BF7\u901A\u8FC7\u90AE\u4EF6\u8054\u7CFB\u6211\u4EEC\u3002" : "We also offer custom circuit design services. Contact us via email if you have special requirements.")}</p><a href="mailto:357854360@qq.com" class="btn-primary inline-flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 357854360@qq.com </a></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-v_OdRi5h.mjs.map
