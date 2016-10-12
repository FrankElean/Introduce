<template>

         <a class="music-list-view-cell list-view-cell" href="javascript:;" :class="{'item-link': link, 'item-ripple': link||ripple, 'remove-line': removeLine}" v-el:list-view-cell>
		 
		        <slot></slot>
				<i class="music-icon music-more_vert" v-if="link" v-on:click.stop.prevent="iconEvent($event)"></i>
		 		<mt-ripple v-if="ripple || link"  :trigger="$els.listViewCell"></mt-ripple>
		 </a>
		 
</template>


<script>
import mtRipple from '../ripple'

export default {
         name: 'mc-list-view-cell',
		 
		 props: {
		 
		        removeLine: {
				       type: Boolean,
					   default: false
				}, 
		        link: {
				       type: Boolean,
					   default: false
				},
				ripple: {
				       type: Boolean,
					   default: false
				},
				iconEvent: {
				       type: Function,
					   default: function(){}
				}
		 },
		 
		 methods: {
		 
		 },
		 
		 components: {mtRipple}
}

</script>


<style lang="scss">
@import '../../scss/_vars.scss';
@import '../../scss/mixin.scss';

     .music-list-view-cell { 
	        display: flex;
	        padding: 16px 10px;
			align-items: center;
			color: $body_color;
			position: relative;
			@include hairline(bottom, $border-color);
			
			&.remove-line {
		        	@include hairline-remove(bottom);
			}
			
			&.item-ripple {
			        @include active-highlight($tap-color);
					.ripple-ink {
					        color: $tap-color;
					}
			}
			i.music-icon {
			        display: block;
			        position: absolute;
					right: 5px;
					top: 50%;
					width: 30px;
					text-align: center; 
					transform: translate3d(0, -50%, 0);
					font-size: 16px;
					z-index: 1;				
			}
	 }
	 
	 .list-view-cell.item-link {
	 }

</style>