<template>
  <div>
    <BootstrapTooltip />
  </div>
</template>

<script>
import BootstrapTooltip from "@/components/pages/BootstrapTooltip";
export default {
  head: {
    title: "Bootstrap Components- Tooltip - Nuxt Stisla",
  },
  components: {
    BootstrapTooltip,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-tooltip" })
	}
};
</script>

<style scoped>
</style>