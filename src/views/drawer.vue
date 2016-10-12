<template>
			<mc-navdraw :show.sync="navShow">
			
					<div slot="header" class="nav-icon-sign">
							<img src="/v3/06.png" />
					</div>
					<div slot="header" class="nav-main-title">
							Share-Music...
					</div>
					<div slot="header" class="nav-sub-title">
							暂无简介...
					</div>
					<div slot="pic">
					
					      <div :style="{background: intorduceBackground}"></div>
					</div>
					<mc-navmenu v-for="(key, title) in titles" :title="title" :icon="icons[key]" v-if="key<3" v-on:click="clickDrawListCloseNav"></mc-navmenu>
					
					<mc-divider></mc-divider>
					
					<mc-navmenu v-for="(key, title) in titles" :title="title" :icon="icons[key]" v-on:click="clickDrawListCloseNav" v-link="{name: 'login'}" v-if="key>2"></mc-navmenu>
					
			</mc-navdraw>
		
</template>

<script>
import mcNavdraw from '../components/drawer'
import mcNavmenu from '../components/navmenu'
import mcDivider from '../components/divider'

export default {
	  name: 'view-drawer',
	  data() {
			return {
			 	 navShow: false,
				 titles: ['我的消息', '会员中心', '在线听歌', '听歌识曲', '主题换肤', '音乐闹钟', '定时停止'],
				 icons: ['notifications', 'dashboard', 'local_library', 'mic', 'filter_drama', 'alarm', 'schedule'],
				 intorduceBackground: ''
			}
	  },
	  
	  methods: {
	           clickDrawListCloseNav() {
			           this.navShow = false
			   }
	  },
	  
	  events: {
	          'show:menu': function(){
			          this.navShow = true
			  } 
	  },
	  
	  ready: function(){},
	  
	  components: {mcNavdraw, mcNavmenu, mcDivider}
};
</script>

<style lang="scss">
       .music-navdraw {
	           .nav-draw-header {
			   }
			   .nav-icon-sign{
					  display: flex;
					  width: 60px;
					  height: 60px;
					  color: #fff;
					  font-size: 40px;
					  justify-content: center;
					  align-items: center;
					  border-radius: 100%;
					  overflow: hidden;
					  
					  img {
							 width: 100%;
					  }
			   }
			   
			   .nav-main-title {
					  font-size: 16px;
					  margin-top: 10px;
			   }
			   
			   .nav-sub-title {
					  font-size: 14px;
			   }
			   
			   .nav-draw-content .music-navmenu {
			          color: #3c3c3c;
			   }
	   }
</style>

