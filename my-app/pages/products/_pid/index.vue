<template>
    <div class="flex flex-col center justify-center items-center min-h-screen bg-rose-500">
        <h1 class="text-6xl">product ID: {{ $route.params.pid}}</h1>
        <nuxt-link class="text-3xl bg-black text-white p-6 rounded-3xl mt-6" to="/products">back</nuxt-link>
        <nuxt-link class="mt-6 text-3xl text-white bg-black p-6 rounded-3xl" to="/">home</nuxt-link>
    </div>
</template>
<script>
export default {
    layout: 'products'
}
</script>
<style lang="">
    
</style>