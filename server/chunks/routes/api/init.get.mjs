import { c as defineEventHandler } from '../../_/nitro.mjs';
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

const init_get = defineEventHandler(async (event) => {
  const postArr = [
    {
      rubric_id: 1,
      title: "\u0422\u0440\u0435\u0442\u044C\u044F \u0441\u0442\u0440\u0430\u0442\u044C\u044F",
      title_en: "",
      text: "Text 1 \u0412\u0414\u041E\u0425\u041D\u041E\u0412\u0415\u041D\u0418\u0415 - \u044D\u0442\u043E \u0412\u0438\u0434\u0435\u0442\u044C, \u0441\u043B\u044B\u0448\u0430\u0442\u044C, \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C\u2026. \u0412\u043E\u0441\u0445\u0432\u0430\u043B\u044F\u0442\u044C \u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0435, \u0431\u044B\u0442\u044C \u0435\u0433\u043E \u0447\u0430\u0441\u0442\u044C\u044E \u0435\u0436\u0435\u0441\u0435\u043A\u0443\u043D\u0434\u043D\u043E! \u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435 \u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0432\u0435\u0434\u0430\u0442\u044C \u0411\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438, \u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0420\u0430\u0434\u043E\u0441\u0442\u044C\u044E \u0438 \u0417\u043D\u0430\u043D\u0438\u044F\u043C\u0438.",
      preview: "third Peview \u0412\u0414\u041E\u0425\u041D\u041E\u0412\u0415\u041D\u0418\u0415 - \u044D\u0442\u043E \u0412\u0438\u0434\u0435\u0442\u044C, \u0441\u043B\u044B\u0448\u0430\u0442\u044C, \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C\u2026.",
      img: "inspirationLargeImage.png",
      author_id: 1,
      smile: 0,
      sad: 0
    },
    {
      rubric_id: 1,
      title: "Second post",
      title_en: "",
      text: "Text 2 Second Text text text text \u0412\u0414\u041E\u0425\u041D\u041E\u0412\u0415\u041D\u0418\u0415 - \u044D\u0442\u043E \u0412\u0438\u0434\u0435\u0442\u044C, \u0441\u043B\u044B\u0448\u0430\u0442\u044C, \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C\u2026. \u0412\u043E\u0441\u0445\u0432\u0430\u043B\u044F\u0442\u044C \u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0435, \u0431\u044B\u0442\u044C \u0435\u0433\u043E \u0447\u0430\u0441\u0442\u044C\u044E \u0435\u0436\u0435\u0441\u0435\u043A\u0443\u043D\u0434\u043D\u043E! \u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435 \u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0432\u0435\u0434\u0430\u0442\u044C \u0411\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438, \u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0420\u0430\u0434\u043E\u0441\u0442\u044C\u044E \u0438 \u0417\u043D\u0430\u043D\u0438\u044F\u043C\u0438.",
      preview: "SecondPeview...",
      img: "summary_small_image.png",
      author_id: 1,
      smile: 0,
      sad: 0
    },
    {
      rubric_id: 1,
      title: "First post",
      title_en: "",
      text: "Text 3 Text text text text \u0412\u0414\u041E\u0425\u041D\u041E\u0412\u0415\u041D\u0418\u0415 - \u044D\u0442\u043E \u0412\u0438\u0434\u0435\u0442\u044C, \u0441\u043B\u044B\u0448\u0430\u0442\u044C, \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C\u2026. \u0412\u043E\u0441\u0445\u0432\u0430\u043B\u044F\u0442\u044C \u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0435, \u0431\u044B\u0442\u044C \u0435\u0433\u043E \u0447\u0430\u0441\u0442\u044C\u044E \u0435\u0436\u0435\u0441\u0435\u043A\u0443\u043D\u0434\u043D\u043E! \u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435 \u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0432\u0435\u0434\u0430\u0442\u044C \u0411\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438, \u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0420\u0430\u0434\u043E\u0441\u0442\u044C\u044E \u0438 \u0417\u043D\u0430\u043D\u0438\u044F\u043C\u0438.",
      preview: "Peview...",
      img: "summary_large_image.png",
      author_id: 1,
      smile: 0,
      sad: 0
    }
  ];
  function translit(word) {
    var answer = "";
    var converter = {
      "\u0430": "a",
      "\u0431": "b",
      "\u0432": "v",
      "\u0433": "g",
      "\u0434": "d",
      "\u0435": "e",
      "\u0451": "e",
      "\u0436": "zh",
      "\u0437": "z",
      "\u0438": "i",
      "\u0439": "y",
      "\u043A": "k",
      "\u043B": "l",
      "\u043C": "m",
      "\u043D": "n",
      "\u043E": "o",
      "\u043F": "p",
      "\u0440": "r",
      "\u0441": "s",
      "\u0442": "t",
      "\u0443": "u",
      "\u0444": "f",
      "\u0445": "h",
      "\u0446": "c",
      "\u0447": "ch",
      "\u0448": "sh",
      "\u0449": "sch",
      "\u044C": "",
      "\u044B": "y",
      "\u044A": "",
      "\u044D": "e",
      "\u044E": "yu",
      "\u044F": "ya",
      "\u0410": "A",
      "\u0411": "B",
      "\u0412": "V",
      "\u0413": "G",
      "\u0414": "D",
      "\u0415": "E",
      "\u0401": "E",
      "\u0416": "Zh",
      "\u0417": "Z",
      "\u0418": "I",
      "\u0419": "Y",
      "\u041A": "K",
      "\u041B": "L",
      "\u041C": "M",
      "\u041D": "N",
      "\u041E": "O",
      "\u041F": "P",
      "\u0420": "R",
      "\u0421": "S",
      "\u0422": "T",
      "\u0423": "U",
      "\u0424": "F",
      "\u0425": "H",
      "\u0426": "C",
      "\u0427": "Ch",
      "\u0428": "Sh",
      "\u0429": "Sch",
      "\u042C": "",
      "\u042B": "Y",
      "\u042A": "",
      "\u042D": "E",
      "\u042E": "Yu",
      "\u042F": "Ya"
    };
    for (var i = 0; i < word.length; ++i) {
      if (converter[word[i]] == void 0) {
        answer += word[i];
      } else {
        answer += converter[word[i]];
      }
    }
    answer = answer.trim().replaceAll(" ", "_").toLocaleLowerCase();
    return answer;
  }
  for (let el of postArr) {
    el.title_en = translit(el.title);
  }
  return {};
});

export { init_get as default };
//# sourceMappingURL=init.get.mjs.map
