<template>
	  <button class="music-button" :class="['music-button--' + size, 'music-button--' + type,  { 'is-disabled': disabled,  'is-plain': plain }]" @touchstart="handleClick">
				<span class="music-button-icon" v-if="icon || _slotContents.icon">
					  <slot name="icon">
							<i v-if="icon" class="music-icon" :class="'music-' + icon"></i>
					  </slot>
				</span>
				<label class="music-button-text"><slot></slot></label>
	  </button>
</template>

<script>

export default {
	  name: 'mc-button',
	
	  props: {
			icon: String,
			disabled: Boolean,
			plain: Boolean,
			type: {
				  type: String,
				  default: 'default',
				  validator(value) {
						return ['default', 'danger', 'primary'].indexOf(value) > -1;
				  }
			},
			size: {
				  type: String,
				  default: 'normal',
				  validator(value) {
						return ['small', 'normal', 'large'].indexOf(value) > -1;
				  }
			}
	  },
	
	  methods: {
			handleClick($event) {
				  if (this.disabled) {
						$event.preventDefault();
						$event.stopPropagation();
				  }
			}
	  }
};
</script>


<style lang="scss" >

  @import "../scss/_vars.scss";
  .music-button {
		  appearance: none;
		  border-radius: 4px;
		  border: 0;
		  box-sizing: border-box;
		  color: inherit;
		  display: block;
		  font-size: 18px;
		  height: 40px;
		  outline: 0;
		  overflow: hidden;
		  position: relative;
		  text-align: center;
		  
		  &::after {
					background-color: #000;
					content: " ";
					opacity: 0;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					position: absolute;
		  }
		  &:not(.is-disabled):active::after {
					opacity: .4;
		  }
		    
		  &.music-button--default {
				  color: $button-default-color;
				  background-color: $button-default-background-color;
				  box-shadow: $button-default-box-shadow;
				  &.is-plain {
						border: 1px solid $button-default-plain-color;
						background-color: transparent;
						box-shadow: none;
						color: $button-default-plain-color;
				 }
		  }
		  
		  &.music-button--primary {
				color: $button-primary-color;
				background-color: $button-primary-background-color;
		
				&.is-plain {
						  border: 1px solid $button-primary-background-color;
						  background-color: transparent;
						  color: $button-primary-background-color;
				}
		  }
		  &.music-button--danger {
				color: $button-danger-color;
				background-color: $button-danger-background-color;
		
				&.is-plain {
						  border: 1px solid $button-danger-background-color;
						  background-color: transparent;
						  color: $button-danger-background-color;
				}
		  }

		  &.music-button--large {
				display: block;
				width: 100%;
		  }
	
		  &.music-button--normal {
				display: inline-block;
				padding: 0 12px;
		  }
	
		  &.music-button--small {
				display: inline-block;
				font-size: 14px;
				padding: 0 12px;
				height: 33px;
		  }
		  
		  &.is-disabled {
				opacity: .6;
		  }
		  
		  .music-button-icon {
					vertical-align: middle;
					display: inline-block;
		  }
		  .music-button-text {
		            position: relative;
					top: 2px;
		  }
  }

</style>
