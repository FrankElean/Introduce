<template>
	  <div id="app">
			  
			  <router-view></router-view>
			  <toast></toast>
			  <left-drawer-nav></left-drawer-nav>
			  <!--guide></guide-->
	  </div>
</template>

<script>

import find from './views/find'
import toast from './components/toast'
import leftDrawerNav from './views/drawer'

import store from './vuex/store'
import {setToastContent, setToastShow} from './vuex/actions' 

export default {

      data() {
	         return {
			       
			 }
	  },
	  ready() {
			// console.log(this.$route)
			
	  },
	  
	  store: store,
	  
	  events: {
	  
	  		  'show:menu': function(){
			          this.navShow = true
					  this.$broadcast('show:menu')
			  } 
	  },
	  
	  components: { find, leftDrawerNav, toast }
}
</script>

<style lang="scss">

/**/
	::-webkit-scrollbar{width: 2px}
	::-webkit-scrollbar-track{background: #e3e3e3}
	::-webkit-scrollbar-thumb{background: #c1c1c1; border-radius: 2px;}
	
	*, *::after, *::before, :after, :before {
		  margin: 0;
		  padding: 0;
		  box-sizing: border-box;
	}
	
	ul li{ list-style: none;}
	
	html{
		  line-height: 1.6;
		  font-size: 62.5%;
		  -webkit-text-size-adjust:none;
	}
	
	html, body {
		  display: flex;
		  align-items: flex-start;
		  justify-content: center;
		  box-sizing: border-box;
		  width: 100%;
		  height: 100%;
		  padding: 0;
		  margin: 0;
		  line-height: 1.5;
		  font-family: Helvetica Neue,Helvetica,STHeiTi,Arial,sans-serif;
		  
		  color: #474a4f;
		  font-size: 16px;
		  
		  user-select: none; // 禁止用户选择文字
		  -webkit-tap-highlight-color: transparent; //去掉触摸遮盖层
	}
	// 消除输入框阴影和边框
	input, textarea, select {
	     appearance: none;
		 border: none;
		 outline: noe;
	}
	
	a {
		 color: #0af;
		 text-decoration: none;
		 user-select: none;
		 &:active, &:hover {
				 outline-width: 0;
		 }
	}
	
	#app {
		  flex: 1;
		  padding-top: 50px;
		  overflow: hidden;
		  position: absolute;
		  left: 0;
		  top: 0;
		  right: 0;
		  bottom: 0;
		  
		  .container {
				  position: absolute;
				  left: 0;
				  top: 50px;
				  right: 0;
				  bottom: 44px;
				  overflow: hidden;
				  overflow-y: auto;
				  -webkit-overflow-scrolling: touch;
		  }
		  .containers {
		         @extend .container;
				 bottom: 0;
		  }
	}
</style>
