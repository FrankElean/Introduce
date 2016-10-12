<template>
        <div class="music-overlay" v-on:click="handleClick" v-on:touchmove="prevent" :style="style" transition="overlay-fade"></div>
</template>


<script>
import {getZIndex} from '../util/zIndex'   // 导入.js文件可用{}

export default {

		 name: 'mc-overlay',
		 
		 props: {
		 
		        fixed: {
				        type: Boolean,
						default: true
				},
				
				onClick: {
				        type: Function,
				},
				
				opacity: {
				        type: Number,
						default: 0.4
				},
				
				color: {
				        type: String,
						default: '#000'
				}	 
		 },
		 
		 data() {
		        return {
				       zIndex: getZIndex()
				}
		 },
		 
		 computed: {
		        style: function() {
				       return {
							   'position': this.fixed ? 'fixed' : '',
							   'z-index': this.zIndex,
							   'background': this.color,
							   'opacity': this.opacity
					   }
				}
		 },
		 
		 methods: {
		 
		        prevent(evt) {
				        evt.preventDefault()
						evt.stopPropagation()
				},
				
				handleClick() {
				      this.onClick && this.onClick()
				}
		 }
}


/**
一个完美的遮罩层的控制需要完成以下几点：

        1.遮罩层和弹出层之间的动画需要并行
		2.遮罩层的z-index要较小于弹出层
		3.遮罩层弹出时需要组件页面可滚动
		4.点击遮罩层需要给弹出层反馈状态
		5.保证一个页面只有一个遮罩层(多个叠加在一起会使遮罩层颜色加深)

*/

</script>



<style lang="scss" scoped>
        
	   .music-overlay {
	             position: absolute;
				 left: 0;
				 top: 0;
				 right: 0;
				 bottom: 0;
				 background: #000;
				 opacity: 0.4;
				 z-index: 10100;
	   }	

       .overlay-fade-transition {
				 transition: opacity 0.3s linear;
				 
				 &.overlay-fade-enter, &.overlay-fade-leave {
				 
				          opacity: 0 !important;
				 }

	   }
</style>
