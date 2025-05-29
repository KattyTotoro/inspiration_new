import { c as defineEventHandler, r as readBody } from '../../../_/nitro.mjs';
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

const _id__post = defineEventHandler(async (event) => {
  var _a;
  const id = (_a = event.context.params) == null ? void 0 : _a.id;
  const json = await readBody(event);
  const data = JSON.parse(json);
  if (id) {
    try {
      const comment = await prisma.comment.create({
        data
      });
      if (data.comment_id) {
        await prisma.comment.update({
          data: {
            comments_num: {
              increment: 1
            }
          },
          where: {
            id: data.comment_id
          }
        });
      }
      return { comment, ok: true };
    } catch (e) {
      console.log(e);
      return { comment: null, ok: false, e };
    }
  } else {
    return { comment: null, ok: false };
  }
});

export { _id__post as default };
//# sourceMappingURL=_id_.post.mjs.map
