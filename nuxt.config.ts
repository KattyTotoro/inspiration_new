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
          {innerHTML:`
      (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103808775', 'ym');
      ym(103808775, 'init', {ssr:true, webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
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