import { _ as _sfc_main$1 } from './NuxtImg-CEwUbLdW.mjs';
import { _ as _export_sfc, b as useFetch, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useSeoMeta } from './v3-B0FGUrBs.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'busboy';
import 'path';
import 'sharp';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'ipx';
import 'node:path';
import 'node:crypto';
import 'pinia';
import 'vue-router';
import '@prisma/client';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    useSeoMeta({
      title: "\u0421\u0430\u0439\u0442 \u0412\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u0435. \u041F\u0443\u0442\u0435\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0432 \u043C\u0438\u0440\u0435 \u0437\u043D\u0430\u043D\u0438\u0439.",
      ogTitle: "\u0421\u0430\u0439\u0442 \u0412\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u0435. \u041F\u0443\u0442\u0435\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0432 \u043C\u0438\u0440\u0435 \u0437\u043D\u0430\u043D\u0438\u0439.",
      description: "\u0412\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u0435 - \u044D\u0442\u043E \u0412\u0438\u0434\u0435\u0442\u044C, \u0441\u043B\u044B\u0448\u0430\u0442\u044C, \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C. \u0412\u043E\u0441\u0445\u0432\u0430\u043B\u044F\u0442\u044C \u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0435, \u0431\u044B\u0442\u044C \u0435\u0433\u043E \u0447\u0430\u0441\u0442\u044C\u044E \u0435\u0436\u0435\u0441\u0435\u043A\u0443\u043D\u0434\u043D\u043E! \u042D\u0442\u043E \u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0432 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0439 \u041B\u044E\u0431\u0432\u0438 \u0438 \u0437\u043D\u0430\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0447\u043D\u0443\u0442 \u043F\u0440\u043E\u0431\u0443\u0436\u0434\u0430\u0442\u044C \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0438\u0445.",
      ogDescription: "\u0412\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u0435 - \u044D\u0442\u043E \u0412\u0438\u0434\u0435\u0442\u044C, \u0441\u043B\u044B\u0448\u0430\u0442\u044C, \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C. \u0412\u043E\u0441\u0445\u0432\u0430\u043B\u044F\u0442\u044C \u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0435, \u0431\u044B\u0442\u044C \u0435\u0433\u043E \u0447\u0430\u0441\u0442\u044C\u044E \u0435\u0436\u0435\u0441\u0435\u043A\u0443\u043D\u0434\u043D\u043E! \u042D\u0442\u043E \u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0432 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0439 \u041B\u044E\u0431\u0432\u0438 \u0438 \u0437\u043D\u0430\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0447\u043D\u0443\u0442 \u043F\u0440\u043E\u0431\u0443\u0436\u0434\u0430\u0442\u044C \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0438\u0445.",
      ogImage: "/img/summary_small_image.png",
      twitterCard: "summary_large_image"
    });
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/post/by_rubrics/6", "$PJJJAAFhYc")), __temp = await __temp, __restore(), __temp);
    const posts = ref((_a = data.value) == null ? void 0 : _a.posts);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))} data-v-8d91c151><h1 data-v-8d91c151>\u0421\u0430\u0439\u0442 \u0412\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u0435. \u0422\u0440\u0430\u043D\u0441\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u043D\u0430\u043D\u0438\u0439.</h1><strong data-v-8d91c151>\u041F\u0443\u0442\u0435\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0438 \u0441\u0440\u0435\u0434\u0438 \u0437\u043D\u0430\u043D\u0438\u0439.</strong><div data-v-8d91c151>`);
      if (!((_a2 = unref(posts)) == null ? void 0 : _a2.length)) {
        _push(`<p data-v-8d91c151>\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442</p>`);
      } else {
        _push(`<div class="blockList" data-v-8d91c151><!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          _push(`<div class="post" data-v-8d91c151>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: `${post.img}`,
            sizes: "300px"
          }, null, _parent));
          _push(`<h2 data-v-8d91c151>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/${post.rubric.title_en.toLowerCase()}/${post.id}_${post.title_en}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(post.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(post.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h2><p data-v-8d91c151>${ssrInterpolate(post.preview)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/podcast/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8d91c151"]]);

export { index as default };
//# sourceMappingURL=index-C_RzwCAX.mjs.map
