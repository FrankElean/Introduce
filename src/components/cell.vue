<template>

         <ul class="music-cell-list">
                <li class="cell-item" v-for="(index, item) in resources" track-by="$index">
                    	<p class="music-icon item-icon" :class="'music-' + icon[index]"></p>
                    	<p class="item-tt" v-text="item"></p>
                </li>
		</ul>
</template>


<script>

export default {
       name: 'mc-cell',
	   
	   props: {
	          resources: {
			         type: Array,
					 default: []
			  },
			  icon: {
			         type: Array,
					 default: []
			  }
	   },
	   
	   computed: {
	   
	         
	   },
	   
	   filters: {
	          
	   },
	   
}

</script>


<style lang="scss">


</style>