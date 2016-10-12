<template>
	  <a class="music-tab-item" @click="$parent.selected = id" :class="{ 'is-selected': $parent.selected === id }">
			<div class="music-tab-item-icon"><slot name="icon"></slot></div>
			<div class="music-tab-item-label"><slot></slot></div>
	  </a>
</template>

<script>

export default {
		  name: 'mc-tab-item',
		
		  props: {
				id: ''
		  }
};
</script>

<style lang="scss">

@import '../scss/_vars.scss';

      .music-tab-item {
			  flex: 1;
			  display: block;
			  padding: 5px 0;
			  
			  .music-tab-item-icon {
			  
						width: 20px;
						height: 20px;
						margin: 0 auto 4px;
				
						&:empty {
						 	    display: none;
						}
				
						& > * {
							    display: block;
								width: 100%;
								height: 100%
						}
			  }
			  .music-tab-item-label {
			  
						color: inherit;
						font-size: 12px;
						line-height: 1;
			  }
	  }
</style>
