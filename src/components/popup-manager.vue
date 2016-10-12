<template>
       
</template>


<script>

import Vue from 'vue'

import {getZIndex} from '../util/zIndex'

import overlay from './overlay'

const Overlay = Vue.extend(overlay)

const getDom = function(node)　{

        if(node.nodeType == 3) {
		  
		       node = node.nextElementSibling || node.nextSibling
			   getDom(node)     
		}		
		return node;
}

const merge = function(target) {
        let length = arguments.length
		for(let ii=1; ii<length; ii++){
		
		        let source = arguments[ii]
				for(prop in source){
				
				         if(source.hasOwnProperty(prop)){
						          let value = source[prop]
								  value !== undefined && (target[prop] = value)
						 }
				}
		}
}

const PopupManager = {
        // 对当前实例(drawer|dialog|popup)做缓存处理
        instances: [],
		
		overlay: false,
		// 打开overlay初始化设置
		open(instance) {
		         // 如果未传递参数 或 缓存中已存在 则直接返回
		         if(!instance || this.instances.indexOf(instance) !== -1) return
				
				 // 当没有遮盖层则显示
				 if(this.instances.length === 0) {
				        
						 this.showOverlay(instance.$root.$el, instance.overlayColor, instance.overlayOpacity)
				 }
				 //console.log(instance)
				 this.instances.push(instance)
				 
				 this.changeOverlayStyle()
				 
				 const node = getDom(instance.$el)
				  
				 node.style.zIndex = getZIndex()
		},
		
		close(instance) {
		
		        let index = this.instances.indexOf(instance)
				
				// 如果在缓存当中找不到则直接返回
				if(index === -1) return
				
				Vue.nextTick( () => {
				
				         this.instances.splice(index, 1)
				         if(this.instances.length === 0) {
						 
						           this.closeOverlay()
						 }		 
				         this.changeOverlayStyle()
				})
		},
		// 显示overlay
		showOverlay(rootElem, color, opacity) {
		        
				// 创建 Vue ==> Overlay实例
		        let overlay = this.overlay = new Overlay({
				        el: document.createElement('div')
				})
				
				overlay.fixed = true
				overlay.color = color
				overlay.opacity = opacity
				overlay.onClick = this.handleOverlayClick.bind(this)
				
				
				if(rootElem){
				        overlay.$appendTo(rootElem)
				}else{
				        overlay.$appendTo(document.body)
				}
				
				this.bodyOverflow = document.body.overflow
				document.body.style.overflow = 'hidden'
		},
		// 关闭overlay
		closeOverlay() {
		        
				// 如果overlay不存在则取消操作
				if(!this.overlay) return
				
				document.body.style.overflow = this.bodyOverflow
				
				let overlay = this.overlay
				this.overlay = null
				
				overlay.$remove( () => {
				         // 如果有transition动画, 必须等动画执行完才销毁整个实例
				         overlay.$destroy()
				})
				
		},
		// 重置overlay样式
		changeOverlayStyle() {
		        if(!this.overlay || this.instances.length == 0) return
				const instance = this.instances[this.instances.length-1]
				this.overlay.color = instance.overlayColor
				this.overlay.opacity = instance.overlayOpacity
		},
		// 设置overlay点击事件
		handleOverlayClick() {
		        if(this.instances.length == 0) return
				const instance = this.instances[this.instances.length-1]
		
		        instance.overlayClick && instance.overlayClick()
		}
}

window.addEventListener('keydown', (evt) => {

        if(PopupManager.instances.length == 0) return
		if(evt.keyCode == 27){
		        const topInstance = PopupManager.instances[PopupManager.instances.length-1]
				topInstance.escPressHandle && topInstance.escPressHandle()
		}
})



export default {

		 name: 'mc-popupManager',
		 
		 props: {
		         // 是否显示弹层
		    	 show: {
				        type: Boolean,
						default: false
				 },
				 
				 // 是否显示overlay
				 overlay: {
				        type: Boolean,
						default: true
				 },
				 
				 overlayColor: {
				        type: String,
						default: '#000'
				 },
				 
				 overlayOpacity: {
				        type: Number,
						default: 0.4
				 }
		 },
		 
		 watch: {
		        // 监视show的值 调用对应方法
		        show: function(val){
				
				       if(val && this.overlay){ //console.log(this)
					           PopupManager.open(this)
					   }else{
					           PopupManager.close(this)
					   }
				}
		 },
		 
		 data() {
		        return {
				      
				}
		 },
		 
		 methods: {},
		 
		 // 组件被创建时判断show值来控制是否开启
		 attached() {
		          if(this.show && this.overlay){
				  
				           PopupManager.open(this)
				  }
		 },
		 
		 // 组件被移除时关闭
		 detached() {
		          
				  PopupManager.close(this)
		 },
		 
		 beforeDetroy() {
		          PopupManager.close(this)
		 }
}

</script>



<style lang="scss">

</style>