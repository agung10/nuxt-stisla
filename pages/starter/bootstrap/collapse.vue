<template>
  <div>
    <BootstrapCollapse />
  </div>
</template>

<script>
import BootstrapCollapse from "@/components/pages/BootstrapCollapse";
export default {
  head: {
    title: "Bootstrap Components- Collapse - Nuxt Stisla",
  },
  components: {
    BootstrapCollapse,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-collapse" })
	}
};
</script>

<style scoped>
</style>