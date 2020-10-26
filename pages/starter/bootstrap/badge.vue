<template>
  <div>
    <BootstrapBadge />
  </div>
</template>

<script>
import BootstrapBadge from "@/components/pages/BootstrapBadge";
export default {
  head: {
    title: "Bootstrap Components- Badge - Nuxt Stisla",
  },
  components: {
    BootstrapBadge,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-badge" })
	}
};
</script>

<style scoped>
</style>