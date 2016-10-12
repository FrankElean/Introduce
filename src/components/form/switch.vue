<template>
         <label class="music-form-switch" :class="{'label-left': labelLeft}">
		        <input type="checkbox" v-model="value" >
		        <div class="switch-checkbox" :class="color"></div>
		        <div class="switch-label" v-if="labelText" v-text="labelText"></div>  
		 </label>
</template>


<script>

export default {
       name: 'mc-switch',
	   
	   props: {
	          value: {
			         type: Boolean,
					 default: false
			  },
			  color: {
			         type: String,
					 default: 'red'
			  },
			  labelLeft: {
			         type: Boolean,
					 default: false
			  },
			  labelText: {
			          type: String,
					  default: ''
			  }
	   },
	   
	   watch: {
	          value: function(){
			  
			         this.$emit('input:status:change', this.value)
			  }
	   },
	   
	   computed: {
	          
	   },
	  
	   events: {
	            'input:status:change': function(value){
				         // input状态改变时todo.... 提示 HTTP
						 //console.log(value)
				}
	   }
}

</script>


<style lang="scss" scoped>

@import '../../scss/_vars.scss';
@import '../../scss/mixin.scss';
     
	 
     .music-form-switch {
	        position: relative;
			display: inline-block;
			height: 36px;
			line-height: 36px;
			margin-right: 32px;
			color: $body-color;
			
			input[type='checkbox'] {
			
			        display: none;
					opacity: 0;
					&:checked {
					       
						   + .switch-checkbox.red {
						   
						           background: rgba(red($red), green($red), blue($red), 0.5);
								   
								   &:after {
								          transform: translate3d(16px, 0, 0);
										  background: $red
								   }
						   }
						   + .switch-checkbox.blue {
						   
						           background: rgba(red($blue), green($blue), blue($blue), 0.5);
								   
								   &:after {
								          transform: translate3d(16px, 0, 0);
										  background: $blue
								   }
						   }
						   + .switch-checkbox.yellow {
						   
						           background: rgba(red(yellow), green(yellow), blue(yellow), 0.5);
								   
								   &:after {
								          transform: translate3d(16px, 0, 0);
										  background: yellow
								   }
						   }
					}
			}
			
			* { pointer-events: none;}
			
			&.label-left {
			
			        .switch-checkbox {
					        order: 1;
					}
					
					.switch-label {
					        margin-left: 8px;
							margin-right: 0;
					}
			}
			
			&:last-child {
			        margin-right: 0;
			}
	 }
	 
	 .switch-lable {
	        font-size: 16px;
			color: $color;
			margin-left: auto;
			margin-right: 8px;
	 }
	 
	 .switch-checkbox {
	        width: 36px;
			height: 14px;
			border-radius: 36px;
			background: #b0afaf;
			z-index: 0;
			margin: 0;
			padding: 0;
			appearance: none;
			border: none;
			cursor: pointer;
			position: relative;
			backface-visibility: hidden;
			transfrom: all 300ms;
			transition: translate(0,0,0);
			/** 不能设置为block */
			&:after {
					content: " ";
					width:20px;
					height:20px;
					border-radius: 20px;
					background: #fff;
					position: absolute;
					z-index: 2;
					top:-3px;
					left: 0;
					box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
					backface-visibility: hidden;
					transition: transform 300ms;
					transform: translate3d(0,0,0);
			}
			
	 }
	 
	 .switch-label, .switch-checkbox {
	        display: inline-block;
			vertical-align: middle;
	 }

</style>