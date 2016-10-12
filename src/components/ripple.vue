<template>

         <div class="ripple-ink" :style="{'color': color}"></div>
</template>


<script>
import classlist from '../util/classlist'



function startRipple (eventType, event) {

        let holder = event.currentTarget || event.target

        if (!classlist.has(holder, 'ripple-ink')) {
                holder = holder.querySelector('.ripple-ink')

                if (!holder) return
        }

        // Store the event use to generate this ripple on the holder: don't allow
        // further events of different types until we're done. Prevents double-
        // ripples from mousedown/touchstart.
		
        var prev = holder.getAttribute('data-ui-event')
        if (prev && prev !== eventType) return
		
		
		//如果不存在data则进行设置
        holder.setAttribute('data-ui-event', eventType)
        // Create and position the ripple
        var rect = holder.getBoundingClientRect()
        var x = event.offsetX
        var y
        if (x !== undefined) {
                y = event.offsetY
        } else {
                x = event.clientX - rect.left
                y = event.clientY - rect.top
        }
        var ripple = document.createElement('div')
        var max
        if (rect.width === rect.height) {
                max = rect.width * 1.412
        } else {
                max = Math.sqrt(
                        (rect.width * rect.width) + (rect.height * rect.height)
                )
        }
        var dim = (max * 2) + 'px'
        ripple.style.width = dim
        ripple.style.height = dim
        ripple.style.marginLeft = -max + x + 'px'
        ripple.style.marginTop = -max + y + 'px'
        // Activate/add the element
        ripple.className = 'ripple'
        holder.appendChild(ripple)
        setTimeout(function() {
                classlist.add(ripple, 'held')
        }, 0)
        var releaseEvents = eventType === 'mousedown' ? ['mouseup', 'mousemove'] : ['touchend', 'touchmove', 'touchcancel']
        var release = function() {
                releaseEvents.forEach((releaseEvent) => {
                        document.removeEventListener(releaseEvent, release)
                })
                classlist.add(ripple, 'done')
                // Larger than the animation duration in CSS
                setTimeout(function() {
                        holder.removeChild(ripple)
                        if (!holder.children.length) {
                                classlist.remove(holder, 'active')
                                holder.removeAttribute('data-ui-event')
                        }
                }, 450)
        }
        releaseEvents.forEach((releaseEvent) => {
                document.addEventListener(releaseEvent, release)
        })

}


let handleMouseDown = function handleMouseDown(evt){
       if(evt.button == 0) startRipple(evt.type, evt)
}

let handleTouchStart = function handleTouchStart(evt){
       if(evt.changedTouches){
	   
	          for(let ii=0; ii<evt.changedTouches.length; ++ii){
			  
			          startRipple(evt.type, evt.changedTouches[ii])
			  }
	   }
}

export default {
       name: 'mt-ripple',
	   
	   props: {
	          trigger: {
			         type: window.Element,
					 require: true
			  },
			  color: {
			         type: String,
					 default: ''
			  }
	   },
	   
	   watch: {
	   
	   },
	   
	   methods: {
	   
	            initialize() {
				
						this.trigger.addEventListener('mousedown', handleMouseDown)
						this.trigger.addEventListener('touchstart', handleTouchStart)
				}
	   },
	   
	   ready: function(){
	            this.initialize()
	   },
	   
	   beforeDestroy() {
	            this.trigger.removeEventListener('mousedown', handleMouseDown)
	            this.trigger.removeEventListener('touchstart', handleTouchStart)
	   }
}

</script>


<style lang="scss">

     .ripple-ink {
	        display: block;
	        position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			overflow: hidden;
			border-radius: inherit;
			
        // Forces webkit to properly contain content within border-radius
           -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
		   
		   .ripple {
					position: absolute;
					width: 0;
					height: 0;
					pointer-events: none;
					user-select: none;
					border-radius: 50%;
					background-color: currentColor;
					background-clip: padding-box;
					// opacity: 0.2;
					transform: scale(0);
					transition: transform 0.4s ease-out, opacity 0.4s ease-out;
					&.held {
						// opacity: 0.4;
						transform: scale(1);
					}
					&.done {
						opacity: 0!important;
					}
			}
		   
	 }


</style>
