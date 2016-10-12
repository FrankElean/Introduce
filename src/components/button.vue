<template>

         <a class="music-button-ripple" :class="className" v-el:button>
		 
		         <slot>
				         <mt-icon v-if="icon" :value="icon"></mt-icon>
						 <span class="button-text" v-if="text" v-text="text"></span>
				 </slot>
				 <mt-ripple :trigger="$els.button"></mt-ripple>
		 </a>
</template>


<script>

import mtIcon from './icon'
import mtRipple from './ripple'

export default {
       name: 'mc-button',
	   
	   props: {
	          icon: {
			         type: String,
					 default: ''
			  },
	          text: {
			         type: String,
					 default: ''
			  },
	          fill: {
			         type: Boolean,
					 default: ''
			  },
	          big: {
			         type: Boolean,
					 default: ''
			  },
	          raised: {
			         type: Boolean,
					 default: ''
			  },
	          color: {
			         type: String,
					 default: ''
			  }
	   },
	   
	   computed: {
	          className: function(){
			          let obj = {
					          'button-fill': this.fill,     //填充
					          'button-big': this.big,
					          'button-raised': this.raised,  // 凸起
					  }
					  obj['color-' + this.color] = true
					  return obj
			  }
	   },
	   
	   
	   components: {mtIcon, mtRipple}
}

</script>


<style lang="scss">
@import '../scss/_vars.scss'; 
@import '../scss/mixin.scss';

     .music-button-ripple {
	        color: $color;
			height: 44px;
			padding: 10px 8px;
			border-radius: 2px;
			
			margin: 10px 10px;
			
			appearance: none;
			background: none;
			white-space: nowrap;
			text-overflow: ellipsis;
			text-transform: uppercase;
			text-decoration: none;
			text-align: center;
			
			outline: 0;
			border: none;
			
			display: flex;
			justify-content: center;
			align-items: center;
			transition-duration: 300ms;
			transform: translate3d(0,0,0);
			
			oveflow: hidden;
	        position: relative;
			
			
			&:active {
			         background: $tap-color;
			}
			
			
			i.music-icon + span,
			i.music-icon + i.music-icon {
			       margin-left: 8px;
			}
			
			.music-button, .button-text {
			       pointer-events: none;
			}
			
			.music-icon {
			       @include flex-shrink(0);
			}
			
			
			.button-text {
			       @include flex-shrink(1);
				   white-space: nowrap;
			       word-wrap: break-word;
				   text-overflow: ellipsis;
				   overflow: hidden;
			}
			
			.ripple-ink {
			       color: $tap-color;
			}
			
			&.color-red {
			       color: $red
			}
			&.color-green {
			       color: $green
			}
			&.color-amber {
			       color: $amber
			}
			&.color-blue {
			       color: $blue
			}
	 }
     
	 
	 .button-fill {
	        background: #f4f4f4;
			color: #3f3f3f;
			.ripple-ink {
			        color: rgba(255,255,255,.4);
			}
			&:active {
			         background: darken(#f4f4f4, 3%)
			}
			&.color-red {
			        color: #fff;
					background: $red;
					&:active {
					        background: darken($red, 8%);
					}
			}
			&.color-green {
			        color: #fff;
					background: $green;
					&:active {
					        background: darken($green, 8%);
					}
			}
			&.color-amber {
			        color: #fff;
					background: $amber;
					&:active {
					        background: darken($amber, 8%);
					}
			}
			&.color-blue {
			        color: #fff;
					background: $blue;
					&:active {
					        background: darken($blue, 8%);
					}
			}
	 }
	 
	 
	 .button-big {
	        height: 48px;
			line-height: 1;
	 }
	 
	 .button-raised {
	        @include depth(1); /**阴影大小*/
			html:not(.watch-active-state) &:active, &.active-state {
			      @include depth(2);
		    }
	 }
</style>