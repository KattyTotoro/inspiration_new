import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useSeoMeta } from './v3-B0FGUrBs.mjs';
import './server.mjs';
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
  __name: "trips",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\u0421\u0430\u0439\u0442 \u0412\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u0435. \u041F\u0443\u0442\u0435\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0432 \u043C\u0438\u0440\u0435 \u0437\u043D\u0430\u043D\u0438\u0439.",
      ogTitle: "\u0421\u0430\u0439\u0442 \u0412\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u0435. \u041F\u0443\u0442\u0435\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0432 \u043C\u0438\u0440\u0435 \u0437\u043D\u0430\u043D\u0438\u0439.",
      description: "\u0412\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u0435 - \u044D\u0442\u043E \u0412\u0438\u0434\u0435\u0442\u044C, \u0441\u043B\u044B\u0448\u0430\u0442\u044C, \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C. \u0412\u043E\u0441\u0445\u0432\u0430\u043B\u044F\u0442\u044C \u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0435, \u0431\u044B\u0442\u044C \u0435\u0433\u043E \u0447\u0430\u0441\u0442\u044C\u044E \u0435\u0436\u0435\u0441\u0435\u043A\u0443\u043D\u0434\u043D\u043E! \u042D\u0442\u043E \u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0432 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0439 \u041B\u044E\u0431\u0432\u0438 \u0438 \u0437\u043D\u0430\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0447\u043D\u0443\u0442 \u043F\u0440\u043E\u0431\u0443\u0436\u0434\u0430\u0442\u044C \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0438\u0445.",
      ogDescription: "\u0412\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u0435 - \u044D\u0442\u043E \u0412\u0438\u0434\u0435\u0442\u044C, \u0441\u043B\u044B\u0448\u0430\u0442\u044C, \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C. \u0412\u043E\u0441\u0445\u0432\u0430\u043B\u044F\u0442\u044C \u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0435, \u0431\u044B\u0442\u044C \u0435\u0433\u043E \u0447\u0430\u0441\u0442\u044C\u044E \u0435\u0436\u0435\u0441\u0435\u043A\u0443\u043D\u0434\u043D\u043E! \u042D\u0442\u043E \u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0432 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0439 \u041B\u044E\u0431\u0432\u0438 \u0438 \u0437\u043D\u0430\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0447\u043D\u0443\u0442 \u043F\u0440\u043E\u0431\u0443\u0436\u0434\u0430\u0442\u044C \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0438\u0445.",
      ogImage: "/img/summary_small_image.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))}><div class="blockList"><div><h2>\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 8</h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci veniam error fugit nemo, reprehenderit consequatur eligendi molestiae beatae similique amet officia quidem recusandae, quaerat sunt nam non dolores blanditiis. <br><a href="#">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a></div><div><h2>\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 7</h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci veniam error fugit nemo, reprehenderit consequatur eligendi molestiae beatae similique amet officia quidem recusandae, quaerat sunt nam non dolores blanditiis. <br><a href="#">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a></div><div><h2>\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 6</h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci veniam error fugit nemo, reprehenderit consequatur eligendi molestiae beatae similique amet officia quidem recusandae, quaerat sunt nam non dolores blanditiis. <br><a href="#">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a></div><div><h2>\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 5</h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci veniam error fugit nemo, reprehenderit consequatur eligendi molestiae beatae similique amet officia quidem recusandae, quaerat sunt nam non dolores blanditiis. <br><a href="#">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a></div><div><h2>\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 4</h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci veniam error fugit nemo, reprehenderit consequatur eligendi molestiae beatae similique amet officia quidem recusandae, quaerat sunt nam non dolores blanditiis. <br><a href="#">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a></div><div><h2>\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 3</h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci veniam error fugit nemo, reprehenderit consequatur eligendi molestiae beatae similique amet officia quidem recusandae, quaerat sunt nam non dolores blanditiis. <br><a href="#">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a></div><div><h2>\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 2</h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci veniam error fugit nemo, reprehenderit consequatur eligendi molestiae beatae similique amet officia quidem recusandae, quaerat sunt nam non dolores blanditiis. <br><a href="#">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a></div><div><h2>\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 1</h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci veniam error fugit nemo, reprehenderit consequatur eligendi molestiae beatae similique amet officia quidem recusandae, quaerat sunt nam non dolores blanditiis. <br><a href="#">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/trips.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=trips-bMOiyach.mjs.map
