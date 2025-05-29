import { defineComponent, ref, withAsyncContext, unref, mergeProps, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { b as useFetch, u as useUser } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CommentComponent",
  __ssrInlineRender: true,
  props: ["comment", "margin", "author_id", "refresh"],
  setup(__props) {
    const reply = ref(false);
    const text = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_CommentComponent = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: `margin-left: ${__props.margin}px`
      }, _attrs))}><div><p>${(_a = __props.comment.text.replaceAll("\n", "<br>")) != null ? _a : ""}</p><p>${ssrInterpolate(__props.comment.created_at)} <button class="reply">\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</button> ${ssrInterpolate(__props.comment.comments_num)}</p></div>`);
      if (unref(reply)) {
        _push(`<form><textarea class="enterComment" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439">${ssrInterpolate(unref(text))}</textarea></form>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.comment.comments) {
        _push(`<!--[-->`);
        ssrRenderList(__props.comment.comments, (comment) => {
          _push(ssrRenderComponent(_component_CommentComponent, {
            key: comment.id,
            comment,
            margin: __props.margin + 10,
            author_id: __props.author_id,
            refresh: __props.refresh
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommentComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CommentsBlock",
  __ssrInlineRender: true,
  props: ["post_id"],
  async setup(__props) {
    let __temp, __restore;
    const text = ref("");
    const props = __props;
    const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/comments/${props.post_id}`, "$2Nn8Cs0MvJ")), __temp = await __temp, __restore(), __temp);
    const userStore = useUser();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_CommentComponent = _sfc_main$1;
      _push(`<!--[--><form><textarea class="enterComment" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439">${ssrInterpolate(unref(text))}</textarea></form><br><div class="comments"><!--[-->`);
      ssrRenderList((_a = unref(data)) == null ? void 0 : _a.comments, (comment) => {
        var _a2;
        _push(ssrRenderComponent(_component_CommentComponent, {
          key: comment.id,
          comment,
          margin: 0,
          author_id: (_a2 = unref(userStore).user) == null ? void 0 : _a2.id,
          refresh: unref(refresh)
        }, null, _parent));
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommentsBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CommentsBlock-8v9idcIz.mjs.map
