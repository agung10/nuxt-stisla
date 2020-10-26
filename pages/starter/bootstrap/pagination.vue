<template>
  <div>
    <BootstrapPagination />
  </div>
</template>

<script>
import BootstrapPagination from "@/components/pages/BootstrapPagination";
export default {
  head: {
    title: "Bootstrap Components- Pagination - Nuxt Stisla",
  },
  components: {
    BootstrapPagination,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-pagination" })
	}
};
</script>

<style scoped>
</style>