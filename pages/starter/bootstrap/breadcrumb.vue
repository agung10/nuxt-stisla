<template>
  <div>
    <BootstrapBreadcrumb />
  </div>
</template>

<script>
import BootstrapBreadcrumb from "@/components/pages/BootstrapBreadcrumb";
export default {
  head: {
    title: "Bootstrap Components- Breadcrumb - Nuxt Stisla",
  },
  components: {
    BootstrapBreadcrumb,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-breadcrumb" })
	}
};
</script>

<style scoped>
</style>