<template>
  <div>
    <BootstrapButtons />
  </div>
</template>

<script>
import BootstrapButtons from "@/components/pages/BootstrapButtons";
export default {
  head: {
    title: "Bootstrap Components- Buttons - Nuxt Stisla",
  },
  components: {
    BootstrapButtons,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-buttons" })
	}
};
</script>

<style scoped>
</style>