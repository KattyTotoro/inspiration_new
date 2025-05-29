import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useUser } from './server.mjs';
import md5 from 'md5';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUser();
    const email = ref("");
    const pass = ref("");
    const error = ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!unref(userStore).user) {
        _push(`<div style="${ssrRenderStyle({ "max-width": "300px", "margin": "100px auto", "border-radius": "10px", "border": "1px solid #DEDEDE", "padding": "20px" })}"><form style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "20px" })}"><input type="text" placeholder="email"${ssrRenderAttr("value", email.value)}><input type="password" placeholder="pass"${ssrRenderAttr("value", pass.value)}> ${ssrInterpolate(unref(md5)(pass.value))} `);
        if (error.value) {
          _push(`<p>${ssrInterpolate(error.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<input type="submit" value="Login"><input type="submit" value="Register"></form></div>`);
      } else {
        _push(`<div style="${ssrRenderStyle({ "max-width": "300px", "margin": "100px auto", "border-radius": "10px", "border": "1px solid #DEDEDE", "padding": "20px" })}"><h2>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0434\u0430\u043B\u043E\u0432\u0430\u0442\u044C, ${ssrInterpolate((_a = unref(userStore).user) == null ? void 0 : _a.name)}</h2></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DyZh1xXX.mjs.map
