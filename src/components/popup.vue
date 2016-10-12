<template>
        <div class="mint-popup" v-show="show" :style="{'z-index': zIndex}" :class="[position ? 'popup-'+position : '']" :transition="popupTransition">
		        <slot></slot>
		</div>
</template>


<script>

import pupupManager from './popup-manager'

import {getZIndex} from '../util/zIndex'

export default {

		 name: 'mc-popup',
		 
		 mixins: [pupupManager],
		 
		 props: {
		 
		         clickOverlayClose: {
				         type: Boolean,
						 default: true
				 },
				 
				 popupTransition: {
				         type: String,
						 default: 'popup-slide'
				 },
				 
				 position: {
				         type: String,
						 default: true
				 }
		 },
		 
		 computed: {
		         zIndex: function(){
				         return this.overlay ? '' : getZIndex()
				 }
		 },
		 
		 compiled() {
		 
		        this.popupTransition == 'popup-fade' || (this.popupTransition = 'popup-slide-' + this.position)
		 },
		 
		 methods: {
		 
		        overlayClick() {
				         this.clickOverlayClose && (this.show = false)
				}
		 }
}

</script>



<style lang="scss">
        
	   .mint-popup {
	             position: fixed;
				 left: 50%;
				 top: 50%;
				 background: #fff;
				 transform: translate3d(-50%, -50%, 0);
				 background-visibility: hidden;
				 
				 &.popup-left {
				         top: 50%;
						 left: 0;
						 bottom: auto;
						 right: auto;
				 		 transform: translate3d(0, -50%, 0);
				 }
				 &.popup-top {
				         top: 0;
						 left: 50%;
						 bottom: auto;
						 right: auto;
				 		 transform: translate3d(-50%, 0, 0);
				 }
				 &.popup-right {
				         top: 50%;
						 left: auto;
						 bottom: auto;
						 right: 0;
				 		 transform: translate3d(0, -50%, 0);
				 }
				 &.popup-bottom {
				         top: 0;
						 left: 50%;
						 bottom: 0;
						 right: auto;
				 		 transform: translate3d(-50%, 0, 0);
				 }
	   }	

       .popup-slide-left-transition,
	   .popup-slide-top-transition,
	   .popup-slide-right-transition,
	   .popup-slide-bottom-transition {
				 transition: transform 0.3s ease;
				 
				 &.popup-slide-left-enter, &.popup-slide-left-leave {
				 
				          transform: translate3d(-100%, -50%, 0)
				 }
				 &.popup-slide-top-enter, &.popup-slide-top-leave {
				 
						  transform: translate3d(-50%, -100%, 0);
				 }
				 &.popup-slide-right-enter, &.popup-slide-right-leave {
				 
				          transform: translate3d(100%, -50%, 0)
				 }
				 &.popup-slide-bottom-enter, &.popup-slide-bottom-leave {
				 
				          transform: translate3d(-50%, 100%, 0)
				 }
	   }
	   .popup-fade-transition {
	             transition: opacity linear;
				 
				 &.popup-fade-enter, popup-fade-leave {
				 
				         opacity: 0 !important;
				 }
	   }
</style>