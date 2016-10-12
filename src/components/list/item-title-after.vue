<template>

         <div class="music-item-title-after">
		 
		         <slot></slot>
		 </div>
</template>


<script>

export default {
         name: 'mc-item-title-after',

		 components: {}
}

</script>


<style lang="scss">
@import '../../scss/_vars.scss';
@import '../../scss/mixin.scss';

     .music-item-title-after {
	        display: block;
			color: $body-color;
			@include flex-shrink(0);
			font-size: 12px;
			
	 }

</style>