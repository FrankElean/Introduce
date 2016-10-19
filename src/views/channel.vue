<template><div>

		  <view-banner :banner="banner"></view-banner>
		 
		 <mc-list-wrap>
		        <mc-list-view-cell link v-for="(index, data) in 5" data-id=1452546 :icon-event="vocalDetail">
					  <mc-list-item-media>{{index+1}}</mc-list-item-media>
					  <mc-item-title>从你的全世界路过</mc-item-title>
				</mc-list-view-cell>
		 </mc-list-wrap>
		 
		 <mc-list-wrap>
		        <mc-list-view>
		              <mc-list-item-media>
					         <img src="../assets/images/03.png" />
					  </mc-list-item-media>
					  <mc-list-item-content>
					          <mc-item-title-row>
							  
							           <mc-item-title>从你的全世界路过</mc-item-title>
							           <mc-item-title-after>2016-02-04</mc-item-title-after>
							  </mc-item-title-row>
							  <mc-item-sub-title>从你的全世界路过</mc-item-sub-title>
							  <mc-item-text>从你的全世界路过从你的全世界路过</mc-item-text>
					  </mc-list-item-content>
				</mc-list-view>
		        <mc-list-view>
					  <mc-list-item-content>
					          <mc-item-title-row>
							  
							           <mc-item-title>从你的全世界路过</mc-item-title>
							           <mc-item-title-after>2016-02-04</mc-item-title-after>
							  </mc-item-title-row>
							  <mc-item-sub-title>从你的全世界路过</mc-item-sub-title>
							  <mc-item-text>从你的全世界路过从你的全世界路过</mc-item-text>
					  </mc-list-item-content>
				</mc-list-view>
		 </mc-list-wrap>
		 
		 <mc-action-sheet text-align cancelAction :font-size="actionSheet.fontSize" :action-sheet="actionSheet" :visible.sync="sheetVisible"></mc-action-sheet>
</div></template>


<script>
import mcIcon from './../components/icon'

import mcContentTitle from '../components/content-title'

import mcListView from '../components/list/list-views'


import mcActionSheet from '../components/action-sheet'


import viewBanner from './../views/banner'



export default {

         name: 'view-channel',
		 
		 data: function(){
		 
		        return {
						banner: ['','',''],
						
						sheetVisible: false,
						
						actionSheet: {
						
						       actions: [{
										 name: '收藏到歌单',
										 method: this.collectEvent
								}, {
										 name: '歌手: Britney Spears',
										 method: this.chansonnierEvent,
										 active: true
								},{
										 name: '专辑：The Unreleased',
										 method: this.albumEvent,
										 active: true
								},{
										 name: '评论(645)',
										 method: this.acousticEvent,
										 active: true
								},{
										 name: '下载',
										 method: this.downloadEvent
								},{
										 name: '相似推荐',
										 method: this.similarityEvent
								}],
								actionTitle: '歌曲: Dramatic',
								fontSize: 14
						},   
				}
		 },
		 
		 methods: {
		 	   getSongDetail: function(id){
			           
					   if(!id || id == null) return;					   
					   return this.$http.get('/v2/voicaldetail.json', {id: id}).then( (response) => {
					    
					             return response.data
					   })
			   },
		       vocalDetail:function(event){
			          
			           let currentid = event.target.parentNode.getAttribute('data-id')
					   this.getSongDetail(currentid).then( (response) => {
					            
								let data = JSON.parse(response)
								
					            if(data.code == 200) {
										this.$nextTick(() => {
												this.chansonnier = data.chansonnier;
												this.album = data.album;
												this.acoustic = data.acoustic;
												this.similarity = data.similarity;
										})
										
										setTimeout(()=>{
											 this.sheetVisible = true
										}, 0)
								}
					   }, (error) => {
					   
					   })
					   	
			   }, 
			   collectEvent(data, event) {
			           // 收藏到歌单
					   console.log('collect song..', event)
			   },
			   chansonnierEvent() {
			           // singer main web
					   console.log('singer main web..')
			   },
			   albumEvent() {},
			   acousticEvent() {},
			   similarityEvent() {},
			   stopPlayEvent() {},
		 },
		 
	     components: {viewBanner, mcIcon, mcContentTitle,mcListView, mcActionSheet}
}

</script>



<style lang="scss">

.page-swipe{
   
      .swipe {
			height: 140px;
			color: #fff;
			font-size: 30px;
			text-align: center;
			margin-bottom: 10px;
      }
      .swipe-item {
       	 	line-height: 140px;
      }
      .slide1 {
			background: url('../assets/images/01.png');
      }
      .slide2 {
			background: url('../assets/images/02.png');
      }
      .slide3 {
			background: url('../assets/images/01.png');
      }
}

</style>