/**
建立一个文件 store.js代码如下。state定义需要状态的参数变量，mutation（状态变更）用于改变state的状态，注意vuex中是不能直接改变state中的状态的，一定要借助于mutation的事件分发。mutation的方法可以第一个参数一定是state

在子父组件中调用vuex区别的一点是父组件一定要定义store:store，子组件随意。
*/

import Vue from 'vue'
import Vuex from 'vuex'
import Store from 'store.js'

Vue.use(Vuex)

const store = window.localStorage || {
	
       getItem: Store.get,
	   setItem: Store.set,
	   removeItem: Store.remove,
	   clear: Store.clear
}


// state状态变化仅在getter中有效, 若是在data中则无法监听状态变化
const state = {
	   isLogin: store.getItem('islogin'),
	   user: {
		      uid: store.getItem('uid'),
			  token: store.getItem('token')
	   },
	   toastContent: '',
	   toastShow: false
}
// mutaions 必须同步执行
const mutations = {
	
       ISLOGIN (state){
		   
		      state.isLogin =  true
			  store.setItem('islogin', true);
	   },
	   
	   ONLOGIN (state) {
		   
		      state.isLogin = false
			  store.removeItem('islogin');
			  store.removeItem('uid');
			  store.removeItem('token');
	   },
	   
	   SETUSERINFO (state, uid, token) {
		      state.user.uid = uid
			  state.user.token = token
			  
			  // 如果uid|token被设置则set否则remove
			  uid && store.setItem('uid', uid);
			  token && store.setItem('token', token);
	   },
	   
	   SETTOASTCONTENT (state, content) {
		      state.toastContent = content; 
	   },
	   
	   SETTOASTSHOW (state, status) {
		      state.toastShow = status
	   }
}


export default new Vuex.Store({
	
       state,
	   mutations	
}) 