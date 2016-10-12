<template>

	    <mc-header fixed title="个性推荐详情页">
				<mc-button v-link="'/recommend'" icon="back" slot="left">返回</mc-button>
		</mc-header>

		<div class="containers">		
		<view-banner :banner="banner"></view-banner>
		
		<div class="recommend-detail" v-if="!$loadingRouteData">
				<mc-list-cell :title="'当前ID :'+recommendId" :label="recommendName" is-link></mc-list-cell>
		<div>
		
</div></template>

<script>
var userService = {
		/**
		 * [get async data]
		 * @param  string url  [description]
		 * @param  string type [description]
		 * @param  object data [description]
		 * @return object promise   [description]
		 */
		get: function(url, type, data){
		        var deffer = Zepto.Deferred()
				var data = Zepto.extend({}, data || {})
				Zepto.ajax({url: url, type: type, data: data})
				.then(function(data){

						deffer.resolve(data.data)
				}, function(error){

					   console.log('response fail....'+error)
				})
				return deffer.promise()
		},

		set: function(id){


		}
}

import mcHeader from '../../components/header'
import mcButton from '../../components/vbutton'
import mcListCell from '../../components/list-cell'

import viewBanner from '../../views/banner'


export default {

		  name: 'recommend-detial',

		  data() {

		           return {
						   banner: ['','',''],
				           recommendId: '',
						   recommendName: '',
						   recommendPic: '',
				       //  recommendId: this.$route.query.id
						   
					   
				   }
		  },

		  ready() {
		             // console.log(this.$route.query)
		  },

		  route: {
		         // Promise & ES6 http://router.vuejs.org/zh-cn/pipeline/data.html
		         data({to: {params: {recommendId}}}) {

				          let self = this;
						  this.$set('recommendId', recommendId);

						  return Promise.all([
						          self.$http.get('/v2/recommenddetail.json', {'id': recommendId, 'pageSize': 5, 'pageNo': 1})
						  ]).then(function(response){
								   let result = response[0].data
						           if(result.code == 200){
										   // 将数据复制给resource对象
										   return {
												   recommendName: result.data.detail.name,
												   recommendPic: result.data.detail.pic
										   }
								   }
								   //console.log(result)

						  }, function(error){
						           console.log('response fail....'+error)
						  })
				 }
				 /**
				  data: ({ to: { params: { recommendId }}}) => ({

						recommendDetial: userService.get(recommendId)
				  })

				  data: function(transition){

							var id = transition.to.params.recommendId

					   	    var result = ''
							console.log(this)
							userService.get(id).then(function(data){

							        this.recommendDetial = data
						            //console.log(result)
							})
							return {
							        recommendDetial: ''
							}
				  }
				  */
		  },
		  
		  components: {mcHeader, viewBanner, mcButton, mcListCell}
}
</script>




<style lang="scss">
      .recommend-detail {
			  
	  
	   }
</style>
