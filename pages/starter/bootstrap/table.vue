<template>
  <div>
    <BootstrapTable />
  </div>
</template>

<script>
import BootstrapTable from "@/components/pages/BootstrapTable";
export default {
  head: {
    title: "Bootstrap Components- Table - Nuxt Stisla",
  },
  components: {
    BootstrapTable,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-table" })
	}
};
</script>

<style scoped>
</style>