import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const router = new vueRouter({    
		// 当hashbang的值为true时，所有的路径都会被格式化已#!开头，
		hashbang: true,
		history: true,
		saveScrollPosition: true,
		transitionOnLoad: true
})

router.map({
	      //默认指向index
		  '/':{
				 name:'index',
				 component: (resolve) => {
					      require(['./views/home.vue'], resolve)
				 },
				 //子路由(有页底)
				 subRoutes: {
					 
					  '/home': {
							  name: 'home',
							  component: (resolve) => {
									  require(['./views/find.vue'], resolve)
							  }
					  },
					  
					 '/channel': {
							  name: 'channel',
							  component: (resolve) => {
									  require(['./views/channel.vue'], resolve)
							  }
					  },
					  
					  '/recommend': {
							  name: 'recommend',
							  component: (resolve) => {
									  require(['./views/recommend.vue'], resolve)
							  }
					  },
					  
					  '/center': {
							  name: 'center',
							  component: (resolve) => {
									  require(['./views/center.vue'], resolve)
							  }
					   }
						
				}
		  },
		  // there are sets have not footer
		  '/set':{
					name:'set',
					component: (resolve) => {
						  require(['./views/set.vue'], resolve)
					}
		  },
		  '/play':{
					name:'play',
					component: (resolve) => {
						  require(['./views/play.vue'], resolve)
					}
		  },
		  '/account':{
					name:'account',
					component: (resolve) => {
						  require(['./views/account.vue'], resolve)
					}
		  },
          
		  
		  '/login': {
			      name: 'login',
				  component: (resolve) => {
					      require(['./views/login.vue'], resolve)
				  },
				  title: 'login'
		  },	
		  
		  '/recommendDetail/:recommendId': {
			      name: 'recommendDetail',
				  component: (resolve) => {
					      require(['./views/recommend/recommend-detail.vue'], resolve)
				  },
		  },	
		  
		  '/rankDetail/:rankId': {
			      name: 'rankDetail',
				  component: (resolve) => {
					      require(['./views/recommend/rank-detail.vue'], resolve)
				  },
		  },	
		  
		  '*': {
			      name: '404',
				  component: (resolve) => {
					      require(['./views/error.vue'], resolve)
				  },
		  }	
})

router.redirect({
         '/': '/home'	
})


// route改变后页面滚动至顶部
let indexScrollTop = 0;

router.beforeEach(transition => {
         if(transition.to.path !== '/'){
			       indexScrollTop = document.body.scrollTop; 
		 }
		 document.title = transition.to.title || document.title;
		 transition.next()
})

router.afterEach(transition => {
	
         transition.to.path !== '/'	? document.body.scrollTop = 0 :
		 Vue.nextTick( () => {
			     document.body.scrollTop = indexScrollTop; 
		 }) 
})


export default router