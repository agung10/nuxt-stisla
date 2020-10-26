<template>
  <div>
    <BootstrapForm />
  </div>
</template>

<script>
import BootstrapForm from "@/components/pages/BootstrapForm";
export default {
  head: {
    title: "Bootstrap Components- Form - Nuxt Stisla",
  },
  components: {
    BootstrapForm,
  },
  mounted(){
		this.$store.commit("INITIAL_PAGE", { page: "bootstrap-form" })
	}
};
</script>

<style scoped>
</style>