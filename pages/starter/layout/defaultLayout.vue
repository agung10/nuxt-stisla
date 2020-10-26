<template>
  <div>
    <DefaultLayout />
  </div>
</template>

<script>
import DefaultLayout from "@/components/pages/DefaultLayout";
export default {
  head: {
    title: "Default Layout - Nuxt Stisla",
  },
  components: {
    DefaultLayout,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "layout-defaultLayout", })
	}
};
</script>

<style scoped>
</style>