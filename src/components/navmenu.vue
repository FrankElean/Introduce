<template>

       <!--为 DOM 元素注册一个索引，方便通过所属实例的 $els 访问这个元素。-->
	   
       <a class="music-navmenu" v-link="" href="javscript:;" v-el:menu>
	   
	           <div class="nav-menu-icon">
			          <mc-icon :value="icon" :size="20" :color="iconColor"></mc-icon>
			   </div>
	           <div class="nav-menu-content">
			          <div class="nav-menu-title" v-text="title"></div>
			          <div class="nav-menu-after"></div>
			   </div>
			   
			   <mc-ripple color="rgba(0,0,0,.1)" v-bind:trigger="$els.menu"></mc-ripple>
	   </a>

</template>



<script>
import mcIcon from './icon'
import mcRipple from './ripple'

export default {
          
		 name: 'mc-navmenu',
		 
		 props: {
		        icon: {
				        type: String,
						default: ''
				},
				title: {
				        type: String,
						default: ''
				},
				after: {
				        type: String,
						default: ''
				}
		 },
		 
		 data (){
		        return {
				        iconColor: '#3fc1fd'
				}
		 },
		 
		 methods: {
		 
		 
		 },
		 
		 components: { 
		 
		         mcIcon, 
				 mcRipple 
		}

}

</script>



<style lang='scss' scoped>
@import '../scss/_vars.scss';
@import '../scss/mixin.scss';

      .music-navmenu {
	  
	         display: flex;
			 width: 100%;
			 height: 48px;
			 padding: 10px 12px;
			 position: relative;
			 align-items: center;
			 color: $menu-font-color;
			 
			 .nav-menu-icon {
			        display: flex;
			        width: 30px;
					align-items: center;  
			 }
			 
			 .nav-menu-content {
			        display: flex;
					flex: 1;
					justify-content: space-between;
					align-items: center;
			 
			        .nav-menu-title {
					       font-size: $menu-font-size;
						   @include font-shrink(10);
					}
					.nav-menu-after {
					       margin-left: auto;
						   font-size: 14px;
					}
			 }
	  }
</style>