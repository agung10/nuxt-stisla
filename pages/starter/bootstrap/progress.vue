<template>
  <div>
    <BootstrapProgress />
  </div>
</template>

<script>
import BootstrapProgress from "@/components/pages/BootstrapProgress";
export default {
  head: {
    title: "Bootstrap Components- Progress - Nuxt Stisla",
  },
  components: {
    BootstrapProgress,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-progress" })
	}
};
</script>

<style scoped>
</style>