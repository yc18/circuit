import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './v3-Cy3KEOAS.mjs';
import './server.mjs';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    useHead({
      title: locale.value === "zh" ? "\u5173\u4E8E\u6211\u4EEC - \u4E13\u4E1A\u7535\u8DEF\u8BBE\u8BA1\u670D\u52A1\u5546 | CircuitFiles" : "About Us - Professional Circuit Design Services | CircuitFiles",
      meta: [
        {
          name: "description",
          content: locale.value === "zh" ? "\u4E86\u89E3\u6211\u4EEC\u7684\u4E13\u4E1A\u80CC\u666F\u548C\u884C\u4E1A\u7ECF\u9A8C\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u9AD8\u8D28\u91CF\u7684\u7535\u8DEF\u8BBE\u8BA1\u6E90\u6587\u4EF6\u670D\u52A1\u3002" : "Learn about our professional background and industry experience in providing high-quality circuit design source files."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-16 bg-dark-lighter circuit-pattern"><div class="container mx-auto px-4"><div class="text-center"><h1 class="text-4xl md:text-5xl font-bold mb-4"><span class="text-gradient">${ssrInterpolate(_ctx.$t("about.title"))}</span></h1><p class="text-gray-400 text-lg">${ssrInterpolate(_ctx.$t("about.subtitle"))}</p></div></div></section><section class="py-20 bg-dark"><div class="container mx-auto px-4"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="animate-fade-in"><div class="relative"><div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div><div class="relative bg-dark-lighter rounded-3xl p-8 border border-primary/20"><div class="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"><svg class="w-12 h-12 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg></div><div class="text-center"><h2 class="text-2xl font-bold mb-2">CircuitFiles</h2><p class="text-gray-400">${ssrInterpolate(unref(locale) === "zh" ? "\u7535\u5B50\u8BBE\u8BA1\u4E13\u5BB6" : "Electronics Design Expert")}</p></div></div></div></div><div class="animate-slide-up"><h2 class="text-3xl font-bold mb-6">${ssrInterpolate(unref(locale) === "zh" ? "\u5173\u4E8E\u6211" : "About Me")}</h2><div class="space-y-4 text-gray-400 leading-relaxed">`);
      if (unref(locale) === "zh") {
        _push(`<p> \u6211\u662F\u4E00\u540D\u62E5\u670910\u4F59\u5E74\u7ECF\u9A8C\u7684\u7535\u5B50\u5DE5\u7A0B\u5E08\uFF0C\u4E13\u6CE8\u4E8E\u7535\u8DEF\u8BBE\u8BA1\u548C\u5D4C\u5165\u5F0F\u7CFB\u7EDF\u5F00\u53D1\u3002 \u591A\u5E74\u6765\uFF0C\u6211\u4E3A\u4F17\u591A\u5BA2\u6237\u63D0\u4F9B\u4E86\u9AD8\u8D28\u91CF\u7684\u7535\u8DEF\u8BBE\u8BA1\u548CPCB layout\u670D\u52A1\u3002 </p>`);
      } else {
        _push(`<p> I am an electronics engineer with over 10 years of experience, specializing in circuit design and embedded systems development. Over the years, I have provided high-quality circuit design and PCB layout services to numerous clients. </p>`);
      }
      if (unref(locale) === "zh") {
        _push(`<p> \u6211\u719F\u6089\u591A\u79CDPCB\u8BBE\u8BA1\u8F6F\u4EF6\uFF0C\u5305\u62ECAltium Designer\u3001Eagle\u3001KiCad\u7B49\uFF0C \u80FD\u591F\u6839\u636E\u5BA2\u6237\u9700\u6C42\u63D0\u4F9B\u6700\u4F73\u7684\u8BBE\u8BA1\u65B9\u6848\u3002 </p>`);
      } else {
        _push(`<p> I am proficient in various PCB design software including Altium Designer, Eagle, and KiCad, and can provide the best design solutions based on customer requirements. </p>`);
      }
      if (unref(locale) === "zh") {
        _push(`<p> \u521B\u7ACB\u8FD9\u4E2A\u5E73\u53F0\u7684\u76EE\u7684\uFF0C\u662F\u4E3A\u4E86\u5E2E\u52A9\u66F4\u591A\u7684\u7535\u5B50\u7231\u597D\u8005\u548C\u5DE5\u7A0B\u5E08\uFF0C \u80FD\u591F\u5FEB\u901F\u83B7\u53D6\u9AD8\u8D28\u91CF\u7684\u7535\u8DEF\u8BBE\u8BA1\u6E90\u6587\u4EF6\uFF0C\u52A0\u901F\u4ED6\u4EEC\u7684\u9879\u76EE\u5F00\u53D1\u3002 </p>`);
      } else {
        _push(`<p> The purpose of creating this platform is to help more electronics enthusiasts and engineers quickly access high-quality circuit design source files and accelerate their project development. </p>`);
      }
      _push(`</div></div></div></div></section><section class="py-20 bg-dark-lighter"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-12 text-center">${ssrInterpolate(unref(locale) === "zh" ? "\u6211\u7684\u4E13\u4E1A\u80FD\u529B" : "My Expertise")}</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div class="card text-center group hover:border-primary/50 transition-colors"><div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path></svg></div><h3 class="text-lg font-semibold mb-2">${ssrInterpolate(unref(locale) === "zh" ? "\u539F\u7406\u56FE\u8BBE\u8BA1" : "Schematic Design")}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(unref(locale) === "zh" ? "\u7CBE\u901A\u6A21\u62DF\u7535\u8DEF\u548C\u6570\u5B57\u7535\u8DEF\u8BBE\u8BA1" : "Expert in analog and digital circuit design")}</p></div><div class="card text-center group hover:border-accent/50 transition-colors"><div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"><svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg></div><h3 class="text-lg font-semibold mb-2">${ssrInterpolate(unref(locale) === "zh" ? "PCB Layout" : "PCB Layout")}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(unref(locale) === "zh" ? "2-8\u5C42PCB\u8BBE\u8BA1\uFF0C\u9AD8\u901F\u4FE1\u53F7\u5904\u7406" : "2-8 layer PCB design, high-speed signal processing")}</p></div><div class="card text-center group hover:border-primary/50 transition-colors"><div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div><h3 class="text-lg font-semibold mb-2">${ssrInterpolate(unref(locale) === "zh" ? "\u5D4C\u5165\u5F0F\u5F00\u53D1" : "Embedded Development")}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(unref(locale) === "zh" ? "STM32\u3001ESP32\u3001Arduino\u7B49" : "STM32, ESP32, Arduino and more")}</p></div><div class="card text-center group hover:border-accent/50 transition-colors"><div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"><svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div><h3 class="text-lg font-semibold mb-2">${ssrInterpolate(unref(locale) === "zh" ? "\u54C1\u8D28\u4FDD\u8BC1" : "Quality Assurance")}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(unref(locale) === "zh" ? "\u6240\u6709\u8BBE\u8BA1\u7ECF\u8FC7\u9A8C\u8BC1\u6D4B\u8BD5" : "All designs verified and tested")}</p></div></div></div></section><section class="py-20 bg-dark"><div class="container mx-auto px-4"><div class="max-w-3xl mx-auto text-center"><h2 class="text-3xl font-bold mb-6">${ssrInterpolate(unref(locale) === "zh" ? "\u8054\u7CFB\u6211" : "Contact Me")}</h2><p class="text-gray-400 mb-8">${ssrInterpolate(unref(locale) === "zh" ? "\u5982\u679C\u60A8\u6709\u4EFB\u4F55\u95EE\u9898\u6216\u9700\u6C42\uFF0C\u6B22\u8FCE\u901A\u8FC7\u90AE\u4EF6\u8054\u7CFB\u6211" : "If you have any questions or needs, feel free to contact me via email")}</p><a href="mailto:357854360@qq.com" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-dark font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 357854360@qq.com </a></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-vLdvH7Ho.mjs.map
