<template>
  <div>
    <div class="flex flex-col justify-center items-center center min-h-screen bg-green-500 ">
      <h1 class="text-6xl">hello welcome</h1>
      <nuxt-link to="/users" class="text-3xl bg-yellow-300 rounded-full p-3 mt-5">User</nuxt-link>
      <nuxt-link to="/products" class="text-3xl bg-yellow-300 rounded-full p-3 mt-5">Products</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

}
</script>
