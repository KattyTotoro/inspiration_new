import { c as defineEventHandler } from '../../../../_/nitro.mjs';
import { p as prisma } from '../../../../_/prisma.mjs';
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
      const posts = await prisma.post.findMany({
        include: {
          author: {
            select: {
              name: true,
              pseudo: true,
              id: true
            }
          },
          rubric: true
        },
        where: {
          author_id: +id,
          approved: true
        }
      });
      return { posts, ok: true };
    } catch (e) {
      console.log(e);
      return { posts: [], ok: false, e };
    }
  } else {
    return { posts: null, ok: false };
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
