<template>
       <div class="music-navdraw" transition="slide-left" v-show="show">
	   
	           <div class="nav-draw-header">
			   
			          <div class="introduce-background"><slot name="pic"></slot></div>
			          <slot name="header"></slot>
			   </div> 
	           <div class="nav-draw-content">
			   
			          <slot></slot>
			   </div>	   </div>

</template>



<script>
import pupupManager from './popup-manager'

export default {
          
		 name: 'mc-navdraw',
		 
		 mixins: [pupupManager],
		 
	//	 props: ['show'],
		 
		 data (){
		        return {
				       
				}
		 },
		 
		 methods: {
		 
		        overlayClick() {
				        this.show = false
				},
				
		 } 

}

</script>



<style lang='scss' scoped>

     @import '../scss/_vars.scss'; 

     .music-navdraw {
	        position: fixed;
			z-index: 10200;
			left:0;
			top:0;
			bottom:0;
			width:75%;
			overflow-x: hidden;
			overlfow-y: auto;
			display: flex;
			flex-direction: column;
			background: #fff;
			color: #fff;
			-webkit-overflow-scrolling: touch;

			.nav-draw-header{
			
			        display: flex;
					width: 100%;
					padding:16px 16px;
					flex-direction: column;
					align-items: flex-start;
					justify-content: center;
					position: relative;
			
					.introduce-background {
					        position: absolute;
							left: 0;
							top: 0;
							width: 100%;
							height: 100%;
							z-index: -10;
							background-size: cover;
							-webkit-filter: blur(4px);
							-moz-filter: blur(1px);
							-ms-filter: blur(1px);  
							filter: blur(4px);
							overflow: hidden;
							background: url('../assets/images/07.png') no-repeat 50% 50%;
					}
			}
			
			.nav-draw-content {
			
			        flex: 1;
					width: 100%;
					background: #fff;
					padding-top: 10px;
					color: $draw-head-font-color;
			}
	 }

     .slide-left-transition {
	 
	         transition: transform 0.3s;
			 backface-visibility: hidden;
			 
			 &.slide-left-enter,
			 &.slide-left-leave {
			          transform: translate3d(-100%, 0, 0)
			 }
	 }
</style>