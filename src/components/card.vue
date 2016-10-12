<template>

         <div class="music-card-list card-list--border card-list--gap">
                <div class="card-item" v-for="item in resources" track-by="$index">
						<a class="item-img-wrap" v-link="{ name: item.routeName, params:item.routeParam, query: {limit:10, current:100}}">
								<img :src="item.picPath" alt="" class="item-img">
						</a>
						<div class="item-tt" v-text="item.picTitle | limitTo length"></div>
                </div>
		 </div>
</template>


<script>

export default {
       name: 'mc-card',
	   
	   props: {
	   
			  colNum: {
			         type: Number,
					 default: 3
			  },
			  length: {
			         type: Number,
					 default: 10
			  },
			  
			  resources: {
			         type: Array,
					 default: []
			  }
	   },
	   
	   computed: {
	   
	           
	   },
	   ready: function(){
	        
	   },
	   
	   filters: {
	          limitTo: function(str, num, ellipsis){
			  		ellipsis = ellipsis || "...";
					var byte = 0, res = "";
					for (var ii = 0, len = str.length; ii < len; ii++) {
							var encode = str.charCodeAt(ii);
							encode > 128 ? byte += 2 : byte += 1;
							if (!(byte <= num)) return res + ellipsis;
							res += str.charAt(ii)
					}
					return res
			  }
	   },
}

</script>


<style lang="scss" scoped>
    /**Card两列布局*/
	$carLineNum: 2;
	$cardGapSwitch: true; 
	@import './../scss/card.scss';
</style>