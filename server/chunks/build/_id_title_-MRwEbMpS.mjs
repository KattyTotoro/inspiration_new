import { d as useRoute, b as useFetch, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "[id_title]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id_title.toString().split("_", 1)[0];
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/post/${id}`, "$v6yNN7aXnN")), __temp = await __temp, __restore(), __temp);
    const post = ref((_a = data.value) == null ? void 0 : _a.post);
    const posts = ref((_b = data.value) == null ? void 0 : _b.posts);
    return (_ctx, _push, _parent, _attrs) => {
      var _a3;
      var _a2, _b2, _c;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))}>`);
      if (unref(post)) {
        _push(`<div class="postPage"><h1>${ssrInterpolate((_a2 = unref(post)) == null ? void 0 : _a2.title)}</h1><br><div>${(_a3 = (_b2 = unref(post)) == null ? void 0 : _b2.text) != null ? _a3 : ""}</div><div style="${ssrRenderStyle({ "clear": "both" })}"></div></div>`);
      } else {
        _push(`<div>\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A...</div>`);
      }
      if (!((_c = unref(posts)) == null ? void 0 : _c.length)) {
        _push(`<p>\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442</p>`);
      } else {
        _push(`<div class="blockList"><!--[-->`);
        ssrRenderList(unref(posts), (post2) => {
          _push(`<div class="post"><h2>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/${post2.rubric.title_en.toLowerCase()}/${post2.id}_${post2.title_en}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(post2.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(post2.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h2><p>${ssrInterpolate(post2.preview)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/music/[id_title].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_title_-MRwEbMpS.mjs.map
