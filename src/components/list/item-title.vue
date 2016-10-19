<template>

         <div class="music-item-title">
		 
		         <slot></slot>
		 </div>
</template>


<script>

export default {
         name: 'mc-item-title',

		 components: {}
}

</script>


<style lang="scss">

@import '../../scss/_vars.scss';

     .music-item-title {
	        flex: 1;
			word-break: break-all;
			text-overflow: ellipsis;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			
			color: $color;
			max-width: 100%;
			text-align: left;
			position: relative;
	 }

</style>