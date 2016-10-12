<template>
       <div class="music-palying">
	   
	            <mc-header fixed title="title">
						<mc-button icon="back" slot="left">
							
						</mc-button>
						<mc-button icon="more" slot="right" @click="sheetVisible = true"></mc-button>
				</mc-header>
				
	            
	            <div class="item itema">AAAAAAAAAAAAAAAAA</div>
	            <div class="item itemb">BBBBBBBBBBBBBBBBB</div>
	            <div class="item itemc">CCCCCCCCCCCCCCCCC</div>
	            <div class="item itemd">EEEEEEEEEEEEEEEEE</div>
	   </div>
</template>

<script>

import mcHeader from '../components/header'
import mcButton from '../components/vbutton'


export default {

        name: 'view-paly',
		
		components: {mcHeader, mcButton}
}

</script>


<style lang="scss">

</style>