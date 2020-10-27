export default {
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
  css: ["~/assets/css/style.css", "~/assets/css/components.css"]
};
