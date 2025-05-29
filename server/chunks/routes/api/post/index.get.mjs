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

const index_get = defineEventHandler(async (event) => {
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
        approved: false
      }
    });
    return { posts, ok: true };
  } catch (e) {
    console.log(e);
    return { posts: [], ok: false, e };
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
