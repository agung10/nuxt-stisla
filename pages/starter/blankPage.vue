<template>
  <div>
    <BlankPage />
  </div>
</template>

<script>
import BlankPage from "@/components/pages/BlankPage";
export default {
  head: {
    title: "Blank Page - Nuxt Stisla",
  },
  components: {
    BlankPage,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "blankPage" })
	}
};
</script>

<style scoped>
</style>