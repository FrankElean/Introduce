<template>
	  <div class="music-tabbar" :class="{'is-fixed': fixed}">
			    <slot></slot>
	  </div>
</template>

<script>
/**
  @desc 底部 tab，依赖 tab-item
  @param {boolean} [fixed=false] - 固定底部
  @param {} selected - 返回 item component 传入的 id
  <mt-tabbar :selected.sync="selected">
		<mt-tab-item id="发现">
		  <img slot="icon" src="http://placehold.it/100x100">
		  <span slot="label">发现</span>
		</mt-tab-item>
  </mt-tabbar>
 
  <mt-tabbar :selected.sync="selected" fixed>
		<mt-tab-item :id="['发现', '推荐']">
			  <img slot="icon" src="http://placehold.it/100x100">
			  <span slot="label">发现</span>
		</mt-tab-item>
  </mt-tabbar>
*/
export default {
	  name: 'mc-tabbar',
	
	  props: {
			fixed: Boolean,
			selected: {}
	  }
};
</script>

<style lang="scss">
@import '../scss/_vars.scss';
@import '../scss/mixin.scss';

      .music-tabbar {
			  @include border-top($color-grey);
			  background: $tabbar-bcolor;
			  display: flex;
			  position: absolute;
			  left: 0;
			  right: 0;
			  bottom: 0;
			  text-align: center;

			  &.fixed {
						position: fixed;
						left: 0;
						right: 0;
						bottom: 0;
						z-index: $z-index-normal;
			  }

			  > .music-tab-item.is-selected {
						background: $tabbar-selected-bcolor;
						color: $tabbar-selected-fcolor;
			  }
       }
    
</style>
