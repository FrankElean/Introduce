<template>
		
		<view-header :title="title"></view-header>
		
		<router-view class="container" keep-alive></router-view>
		
		
		<mc-tab-bar :selected="selected">
				<mc-tab-item id="home" v-link="{name: 'home', activeClass: 'active'}">
					   <img slot="icon" src="../assets/circle.png">发现
				</mc-tab-item>
				<mc-tab-item id="channel" v-link="{name: 'channel', activeClass: 'active'}">
					   <img slot="icon" src="../assets/circle.png">频道
				</mc-tab-item>
				<mc-tab-item id="recommend" v-link="{name: 'recommend', activeClass: 'active'}">
					   <img slot="icon" src="../assets/circle.png">推荐
				</mc-tab-item>
				<mc-tab-item id="center" v-link="{name: 'center', activeClass: 'active'}">
					   <img slot="icon" src="../assets/circle.png">我的
				</mc-tab-item>
		</mc-tab-bar>
		
</template>


<script>

import Vue from 'vue'
import guide from './../views/loading'   // 引导页
import viewHeader from './../views/header'
import listView from './../components/list/list-view'
import mcTabBar from './../components/tab-bar'
import mcTabItem from './../components/tab-item'

Vue.use(listView)
const TITLE = {home:'发现', channel:'频道', recommend:'推荐', center:'个人中心'}
export default {
      name: 'view-home',
      data() {
	         return {
			        sheetVisible: false,
					
					actions: [{
					         name: '个性推荐',
							 method: this.openAblum
					}, {
					         name: '个人中心',
							 method: this.takePhoto
					}],
					selected: this.$route.name || '',
					title: 'home',
			 }
	  },
	  
	  ready() {
			// console.log(this.$route)
			
			this.statusChange()
			
			
	  },
	  
	  route: {
	  
	         data: function(transition){
			 
			           //console.log(transition)
					   this.title = TITLE[transition.to.name]
			 }
	  },
	  
	  watch: {
	           'status': function(){
			   
			   }
	  },
	  
	  methods: {
	          openAblum() {
			         console.log('openAblum.....')
			  },
			  takePhoto() {
			         console.log('takePhoto.....')
			  },
			  statusChange() {
			         
			        
			  }
	  },
	  
	  components: {viewHeader, mcTabBar, mcTabItem, guide}
	  
}
</script>

<style lang="scss">

@charset "UTF-8";

.music-popup-4 {
      width: 100%
}

.fade-transition {
  transition: opacity .1s ease;
}

.fade-enter, .fade-leave {
  opacity: .4;
}
</style>