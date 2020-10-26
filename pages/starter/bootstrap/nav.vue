<template>
  <div>
    <BootstrapNav />
  </div>
</template>

<script>
import BootstrapNav from "@/components/pages/BootstrapNav";
export default {
  head: {
    title: "Bootstrap Components- Nav - Nuxt Stisla",
  },
  components: {
    BootstrapNav,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-nav" })
	}
};
</script>

<style scoped>
</style>