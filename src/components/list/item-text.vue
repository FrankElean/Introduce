<template>

         <div class="music-item-text">
		 
		         <slot></slot>
		 </div>
</template>


<script>

export default {
         name: 'mc-item-text',

		 components: {}
}

</script>


<style lang="scss">

     .music-item-text {
	        display: -webit-box;
			word-break: break-all;
			text-overflow: ellipsis;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			
			max-width: 100%;
			max-height: 40px;
			font-size: 12px;
			text-align: left;
			positin: relative;
			
	 }

</style>