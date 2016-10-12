<template>

         <div class="music-list-item-content">
		 
		         <slot></slot>
		 </div>
</template>


<script>

export default {
         name: 'mc-list-item-content'
}

</script>


<style lang="scss">

        .music-list-item-content {
		        
				display: flex;
				flex: 1;
				position: relative;
				width: 100%;
				justify-conten: center;
				align-self: stretch;
				flex-direction: column;
				
		        padding: 10px 10px 10px 0;
				
		}

</style>