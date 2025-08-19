// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  $production: {
    app: {
      head: {
        htmlAttrs: {
          lang: 'ru',
        },
        charset: 'utf-8',
        title: 'Inspiration', 
        viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
        link: [
          { rel: 'apple-touch-icon', sizes:'180x180' ,href: 'https://inspirationworld.ru/apple-touch-icon.png' },
          { rel: 'icon', type:'image/png', sizes:'32x32', href: 'https://inspirationworld.ru/favicon-32x32.png' },
          { rel: 'icon', type:'image/png', sizes:'16x16', href: 'https://inspirationworld.ru/favicon-16x16.png' },
          { rel: 'manifest', href: 'https://inspirationworld.ru/site.webmanifest' },
        ],
        script: [
          {
            type:'text/javascript',
            innerHTML:`
(function () {
  'use strict'

  var loadedMetrica = false;
  var timerId;

  if (navigator.userAgent.indexOf( 'YandexMetrika' ) > -1 || location.search.includes('_ym_status-check')) {
    loadMetrica();
  } else {
    window.addEventListener( 'scroll', loadMetrica, {passive: true} );
    window.addEventListener( 'touchstart', loadMetrica );
    document.addEventListener( 'mouseenter', loadMetrica );
    document.addEventListener( 'click', loadMetrica );
    document.addEventListener( 'DOMContentLoaded', loadFallback );
  }

  function loadFallback() {
    timerId = setTimeout( ()=>{
    loadMetrica
    // console.error('timer');
    }, 5000 );
  }

  function loadMetrica( e ) {

    if ( loadedMetrica ) return;
    if (e?.type=='mouseenter' && e?.x==0 && e?.y==0) return
    // console.error(e?.type, e?.x, e?.y);

    loadedMetrica = true;
    clearTimeout( timerId );
    window.removeEventListener( 'scroll', loadMetrica );
    window.removeEventListener( 'touchstart', loadMetrica );
    document.removeEventListener( 'mouseenter', loadMetrica );
    document.removeEventListener( 'click', loadMetrica );
    document.removeEventListener( 'DOMContentLoaded', loadFallback );
            
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),k.async=1,k.src=r,e.head.appendChild(k)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    window.ym(103808775, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    });
    (function(){var script = document.createElement("script");script.type = "text/javascript"; script.async = true;script.src = "https://www.googletagmanager.com/gtag/js?id=G-QM703ZH1FF";document.head.appendChild(script);})();window.dataLayer = window.dataLayer || [];function gtag() { window.dataLayer.push(arguments); }gtag("js", new Date());gtag("config", "G-QM703ZH1FF");
  }
})()
          `}
        ],
      },
    },
  },
  $development: {
    app: {
      head: {
        htmlAttrs: {
          lang: 'ru',
        },
        charset: 'utf-8',
        title: 'Inspiration', 
        viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
        link: [
          { rel: 'apple-touch-icon', sizes:'180x180' ,href: 'https://inspirationworld.ru/apple-touch-icon.png' },
          { rel: 'icon', type:'image/png', sizes:'32x32', href: 'https://inspirationworld.ru/favicon-32x32.png' },
          { rel: 'icon', type:'image/png', sizes:'16x16', href: 'https://inspirationworld.ru/favicon-16x16.png' },
          { rel: 'manifest', href: 'https://inspirationworld.ru/site.webmanifest' },
        ],
      },
    },
  },
  routeRules: {
    "/lk/post_edit": { prerender: false },
  },
  vite: {
    ssr: {
      external: ["@prisma/client", './lib/prisma.ts']
    },
    resolve: {
      alias: [
        {
          find:'my-prisma/client/index-browser',
          replacement: path.resolve(__dirname, 'node_modules/my-prisma/client/index-browser.js'),
        },
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    }
  },
  image: {
    domains: [
      'inspirationworld.ru'
    ],
    alias: {
      inspirationworld: 'https://inspirationworld.ru'
    },
    dir: 'public'
  },
  prisma: {
    generateClient: true,
    installStudio: false,
    autoSetupPrisma: true
  },

  modules: ['@nuxt/image', '@pinia/nuxt', 'nuxt-tiptap-editor', '@prisma/nuxt']
})