<template>
  <div>
    <TopNavigation />
  </div>
</template>

<script>
import TopNavigation from "@/components/pages/TopNavigation";
export default {
  head: {
    title: "Top Navigation - Nuxt Stisla",
  },
  components: {
    TopNavigation,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "layout-topNavigation", })
	}
};
</script>

<style scoped>
</style>