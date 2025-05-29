import { _ as _export_sfc, u as useUser, a as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$1 } from './NuxtImg-CEwUbLdW.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
import './v3-B0FGUrBs.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isAuth = ref(true);
    const email = ref("");
    const password = ref("");
    const password2 = ref("");
    const errorMessage = ref("");
    const posts = ref([]);
    const userStore = useUser();
    ref("");
    const fetchPosts = async () => {
      var _a;
      const resp = await fetch("/api/post/by_users_lk/" + ((_a = userStore.user) == null ? void 0 : _a.id));
      const data = await resp.json();
      posts.value = (data == null ? void 0 : data.posts) || [];
    };
    watch(() => userStore.user, (user) => {
      if (user == null ? void 0 : user.id) fetchPosts();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))} data-v-e58d3904><h1 class="lk_h1" data-v-e58d3904>\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</h1>`);
      if (unref(userStore).user) {
        _push(`<div class="nickname" data-v-e58d3904><p data-v-e58d3904>\u0412\u0430\u0448 \u043D\u0438\u043A: </p><div data-v-e58d3904><input type="text" name="nickname"${ssrRenderAttr("value", unref(userStore).user.name)} placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u043D\u0438\u043A" data-v-e58d3904><button data-v-e58d3904>\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(userStore).user) {
        _push(`<div class="tabs" data-v-e58d3904><input type="radio" id="tab-login" name="tab-group" checked data-v-e58d3904><label for="tab-login" style="${ssrRenderStyle({ "width": "81px" })}" class="tab-title" data-v-e58d3904>\u0412\u0445\u043E\u0434</label><input type="radio" id="tab-register" name="tab-group" data-v-e58d3904><label for="tab-register" style="${ssrRenderStyle({ "width": "140px" })}" class="tab-title" data-v-e58d3904>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</label><br data-v-e58d3904>`);
        if (isAuth.value) {
          _push(`<div class="tab" data-v-e58d3904><div class="tab-content" data-v-e58d3904><form class="lk_entrance" data-v-e58d3904><input type="email"${ssrRenderAttr("value", email.value)} placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0447\u0442\u0443" required data-v-e58d3904><input type="password"${ssrRenderAttr("value", password.value)} placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C" required data-v-e58d3904><button type="submit" data-v-e58d3904>\u0412\u043E\u0439\u0442\u0438</button>`);
          if (errorMessage.value) {
            _push(`<p class="error" data-v-e58d3904>${ssrInterpolate(errorMessage.value)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</form></div></div>`);
        } else {
          _push(`<div class="tab" data-v-e58d3904><div class="tab-content" data-v-e58d3904><form class="lk_entrance" data-v-e58d3904><input type="email"${ssrRenderAttr("value", email.value)} placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0447\u0442\u0443" required data-v-e58d3904><input type="password"${ssrRenderAttr("value", password.value)} placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C" required data-v-e58d3904><input type="password"${ssrRenderAttr("value", password2.value)} placeholder="\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C" required data-v-e58d3904><button type="submit" data-v-e58d3904>\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F</button>`);
          if (errorMessage.value) {
            _push(`<p class="error" data-v-e58d3904>${ssrInterpolate(errorMessage.value)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</form></div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(userStore).user) {
        _push(`<div data-v-e58d3904>`);
        if (((_a = unref(userStore).user) == null ? void 0 : _a.role) == "moderator") {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/lk/moderation",
            class: "post_create_button"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u041C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044F`);
              } else {
                return [
                  createTextVNode("\u041C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044F")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<h2 class="myPublications" data-v-e58d3904>\u041C\u043E\u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438</h2>`);
        if (!((_b = posts.value) == null ? void 0 : _b.length)) {
          _push(`<p data-v-e58d3904>\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/lk/post_create",
          class: "post_create_button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E`);
            } else {
              return [
                createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="blockList" data-v-e58d3904><!--[-->`);
        ssrRenderList(posts.value, (post) => {
          _push(`<div class="post" data-v-e58d3904>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: `${post.img}`,
            sizes: "300px"
          }, null, _parent));
          _push(`<h2 data-v-e58d3904>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/lk/post_edit/${post.id}`
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
          _push(`</h2><p data-v-e58d3904>${ssrInterpolate(post.preview)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lk/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e58d3904"]]);

export { index as default };
//# sourceMappingURL=index-UE3r1-BZ.mjs.map
