<template>
	  <div class="music-main-container">
				<div class="music-wrapper" :class="{ 'swipe-transition': swipeLeave }" v-el:wrap>
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


import {once} from 'wind-dom/src/event';

export default {
		name: 'mc-tab-container',

		props: {
				active: '',
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
						swiping: false,
						swipeLeave: false,
						activeItems: [],
						pageWidth: 0,
						slideHeight: []
				};
		},

		watch: {
				active(val, oldValue) {
						if (!this.swipeable) return;
						const lastIndex = this.$children.findIndex(item => item.id === val);
						this.swipeLeaveTransition(lastIndex);
				}
		},

		ready() {
				if (!this.swipeable) return;

				this.wrap = this.$els.wrap;
				this.pageWidth = $(this.wrap).width();
				this.limitWidth = this.pageWidth / 4;
				
				this.initWidth(this.wrap, 0)
				 
				const element = this.$el;
				
				
			    let self = this;
				
				element.addEventListener('touchstart', (event) => {
						if (this.prevent) {
						        event.stopPropagation();
								event.preventDefault();
						}
						this.time = +new Date()
						this.doOnTouchStart(event);
				});

				element.addEventListener('touchmove', (event) => {
						
						this.doOnTouchMove(event);
				});

				element.addEventListener('touchend', (event) => {
						//if (!this.swiping) return;
						this.doOnTouchEnd(event);
				});
				
				setTimeout(()=>{
				
						this.$children.forEach( (elem)=> {
								
						        this.slideHeight.push(elem.$el.offsetHeight)
						})
						this.wrap.style.height = this.slideHeight[0] + 'px';
				}, 600)
		},

		created() {
				if (this.swipeable) return;
				this.$options.template = '<div class="music-tab-container"><slot></slot></div>';
		},

		methods: {
		
		
		        initWidth: function(elem, index){
				        let width = document.documentElement.clientWidth-2;
						let length = elem.children.length;
						
						for(let ii=0; ii<length; ii++){
                                let item = elem.children[ii];

                                item.style.cssText += 'width:' + width + 'px;';
                                item.setAttribute('data-index', ii);
						}
						this.wrap.style.width = width * length + 'px';
				},
		        
				resetHeight: function(){
					   //console.log(this.index, this.slideHeight.toString())
				       this.wrap.style.height = this.slideHeight[this.index] + 'px';
				},
				
				swipeLeaveTransition(lastIndex = 0) {
						if (typeof this.index !== 'number') {
								this.index = this.$children.findIndex(item => item.id === this.active);
								this.swipeMove( - lastIndex * (this.pageWidth));
						}

						setTimeout(() => {console.log(lastIndex)
								this.swipeLeave = true;
								this.swipeMove( -lastIndex * (this.pageWidth));
								this.index = lastIndex;
								// 重置wrapper高度
						        this.resetHeight()
								once(this.wrap, 'webkitTransitionEnd', () => {
										//this.wrap.style.transform = '';
										//this.swipeLeave = false;
										//this.swiping = false;
										//this.index = null;
								});
						}, 0);
				},

				swipeMove(offset) {//alert(offset)
						this.wrap.style.webkitTransform = 'translate3d('+offset+'px, 0, 0)';
						//this.swiping = true;
				},

				doOnTouchStart(evt) {
						if (this.swiping) return;
						evt = evt.changedTouches ? evt.changedTouches[0] : evt;
						this.start.x = evt.pageX;
						this.start.y = evt.pageY;
				},

				doOnTouchMove(evt) {
						let moveing;
						let e = evt.changedTouches ? evt.changedTouches[0] : evt;
						let offsetTop = e.pageY - this.start.y;
						let offsetLeft = e.pageX - this.start.x;
						let y = Math.abs(offsetTop);
						let x = Math.abs(offsetLeft);
						
						// 移动方向   纵向：true  横向：false
						// moveing = !!(x < 10 || (x >= 10 && y * Math.sqrt(3).toFixed(2) >= x));
					
						let touchAngle = Math.atan2(Math.abs(e.pageY - this.start.y), Math.abs(e.pageX - this.start.x)) * 180 / Math.PI;
						
                        this.direction = moveing = (90 - touchAngle) < 60;
						
						if (moveing) return;   // 如果是纵向滑动则返回
						
						evt.preventDefault();  // 如果是横向滑动则阻止默认行为, 即阻止滚屏

						let len = this.$children.length-1;
						let index = this.$children.findIndex(item => item.id === this.active);
						
						let currentPageOffset = index * this.pageWidth;
						
						let offset = offsetLeft - currentPageOffset;
						let absOffset = Math.abs(offset);
						
						// 防止第一个向右滑动出现白屏 最后一个向左滑动出现白屏
						if (absOffset > len * this.pageWidth || (offset > 0 && offset < this.pageWidth)) {
								this.swiping = false;
								return
						}

						this.offsetLeft = offsetLeft;
						this.index = index;
						this.swipeMove(offset);
					
						//this.swipeMove(offsetLeft);
						
				},

				doOnTouchEnd() {
						// 偏移位置大于0时向左滑动, 否则向右....
						const direction = this.offsetLeft > 0 ? -1 : 1;
						// 偏移位置大于屏幕1/4时切换视图
						const isChange = Math.abs(this.offsetLeft) > this.limitWidth;
                        const duration = +new Date() - this.time;
				        // 屏蔽竖向滑动的操作
						if(this.direction) return;
						
						if (isChange && duration>100) { 	
								this.index += direction;
								const child = this.$children[this.index];
								if (child) {
										this.active = child.id;
								
								}
								if(this.index<0) this.index = 0
								if(this.index>(this.$children.length-1)) this.index = this.$children.length-1
								
						}
				}
		}
};
</script>



<style lang="scss">
  
.music-main-container {
		  overflow: hidden;
		  position: relative;
		  margin: 38px auto 0;
		  /* Fix of Webkit flickering */
		  z-index:1;
	
		  .music-wrapper {
				  display: block;
				  white-space: nowrap;
				  position: relative;
				  overflow: hidden;
				  width: 100%;
				  height: 100%;
				  box-sizing: content-box;
				  
				  &.swipe-transition {
						transition: transform 150ms ease-in-out;
				  }
				  
				  .swiper-slide{
				        float: left;
						overflow: hidden;
						box-sizing: border-box;
						display: inline-block;
						transition-property: transform, height;
				  }
		  }
}

</style>