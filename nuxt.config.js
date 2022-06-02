import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  ssr: false,
  target: "static",
  hooks: {
    "vite:extend" ({ nuxt, config }) {},
    "vite:extendConfig" (clientConfig, { isClient, isServer }) {},
    "webpack:config" (configs) {}
  },
  styleResources: {
    scss: ["@/assets/scss/vars.scss"]
  },
  css: [
    {
      src: "@/assets/scss/styles.scss",
      lang: "scss"
    }
  ],

  buildModules: [
    "@nuxtjs/svg"
  ]

});
