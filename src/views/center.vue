<template>
     <div class="person-center">
		  <view-banner :banner="banner"></view-banner>
		  
          <mc-content-title>工具设置</mc-content-title>
		  
		  <mc-list-wrap>
		          <mc-list-view-cell>
				  
				      <mc-item-title>桌面歌词</mc-item-title>
					  <mc-item-title-after>
					         <mc-form-switch label-left :value.sync="valuea" :label-text="labelTextA"></mc-form-switch>
					  </mc-item-title-after>
		          </mc-list-view-cell>
				  <mc-list-view-cell>
				      <mc-item-title v-on:click="valueb=!valueb">锁屏显示</mc-item-title>
					  <mc-item-title-after>
					         <mc-form-switch label-left color="yellow" :value.sync="valueb" :label-text="labelTextB"></mc-form-switch>
					  </mc-item-title-after>
				  </mc-list-view-cell>  
		          <mc-list-view-cell>
				  
				      <mc-item-title>线控开关</mc-item-title>
					  <mc-item-title-after>
					         <mc-form-switch label-left color="blue" :value.sync="valuec" :label-text="labelTextC"></mc-form-switch>
					  </mc-item-title-after>
				  </mc-list-view-cell>  
		  </mc-list-wrap>
		  
		  
		  <mc-buttons fill color="blue" text="退出账号" v-on:click="logout" v-if="isLogin"></mc-buttons>
      </div>
</template>


<script>

import store from '../vuex/store'
import {loginOut, setUserInfo} from '../vuex/actions' 

//=====================end============================

import login from '../views/login'
import Toast from 'vue-toast-mobile'

import mcFormSwitch from '../components/form/switch'
import mcContentTitle from '../components/content-title'

import mcButtons from '../components/button'
import mcIcon from './../components/icon'


import viewBanner from './../views/banner'

export default {
      name: 'view-center',
	  
	  data: function(){
	        return {
			        valuea: false,
			        valueb: true,
			        valuec: false,
					banner: ['','','']
			}
	  },
	  
	  computed: {
	  
	        labelTextA: function(){
			        return this.valuea ? 'Y' : 'N'
			},
	        labelTextB: function(){
			        return this.valueb ? 'Y' : 'N'
			},
	        labelTextC: function(){
			        return this.valuec ? 'Y' : 'N'
			}
	  },
	  
	  created: function(){
	        // 初始化工作, 如果从服务器端获取数据用户状态为登录, 则进行全局设置, 修改全部子组件(登录了才显示登录信息、弹窗...)状态
			
			
	  },
	  
	  ready: function(){
	  		// this.login()
			// this.$route.router.go({ name: 'swipe'});
	  },
	  
	  methods: {
			 
			 logout: function(){
					this.loginOut()
					this.setUserInfo('', '')
					
			        //this.$route.router.go({ name: 'home'});
					Toast('退出成功');
			 },
	  },
	  
	  store: store,
	  
	  vuex: {
			 actions: {
			          setUserInfo: setUserInfo,
					  loginOut: loginOut
			 },
			 getters: {
			          isLogin: state => state.isLogin
			 }
	  }, 
	  
	  
	  components: {viewBanner, mcIcon, mcButtons, mcFormSwitch, mcContentTitle}
}
</script>

<style lang="scss">

</style>