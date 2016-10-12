<template><div>
		
		 <mc-nav-bar class="page-title nav-header-fixed" fixed :selected.sync="selected">
		
				  <mc-nav-item id="1">{{listCategory[0]}}</mc-nav-item>
				  <mc-nav-item id="2">{{listCategory[1]}}</mc-nav-item>
				  <mc-nav-item id="3">{{listCategory[2]}}</mc-nav-item>
				  <mc-nav-item id="4">{{listCategory[3]}}</mc-nav-item>
		 </mc-nav-bar>
		 
		 <mc-tab-container :active.sync="selected" swipeable>
				  <mc-tab-container-item id="1">
					  
		 				   <view-banner :banner="banner"></view-banner>
						   
						   <view-main-list></view-main-list>
				  </mc-tab-container-item>
				   
				  <mc-tab-container-item id="2">
	
						<view-music-list></view-music-list>
				  </mc-tab-container-item>
						
				  <mc-tab-container-item id="3">
						
						<view-radio-list></view-radio-list> 
				  </mc-tab-container-item>
						
				  <mc-tab-container-item id="4">
						
						<view-rank-list></view-rank-list>
				  </mc-tab-container-item>
		 </mc-tab-container>

			
		  
</div></template>

<script>

import viewBanner from './../views/banner'
import viewMainList from '../views/recommend/main-list'
import viewMusicList from '../views/recommend/music-list'
import viewRadioList from '../views/recommend/radio-list'
import viewRankList from '../views/recommend/rank-list'

import mcNavBar from '../components/nav-bar'
import mcNavItem from '../components/nav-item'

import mcTabContainer from './../components/tab-container'
import mcTabContainerItem from './../components/tab-container-item'

export default {
	  name: 'view-recommend',
	  data() {
			return {
					selected: '1',
					banner: ['','',''],
					listCategory: ['个性推荐', '歌单', '主播电台', '排行榜'],
			}
	  },
	  
	  ready() {
	         
	  },
	  
	  methods: {
	   
	  },
	  
	  components: {viewBanner, mcNavBar, mcNavItem, viewMainList, viewMusicList, viewRadioList, viewRankList, mcTabContainer,  mcTabContainerItem}
};
</script>

<style lang="scss">


/**重置二级导航为fixed*/
.nav-header-fixed {
	   top: 50px;
}
.music-tab-container {

      margin-top: 38px;
}

.music-list-view::after {
       left: 74px;
}
.cell-item .item-tt {
       font-size: 12px;
}
</style>