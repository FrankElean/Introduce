<template>
	  <a class="music-nav-item" v-on:click="tabClick(id)" :class="{'is-selected': $parent.selected === id }">
			<div class="music-nav-item-label"><slot></slot></div>
	  </a>
</template>

<script>

export default {
		  name: 'mc-nav-item',
		
		  props: {
				  id: '',
				  selected: ''
		  },
		  methods: {
		  
		          tabClick: function(id){
				  
				          this.$parent.selected = id
				  }
		  }
};
</script>

<style lang="scss">

@import '../scss/_vars.scss';

      .music-nav-item {
			  flex: 1;
			  display: block;
			  
			  padding: 10px 0 10px 0;
			
			  color:  $nav-font-color;
		      box-sizing: border-box;
		
			  &.is-selected {
			  		   padding: 12px 0 10px 0;
					   border-bottom: 2px solid $nav-selected-fcolor;
					   color: $nav-selected-fcolor;	
			  }
			  .music-nav-item-label {
			  
						color: inherit;
						font-size: 14px;
						line-height: 1;
			  }
	  }
</style>
