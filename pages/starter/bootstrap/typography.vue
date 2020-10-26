<template>
  <div>
    <BootstrapTypography />
  </div>
</template>

<script>
import BootstrapTypography from "@/components/pages/BootstrapTypography";
export default {
  head: {
    title: "Bootstrap Components- Typography - Nuxt Stisla",
  },
  components: {
    BootstrapTypography,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-typography" })
	}
};
</script>

<style scoped>
</style>