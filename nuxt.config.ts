// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  routeRules: {
    "/lk/post_edit": { prerender: false },
  },
  app: {
    head: {
      title: 'Inspiration', 
      htmlAttrs: {
        lang: 'ru',
      },
      link: [
        { rel: 'apple-touch-icon', sizes:'180x180' ,href: 'https://inspirationworld.ru/apple-touch-icon.png' },
        { rel: 'icon', type:'image/png', sizes:'32x32', href: 'https://inspirationworld.ru/favicon-32x32.png' },
        { rel: 'icon', type:'image/png', sizes:'16x16', href: 'https://inspirationworld.ru/favicon-16x16.png' },
        { rel: 'manifest', href: 'https://inspirationworld.ru/site.webmanifest' },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
    },
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
  prisma: {
    generateClient: true,
    installStudio: false,
    autoSetupPrisma: true
  },

  modules: ['@nuxt/image', '@pinia/nuxt', 'nuxt-tiptap-editor', '@prisma/nuxt']
})