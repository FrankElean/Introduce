<template>
	  <div class="music-status">
			
		    <div class="music-fm">
				  <div>
						  <span class="music-icon music-equalizer"></span>
						  <span>私人FM</span>
				  </div>
				  <div>
						  <span>20</span>
						  <span>每日歌曲推荐</span>
				  </div>
				  <div>
						  <span class="music-icon music-share"></span>
						  <span>云音乐新歌榜</span>
				  </div>
		    </div>
			
			<div class="page-spinner">
		
					<!--mc-cell title="double-bounce">
						  <mc-spinner color="#0af" type="double-bounce" :size="60"></mc-spinner>
					</mc-cell-->
			</div>
			
			<div v-if="loginStatus">
			        <h2>{{ msg }}</h2>
			
					<p>ID: {{userId}}</p>
					<p>Token: {{userToken}}</p>
			</div>
			
			<div v-else>
					<p style="color:#0af; font-size: 20px;">
						    Music is a kind of Attitude
					</p>
					<!--p>
						  To get a better understanding of how this boilerplate works, check out
						  <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
						  It is also recommended to go through the docs for
						  <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
						  <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
						  If you have any issues with the setup, please file an issue at this boilerplate's
						  <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
					</p>
					<p>
						  You may also want to checkout
						  <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
						  <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
						  https://github.com/hilongjw?tab=repositories
					</p-->	
			</div>
		    <view-time :since="new Date(new Date().getTime()-100000*Math.random())" :auto-update="2"></view-time>
			
	  </div>
</template>

<script>
import store from '../vuex/store'
import viewTime from './../components/time'
//console.log(store)
export default {
	  name: 'Status',
	  
	  data () {
			return {
				  // note: changing this line won't causes changes
				  // with hot-reload because the reloaded component
				  // preserves its current state and we are modifying
				  // its initial state.
				  msg: 'Music Service...',
				  // userId: this.getUserInfo.uid, 由于user在store中为对象,视图无法状态改变
			}
	  },
	  ready: function(){
	              //console.log()
	  },
	  methods: {
				convert: function(num){  //1->A,..26->Z, 27->AA, 52->AZ, 53->BA
						var str = ''
						while(num > 0){
								
								var m = num % 26;
								if(m == 0) m = 26;
								str = (m+9).toString(36) + str;
								num = (num-m)/26;
						}
						return str.toUpperCase();
				},
				getSearch: function(href) {
						href = href || window.location.search;
						var data = {},
						reg = /([^?=&]+)(=([^&]*))?/g;
						href && href.replace(reg, function($0, $1, $2, $3) {
								data[$1] = $3;
						});
						return data;
				}
	  },
	  
	  components: {viewTime},
	  
	  vuex: {
	         getters: {
			      //loginStatus: (state) => state.isLogin,   // 只有一个参数 可以不要括号
				    
					loginStatus: state => state.isLogin,
					
					userId: state => state.user.uid,
					
					userToken: state => state.user.token
			 }
	  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../scss/_vars.scss';
	.music-status {
	        
			align-items: center;
			text-align: center;
		    margin-top: 30%;
			
			.page-spinner{
			
					margin:0 0 10px 0;
					.mint-cell {
						  text-align: left;
					}
			}
			
			h1 {
			  color: #999;
			}
	}
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
