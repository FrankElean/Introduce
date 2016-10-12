<template>
         <mc-form-item :icon="icon" :onfoucus="foucus">
		 
				 <label class="form-label">
						
						<div class="labelTitle" v-if="labelTitle" v-text="labelTitle"></div>
						
						<input :type="type" v-model="value" v-on:focus="onfocus" v-on:blur="onblur" v-if="type!='textarea'" :name="name" autocomplete="off" :placeholder="placeholder" debounce="200">
						
						<textarea v-model="value" v-on:focus="onfocus" v-on:blur="onblur" :placeholder="placeholder" :style="{height: height+'px'}" v-if="type=='textarea'" v-el:textarea></textarea> 
				 </label>
		 </mc-form-item>
</template>


<script>
import mcFormItem from './form-item'

export default {
       name: 'mc-text-field',
	   
	   props: {
	          value: {
			         type: String,
					 default: ''
			  },
	          type: {
			         type: String,
					 default: ''
			  },
	          name: {
			         type: String,
					 default: ''
			  },
			  icon: {
			         type: String,
					 default: ''
			  },
			  labelTitle: {
			          type: String,
					  default: ''
			  },
			  placeholder: {
			          type: String,
					  default: ''
			  },
			  // 聚焦 失焦状态
			  foucus: {
			          type: Boolean,
					  default: false
			  },
			  // 设置textarea高度
			  rows: {
			          type: Number,
					  default: 2
			  }
	   },
	   data() {
	          return {
			  
			          height: 0
			  }
	   },
	   watch: {
	   
	          value: function(){
			         
					 this.resizeTextarea()
			         this.$dispatch('input::change', this)
			  }
	   },
	   
	   methods: {
	   
	          onfocus: function(){
			          this.foucus = true;
			  },
			  
	          onblur: function(){
			          this.foucus = false;
			  },   
			  resizeTextarea () {
					  let element = this.$els.textarea
					  if (!element) return
					  let lineHeight = window.getComputedStyle(element, null).getPropertyValue('line-height')
					  lineHeight = Number(lineHeight.substring(0, lineHeight.indexOf('px')))
					  let pt = window.getComputedStyle(element, null).getPropertyValue('padding-top')
					  pt = Number(pt.substring(0, pt.indexOf('px')))
					  let pb = window.getComputedStyle(element, null).getPropertyValue('padding-bottom')
					  pb = Number(pb.substring(0, pb.indexOf('px')))
					  let line = this.getLineNum(this.value)
					  
					  line = line > this.rows ? line : this.rows
					  let height = pb + pt + lineHeight * line
					  this.height = height
			  },
			  getLineNum (value, line) {
					  line = line || 0
					  line++
					  if (!value || value.indexOf('\n') === -1) return line
					  let num = value.indexOf('\n')
					  return this.getLineNum(value.substring(num + 1), line)
			  }
			  
	   },
	   
	   ready: function(){
	          this.resizeTextarea()
	   },
	   
	   components: {
	          mcFormItem
	   }
	  
}

</script>


<style lang="scss">

@import '../../scss/_vars.scss';
@import '../../scss/mixin.scss';
     
	 
     .form-label {
	        position: relative;
			display: block;
			width: 100%;
			
			@include hairline(bottom, $border-color)
			
			&::after {
			
			       perspactive: 1000;
			       backface-visibility: hidden;
				   transition-duration: 0.3s
			}
			
			&.foucs-status::after,
			&.not-empty-state::after {
			
			       background: $main;
				   @include translate3d();
			}
			
			input[type="date"],
			input[type="datetime-local"],
			input[type="email"],
			input[type="number"],
			input[type="password"],
			input[type="search"],
			input[type="tel"],
			input[type="text"],
			input[type="time"],
			input[type="url"],
			select, textarea {
					  appearance: none;
					  outline: none;
					  box-sizing: border-box;
					  border: none;
					  background: none;
					  border-radius: 0 0 0 0;
					  box-shadow: none;
					  display: block;
					  padding: 0;
					  margin: 0;
					  width: 100%;
					  height: 36px;
					  color: $color;
					  font-size: 14px;
					  font-family: inherit;
					  &::-webkit-input-placeholder {
						      color: #7e848c;
					  }
			}
	}
</style>