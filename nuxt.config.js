export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    ssr: false,
    target: "static",
    title: "Nuxt Stisla",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

      { rel: "stylesheet", href: "/modules/bootstrap/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/modules/fontawesome/css/all.min.css" },
      { rel: "stylesheet", href: "/css/style.css" },
      { rel: "stylesheet", href: "/css/components.css" },
    ],
    script: [
      { src: "/modules/jquery.min.js" },
      { src: "/modules/popper.js" },
      { src: "/modules/tooltip.js" },
      { src: "/modules/bootstrap/js/bootstrap.min.js" },
      { src: "/modules/nicescroll/jquery.nicescroll.min.js" },
      { src: "/modules/moment.min.js" },
      { src: "/js/stisla.js" },
      { src: "/js/scripts.js" },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
