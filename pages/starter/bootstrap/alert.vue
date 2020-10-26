<template>
  <div>
    <BootstrapAlert />
  </div>
</template>

<script>
import BootstrapAlert from "@/components/pages/BootstrapAlert";
export default {
  head: {
    title: "Bootstrap Components- Alert - Nuxt Stisla",
  },
  components: {
    BootstrapAlert,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-alert" })
	}
};
</script>

<style scoped>
</style>