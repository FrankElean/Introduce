<template>

         <div class="music-list-wrap">
		 
		         <slot></slot>
		 </div>
</template>


<script>

export default {
         name: 'mc-list-wrap'
}

</script>


<style lang="scss">
@import '../../scss/_vars.scss';
@import '../../scss/mixin.scss';

        .music-list-wrap {
		
		        margin-top: 10px;
				
				&:first-child {
				         margin-top: 0;
				}
				
				width: 100%;
				background: #fff;
				position: relative;
				
				@include hairline(top, $border-color)
				@include hairline(bottom, $border-color)
				
				.music-list-view:last-child, .music-list-view-cell:last-child{
				
				        @include hairline-remove(bottom)
				}
				
		}

</style>