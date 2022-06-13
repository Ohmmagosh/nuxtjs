<template>
    <div>
        <div class="flex flex-col center items-center min-h-screen bg-blue-300 justify-center items-center">
            <input type="text" v-model="userId">
            <button class="bg-green-300 p-3 mt-6 rounded-full border-black border-white" @click="onLoadUser" >Load user</button>
            <div class="w-50 h-50 mt-6 border-red-500 hover:border-green-400 bg-white border-2">hello</div>
            <nuxt-child/>
        </div>
    </div>
</template>
<script>
//import Header from '../components/Header'
export default { 
    data() {
        return {
            userId:'',
        }
    },
    methods: {
        onLoadUser() {
            this.$router.push('/users/' + this.userId);
        }
    },
    layout: 'users'
}
</script>
<style>
    
</style>