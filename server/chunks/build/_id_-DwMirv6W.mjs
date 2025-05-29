import { defineComponent, withAsyncContext, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { d as useRoute, u as useUser, b as useFetch } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const userStore = useUser();
    const id = +route.params.id;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/post/${id}`, "$OCGVq9QZqC")), __temp = await __temp, __restore(), __temp);
    const post = ref((_a = data.value) == null ? void 0 : _a.post);
    return (_ctx, _push, _parent, _attrs) => {
      var _a3;
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))}>`);
      if (((_a2 = unref(userStore).user) == null ? void 0 : _a2.role) == "moderator") {
        _push(`<!--[-->`);
        if (unref(post)) {
          _push(`<div class="postPage"><p>${ssrInterpolate(((_c = (_b = unref(post)) == null ? void 0 : _b.author) == null ? void 0 : _c.pseudo) ? (_e = (_d = unref(post)) == null ? void 0 : _d.author) == null ? void 0 : _e.pseudo : (_f = unref(post)) == null ? void 0 : _f.author.name)}</p><h1>${ssrInterpolate((_g = unref(post)) == null ? void 0 : _g.title)}</h1><br><div>${(_a3 = (_h = unref(post)) == null ? void 0 : _h.text) != null ? _a3 : ""}</div><div style="${ssrRenderStyle({ "clear": "both" })}"></div><button class="approveButton">\u041E\u0434\u043E\u0431\u0440\u0438\u0442\u044C</button></div>`);
        } else {
          _push(`<div>\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A...</div>`);
        }
        _push(`<!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lk/moderation/preview/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DwMirv6W.mjs.map
