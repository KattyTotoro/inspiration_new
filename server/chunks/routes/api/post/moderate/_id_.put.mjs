import { c as defineEventHandler, r as readBody } from '../../../../_/nitro.mjs';
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

const _id__put = defineEventHandler(async (event) => {
  var _a;
  const id = (_a = event.context.params) == null ? void 0 : _a.id;
  const dataJSON = await readBody(event);
  const data = JSON.parse(dataJSON);
  let isModerator = false;
  if (data.token) {
    const user = await prisma.user.findUnique({
      select: {
        role: true
      },
      where: {
        token: data.token
      }
    });
    isModerator = (user == null ? void 0 : user.role) == "moderator";
  }
  if (id && isModerator) {
    try {
      await prisma.post.update({
        data: {
          approved: true
        },
        where: {
          id: +id
        }
      });
      return { ok: true };
    } catch (e) {
      console.log(e);
      return { ok: false, e };
    }
  } else {
    return { ok: false };
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
