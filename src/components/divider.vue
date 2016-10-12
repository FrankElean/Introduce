<template>
       <div class="music-divider"></div>

</template>



<script>

export default {

}

</script>



<style lang='scss'>
       .music-divider{
	           display: block;
			   width: 100%;
			   height:0;
			   margin: 10px 0;
			   
			   &::after {
			   
			            display: block;
						content: '';
						width: 100%;
						border-top: 1px solid #eee;
						transform: scaleY(0.5);
			   }
	   }
</style>