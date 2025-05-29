import { hasInjectionContext, inject } from 'vue';
import { t as tryUseNuxtApp } from './server.mjs';
import { P as headSymbol, Q as useSeoMeta$1, R as useHead$1 } from '../_/nitro.mjs';

function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  }));
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
function useSeoMeta(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useSeoMeta$1(input, { head, ...options });
  }
}

export { useHead as a, injectHead as i, useSeoMeta as u };
//# sourceMappingURL=v3-B0FGUrBs.mjs.map
