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

const autologin_post = defineEventHandler(async (event) => {
  const data = await readBody(event);
  if (data.email && data.id && data.token) {
    const user = await prisma.user.findUnique({
      select: {
        id: true,
        email: true,
        name: true,
        token: true,
        role: true
      },
      where: {
        email: data.email,
        id: data.id,
        token: data.token
      }
    });
    if (user) {
      return { ok: true, user, massage: "" };
    }
    return { ok: false, user: null, massage: "" };
  } else {
    return {
      error: "not found"
    };
  }
});

export { autologin_post as default };
//# sourceMappingURL=autologin.post.mjs.map
