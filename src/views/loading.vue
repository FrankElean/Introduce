<template>
	    <div class="guide" v-if="currentStatue">
			  <div class="con" @click="golist">
					<div class="conbox" :class="{'con-on' : showlist}" v-text:="showtext"></div>
					<div class="top" :class="{'top-on' : showlist}"></div>
					<div class="bottom" :class="{'bottom-on' : showlist}"></div>
					<div class="left" :class="{'left-on' : showlist}"></div>
					<div class="right" :class="{'right-on' : showlist}"></div>
			  </div>
		</div>
</template>
<script>
	export default {
	        name: 'Loading',
			data : function() {
					return {
						showlist : false,
						showtext : 'go',
						currentStatue: true,
					}
			},
			ready : function() {
				
			},
			methods : {
					golist : function() {
						this.showlist = true;
						this.showtext = '';
						setTimeout(() => {
						        this.currentStatue = !this.currentStatue;
								//this.$route.router.go({name : 'home'});
						}, 3000);
					}
			},
			destroyed: function(){
			        this.$el.remove()
			}
	}
</script>
<style lang="scss">
    @keyframes fadeIn {
	     0% {
		       opacity: 0.6;
			   transform: translate3d(0, -20px, 0) scale(0.8);
		 }
		 100% {
		       opacity: 0.95;
			   transform: translate3d(0, 0, 0) scale(1);
		 }
	}
  
    .guide{ position:absolute; left:0; top:0; width:100%; height:100%; background:#fff; z-index: 1000}
	
	.con {
		position: absolute;
		width: 200px;
		height: 200px;
		top: 0px;
		left: 0px;
		bottom: 0px;
		right: 0px;
		margin: auto;
		cursor: pointer;
		.conbox {
			position: absolute;
			width: 200px;
			height: 200px;
			top: 0px;
			left: 0px;
			bottom: 0px;
			right: 0px;
			margin: auto;
			background: #fff;
			color: #4fc4fe;
			font-size: 50px;
			line-height: 200px;
			text-align: center;
			border-radius: 50%;
			transition: transform 0.8s 0.2s, background 0.2s 0.8s;
			
			animation: fadeIn 1s linear 0s 1 normal backwards running;
		}
		.top {
			position: absolute;
			width: 200px;
			height: 200px;
			top: 0px;
			left: 0px;
			border-top: 1px solid #4fc4fe;
			border-left: 0px solid #4fc4fe;
			border-radius: 50%;
			z-index: 5;
			transition: width 1s, height 1s, border-left 1s, border-top 1s;
		}
		.bottom {
			position: absolute;
			width: 200px;
			height: 200px;
			bottom: 0px;
			right: 0px;
			border-bottom: 1px solid #4fc4fe;
			border-right: 0px solid #4fc4fe;
			border-radius: 50%;
			z-index: 5;
			transition: width 1s, height 1s, border-right 1s, border-bottom 1s;
		}
		.left {
			position: absolute;
			width: 200px;
			height: 200px;
			bottom: 0px;
			left: 0px;
			border-bottom: 0px solid #4fc4fe;
			border-left: 1px solid #4fc4fe;
			border-radius: 50%;
			z-index: 5;
			transition: height 1s, width 1s, border-bottom 1s, border-left 1s;
		}
		.right {
			position: absolute;
			width: 200px;
			height: 200px;
			top: 0px;
			right: 0px;
			border-top: 0px solid #4fc4fe;
			border-right: 1px solid #4fc4fe;
			border-radius: 50%;
			z-index: 5;
			transition: height 1s, width 1s, border-top 1s, border-right 1s;
		}
		.con-on {
			-webkit-transform : scale(0.1,0.1);
			background: #4fc4fe;
		}
		.top-on {
			border-top: 5px solid #4fc4fe;
			border-left: 5px solid #4fc4fe;
			width: 95px;
			height: 95px;
		}
		.bottom-on {
			border-bottom: 5px solid #4fc4fe;
			border-right: 5px solid #4fc4fe;
			width: 95px;
			height: 95px;
		}
		.left-on {
			border-bottom: 5px solid #4fc4fe;
			border-left: 5px solid #4fc4fe;
			width: 95px;
			height: 95px;
		}
		.right-on {
			border-top: 5px solid #4fc4fe;
			border-right: 5px solid #4fc4fe;
			width: 95px;
			height: 95px;
		}
	}
</style>