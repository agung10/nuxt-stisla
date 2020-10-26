<template>
  <div>
    <BootstrapDropdown />
  </div>
</template>

<script>
import BootstrapDropdown from "@/components/pages/BootstrapDropdown";
export default {
  head: {
    title: "Bootstrap Components- Dropdown - Nuxt Stisla",
  },
  components: {
    BootstrapDropdown,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-dropdown" })
	}
};
</script>

<style scoped>
</style>