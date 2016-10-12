<template>
	  <a class="music-cell">
			<span class="music-cell-mask" v-if="isLink"></span>
			<div class="music-cell-title">
				  <slot name="icon">
						<i v-if="icon" class="music" :class="'music-' + icon"></i>
				  </slot>
				  <slot name="title">
						<span class="music-cell-text" v-text="title"></span>
						<span v-if="label" class="music-cell-label" v-text="label"></span>
				  </slot>
			</div>
			<div class="music-cell-value">
				  <slot>
						<span v-text="value"></span>
				  </slot>
			</div>
			<i v-if="isLink" class="music-cell-allow-right"></i>
	  </a>
</template>

<script>
/**
  @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .music-xxx）
  @param {string} [title] - 标题
  @param {string} [label] - 备注信息
  @param {boolean} [is-link=false] - 可点击的链接
  @param {string} [value] - 右侧显示文字
  @param {slot} - 同 value, 会覆盖 value 属性
  @param {slot} [title] - 同 title, 会覆盖 title 属性
  @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
  <mt-cell title="标题文字" icon="back" is-link value="描述文字"></mt-cell>
  <mt-cell title="标题文字" icon="back">
    	<div slot="value">描述文字啊哈</div>
 * </mt-cell>
 */
export default {
	  name: 'mt-cell',
	
	  props: {
			icon: String,
			title: String,
			label: String,
			isLink: Boolean,
			value: String
	  }
};
</script>

<style lang="scss">
  @import "../scss/_vars.scss";
  @import "../scss/mixin.scss";

  .music-cell {
		  display: flex;
		  align-items: center;
		  box-sizing: border-box;
		  
		  color: inherit;
		  font-size: 16px;
		  line-height: 1;
		  overflow: hidden;
		  padding: 16px 10px;
		  
		  position: relative;
		  @include border-top($border-color);
		  @include border-bottom($border-color);
		  background-color: $color-white;

		  & + .music-cell::after {
				content: none;
		  }
	
		  &::before {
				left: 10px;
		  }
	
		  &:last-child::before {
				left: 0;
		  }

		   .music-cell-mask {
					&::after {
						    background-color: #000;
						    content: " ";
						    opacity: 0;
						    position: absolute;
						    left: 0;
							top: 0;
							right: 0;
							bottom: 0;
					}
			
					&:active::after {
					  		opacity: .1;
					}
		   }

		  .music-cell-text {
					vertical-align: middle;
		  }

		  .music-cell-label {
					color: #888;
					display: block;
					font-size: 14px;
					margin-top: 14px;
		  }
	
		  img {
					vertical-align: middle;
		  }
	
		  .music-cell-title {
					flex: 1;
		  }
	
		  .music-cell-value {
					color: $cell-value-color;
					display: flex;
					align-items: center;
		  }
	
		  .music-cell-allow-right {
					padding-left: 30px;
					
					&::after {
							  border: 1px solid #888;
							  border-bottom-width: 0;
							  border-left-width: 0;
							  content: " ";
							  position: absolute;
							  top: 50%;
							  right: 20px;
							  @include size(8px); 
							  transform: translateY(-50%) rotate(45deg);
					}
		  }
}
</style>
