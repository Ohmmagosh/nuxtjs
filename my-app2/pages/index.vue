<template class="containers">
  <div id="index" class="text-center min-w-screen m-0 p-0 box-border">
    <section id="intro" class="w-full h-64 flex justify-center items-center bg-cover bg-center border-box" style="background-image: url('https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80');">
      <div class="bg-gray-300 h-16 flex justify-center flex-col top-6 items-center border border-black rounded-md w-2/5 shadow-xl">
        <h1 class="text-xs sm:text-3xl">Get the latest tech news!!!!!</h1>
      </div>
    </section>
    <section id="featured-post" class="flex flex-wrap justify-center items-center min-w-screen  ">
      <PostPreviewVue
      id="1"
      thumbnail="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      title="hello"
      previewText="This is my First post"
      />
      <PostPreviewVue
      id="1"
      thumbnail="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      title="hello secound"
      previewText="This is my secound post"
      />
      <PostPreviewVue
      id="1"
      thumbnail="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      title="hello third"
      previewText="This is my third post"
      />
    </section>
  </div>
</template>

<script>
import PostPreviewVue from '../components/Posts/PostPreview.vue'
export default {
  name: 'IndexPage',
  components: {
    PostPreviewVue
  },
  head () {
    return {
      bodyAttrs: {
        class: 'reset-body'
      }
    }
  }
}

</script>
<style>
.reset-body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}    
</style>
