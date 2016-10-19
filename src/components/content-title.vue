<template>

         <div class="music-content-title">
		         <slot></slot>
		 </div>
</template>


<script>

export default {
       name: 'mc-content-title'
}

</script>


<style>
     .music-content-title {
			margin: 14px 14px 14px;
			padding-top: 14px;
			font-weight: 500;
			text-align: left;
			color: #848484;
			
	        position: relative;
			white-space: nowrap;
			word-break: break-all;
			text-transform: capitalize;
			text-overflow: ellipsis;
			overflow: hidden;
			
			
			+ .mint-list-view, 
			+ .mint-content-block, 
			+ .mint-card {
			       margin-top: 0;
			}
			
	 }

</style>