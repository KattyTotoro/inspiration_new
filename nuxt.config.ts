// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  vite: {
    ssr: {
      external: ["@prisma/client"]
    },
    resolve: {
      alias: {
        ".prisma/client/index-browser": "./node_modules/.prisma/client/index-browser.js"
      }
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
    installCLI: true,
    installClient: true,
    generateClient: true,
    installStudio: false,
    autoSetupPrisma: true
  },

  modules: ['@nuxt/image', '@pinia/nuxt', 'nuxt-tiptap-editor', '@prisma/nuxt']
})