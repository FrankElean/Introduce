<template>

         <div class="music-item-sub-title">
		 
		         <slot></slot>
		 </div>
</template>


<script>

export default {
         name: 'mc-item-sub-title'
}

</script>


<style lang="scss">

@import '../../scss/_vars.scss';

     .music-item-sub-title {
	        display: block;
			flex: 1;
			color: $color;
			white-space: nowrap;
			word-break: break-all;
			text-overflow: ellipsis;
			max-width: 100%;
			overflow: hidden;
			font-size: 12px;
			text-align: left;
	 }

</style>