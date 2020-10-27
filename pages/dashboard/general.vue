<template>
  <div>
    <GeneralDashboard/>
  </div>
</template>

<script>
import GeneralDashboard from '@/components/pages/GeneralDashboard'
export default {
  head: {
    title: "General Dashboard - Nuxt Stisla",
    link: [
      { rel: "stylesheet", href: "/modules/jqvmap/dist/jqvmap.min.css" },
      { rel: "stylesheet", href: "/modules/weather-icon/css/weather-icons.min.css" },
      {
        rel: "stylesheet",
        href: "/modules/weather-icon/css/weather-icons-wind.min.css",
      },
      {
        rel: "stylesheet",
        href: "/modules/summernote/summernote-bs4.css",
      },
    ],
    script: [
      { src: "/modules/simple-weather/jquery.simpleWeather.min.js" },
      { src: "/modules/chart.min.js" },
      { src: "/modules/jqvmap/dist/jquery.vmap.min.js" },
      { src: "/modules/jqvmap/dist/maps/jquery.vmap.world.js" },
      { src: "/modules/summernote/summernote-bs4.js" },
      { src: "/modules/chocolat/dist/js/jquery.chocolat.min.js" },
      { src: "/js/page/index-0.js", body: true }
    ],
  },
  components: {
      GeneralDashboard
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "dashboard-generalDashboard", })
	}
};
</script>

<style scoped>
</style>