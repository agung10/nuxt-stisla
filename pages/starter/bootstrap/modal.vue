<template>
  <div>
    <BootstrapModal />
  </div>
</template>

<script>
import BootstrapModal from "@/components/pages/BootstrapModal";
export default {
  head: {
    title: "Bootstrap Components- Modal - Nuxt Stisla",
    link: [{ rel: "stylesheet", href: "/modules/prism/prism.css" }],
    script: [
      { src: "/modules/prism/prism.js" },
      { src: "/js/page/bootstrap-modal.js", body: true },
    ],
  },
  components: {
    BootstrapModal,
  },
  mounted() {
    this.$store.commit("INITIAL_PAGE", { page: "bootstrap-modal" });
  }
};
</script>

<style scoped>
</style>