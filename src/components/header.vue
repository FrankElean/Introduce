<template>

		  <header class="music-header" :class="{ 'is-fixed': fixed }">
				<div class="music-header-button is-left">
						<slot name="left"></slot>
				</div>
				
				<h1 class="music-header-title" v-text="title"></h1>
				
				<div class="music-header-button is-right">
						<slot name="right"></slot>
				</div>
		  </header>
</template>

<script>

export default {
	  name: 'mc-header',
	
	  props: {
		fixed: Boolean,
		title: String
	  }
};
</script>

<style lang="scss">

  @import "../scss/_vars.scss";
  
  .music-header {
          align-items: center;
		  background-color: $main;
		  box-sizing: border-box;
		  color: $color-white;
		  display: flex;
		  font-size: 14px;
		  height: $header-height;
		  padding: 0 10px;
		  position: relative;
		  text-align: center;
		  white-space: nowrap;
          
		  .music-header-button {
		  
		          flex: .5;
				  width: 50px;
				  .music-button {
						 background-color: transparent;
						 border: 0;
						 box-shadow: none;
						 color: inherit;
						 display: inline-block;
						 padding: 0;
						 font-size: 16px;
						 
						 &::after {
								content: none;
						 }
				   }
				   
				   &.is-left {
						text-align: left;
				   }
				   
				   &.is-right {
				  		text-align: right;
				   }
		  }
		 .music-header-title {
					flex: 1;
					white-space: nowrap;
					font-size: 16px;
					text-overflow: ellipsis;
					overflow: hidden;
					margin-top: 4px;
		 }
		 &.is-fixed {
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					/*z-index: $z-index-normal;*/
		 }
  }
</style>
