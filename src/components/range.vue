<template>

         <div class="music-range" :class="{'music-range-disabled': disabled}">
		        <slot name="music-start-value"></slot>
                <div class="music-range-content" v-el:content>
						
						<div class="music-runway" :style="{height: barHeight+'px'}"></div>
						<div class="music-progress" :style="{width: progress +'%', height: barHeight +'px'}"></div>
						<div class="music-thumb" :style="{left: progress +'%'}" v-el:thumb></div>
                </div>
				<slot name="music-end-value"></slot>
		 </div>
</template>


<script>
import draggable from '../util/draggable'

export default {
       name: 'mc-range',

          props: {
                  min: {
                          type: Number,
                          default: 0
                  },
                  max: {
                          type: Number,
                          default: 100
                  },
                  step: {
                          type: Number,
                          default: 1
                  },
                  disabled: {
                          type: Boolean,
                          default: false
                  },
                  value: {
                          type: Number
                  },
                  barHeight: {
                          type: Number,
                          default: 1
                  }
          },
          computed: {
                  progress() {
                          const value = this.value;
                          if (typeof value === 'undefined' || value === null) return 0;
						  // 如果当前值小于最小值则将最小值作为默认值
						  if (this.value < this.min) return this.value = this.min;
                          return Math.floor((value - this.min) / (this.max - this.min) * 100);
                  }
          },
          ready() {
                  const { thumb, content } = this.$els;

                  const getThumbPosition = () => {
				          // 获取容器属性 left  top
                          const contentBox = content.getBoundingClientRect();
                          const thumbBox = thumb.getBoundingClientRect();

 						 // 返回thumb与外层盒子之间的距离
                          return {
                                  left: thumbBox.left - contentBox.left || 0,
                                  top: thumbBox.top - contentBox.top || 0
                          };
                  };

                  let dragState = {};
                  draggable(thumb, {
                          start: () => {
                                  if (this.disabled) return;
                                  const position = getThumbPosition();
                                  dragState = {
                                          thumbStartLeft: position.left,
                                          thumbStartTop: position.top
                                  };
                          },
                          drag: (event) => {
                                  if (this.disabled) return;
                                  const contentBox = content.getBoundingClientRect();
								  // 防止因获取不到with 而导致 Vue getter value时 infinite loop 
								  if(!contentBox.width) throw new Error('Unable to detect wrap size');
								  // 差值 = 鼠标点击位置 - 盒子与视口左侧距离 - thumb起始位置
                                  const deltaX = event.pageX - contentBox.left - dragState.thumbStartLeft;
								  
								  // (最大值 - 最小值)/步长
                                  const stepCount = Math.ceil((this.max - this.min) / this.step);
								  // 当前位置 = thumb起始位置+差值 - (thumb起始位置+差值)%(盒子宽度/步长)
                                  const newPosition = (dragState.thumbStartLeft + deltaX) - (dragState.thumbStartLeft + deltaX) % (contentBox.width / stepCount)-10;
								  
								  // 根据新的位置 设置 进度值 百分比
                                  let newProgress = newPosition / contentBox.width;

                                  if (newProgress < 0) {
                                          newProgress = 0;
                                  } else if (newProgress > 1) {
                                          newProgress = 1;
                                  }
								  // 当前值 = 最小值 + 进行百分比值 * (最大值 - 最小值)
                                  this.value = Math.round(this.min + newProgress * (this.max - this.min));
                          },
                          end: () => {
                                  if (this.disabled) return;
                                  dragState = {};
                          }
                  });
          }

/*	   
	   props: {
	   
			  min: {
			         type: Number,
					 default: 0
			  },
			  max: {
			         type: Number,
					 default: 100
			  },
			  step: {
			         type: Number,
					 default: 1
			  },
			  disabled: {
			         type: Boolean,
					 default: false
			  },
			  value: {
			         type: Number,
					 default: 0
			  },
			  barHeight: {
			         type: Number,
					 default: 1
			  }
	   },
	   
	   computed: {
	   
	           progress: function(){
			            const value = this.value;
			            if(typeof value == 'undefined' || value == null) return 0;
						
			            return Math.floor((value - this.min) / (this.max-this.min)*100)
			   }
	   },
	   ready: function(){
	           this.running = false;
			   this.dragstate = null
	           const {content, thumb} = this.$els;
			   this.supportTouch = 'ontouchstart' in window;
			   this.getThumbPosition = function(){
			             const contentRect = content.getBoundingClientRect();
						 const thumbRect = thumb.getBoundingClientRect();
						 //console.log(contentRect, thumbRect)
			             return {
						 
						         left: thumbRect.left - contentRect.left,
								 top: thumbRect.top - contentRect.top
						 }
			   }
			   this.initialize()
			   
	   },
	   methods: {
	   
	            initialize: function(){
				        
					    this.$els.thumb.addEventListener(this.supportTouch ? 'touchstart' : 'mousedown', (event)=>{
				                if(this.running) return;
								document.onselectstart = function(){
										 return false;
								}
								document.ondragstart = function(){
										 return false;
								}
								
								this.running = true;
								event.preventDefault();
								this.dragstart(this.supportTouch ? event.changedTouches[0] || event.touches[0] : event)
					    }, false)
						
						
						
				},
				
				dragstart: function(event){
				         
						 if(this.disabled) return;
						 const position = this.getThumbPosition();
						 this.dragstate = {
						 
						         thumbStartLeft: position.left,
								 thumbStartTop: position.top
						 }
						 
						this.$els.thumb.addEventListener(this.supportTouch ? 'touchmove' : 'mousemove', (event)=>{
				                this.dragmove(this.supportTouch ? event.changedTouches[0] || event.touches[0] : event)
					    }, false)
				},
				
				dragmove: function(event){
				
				        // console.log(event)
						if(this.disabled) return;
						const contentRect = this.$els.content.getBoundingClientRect();
						// 差值 = 点击位置 - 容器距离视口左侧位置 - 按钮起始距离左侧距离
						const deltaX = event.pageX - contentRect.left - this.dragstate.thumbStartLeft;
						const stepCount = Math.ceil((this.max-this.min)/this.step)
						
						console.log(this.dragstate)
						
						const newPosition = (this.dragstate.thumbStartLeft + deltaX) - (this.dragstate.thumbStartLeft + deltaX) % (contentRect.width / stepCount) - 10
						
						let newProgress = newPosition / contentRect.width
						console.log(newPosition)  
						if(newProgress < 0) {
						       newProgress = 0
						}
						if(newProgress > 1) {
						       newProgress = 1
						}
						this.value = Math.round(this.min + newProgress * (this.max-this.min))
						//console.log(newProgress) 
						this.$els.thumb.addEventListener(this.supportTouch ? 'touchend' : 'mouseup', (event)=>{
				                this.dragend()
					    }, false)  
				},
				
				dragend: function(event){
			   
						document.removeEventListener('mousemove', this.dragmove)
						document.removeEventListener('mouseup', this.dragend)
						
                		document.onselectstart = null;
                		document.ondragstart = null;
				        this.running = false;
						
						if(this.disabled) return;
						this.dragstate = null   
				}
	   } */
}

</script>


<style lang="scss">

@import '../scss/_vars.scss';
      .music-range {
	  
	          display: flex;
			  width: 100%;
			  height: 30px;
			  line-height: 30px;
			  position: relative;
			  justify-content: space-between;
			  
			  
			  & > * {
			           display: flex;
					   
			  }
			  
			  & *[slot=music-start-value] {
			  
			          margin-right: 5px;
			  }
			  
			  & *[slot=music-end-value] {
			  
			          margin-left: 5px;
			  }
			  // descendent
			  .music-range-content {
			  
			          flex: 1;
					  position: relative;
					  margin-right: 20px;
					  
					  
					  .music-runway {
					  
					          position: absolute;
							  left: 0;
							  top: 50%;
							  right: -20px;
							  transform: translateY(-50%);
							  background: $border-color;
					  }
					  .music-progress {
					          
							  display: block;
					          position: absolute;
							  left: 0;
							  top: 50%;
							  transform: translateY(-50%);
							  background: $main;
							  width: 0px;
					  }
					  .music-thumb {
					  
					          position: absolute;
							  left: 0;
							  top: 50%;
							  cursor: pointer;
							  background: #fff;
							  width: 20px;
							  height: 20px;
							  margin-top: -10px;
							  border-radius: 100%;
							  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.2);
					  }
			  }
			  // modifier
			  &.music-range-disabled {
			  
			          opacity: 0.5;
			  }
	  }
	  
	  
</style>








