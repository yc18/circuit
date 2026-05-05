import { _ as __nuxt_component_0 } from "./nuxt-link-Ca7qwuWp.js";
import { defineComponent, computed, unref, withCtx, createTextVNode, toDisplayString, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { g as getProductById } from "./products-RsVuN6vP.js";
import { u as useRoute } from "../server.mjs";
import { u as useHead } from "./v3-Cy3KEOAS.js";
import "G:/trae/waiweb/node_modules/ufo/dist/index.mjs";
import "G:/trae/waiweb/node_modules/defu/dist/defu.mjs";
import "G:/trae/waiweb/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "G:/trae/waiweb/node_modules/hookable/dist/index.mjs";
import "G:/trae/waiweb/node_modules/unctx/dist/index.mjs";
import "G:/trae/waiweb/node_modules/h3/dist/index.mjs";
import "vue-router";
import "vue-i18n";
import "G:/trae/waiweb/node_modules/@unhead/vue/dist/index.mjs";
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
      const subject = locale.value === "zh" ? `索取源文件：${product.value.name}` : `Request Source Files: ${product.value.nameEn}`;
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
        _push(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><span class="text-primary truncate max-w-[200px]">${ssrInterpolate(unref(locale) === "zh" ? unref(product).name : unref(product).nameEn)}</span></nav></div></section><section class="py-12 bg-dark"><div class="container mx-auto px-4"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"><div class="animate-fade-in"><div class="relative overflow-hidden rounded-2xl bg-dark-lighter"><img${ssrRenderAttr("src", unref(product).image)}${ssrRenderAttr("alt", unref(locale) === "zh" ? unref(product).name : unref(product).nameEn)} class="w-full aspect-square object-cover"><div class="absolute top-4 left-4 px-4 py-2 bg-primary/90 text-dark text-sm font-medium rounded-lg">${ssrInterpolate(unref(locale) === "zh" ? unref(product).category : unref(product).categoryEn)}</div></div></div><div class="animate-slide-up"><h1 class="text-3xl md:text-4xl font-bold mb-4">${ssrInterpolate(unref(locale) === "zh" ? unref(product).name : unref(product).nameEn)}</h1><div class="flex items-center gap-4 mb-6"><span class="text-3xl text-accent font-bold">¥${ssrInterpolate(unref(product).price)}</span><span class="text-gray-500">CNY</span></div><p class="text-gray-400 mb-8 leading-relaxed">${ssrInterpolate(unref(locale) === "zh" ? unref(product).description : unref(product).descriptionEn)}</p><div class="mb-8"><h3 class="text-lg font-semibold mb-3 text-primary">${ssrInterpolate(_ctx.$t("product.fileFormats"))}</h3><div class="flex flex-wrap gap-2"><!--[-->`);
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
        _push(`</dl></div><a${ssrRenderAttr("href", unref(mailtoLink))} class="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 text-lg px-8 py-4"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> ${ssrInterpolate(_ctx.$t("product.getSource"))}</a><p class="text-gray-500 text-sm mt-4">${ssrInterpolate(unref(locale) === "zh" ? "点击按钮将打开邮件客户端，主题已自动填入商品名称" : "Click the button to open your email client with the product name as subject")}</p></div></div></div></section><section class="py-16 bg-dark-lighter"><div class="container mx-auto px-4"><div class="max-w-3xl mx-auto"><h2 class="text-2xl font-bold mb-8 text-center">${ssrInterpolate(unref(locale) === "zh" ? "您将获得的内容" : "What You Will Receive")}</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><div><h3 class="font-semibold mb-1">${ssrInterpolate(unref(locale) === "zh" ? "原理图文件" : "Schematic Files")}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(unref(locale) === "zh" ? "完整的电路原理图（PDF和原始格式）" : "Complete circuit schematics (PDF and source format)")}</p></div></div><div class="card flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg></div><div><h3 class="font-semibold mb-1">${ssrInterpolate(unref(locale) === "zh" ? "PCB设计文件" : "PCB Design Files")}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(unref(locale) === "zh" ? "PCB布局文件Gerber文件，可直接打样" : "PCB layout files and Gerber files for manufacturing")}</p></div></div><div class="card flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg></div><div><h3 class="font-semibold mb-1">${ssrInterpolate(unref(locale) === "zh" ? "BOM清单" : "Bill of Materials")}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(unref(locale) === "zh" ? "元器件清单，包含供应商和参考价格" : "Component list with suppliers and reference prices")}</p></div></div><div class="card flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div><h3 class="font-semibold mb-1">${ssrInterpolate(unref(locale) === "zh" ? "使用说明" : "Usage Guide")}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(unref(locale) === "zh" ? "基本的使用说明和注意事项" : "Basic usage instructions and notes")}</p></div></div></div></div></div></section><section class="py-16 bg-dark"><div class="container mx-auto px-4"><div class="max-w-3xl mx-auto text-center"><h2 class="text-2xl font-bold mb-4">${ssrInterpolate(unref(locale) === "zh" ? "还有其他问题？" : "Have More Questions?")}</h2><p class="text-gray-400 mb-6">${ssrInterpolate(unref(locale) === "zh" ? "请通过邮件联系我们，我们会在24小时内回复" : "Contact us via email, we will respond within 24 hours")}</p><a href="mailto:357854360@qq.com" class="btn-secondary inline-flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 357854360@qq.com </a></div></div></section></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-dark" }, _attrs))}><div class="text-center"><h1 class="text-2xl font-bold mb-4">${ssrInterpolate(_ctx.$t("common.error"))}</h1><p class="text-gray-400 mb-6">${ssrInterpolate(unref(locale) === "zh" ? "产品未找到" : "Product not found")}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(locale) === "zh" ? "返回产品列表" : "Back to Products")}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(locale) === "zh" ? "返回产品列表" : "Back to Products"), 1)
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-m3qiCCJQ.js.map
