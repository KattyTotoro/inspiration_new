import { c as defineEventHandler } from '../../../_/nitro.mjs';
import { p as prisma } from '../../../_/prisma.mjs';
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
import 'vue';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'ipx';
import 'node:path';
import 'node:crypto';
import '@prisma/client';

const _id__get = defineEventHandler(async (event) => {
  var _a;
  const id = (_a = event.context.params) == null ? void 0 : _a.id;
  if (id) {
    try {
      const commentsAll = await prisma.comment.findMany({
        where: {
          post_id: +id
        },
        orderBy: {
          id: "asc"
        }
      });
      const comments = [];
      for (let el of commentsAll) {
        if (!el.comment_id) {
          comments.push(el);
        } else {
          const comment = commentsAll.find((c) => c.id == el.comment_id);
          if (comment == null ? void 0 : comment.comments) {
            comment.comments.push(el);
          } else {
            if (comment) {
              comment.comments = [];
              comment.comments.push(el);
            }
          }
        }
      }
      return { comments, ok: true };
    } catch (e) {
      console.log(e);
      return { comments: [], ok: false, e };
    }
  } else {
    return { comments: [], ok: false };
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
