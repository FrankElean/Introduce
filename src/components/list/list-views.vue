<template>

         <a class="music-list-view" href="javascript:;" :class="{'item-link': link, 'item-ripple': link||ripple}" v-el="listView">
		 
		        <slot></slot>
		 		<mt-ripple v-if="ripple || link" :trigger="$els.listView"></mt-ripple>
		 </a>
		 
</template>


<script>

import mtRipple from '../ripple'

export default {

         name: 'mc-list-view',
		 
		 props: {
		        link: {
				       type: Boolean,
					   default: false
				},
				ripple: {
				       type: Boolean,
					   default: false
				}
		 },
		 
		 components: {mtRipple}
}

</script>


<style lang="scss">
@import '../../scss/_vars.scss';
@import '../../scss/mixin.scss';

     .music-list-view {
	        padding-left: 14px;
			min-height: 48px;
			color: $body-color;
			position: relative;
			overflow: hidden;
			color: $body_color;
			
			display: flex;
			
			@include hairline(bottom, $border-color);
			
			&.item-ripple {
			        @include active-highlight($tap-color);
					.ripple-ink {
					        color: $tap-color;
					}
			}
	 }
	 .item-link .music-list-item-content {
			  /*background-image: url();*/
			  background-size: 10px 20px;
			  background-repeat: no-repeat;
			  background-position: 95% center;
			  padding-right: 42px;
	 }

</style>