<template>
  <div>
    <BootstrapCarousel />
  </div>
</template>

<script>
import BootstrapCarousel from "@/components/pages/BootstrapCarousel";
export default {
  head: {
    title: "Bootstrap Components- Carousel - Nuxt Stisla",
  },
  components: {
    BootstrapCarousel,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-carousel" })
	}
};
</script>

<style scoped>
</style>