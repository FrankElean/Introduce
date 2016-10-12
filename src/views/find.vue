<template>
	  <div>
			
			<status v-on:click="topPopup=true"></status>
			
			<mc-popups position="top" :overlay="false" class="status-popup-top" :show.sync="topPopup">
					<p v-if="isLogin">登录状态</p><p v-else>离线状态</p>
			</mc-popups>
			
	  </div>
</template>

<script>

// Vuex 应用  ====>  在这里index.vue被作为父组件, 而Hello.vue被作为子组件
import store from '../vuex/store'
import {isLogin, setUserInfo, setToastContent, setToastShow} from '../vuex/actions' 

//=====================end============================

import status from '../views/status'
import mcPopups from '../components/popup'

export default {
      name: 'view-find',
	  data: function(){
	        return {
				 topPopup: false
			}
	  },
	  
	  watch: {
	        topPopup: function(val){
			        self = this;
			        if(val){
					        setTimeout( () => {
							        self.topPopup = false
							}, 3000)
					}
			}
	  },
	  
	  store: store,
	  
	  vuex: {
			 actions: {
			          setUserInfo: setUserInfo,
					  
					  // Toast
					  toastConent: setToastContent,
					  toastShow: setToastShow
			 },
			 getters: {
			          isLogin: (state) => state.isLogin,
			 }
	  }, 
	  
	  components: {status, mcPopups}
}
</script>

<style lang="scss">

.status-popup-top{
	  width: 100%;
	  opacity: .8;
	  height: 48px;
	  line-height: 48px;
	  display: flex;
	  align-items: center;
	  justify-content: center;
}
</style>
