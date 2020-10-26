<template>
  <div>
    <BootstrapCard />
  </div>
</template>

<script>
import BootstrapCard from "@/components/pages/BootstrapCard";
export default {
  head: {
    title: "Bootstrap Components- Card - Nuxt Stisla",
  },
  components: {
    BootstrapCard,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-card" })
	}
};
</script>

<style scoped>
</style>