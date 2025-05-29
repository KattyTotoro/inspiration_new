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

const add_user = defineEventHandler(async (event) => {
  if (event.method == "POST") {
    const data = await readBody(event);
    try {
      const newUser = await prisma.user.create({
        data
      });
      return newUser;
    } catch (e) {
      console.log(e);
      return e;
    }
  } else {
    return { data: "not allowed" };
  }
});

export { add_user as default };
//# sourceMappingURL=add_user.mjs.map
