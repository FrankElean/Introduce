<template>
       <div class="contain">
	   
	            <div class="item itema">AAAAAAAAAAAAAAAAA</div>
	            <div class="item itemb">BBBBBBBBBBBBBBBBB</div>
	            <div class="item itemc">CCCCCCCCCCCCCCCCC</div>
	            <div class="item itemd">EEEEEEEEEEEEEEEEE</div>
				
			   <div class="wrap">
			   
						<div class="left"></div>
						<div class="right"></div>	  
			     
			   </div>
	   </div>
	   
	   
</template>


<style lang="scss">

     .wrap{ 
	     color: #fff;
	     display: flex;
		 padding: 5px;
		 align-items: center;
		 position: relative;
		 .left {
		 
		          flex: 1;
				  background: red;
		 }
	     .right {
		 
				 align-items: center;
				 background: #f9f;
		 }
		 .other {
		        padding-right: 30px;
					&::after {
							  border: 1px solid #888;
							  border-bottom-width: 0;
							  border-left-width: 0;
							  content: " ";
							  position: absolute;
							  top: 50%;
							  right: 20px;
							  width:8px;
							  height:8px; 
							  transform: translateY(-50%) rotate(45deg);
					}
		 }
	 
	 }

	 .contain {background: #000; height: 100%;}
	 /**
	 .item { padding: 60px 0; width: 60px;}
	 .itema { background: red;}.itemb { background: yellow;}.itemc { background: #0af;}.itemd { background:lime;}
     .contain {
	         
	         display: flex;
			 flex-direction: row;
			 flex-wrap: wrap;
			 justify-content: space-between;
			 align-items: flex-start;
			 
			 
			 .item {
			         order: 1;
			         flex-grow: 0;
					 flex-shrink: 0;
					 flex-basis: auto;
					 word-break: break-all;
			 }
			 
	         .itema {
			 
			         order: 1;
					 flex-shrink: 0;
			 }
	 }*/
</style>