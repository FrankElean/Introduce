<template>
	  <div class="music-action-sheet" :class="{'is-left': textAlign}" :visible.sync="visible"  v-show="visible" transition="action-fade">
	            <div class="music-action-title" v-if="actionTitle.length" v-text="actionTitle"></div>
			    <ul class="music-action-list" :style="{'font-size':fontSize+'px'}">
				           
				         <li class="music-action-item" v-for="action in actionSheet.actions" v-on:click="actionEvent(action, $event)" v-text="action.name"></li>
						 
						 <li class="music-action-cancel" v-if="cancelAction" v-text="cancelText" :style="{ 'margin-top': cancelAction ? '4px': '0'}" v-on:click="visible=false"></li>
			    </ul>
	  </div> 
</template>


<script>
import popupManager from './popup-manager'

	export default {
			name: 'mc-action-sheet',
			
			mixins: [popupManager],
			
			props: {
			        
			        visible: {
					
					        type: Boolean,
							default: false
					},
					actionSheet: {
					
					        type: Object,
							default: ()=>{}
					},
					fontSize: {
					        type: Number,
							default: 16
					},					
					textAlign: {
					        type: Boolean,
							default: false
					},
					
					actionTitle: {
					        type: String,
							default: ''
					},
					
					// 是否显示取消Button
					cancelAction: {
					
					        type: Boolean,
							default: false
					},
					cancelText: {
					        type: String,
							default: '取消'
					},
					// 是否允许点击遮罩层关闭弹层
					allowClickOverlayClose: {
					        type: Boolean,
							default: true
					}
					
			},
			
			computed: {
			
			        show: function(){
					       return this.visible;
					},
					actionTitle: function(){
					       return this.actionSheet.actionTitle
					} 
			},
			
			ready: function(){
			
			         this.swipeHide()
			},
			
			methods: {
			        // overwrite manager class method 覆写方法
			        overlayClick: function(){
					        Zepto('.container').css('overflow', '')
					        if(this.allowClickOverlayClose) this.visible = false;
					},
			        actionEvent: function(action, event) {
					
					         if(action.method && typeof action.method == 'function') {
							            action.method(action, event);
										this.visible = false;
							 }
					},
					
					swipeHide: function(event){
			                 let startX , startY; 
							 this.$el.addEventListener('touchstart', function(event){
							          let touch = event.changedTouches[0]
							          //console.log(touch.pageX, touch.pageY)
									  
									  startX = touch.pageX
									  startY = touch.pageY
									  
							 })
							 this.$el.addEventListener('touchmove', (event) => {
							          let touch = event.changedTouches[0]
									  //console.log(touch.pageY - startY)
									  if(touch.pageY - startY > 60){
									        
							          		this.visible = false;
									  } 
							 })
							 this.$el.addEventListener('touchend', function(event) {
							          startX = startY = null;
									  this.removeEventListener('touchstart', null)
									  this.removeEventListener('touchmove', null)
							 })
					}
			}
	};
	
	
</script>

<style lang="scss">
@import '../scss/_vars.scss';
@import '../scss/mixin.scss';
       .music-action-sheet {
				position: fixed;
				left: 0;
				bottom: 0;
				right: 0;
				max-height: 60%;
				background: #fff;
				overflow-x: hidden;
				overflow-y: auto;
				-webkit-overflow-scrolling: touch;
				backface-visibility: hidden;
			    
				.music-action-title {
				         padding: 16px 10px 6px;
						 color: #999;
						 font-size: 14px;
						 background: #fff;
				},
				
				.music-action-list {
				         list-style: none;
						 padding: 0 0;
						 margin: 0 0;
						 width: 100%;
						 background: #f5f5f5;
						 
						 .music-action-item {
						 		  position: relative;
								  @include hairline(bottom, $border-color);
								  
								  &:last-child {
								           @include hairline-remove(bottom);
								  }
						 }
						 .music-action-item, .music-action-cancel {
						 
						          display: block;
								  width: 100%;
								  height: 45px;
								  line-height: 45px;
								  padding: 0 10px;
								  color: $color;
								  background: #fff;
								  white-space: nowrap;
								  word-break: break-all;
								  text-overflow: ellipsis;
								  overflow: hidden;
						 }
				}
				&.is-left {
				         text-align: left;
				}
				
			    &.action-fade-transition {
			            transition: all 0.5s;
			    }
			   
			    &.action-fade-enter,
			    &.action-fade-leave {
			   
			            transform: translate3d(0, 100%, 0);
			    }
	   }

</style>