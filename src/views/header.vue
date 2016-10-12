<template>
		
	    <mc-header fixed :title="title">
				<mc-button icon="" slot="left" v-on:click="showLeftNav">
					 <mc-icon value="menu"></mc-icon>
				</mc-button>
				<mc-button icon="more_horiz" slot="right" v-on:click="sheetVisible = true"></mc-button>
		</mc-header>
</template>

<script>

import mcIcon from './../components/icon'
import mcHeader from '../components/header'
import mcButton from '../components/vbutton'

export default {
      name: 'view-header',
	  props: {
	  
	          title: {
			  	     default: String,
					 default: ''
			  }
	  },
	  methods: {
	          // 显示drawer
			  showLeftNav() {
			         this.$dispatch('show:menu')
			  },
	  },
	  
	  components: {mcIcon, mcHeader, mcButton}
}
</script>

<style lang="scss">


</style>
