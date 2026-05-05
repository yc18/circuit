import { _ as __nuxt_component_0 } from "./nuxt-link-Ca7qwuWp.js";
import { defineComponent, computed, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { p as products } from "./products-RsVuN6vP.js";
import { u as useHead } from "./v3-Cy3KEOAS.js";
import "G:/trae/waiweb/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "G:/trae/waiweb/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "G:/trae/waiweb/node_modules/hookable/dist/index.mjs";
import "G:/trae/waiweb/node_modules/unctx/dist/index.mjs";
import "G:/trae/waiweb/node_modules/h3/dist/index.mjs";
import "vue-router";
import "G:/trae/waiweb/node_modules/defu/dist/defu.mjs";
import "vue-i18n";
import "G:/trae/waiweb/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const featuredProducts = computed(() => products.slice(0, 3));
    const { locale } = useI18n();
    useHead({
      title: locale.value === "zh" ? "电路原理图源文件 | PCB设计图购买 | CircuitFiles" : "Circuit Schematic Source Files | PCB Design Layout | CircuitFiles",
      meta: [
        {
          name: "description",
          content: locale.value === "zh" ? "专业提供电路原理图源文件、PCB设计图购买服务。支持Altium Designer、Eagle、KiCad等格式下载。" : "Professional circuit schematic source files and PCB design layout services. Support Altium Designer, Eagle, KiCad formats."
        },
        {
          name: "keywords",
          content: "电路原理图源文件, PCB设计图购买, schematic download, PCB layout files, Altium Designer, Eagle, KiCad"
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
            description: locale.value === "zh" ? "专业电路设计源文件商店" : "Professional Circuit Design Source Files Store",
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
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative min-h-[90vh] flex items-center justify-center circuit-pattern overflow-hidden"><div class="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/80 to-dark"></div><div class="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div><div class="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style="${ssrRenderStyle({ "animation-delay": "1s" })}"></div><div class="relative z-10 container mx-auto px-4 text-center"><div class="animate-fade-in"><div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm mb-6"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> ${ssrInterpolate(unref(locale) === "zh" ? "电子交付，即买即用" : "Electronic Delivery, Ready to Use")}</div></div><h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"><span class="text-gradient">${ssrInterpolate(_ctx.$t("hero.title"))}</span></h1><p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-slide-up animate-delay-100">${ssrInterpolate(_ctx.$t("hero.subtitle"))}</p><div class="animate-slide-up animate-delay-200"><a href="mailto:357854360@qq.com" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-dark font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 group"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 357854360@qq.com <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div><p class="text-gray-500 mt-6 animate-slide-up animate-delay-300">${ssrInterpolate(_ctx.$t("hero.contactTitle"))}<br> ${ssrInterpolate(_ctx.$t("hero.contactSubtitle"))}</p><div class="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-slide-up animate-delay-400">`);
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
      _push(`</div></div><div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent"></div></section><section class="py-20 bg-dark"><div class="container mx-auto px-4"><div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-bold mb-4">${ssrInterpolate(unref(locale) === "zh" ? "为什么选择我们" : "Why Choose Us")}</h2><p class="text-gray-400 max-w-xl mx-auto">${ssrInterpolate(unref(locale) === "zh" ? "专业的电路设计经验，高质量的设计源文件，助力您的电子项目" : "Professional circuit design experience, high-quality source files for your electronics projects")}</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="card circuit-border text-center group hover:-translate-y-2"><div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div><h3 class="text-xl font-semibold mb-3">${ssrInterpolate(unref(locale) === "zh" ? "专业品质" : "Professional Quality")}</h3><p class="text-gray-400">${ssrInterpolate(unref(locale) === "zh" ? "所有设计文件均经过实际测试，确保可直接用于生产" : "All design files are tested to ensure they can be used directly for production")}</p></div><div class="card circuit-border text-center group hover:-translate-y-2"><div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"><svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><h3 class="text-xl font-semibold mb-3">${ssrInterpolate(unref(locale) === "zh" ? "即时交付" : "Instant Delivery")}</h3><p class="text-gray-400">${ssrInterpolate(unref(locale) === "zh" ? "电子邮件发送源文件，付款后立即收到，无需等待物流" : "Files sent via email immediately after payment, no shipping wait")}</p></div><div class="card circuit-border text-center group hover:-translate-y-2"><div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div><h3 class="text-xl font-semibold mb-3">${ssrInterpolate(unref(locale) === "zh" ? "技术支持" : "Technical Support")}</h3><p class="text-gray-400">${ssrInterpolate(unref(locale) === "zh" ? "购买后可获得基本的技术支持和使用指导" : "Basic technical support and usage guidance available after purchase")}</p></div></div></div></section><section class="py-20 bg-dark-lighter circuit-pattern"><div class="container mx-auto px-4"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold mb-4">${ssrInterpolate(unref(locale) === "zh" ? "热门产品" : "Popular Products")}</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "text-primary hover:text-primary-light transition-colors inline-flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(locale) === "zh" ? "查看全部" : "View All")} <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(locale) === "zh" ? "查看全部" : "View All") + " ", 1),
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
              _push2(`<div class="relative overflow-hidden rounded-lg mb-4"${_scopeId}><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", unref(locale) === "zh" ? product.name : product.nameEn)} class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"${_scopeId}></div><span class="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-dark text-xs font-medium rounded-full"${_scopeId}>${ssrInterpolate(unref(locale) === "zh" ? product.category : product.categoryEn)}</span></div><h3 class="text-lg font-semibold mb-2 group-hover:text-primary transition-colors"${_scopeId}>${ssrInterpolate(unref(locale) === "zh" ? product.name : product.nameEn)}</h3><div class="flex items-center justify-between"${_scopeId}><span class="text-accent font-bold"${_scopeId}>¥${ssrInterpolate(product.price)}</span><span class="text-gray-500 text-sm flex items-center gap-1"${_scopeId}>${ssrInterpolate(_ctx.$t("product.formats"))}: ${ssrInterpolate(product.formats.length)}</span></div>`);
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
                  createVNode("span", { class: "text-accent font-bold" }, "¥" + toDisplayString(product.price), 1),
                  createVNode("span", { class: "text-gray-500 text-sm flex items-center gap-1" }, toDisplayString(_ctx.$t("product.formats")) + ": " + toDisplayString(product.formats.length), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-dark"><div class="container mx-auto px-4"><div class="max-w-3xl mx-auto text-center"><h2 class="text-3xl md:text-4xl font-bold mb-6">${ssrInterpolate(unref(locale) === "zh" ? "立即获取您的设计文件" : "Get Your Design Files Now")}</h2><p class="text-gray-400 mb-8">${ssrInterpolate(unref(locale) === "zh" ? "浏览我们的产品列表，找到您需要的电路设计文件。通过邮件联系我们，快速获取源文件。" : "Browse our product list to find the circuit design files you need. Contact us via email to get the source files quickly.")}</p><a href="mailto:357854360@qq.com" class="btn-primary inline-flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 357854360@qq.com </a></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-n0UOI39S.js.map
