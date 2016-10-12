<template>

         <i class="music-icon" :class="className" :value="icon" :style="{'font-size': size + 'px', 'color': color}">
		 
		         <slot></slot>
		 </i>
</template>


<script>

export default {
       name: 'mc-icon',
	   
	   props: {
	          value: {
			         type: String,
					 default: ''
			  },
			  size: {
			         type: Number,
					 default: 24
			  },
			  color: {
			         type: String,
					 default: ''
			  }
	   },
	   
	   computed: {
	          className: function(){
			          let obj = {}
					  obj['music-' + this.value] = true
					  return obj
			  }
	   }
}

</script>


<style>

     .icon {
	        position: relative
	 }

</style>