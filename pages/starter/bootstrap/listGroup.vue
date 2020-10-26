<template>
  <div>
    <BootstrapListGroup />
  </div>
</template>

<script>
import BootstrapListGroup from "@/components/pages/BootstrapListGroup";
export default {
  head: {
    title: "Bootstrap Components- List Group - Nuxt Stisla",
  },
  components: {
    BootstrapListGroup,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-listGroup" })
	}
};
</script>

<style scoped>
</style>