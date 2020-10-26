<template>
  <div>
    <EcommerceDashboard/>
  </div>
</template>

<script>
import EcommerceDashboard from '@/components/pages/EcommerceDashboard'
export default {
  head: {
    title: "Ecommerce Dashboard - Nuxt Stisla",
    link: [
      { rel: "stylesheet", href: "/modules/jqvmap/dist/jqvmap.min.css" },
      { rel: "stylesheet", href: "/modules/summernote/summernote-bs4.css" },
      {
        rel: "stylesheet",
        href: "/modules/owlcarousel2/dist/assets/owl.carousel.min.css",
      },
      {
        rel: "stylesheet",
        href: "/modules/owlcarousel2/dist/assets/owl.theme.default.min.css",
      },
    ],
    script: [
      { src: "/modules/jquery.sparkline.min.js" },
      { src: "/modules/chart.min.js" },
      { src: "/modules/owlcarousel2/dist/owl.carousel.min.js" },
      { src: "/modules/summernote/summernote-bs4.js" },
      { src: "/modules/chocolat/dist/js/jquery.chocolat.min.js" },
      { src: "/js/page/index.js", body: true }
    ],
  },
  components: {
      EcommerceDashboard
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "dashboard-ecommerceDashboard", })
	}
};
</script>

<style scoped>
</style>