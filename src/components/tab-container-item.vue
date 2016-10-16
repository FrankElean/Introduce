<template>
	    <div class="swiper-slide">
			   <slot></slot>
	    </div>
</template>

<script>

export default {

		name: 'mc-tab-container-items',
		
		props: ['id'],
		
		ready: function(){
		        
				//console.log(this.$parent.swiping , this.id , this.$parent.active)
		}
};
</script>

<style>
</style>
