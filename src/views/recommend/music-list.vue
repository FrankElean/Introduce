<template>
	<div class="detial-recommend">
			<mc-list-view-cell remove-line>
				  <mc-item-title>推荐歌单</mc-item-title>
			</mc-list-view-cell>
			<mc-card :resources="recommendMusic" :length="intercepeLen"></mc-card>
			
				
			<mc-list-view-cell>
				  <mc-item-title>最新音乐</mc-item-title>
			</mc-list-view-cell>
			<mc-card :resources="recommendMusic" :length="intercepeLen"></mc-card>
			
			
			<mc-list-view-cell>
				  <mc-item-title>独家放送</mc-item-title>
			</mc-list-view-cell>
			<mc-card :resources="recommendMusic" :length="intercepeLen"></mc-card>
			
			<mc-list-view-cell>
				  <mc-item-title>推荐MV</mc-item-title>
			</mc-list-view-cell>
			<mc-card :resources="recommendMusic" :length="intercepeLen"></mc-card>
	</div>		
</template>



<script>

import mcCard from '../../components/card'

export default {
       name: 'view-music-list',
	   
	   data() {
	           return {
			           pictureSize: '100y100',
			           intercepeLen: 50,     // 标题显示长度
					   recommendMusic: []    // 推荐歌曲列表
			   }
	   },
	   
	   ready() {
	          this.loadData()
	   },
	   
	   methods: {
	   
	   		  loadData: function(){
			        this.$http.get('/v2/resource.json', {}).then(function(response){
					          
							  return JSON.parse(response.data)
					}).then( (response) => {
					  
							  if(response.code == 200) {
							           let res = response.recommend; 
									   if(res.length>0){
										   res.forEach( (item) => {
													 this.recommendMusic.push({
													 
															 picPath: item.picurl+'?param='+ this.pictureSize,
															 picTitle: item.name,
															 routeName: 'recommendDetail',
															 routeParam: {recommendId: item.id}
													 })
										   })
										   //self.$data.recommendMusic = responseData
										   //self.$set('recommendMusic', responseData)
									   }
							  }
							  //console.log(response)
					}, (error) => {
					
					         
					})
					
			 }
	   },
	   
	   components: {mcCard}
}

</script>


<style lang="scss">
	

</style>