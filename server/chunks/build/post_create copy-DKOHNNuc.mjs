import { u as useEditor, E as EditorContent } from './index-DkmfnpzE.mjs';
import { defineComponent, ref, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
import { h as useApp, u as useUser } from './server.mjs';
import '@tiptap/pm/state';
import '@tiptap/pm/model';
import '@tiptap/pm/transform';
import '@tiptap/pm/commands';
import '@tiptap/pm/schema-list';
import '@tiptap/pm/dropcursor';
import '@tiptap/pm/gapcursor';
import '@tiptap/pm/history';
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
  __name: "post_create copy",
  __ssrInlineRender: true,
  setup(__props) {
    ref(1);
    const appStore = useApp();
    const userStore = useUser();
    const post = ref({});
    const alt = ref("");
    ref(null);
    const editor = useEditor({});
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_TiptapEditorContent = EditorContent;
      if ((_a = unref(userStore).user) == null ? void 0 : _a.id) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "content tt" }, _attrs))}><label class="label_rubric_create" for="rubric">\u0412\u044B\u0431\u043E\u0440 \u0440\u0443\u0431\u0440\u0438\u043A\u0438: </label><select class="rubric_create" name="rubric" id="rubric"><!--[-->`);
        ssrRenderList(unref(appStore).rubrics, (rubric) => {
          _push(`<option${ssrRenderAttr("value", rubric.id)}>${ssrInterpolate(rubric.title)}</option>`);
        });
        _push(`<!--]--></select><input class="myEditor" type="text"${ssrRenderAttr("value", unref(post).title)} placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438">`);
        if (unref(editor)) {
          _push(`<div><button${ssrIncludeBooleanAttr(!unref(editor).can().chain().focus().toggleBold().run()) ? " disabled" : ""} class="${ssrRenderClass({ "is-active": unref(editor).isActive("bold") })}"> \u0436\u0438\u0440\u043D\u044B\u0439 </button><button${ssrIncludeBooleanAttr(!unref(editor).can().chain().focus().toggleItalic().run()) ? " disabled" : ""} class="${ssrRenderClass({ "is-active": unref(editor).isActive("italic") })}"> \u043A\u0443\u0440\u0441\u0438\u0432 </button><button${ssrIncludeBooleanAttr(!unref(editor).can().chain().focus().toggleStrike().run()) ? " disabled" : ""} class="${ssrRenderClass({ "is-active": unref(editor).isActive("strike") })}"> \u043F\u0435\u0440\u0435\u0447\u0451\u0440\u043A\u043D\u0443\u0442\u044B\u0439 </button><button${ssrIncludeBooleanAttr(!unref(editor).can().chain().focus().toggleCode().run()) ? " disabled" : ""} class="${ssrRenderClass({ "is-active": unref(editor).isActive("code") })}"> \u043A\u043E\u0434 </button><button> clear marks </button><button> clear nodes </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("paragraph") })}"> paragraph </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("heading", { level: 1 }) })}"> h1 </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("heading", { level: 2 }) })}"> h2 </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("heading", { level: 3 }) })}"> h3 </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("heading", { level: 4 }) })}"> h4 </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("heading", { level: 5 }) })}"> h5 </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("heading", { level: 6 }) })}"> h6 </button><br><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("bulletList") })}"> bullet list </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("orderedList") })}"> ordered list </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("codeBlock") })}"> code block </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("blockquote") })}"> blockquote </button><button> horizontal rule </button><button> hard break </button><button${ssrIncludeBooleanAttr(!unref(editor).can().chain().focus().undo().run()) ? " disabled" : ""}> undo </button><button${ssrIncludeBooleanAttr(!unref(editor).can().chain().focus().redo().run()) ? " disabled" : ""}> redo </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_TiptapEditorContent, { editor: unref(editor) }, null, _parent));
        _push(`<div><form method="post"><input type="text" name="alt"${ssrRenderAttr("value", unref(alt))} placeholder="Alt"><input type="file" placeholder="\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"><input type="submit" value="\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C"></form></div><button>save</button></section>`);
      } else {
        _push(`<section${ssrRenderAttrs(_attrs)}> Login first </section>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lk/post_create copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=post_create copy-DKOHNNuc.mjs.map
