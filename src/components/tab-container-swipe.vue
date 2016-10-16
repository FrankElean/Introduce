<template>
	  <div class="swiper-container">
				<div class="swiper-wrapper" v-el:wrap>
						<slot></slot>
				</div>
	  </div>
</template>

<script>

import Swiper from '../util/idangerous.swiper';

export default {
		name: 'mc-swiper-container',

		props: {
				active: '',
				swipeable: {
				       type: Boolean,
					   default: true
				}
		},

		data() {
				return {};
		},

		watch: {
				active(val, oldValue) {
						if (!this.swipeable) return;
						const index = + val
						this.swiper.slideTo(index-1)
				}
		},

		ready() {
				if (!this.swipeable) return;
				
			    let self = this;
				
				setTimeout(() => {
				         this.createSlide()
				}, 500)
		},

		created() {
				if (this.swipeable) return;
				this.$options.template = '<div class="music-tab-container"><slot></slot></div>';
		},

		methods: {
		
		         createSlide(){
			            let self = this;
				        self.swiper = new Swiper('.swiper-container',{
								speed:500,
								autoHeight: true,
								lazyLoading: true,
								onInit: function(instance){
										  
										  const child = self.$children[instance.activeIndex];
										  self.active = child.id;
										
										  console.log(child.id)
								},
								onSlideChangeStart: function(instance){
										
										  const child = self.$children[instance.activeIndex];
										  self.active = child.id;
										  console.log(child.id)
								}
						});
				 }
		
		}
};
</script>



<style lang="scss">
	  
	.swiper-container {
			margin: 38px auto 0;
			position:relative;
			overflow:hidden;
			/* Fix of Webkit flickering */
			z-index:1;
	}
	.swiper-container-no-flexbox {
			.swiper-slide {
				float: left;
			}
	}
	.swiper-container-vertical > .swiper-wrapper{
			-webkit-box-orient: vertical;
			-moz-box-orient: vertical;
			-ms-flex-direction: column;
			-webkit-flex-direction: column;
			flex-direction: column;
	}
	.swiper-wrapper {
			position:relative;
			width: 100%;
			height: 100%;
			z-index: 1;
			display: -webkit-box;
			display: -moz-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
		
			-webkit-transition-property:-webkit-transform;
			-moz-transition-property:-moz-transform;
			-o-transition-property:-o-transform;
			-ms-transition-property:-ms-transform;
			transition-property:transform;
			
			-webkit-box-sizing: content-box;
			-moz-box-sizing: content-box;
			box-sizing: content-box;
	}
	.swiper-container-android .swiper-slide, .swiper-wrapper {
			-webkit-transform:translate3d(0px,0,0);
			-moz-transform:translate3d(0px,0,0);
			-o-transform:translate(0px,0px);
			-ms-transform:translate3d(0px,0,0);
			transform:translate3d(0px,0,0);
	}
	.swiper-container-multirow > .swiper-wrapper {
			-webkit-box-lines: multiple;
			-moz-box-lines: multiple;
			-ms-flex-wrap: wrap;
			-webkit-flex-wrap: wrap;
			flex-wrap: wrap;
	}
	.swiper-container-free-mode > .swiper-wrapper {
			-webkit-transition-timing-function: ease-out;
			-moz-transition-timing-function: ease-out;
			-ms-transition-timing-function: ease-out;
			-o-transition-timing-function: ease-out;
			transition-timing-function: ease-out;
			margin: 0 auto;
	}
	.swiper-slide {
			-webkit-flex-shrink: 0;
			-ms-flex: 0 0 auto;
			flex-shrink: 0;
			width: 100%;
			height: 100%;
			position: relative;
	}
	/* Auto Height */
	.swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
			height: auto;
	}
	.swiper-container-autoheight .swiper-wrapper {
			-webkit-box-align: start;
			-ms-flex-align: start;
			-webkit-align-items: flex-start;
			align-items: flex-start;
			-webkit-transition-property: -webkit-transform, height;
			-moz-transition-property: -moz-transform;
			-o-transition-property: -o-transform;
			-ms-transition-property: -ms-transform;
			transition-property: transform, height;
	}
</style>