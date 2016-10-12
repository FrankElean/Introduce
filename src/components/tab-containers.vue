<template>
	  <div class="music-tab-container">
				
				<div v-el:wrap :class="{ 'swipe-transition': swipeLeave }" class="music-tab-container-wrap">
						<slot></slot>
				</div>
	  </div>
</template>

<script>
if (!Array.prototype.findIndex) {
	  Array.prototype.findIndex = function(predicate) {
			if (this === null) {
			  		throw new TypeError('Array.prototype.findIndex called on null or undefined');
			}
			if (typeof predicate !== 'function') {
			  		throw new TypeError('predicate must be a function');
			}
			var list = Object(this);
			var length = list.length >>> 0;
			var thisArg = arguments[1];
			var value;
		
			for (var i = 0; i < length; i++) {
					  value = list[i];
					  if (predicate.call(thisArg, value, i, list)) {
						return i;
					  }
			}
			return -1;
	  };
}
import { once } from 'wind-dom/src/event';
import draggable from '../util/draggable'

export default {
		name: 'mc-tab-containers',

		props: {
				active: {},
				swipeable: {
				       type: Boolean,
					   default: true
				}
		},

		data() {
				return {
						start: {
								x: 0,
								y: 0
						},
						swiping: true,
						swipeLeave: false,
						activeItems: [],
						pageWidth: 0
				};
		},

		watch: {
				active(val, oldValue) {
						if (!this.swipeable) return;
						const lastIndex = this.$children.findIndex(item => item.id === oldValue);
						this.swipeLeaveTransition(lastIndex);
				}
		},

		ready() {
				if (!this.swipeable) return;

				this.wrap = this.$els.wrap;
				this.pageWidth = this.wrap.clientWidth;
				this.limitWidth = this.pageWidth / 4;
				this.initialize()
				
		},

		created() {
				if (this.swipeable) return;
				this.$options.template = '<div class="music-tab-container"><slot></slot></div>';
		},

		methods: {
		
		        initialize: function() {
				        
				        draggable(this.wrap, {
						
						
						         start: (evt) => {
										this.dragging = true;
										this.start.x = evt.pageX;
										this.start.y = evt.pageY;
								 },
								
								 drag: (evt) => {
								 
										if (!this.dragging) return;
										let swiping;
										const e = evt.changedTouches ? evt.changedTouches[0] : evt;
										const offsetTop = e.pageY - this.start.y;
										const offsetLeft = e.pageX - this.start.x;
										const y = Math.abs(offsetTop);
										const x = Math.abs(offsetLeft);
										// 如果水平方向移动位置小于5 || 水平方向大于5 并且垂直方向
										swiping = !(x < 5 || (x >= 5 && y >= x * 1.73));
										//console.log(Math.tan(60))
										if (!swiping) return;
				
										const len = this.$children.length - 1;
										
										const index = this.$children.findIndex(item => item.id === this.active);
										
										const currentPageOffset = index * this.pageWidth;
										const offset = offsetLeft - currentPageOffset;
										const absOffset = Math.abs(offset);
				
										if (absOffset > len * this.pageWidth || (offset > 0 && offset < this.pageWidth)) {
												this.swiping = false;
												return;
										}
				
										this.offsetLeft = offsetLeft;
										this.index = index;
										this.swipeMove(offset);
								 
								 },
								 end: () => {
										 if (!this.swiping) return;

										 const direction = this.offsetLeft > 0 ? -1 : 1;
										 const isChange = Math.abs(this.offsetLeft) > this.limitWidth;
				
										 if (isChange) {
												this.index += direction;
												const child = this.$children[this.index];
												if (child) {
														this.active = child.id;
														return;
												}
										 }
										 this.swipeLeaveTransition();
								 }
						})
				},
		         
				swipeLeaveTransition(lastIndex = 0) {
						if (typeof this.index !== 'number') {
								this.index = this.$children.findIndex(item => item.id === this.active);
								this.swipeMove( - lastIndex * this.pageWidth);
						}

						setTimeout(() => {
								this.swipeLeave = true;
								this.swipeMove( -this.index * this.pageWidth);

								once(this.wrap, 'webkitTransitionEnd', () => {
										this.wrap.style.webkitTransform = '';
										this.swipeLeave = false;
										this.swiping = false;
										this.index = null;
								});
						}, 0);
				},
				
				
                
				swipeMove(offset) {
						this.wrap.style.webkitTransform = 'translate3d('+ offset +'px, 0, 0)';
						this.swiping = true;
				},
/*
				startDrag(evt) {
						evt = evt.changedTouches ? evt.changedTouches[0] : evt;
						this.dragging = true;
						this.start.x = evt.pageX;
						this.start.y = evt.pageY;
				},

				onDrag(evt) {
						if (!this.dragging) return;
						let swiping;
						const e = evt.changedTouches ? evt.changedTouches[0] : evt;
						const offsetTop = e.pageY - this.start.y;
						const offsetLeft = e.pageX - this.start.x;
						const y = Math.abs(offsetTop);
						const x = Math.abs(offsetLeft);
                        // 如果水平方向移动位置小于5 || 水平方向大于5 并且垂直方向
						swiping = !(x < 5 || (x >= 5 && y >= x * 1.73));
						//console.log(Math.tan(60))
						if (!swiping) return;

						const len = this.$children.length - 1;
						const index = this.$children.findIndex(item => item.id === this.active);
						const currentPageOffset = index * this.pageWidth;
						const offset = offsetLeft - currentPageOffset;
						const absOffset = Math.abs(offset);

						if (absOffset > len * this.pageWidth || (offset > 0 && offset < this.pageWidth)) {
								this.swiping = false;
								return;
						}

						this.offsetLeft = offsetLeft;
						this.index = index;
						this.swipeMove(offset);
				},

				endDrag() {
						if (!this.swiping) return;

						const direction = this.offsetLeft > 0 ? -1 : 1;
						const isChange = Math.abs(this.offsetLeft) > this.limitWidth;

						if (isChange) {
								this.index += direction;
								const child = this.$children[this.index];
								if (child) {
										this.active = child.id;
										return;
								}
						}

						this.swipeLeaveTransition();
				}*/
		}
};
</script>



<style lang="scss">
  
.music-tab-container {
		  overflow: hidden;
		  position: relative;
	
		  .music-tab-container-wrap {
				  display: flex;
				  
				  &.swipe-transition {
						transition: transform 150ms ease-in-out;
				  }
				  
				  .music-tab-container-item{
				        float: left;
						overflow: hidden;
				  }
		  }
}
</style>