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

const user_name_put = defineEventHandler(async (event) => {
  const data = await readBody(event);
  const name = data.name;
  const id = data.id;
  try {
    const newUser = await prisma.user.update({
      data: {
        name
      },
      where: {
        id
      }
    });
    return newUser;
  } catch (e) {
    console.log(e);
    return e;
  }
});

export { user_name_put as default };
//# sourceMappingURL=user_name.put.mjs.map
