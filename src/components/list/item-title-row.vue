<template>

         <div class="music-item-title-row">
		 
		         <slot></slot>
		 </div>
</template>


<script>

export default {
         name: 'mc-item-title-row',

}

</script>


<style lang="scss">

     .music-item-title-row {
	        display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
	 }

</style>