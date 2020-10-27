<template>
  <div id="app">
    <div class="main-wrapper main-wrapper-1">
      <div class="navbar-bg"></div>
      <Header />

      <Sidebar />

      <!-- Main Content -->
      <div class="main-content">
        <section class="section">
          <Nuxt />
        </section>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import Footer from "@/components/layouts/Footer";

export default {
	asyncData () {
		return new Promise((resolve) => {
			setTimeout(function () {
				resolve()
			}, 1000)
		})
	},
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>

<style scoped>
</style>