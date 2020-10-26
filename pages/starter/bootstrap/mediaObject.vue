<template>
  <div>
    <BootstrapMediaObject />
  </div>
</template>

<script>
import BootstrapMediaObject from "@/components/pages/BootstrapMediaObject";
export default {
  head: {
    title: "Bootstrap Components- Media Object - Nuxt Stisla",
  },
  components: {
    BootstrapMediaObject,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-mediaObject" })
	}
};
</script>

<style scoped>
</style>