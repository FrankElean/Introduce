<template>
	  
		   <mc-swipe :show-indicators="false" :height="height" prevent>
				   <mc-swipe-item class="music-swipe-item slide{{index+1}}" v-for="(index, item) in banner" track-by="$index"></mc-swipe-item>
		   </mc-swipe>
</template>


<script>

import mcSwipe from '../components/swipe'
import mcSwipeItem from '../components/swipe-item'

export default {
    
	    name: 'music-banner',
		
		props: {
		       // 视图高度
		       height: {
				      type: Number,
					  default: 140		        
			   },
			   
			   // 视图显示数据
			   banner: {
				      type: Array,
					  default: ()=>{}
			   }
		},
		components: {mcSwipe, mcSwipeItem}
}
</script>

<style>

      .music-swipe-item {
       	 	line-height: 140px;
      }
      .slide1 {
			background: url('/v3/01.png');
      }
      .slide2 {
			background: url('/v3/02.png');
      }
      .slide3 {
			background: url('/v3/09.png');
      }
</style>