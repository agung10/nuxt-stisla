<template>
    <div class="bg-dark position-fixed d-flex justify-content-center align-items-center flex-column" style="width: 100%; height: 100%">
        <span class="h1 text-uppercase font-weight-bold">
            <span class="text-success">Nuxt</span>
            <i class="far fa-heart"></i>
            <span class="text-primary">Stisla</span>
        </span>
        <button class="btn btn-outline-success mt-3" @click="getStarted()">Get Started</button>
    </div>
</template>

<script>
export default {
    methods: {
        getStarted() {
            this.$router.push('/dashboard/ecommerce')
        }
    }
}
</script>