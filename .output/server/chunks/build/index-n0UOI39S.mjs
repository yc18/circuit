import { _ as __nuxt_component_0 } from './nuxt-link-Ca7qwuWp.mjs';
import { defineComponent, computed, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
    const featuredProducts = computed(() => products.slice(0, 3));
    const { locale } = useI18n();
    useHead({
      title: locale.value === "zh" ? "\u7535\u8DEF\u539F\u7406\u56FE\u6E90\u6587\u4EF6 | PCB\u8BBE\u8BA1\u56FE\u8D2D\u4E70 | CircuitFiles" : "Circuit Schematic Source Files | PCB Design Layout | CircuitFiles",
      meta: [
        {
          name: "description",
          content: locale.value === "zh" ? "\u4E13\u4E1A\u63D0\u4F9B\u7535\u8DEF\u539F\u7406\u56FE\u6E90\u6587\u4EF6\u3001PCB\u8BBE\u8BA1\u56FE\u8D2D\u4E70\u670D\u52A1\u3002\u652F\u6301Altium Designer\u3001Eagle\u3001KiCad\u7B49\u683C\u5F0F\u4E0B\u8F7D\u3002" : "Professional circuit schematic source files and PCB design layout services. Support Altium Designer, Eagle, KiCad formats."
        },
        {
          name: "keywords",
          content: "\u7535\u8DEF\u539F\u7406\u56FE\u6E90\u6587\u4EF6, PCB\u8BBE\u8BA1\u56FE\u8D2D\u4E70, schematic download, PCB layout files, Altium Designer, Eagle, KiCad"
        },
        { property: "og:title", content: "CircuitFiles - Circuit Design Source Files Store" },
        { property: "og:description", content: "Professional circuit schematic and PCB design files for your electronics projects." },
        { property: "og:type", content: "website" }
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CircuitFiles",
            url: "https://circuitfiles.com",
            description: locale.value === "zh" ? "\u4E13\u4E1A\u7535\u8DEF\u8BBE\u8BA1\u6E90\u6587\u4EF6\u5546\u5E97" : "Professional Circuit Design Source Files Store",
            contactPoint: {
              "@type": "ContactPoint",
              email: "357854360@qq.com",
              contactType: "customer service"
            }
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative min-h-[90vh] flex items-center justify-center circuit-pattern overflow-hidden"><div class="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/80 to-dark"></div><div class="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div><div class="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style="${ssrRenderStyle({ "animation-delay": "1s" })}"></div><div class="relative z-10 container mx-auto px-4 text-center"><div class="animate-fade-in"><div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm mb-6"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> ${ssrInterpolate(unref(locale) === "zh" ? "\u7535\u5B50\u4EA4\u4ED8\uFF0C\u5373\u4E70\u5373\u7528" : "Electronic Delivery, Ready to Use")}</div></div><h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"><span class="text-gradient">${ssrInterpolate(_ctx.$t("hero.title"))}</span></h1><p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-slide-up animate-delay-100">${ssrInterpolate(_ctx.$t("hero.subtitle"))}</p><div class="animate-slide-up animate-delay-200"><a href="mailto:357854360@qq.com" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-dark font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 group"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 357854360@qq.com <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div><p class="text-gray-500 mt-6 animate-slide-up animate-delay-300">${ssrInterpolate(_ctx.$t("hero.contactTitle"))}<br> ${ssrInterpolate(_ctx.$t("hero.contactSubtitle"))}</p><div class="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-slide-up animate-delay-400">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "btn-primary inline-flex items-center justify-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"${_scopeId}></path></svg> ${ssrInterpolate(_ctx.$t("hero.browseProducts"))}`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                })
              ])),
              createTextVNode(" " + toDisplayString(_ctx.$t("hero.browseProducts")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "btn-secondary inline-flex items-center justify-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hero.learnMore"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hero.learnMore")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent"></div></section><section class="py-20 bg-dark"><div class="container mx-auto px-4"><div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-bold mb-4">${ssrInterpolate(unref(locale) === "zh" ? "\u4E3A\u4EC0\u4E48\u9009\u62E9\u6211\u4EEC" : "Why Choose Us")}</h2><p class="text-gray-400 max-w-xl mx-auto">${ssrInterpolate(unref(locale) === "zh" ? "\u4E13\u4E1A\u7684\u7535\u8DEF\u8BBE\u8BA1\u7ECF\u9A8C\uFF0C\u9AD8\u8D28\u91CF\u7684\u8BBE\u8BA1\u6E90\u6587\u4EF6\uFF0C\u52A9\u529B\u60A8\u7684\u7535\u5B50\u9879\u76EE" : "Professional circuit design experience, high-quality source files for your electronics projects")}</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="card circuit-border text-center group hover:-translate-y-2"><div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div><h3 class="text-xl font-semibold mb-3">${ssrInterpolate(unref(locale) === "zh" ? "\u4E13\u4E1A\u54C1\u8D28" : "Professional Quality")}</h3><p class="text-gray-400">${ssrInterpolate(unref(locale) === "zh" ? "\u6240\u6709\u8BBE\u8BA1\u6587\u4EF6\u5747\u7ECF\u8FC7\u5B9E\u9645\u6D4B\u8BD5\uFF0C\u786E\u4FDD\u53EF\u76F4\u63A5\u7528\u4E8E\u751F\u4EA7" : "All design files are tested to ensure they can be used directly for production")}</p></div><div class="card circuit-border text-center group hover:-translate-y-2"><div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"><svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><h3 class="text-xl font-semibold mb-3">${ssrInterpolate(unref(locale) === "zh" ? "\u5373\u65F6\u4EA4\u4ED8" : "Instant Delivery")}</h3><p class="text-gray-400">${ssrInterpolate(unref(locale) === "zh" ? "\u7535\u5B50\u90AE\u4EF6\u53D1\u9001\u6E90\u6587\u4EF6\uFF0C\u4ED8\u6B3E\u540E\u7ACB\u5373\u6536\u5230\uFF0C\u65E0\u9700\u7B49\u5F85\u7269\u6D41" : "Files sent via email immediately after payment, no shipping wait")}</p></div><div class="card circuit-border text-center group hover:-translate-y-2"><div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div><h3 class="text-xl font-semibold mb-3">${ssrInterpolate(unref(locale) === "zh" ? "\u6280\u672F\u652F\u6301" : "Technical Support")}</h3><p class="text-gray-400">${ssrInterpolate(unref(locale) === "zh" ? "\u8D2D\u4E70\u540E\u53EF\u83B7\u5F97\u57FA\u672C\u7684\u6280\u672F\u652F\u6301\u548C\u4F7F\u7528\u6307\u5BFC" : "Basic technical support and usage guidance available after purchase")}</p></div></div></div></section><section class="py-20 bg-dark-lighter circuit-pattern"><div class="container mx-auto px-4"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold mb-4">${ssrInterpolate(unref(locale) === "zh" ? "\u70ED\u95E8\u4EA7\u54C1" : "Popular Products")}</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "text-primary hover:text-primary-light transition-colors inline-flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(locale) === "zh" ? "\u67E5\u770B\u5168\u90E8" : "View All")} <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(locale) === "zh" ? "\u67E5\u770B\u5168\u90E8" : "View All") + " ", 1),
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
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(unref(featuredProducts), (product, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: product.id,
          to: `/products/${product.id}`,
          class: "card group cursor-pointer hover:scale-[1.02] transition-transform",
          style: { animationDelay: `${index * 100}ms` }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative overflow-hidden rounded-lg mb-4"${_scopeId}><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", unref(locale) === "zh" ? product.name : product.nameEn)} class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"${_scopeId}></div><span class="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-dark text-xs font-medium rounded-full"${_scopeId}>${ssrInterpolate(unref(locale) === "zh" ? product.category : product.categoryEn)}</span></div><h3 class="text-lg font-semibold mb-2 group-hover:text-primary transition-colors"${_scopeId}>${ssrInterpolate(unref(locale) === "zh" ? product.name : product.nameEn)}</h3><div class="flex items-center justify-between"${_scopeId}><span class="text-accent font-bold"${_scopeId}>\xA5${ssrInterpolate(product.price)}</span><span class="text-gray-500 text-sm flex items-center gap-1"${_scopeId}>${ssrInterpolate(_ctx.$t("product.formats"))}: ${ssrInterpolate(product.formats.length)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "relative overflow-hidden rounded-lg mb-4" }, [
                  createVNode("img", {
                    src: product.image,
                    alt: unref(locale) === "zh" ? product.name : product.nameEn,
                    class: "w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" }),
                  createVNode("span", { class: "absolute top-3 left-3 px-3 py-1 bg-primary/90 text-dark text-xs font-medium rounded-full" }, toDisplayString(unref(locale) === "zh" ? product.category : product.categoryEn), 1)
                ]),
                createVNode("h3", { class: "text-lg font-semibold mb-2 group-hover:text-primary transition-colors" }, toDisplayString(unref(locale) === "zh" ? product.name : product.nameEn), 1),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("span", { class: "text-accent font-bold" }, "\xA5" + toDisplayString(product.price), 1),
                  createVNode("span", { class: "text-gray-500 text-sm flex items-center gap-1" }, toDisplayString(_ctx.$t("product.formats")) + ": " + toDisplayString(product.formats.length), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-dark"><div class="container mx-auto px-4"><div class="max-w-3xl mx-auto text-center"><h2 class="text-3xl md:text-4xl font-bold mb-6">${ssrInterpolate(unref(locale) === "zh" ? "\u7ACB\u5373\u83B7\u53D6\u60A8\u7684\u8BBE\u8BA1\u6587\u4EF6" : "Get Your Design Files Now")}</h2><p class="text-gray-400 mb-8">${ssrInterpolate(unref(locale) === "zh" ? "\u6D4F\u89C8\u6211\u4EEC\u7684\u4EA7\u54C1\u5217\u8868\uFF0C\u627E\u5230\u60A8\u9700\u8981\u7684\u7535\u8DEF\u8BBE\u8BA1\u6587\u4EF6\u3002\u901A\u8FC7\u90AE\u4EF6\u8054\u7CFB\u6211\u4EEC\uFF0C\u5FEB\u901F\u83B7\u53D6\u6E90\u6587\u4EF6\u3002" : "Browse our product list to find the circuit design files you need. Contact us via email to get the source files quickly.")}</p><a href="mailto:357854360@qq.com" class="btn-primary inline-flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 357854360@qq.com </a></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-n0UOI39S.mjs.map
