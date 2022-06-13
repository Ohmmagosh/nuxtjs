<template>
    <div>
        <div class="flex flex-col center justify-center items-center bg-blue-300 min-h-screen">
            <h1 class="text-6xl">hello products</h1>
            <input class="w-1/3 h-16 mt-6" type="text" v-model="productId">
            <button @click="onLoadProduct" class="text-3xl mt-6 bg-pink-300 p-6 rounded-full">load</button>
            <nuxt-link class="text-3xl bg-pink-300 mt-6 p-6 rounded-full" to="/">home</nuxt-link>
            <nuxt-child />
        </div>
    </div>
</template>
<script>
export default {
      data() {
        return {
            productId:'',
        }
    },
    methods: {
        onLoadProduct() {
            this.$router.push('/products/' + this.productId);
        }
    },
    layout: 'products'
}
</script>
<style lang="">
    
</style>