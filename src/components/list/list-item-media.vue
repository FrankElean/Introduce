<template>

         <div class="music-list-item-media">
		 
		         <slot></slot>
		 </div>
</template>


<script>

export default {
         name: 'mc-list-item-media'
}

</script>


<style lang="scss">
@import '../../scss/_vars.scss';
@import '../../scss/mixin.scss';

        .music-list-item-media {
		
		        padding: 10px 0;
				margin-right: 4px;
				+ .music-list-item-content {
				        padding-left: 14px;
				}
				
				img {
				        max-width: 40px;
					    max-height: 40px;
					    border: none;
						outline: none;
				}
		}
		
		.music-list-view-cell .music-list-item-media {
		
		        padding-top: 0;
				padding-bottom: 0;
				
				+ .mint-item-title {
				        padding-left: 10px;
				}
		}

</style>