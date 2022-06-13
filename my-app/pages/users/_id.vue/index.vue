<template>
    <div class="flex flex-col center justify-center mt-6 p-6 items-center bg-red-300">
        <h1 class="text-6xl">A single user, With ID: {{ $route.params.id }}</h1>
        <nuxt-link class="text-5xl mt-6 bg-purple-300 rounded-full p-6" to="/">home</nuxt-link>
    </div>
</template>
<script>
export default {
    validate (data) {
        return /^\d+$/.test(data.params.id);
    },
    layout: 'users'
}
</script>
<style lang="">
    
</style>