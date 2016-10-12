<template>
	<div class="detial-recommend">
	        
			
			<mc-list-wrap>

					<mc-list-view-cell>
						  <mc-item-title>最新音乐</mc-item-title>
					</mc-list-view-cell>
					<mc-card :resources="recommendMusic" :length="intercepeLen"></mc-card>
					
					
					<mc-list-view-cell>
						  <mc-item-title>独家放送</mc-item-title>
					</mc-list-view-cell>
					<mc-card :resources="recommendMusic" :length="intercepeLen"></mc-card>
							
			</mc-list-wrap>
			
	</div>		
</template>



<script>

import mcCard from '../../components/card-three'

export default {
       name: 'view-main-list',
	   
	   data() {
	           return {
			           pictureSize: '100y100',
			           intercepeLen: 28,     // 标题显示长度
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
									   if(res.length > 0){
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


<style lang="scss" scoped>


@import '../../scss/_vars.scss';

.music-fm{

      width: 100%;
	  padding: 10px 10px;
	  display: flex;
	  justify-content: space-around;
	  
	  & > div {
	         flex: 1;
	         display: flex;
			 flex-direction: column;
	         align-items: center;
			 
			 & > span {
					 
			 }
			 & >span:first-child {
					 display: flex;
					 justify-content: center;
					 align-items: center;
					 width: 60px; 
					 height: 60px;
					 border-radius: 60px;
					 border: 1px solid $main;
					 font-size: 28px;
					 color: $main;
			  }
			 & > span:last-child {
			         font-size: 12px;
					 margin-top: 8px;
			 }
	  } 
}
</style>