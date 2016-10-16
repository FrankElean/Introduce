<template>
	  <div class="music-navbar" :class="{ 'is-fixed': fixed }">
			  <slot></slot>
	  </div>
</template>

<script>
/**
  @param {boolean} [fixed=false] - 是否固定
  @param {} selected - 返回 item component 传入的 value
  <mt-navbar :selected.sync="selected" fixed>
		<mt-tab-item :value="['歌单', '个性推荐']">
		  		<span slot="label">个性推荐</span>
		</mt-tab-item>
  </mt-navbar>
 
 */
export default {
	  name: 'mc-navbar',
	
	  props: {
			fixed: Boolean,
			selected: 1
	  }
};
</script>

<style lang="scss">
  @import "../scss/_vars.scss";

  .music-navbar {
		  background-color: $color-white;
		  display: flex;
		  text-align: center;
		  align-items: center;
	
		  &.is-fixed {
				position: fixed;
				left: 0;
				top: $header-height;
				right: 0;
				z-index: $z-index-normal;
		  }
  }
</style>
