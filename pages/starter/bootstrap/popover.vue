<template>
  <div>
    <BootstrapPopover />
  </div>
</template>

<script>
import BootstrapPopover from "@/components/pages/BootstrapPopover";
export default {
  head: {
    title: "Bootstrap Components- Popover - Nuxt Stisla",
  },
  components: {
    BootstrapPopover,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-popover" })
	}
};
</script>

<style scoped>
</style>