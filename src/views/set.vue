<template>
       <div class="set"  transition="slide-right" transition-mode="out-in" v-link="'/'"></div>
</template>


<script>



export default {
    
	  
}
</script>

<style>
.set{
  position: absolute;
left:0; top:0; right:0;bottom:0;background:#eee;
}
    .slide-right-transition {
	 
	         transition: opacity 0.3s;
			 backface-visibility: hidden;
			 
			 &.slide-right-enter,
			 &.slide-right-leave {
			          opacity: 0
			 }
	 }
</style>