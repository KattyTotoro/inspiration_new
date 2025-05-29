import { c as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import { p as prisma } from '../../_/prisma.mjs';
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

const regin_post = defineEventHandler(async (event) => {
  const data = await readBody(event);
  if (data.email && data.pass) {
    const testUser = await prisma.user.findUnique({
      select: {
        id: true
      },
      where: {
        email: data.email
      }
    });
    if (testUser) {
      return { ok: false, user: null, massage: "not uniq" };
    }
    const user = await prisma.user.create({
      data,
      select: {
        id: true,
        email: true,
        name: true,
        token: true
      }
    });
    return { ok: true, user, massage: "" };
  } else {
    return {
      error: "not found"
    };
  }
});

export { regin_post as default };
//# sourceMappingURL=regin.post.mjs.map
