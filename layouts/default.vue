<template>
  <main>
    <slot />
  </main>
</template>

<script setup>
useHead({
  title: "NERA",
  htmlAttrs: {
    lang: "ru"
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: ""
    },
    {
      name: "format-detection",
      content: "telephone=no"
    }
  ],
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png"
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    },
    {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#5bbad5"
    },
    {
      rel: "shortcut icon",
      href: "/favicon/favicon.ico"
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon/favicon.ico"
    },
    {
      rel: "msapplication-TileColor",
      content: "#611a6a"
    },
    {
      rel: "msapplication-config",
      content: "/favicon/browserconfig.xml"
    },
    {
      rel: "theme-color",
      content: "#fff"
    }
  ],
});
</script>

<style scoped lang="scss">
</style>
