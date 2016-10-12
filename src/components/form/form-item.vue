<template>
         <div class="music-field-item" :class="{'focus-status': onfoucus}">
		 
		           <div class="form-icon" v-if="icon">
				           <mc-icon :value="icon" :size="20"></mc-icon>
				   </div>
				   <slot></slot>
		 </div>
</template>


<script>
import mcIcon from '../icon'

export default {
       name: 'mc-field-item',
	   
	   props: {
	          
			  icon: {
			         type: String,
					 default: ''
			  },
			  onfoucus: {
			          type: Boolean,
					  default: false
			  }
	   },
	   
	   components: {
	          mcIcon
	   }
	  
}

</script>


<style lang="scss">

@import '../../scss/_vars.scss';
@import '../../scss/mixin.scss';
     
	 
     .music-field-item {
	        position: relative;
			display: flex;
			min-height: 40px;
			width: 100%;
			padding-left: 10px;
			color: $body-color;
			font-size: 14px;
			
			margin-top: 10px;
			
			&:first-child {
			       margin-top: 0;
			}
			
			&::after {
			
			       perspactive: 1000;
			       backface-visibility: hidden;
				   transition-duration: 0.3s
			}
			
			&.focus-status {
			
			          .form-label {
					            color: $main;
								@include hairline(bottom, $main)
					  }
			}
			
			
			.form-icon {
			        display: flex;
			        width: 26px;
					height: 36px;
					margin-top: 30px;
					align-items: center;
					@include flex-shrink(0);
					
					+ .form-label {
					        flex: 1;
							width: 100%;
							margin: 10px 10px 0;
					}
			}
			
	}
</style>