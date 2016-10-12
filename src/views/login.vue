<template>

		  <mc-header fixed title="登录">
				  <mc-buttonv v-on:click="back" icon="back" slot="left">返回</mc-buttonv>
		  </mc-header>
		  <main class="containers">
				  <view-banner :banner="banner"></view-banner>
		          
				  <div class="form">
						  <mc-text-field type="text" name="tel" label-title="手机号码" placeholder="请输入手机号" icon="phone_iphone"></mc-text-field>
						
						  <mc-text-field type="password" name="password" label-title="密码" placeholder="请输入密码" icon="lock_outline"></mc-text-field>
				  
				  <mc-text-field type="textarea" name="suggest" label-title="问题和意见" placeholder="请输入意见反馈" icon="edit"></mc-text-field>
				  </div>
				  
				  
				  <mc-button fill ripple color="blue" text="登录" v-on:click="login"></mc-button>
				  <mc-button fill raised color="blue" text="Button"></mc-button>
				  <mc-button fill big text="Button"></mc-button>
				  
	
	
				  <mc-list-cell title="定义区间" :label="'value:' + value">
						<mc-range :value.sync=value :min.sync="min" :bar-height="2">
					
								<div slot="music-start-value" v-text="min"></div>
								<div slot="music-end-value">100</div>
						</mc-range>
				  </mc-list-cell>
				
				
				  <div class="page-picker-wrapper">
						<mc-picker :slots="yearSlot" @change="onYearChange" :visible-item-count="3"></mc-picker>
				  </div>
				
				  <p class="page-picker-desc">选择年份: {{ year }}</p>
					
		  </main>
</template>


<script>

import store from '../vuex/store'
import {isLogin, setUserInfo, setToastContent, setToastShow} from '../vuex/actions' 

//=====================end============================

import login from '../views/login'
import Toast from 'vue-toast-mobile'
import mcButton from '../components/button'

import mcHeader from '../components/header'
import mcButtonv from '../components/vbutton'

import viewBanner from './../views/banner'
import mcTextField from '../components/form/text-field'
import mcRange from '../components/range'
import mcPicker from '../components/picker'
import mcListCell from '../components/list-cell'

export default {
      name: 'view-sign',
	  data: function(){
	        return {
				   banner: [''],
				   //  表单数据
				   formData: {},
				   value : 0,
				   min : 10,
				   
				   // 日期选择
				   year: '2010',
				   yearSlot: [{
						  flex: 1,
						  values: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
						  className: 'slot1'
				   }]
			}
	  },
	  methods: {
	  
	        login: function(){
			 		/*
			        Zepto.get('/v2/login.json', {}, (response) => {
					          console.log(response.msg,response.uid, response.token)
							  
					})*/
					
					this.$http.post('/v2/login.json', this.formData).then( (response) => {
					          
							 
					 		  console.log('%c请求OK....', 'color:#0af;')
							  return JSON.parse(response.data)
							  
					}).then( (response) => {
							  if(response.code == 200) {
									 // 初始化工作, 如果从服务器端获取数据用户状态为登录, 则进行全局设置, 
									 // 修改全部子组件(登录了才显示登录信息、弹窗...)状态
									  this.isLogin()
									  this.setUserInfo(response.account.uid, response.token)
									  this.$route.router.go({ name: 'home'});
									  //window.history.back();
									  
									  this.toastConent('数据请求OK...')
									  this.toastShow(false)
							  }
							  //console.log(response)
					}, (error) => {
					
					         
					}) 
			 },
			 
			 back: function() {
			        window.history.back();
			 },
			 onYearChange(picker, values) {
					this.year = values[0];
			 }
	  },
	  events: {
	  
	          'input::change': function(field){
			   
					   
			           if(field.type == 'text' && field.name == 'tel') {
					   
			           		   this.formData.tel = field.value || ''
					   }else if(field.type == 'password' && field.name == 'password'){
					   
					           this.formData.password = field.value || ''
					   }else if(field.type == 'textarea' && field.name == 'suggest') {
					   
					           this.formData.suggest = field.value || ''
					   }else {
					           return false;
					   }
			  }
	  },
	  store: store,
	  
	  vuex: {
			 actions: {
			          isLogin: isLogin,
			          setUserInfo: setUserInfo,
					  
					  // Toast
					  toastConent: setToastContent,
					  toastShow: setToastShow
			 }
	  }, 
	  
	  
	  components: { viewBanner, mcButtonv, mcHeader, mcButton, mcRange, mcPicker, mcTextField, mcListCell}
}
</script>

<style lang="scss">

.containers{
	   
	 .page-picker-wrapper {
				background-color: #fff;
				text-align: center;
	  }

	  .page-picker-desc {
				margin: 10px 10px 10px;
	  }

	  // 这部分在调用处单独设置
	  & > .music-cell:nth-last-child(3) .music-cell-value{
			  flex: 2.5;
	  }
	  
	  textarea { line-height: 24px;}
}
</style>