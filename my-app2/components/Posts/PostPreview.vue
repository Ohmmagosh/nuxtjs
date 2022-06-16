<template lang="">
	<div class="">
		<nuxt-link :to="'/posts/' + id" class="">
			<article id="post-preview" class="w-96 m-10 hover:bg-[#ccc] hover:rounded-xl">
				<div class="m-10 border border-solid border-black hover:border-[#ccc] rounded-xl ">
					<div id="post-thumnail" class=" w-full h-52 bg-center bg-cover rounded-t-xl" 
					v-bind:style="{ backgroundImage: 'url(' + thumbnail + ')' }"
					></div>
					
					<div id="post-content">
						<h1 class="font-sans">{{ title }}</h1>
						<p class="font-serif">{{ previewText}} </p>
					</div>
				</div>
        </article>
      </nuxt-link>
	</div>
</template>
<script>
export default {
	namr: 'PostPreview',
	props: {
		id: {
			type: String,
			require: true
		},
		title: {
			type: String,
			require: true
		},
		previewText: {
			type: String,
			require: true
		},
		thumbnail: {
			type: String,
			require: true
		},
	}
}
</script>
<style lang="">
	
</style>