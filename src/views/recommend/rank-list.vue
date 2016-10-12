<template>
	<div class="detial-radio">
			<mc-list-view-cell>
					<mc-item-title>官方榜</mc-item-title>
			</mc-list-view-cell>	
					   
			<mc-list-wrap>				
					<mc-list-view v-for="(index, item) in rankData" v-link="{ name: item.routeName, params:item.routeParam, query: {limit:10, current:1}}">
					
						  <mc-list-item-media>
								 <img :src="item.picPath" />
						  </mc-list-item-media>
						  <mc-list-item-content>
								  <mc-item-title-row>
								  
										   <mc-item-title>{{item.picTitle}}</mc-item-title>
								  </mc-item-title-row>
								  <mc-item-sub-title>{{item.picDesc}}</mc-item-sub-title>
						  </mc-list-item-content>
					</mc-list-view>	
			</mc-list-wrap>	
			
			
			<mc-list-view-cell>
					<mc-item-title>全球榜</mc-item-title>
			</mc-list-view-cell>	
					   
			<mc-list-wrap>				
					<mc-list-view v-for="(index, item) in rankData">
					
						  <mc-list-item-media>
								 <img :src="item.picPath" />
						  </mc-list-item-media>
						  <mc-list-item-content>
								  <mc-item-title-row>
								  
										   <mc-item-title>{{item.picTitle}}</mc-item-title>
								  </mc-item-title-row>
								  <mc-item-sub-title>{{item.picDesc}}</mc-item-sub-title>
						  </mc-list-item-content>
					</mc-list-view>	
			</mc-list-wrap>	
	</div>		
</template>



<script>

import mcCard from '../../components/card'

export default {
       name: 'view-rank-list',
	   
	   data() {
	          return {
			         rankData: []
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
												// 根据当前排行榜id 获取数据
												this.rankData.push({
														
														picPath: item.pic+'?param='+ this.pictureSize,
														picTitle: item.title,
														picDesc: item.desc,
														subscripe: item.subscripe,
														publicTime: item.time,
														routeName: 'rankDetail',
														routeParam: {rankId: item.id}
												})
									   })
							   }
					})
			 }
	   },
	   
	   components: {mcCard}
}

</script>


<style lang="scss">

@import '../../scss/_vars.scss';

.cell-item .item-tt {
       color: #848484; 
}

</style>