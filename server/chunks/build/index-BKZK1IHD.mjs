import { _ as _sfc_main$1 } from './NuxtImg-CEwUbLdW.mjs';
import { _ as _export_sfc, u as useUser, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './v3-B0FGUrBs.mjs';
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
  setup(__props) {
    const userStore = useUser();
    const posts = ref([]);
    const fetchPosts = async () => {
      const resp = await fetch("/api/post/moderate/");
      const data = await resp.json();
      posts.value = (data == null ? void 0 : data.posts) || [];
    };
    watch(() => userStore.user, (user) => {
      if ((user == null ? void 0 : user.role) == "moderator") fetchPosts();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))} data-v-32367fd3>`);
      if (((_a = unref(userStore).user) == null ? void 0 : _a.role) == "moderator") {
        _push(`<div class="blockList" data-v-32367fd3><!--[-->`);
        ssrRenderList(posts.value, (post) => {
          _push(`<div class="post" data-v-32367fd3>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: `${post.img}`,
            sizes: "300px"
          }, null, _parent));
          _push(`<h2 data-v-32367fd3>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/lk/moderation/preview/${post.id}`
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
          _push(`</h2><p data-v-32367fd3>${ssrInterpolate(post.preview)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lk/moderation/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-32367fd3"]]);

export { index as default };
//# sourceMappingURL=index-BKZK1IHD.mjs.map
