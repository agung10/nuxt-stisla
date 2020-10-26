<template>
  <div>
    <BootstrapNavbar />
  </div>
</template>

<script>
import BootstrapNavbar from "@/components/pages/BootstrapNavbar";
export default {
  head: {
    title: "Bootstrap Components- Navbar - Nuxt Stisla",
  },
  components: {
    BootstrapNavbar,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-navbar" })
	}
};
</script>

<style scoped>
</style>