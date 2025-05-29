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
      const post = await prisma.post.findUnique({
        include: {
          author: {
            select: {
              name: true,
              pseudo: true,
              id: true,
              email: true
            }
          },
          rubric: true
        },
        where: {
          id: +id
        }
      });
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
          id: {
            not: +id
          },
          rubric_id: post == null ? void 0 : post.rubric_id,
          approved: true
        },
        orderBy: {
          created_at: "desc"
        },
        take: 3
      });
      return { post, posts, ok: true };
    } catch (e) {
      console.log(e);
      return { post: null, posts: [], ok: false, e };
    }
  } else {
    return { post: null, posts: [], ok: false };
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
