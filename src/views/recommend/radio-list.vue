<template>
	<div class="detial-radio">
	
			<mc-cell :resources="cellList" :icon="icon"></mc-cell>
			
			<mc-list-view-cell>
					<mc-item-title>精彩节目推荐</mc-item-title>
			</mc-list-view-cell>
			
			<mc-list-wrap>
					<mc-list-view-cell ripple>
						  <mc-item-title>从你的全世界离开</mc-item-title>
						  <mc-item-title-after>2016-02-24</mc-item-title-after>
					</mc-list-view-cell>
			</mc-list-wrap>		
					
			<mc-list-wrap>				
			<mc-list-view v-for="(index, item) in recommendRadio">
			
				  <mc-list-item-media>
						 <img :src="item.picPath" />
				  </mc-list-item-media>
				  <mc-list-item-content>
						  <mc-item-title-row>
						  
								   <mc-item-title>{{item.picTitle}}</mc-item-title>
								   <mc-item-title-after>订阅:{{item.subscripe}}</mc-item-title-after>
						  </mc-item-title-row>
						  <mc-item-sub-title>{{item.picDesc}}</mc-item-sub-title>
				  </mc-list-item-content>
			</mc-list-view>
			</mc-list-wrap>	
	</div>		
</template>



<script>

import mcCard from '../../components/card'
import mcCell from '../../components/cell'

export default {
       name: 'view-radio-list',
	   
	   data() {
	          return {
			         recommendRadio: [],
					 cellList: ['创作翻唱', '音乐故事', '人文历史', '外语世界', '娱乐|影视', '旅途|城市', '校园|教育', '情感调频'],
					 icon: ['music', 'image', 'card', 'gift', 'music', 'image', 'card', 'gift']
			  }
	   },
	   
	   ready() {
	          this.loadData()
	   },
	   
	   methods: {
	   
	   		  loadData: function(){
			        this.$http.get('/v2/channel.json', {}).then(function(response){
					
						   return JSON.parse(response.data)
					}).then(function(response){
						   let res = response.data;
						   if(res.length>0){
								   res.forEach( (item) => {
										 this.recommendRadio.push({
										 
												 picPath: item.pic+'?param='+ this.pictureSize,
												 picTitle: item.title,
												 picDesc: item.desc,
												 subscripe: item.subscripe,
												 publicTime: item.time,
												 routeName: 'recommendDetail',
												 routeParam: {recommendId: item.id}
										 })
								   })
						   }
					})
			 }
	   },
	   
	   components: {mcCard, mcCell}
}

</script>


<style lang="scss">

@import '../../scss/cell.scss';

.cell-list .cell-item .item-icon{
       color: $main;
}
.cell-item .item-tt {
       color: #848484;
}

</style>