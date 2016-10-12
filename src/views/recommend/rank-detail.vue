<template><div>

	      <mc-header fixed title="排行榜详情页">
				<mc-button v-link="'/recommend'" icon="back" slot="left">返回</mc-button>
		  </mc-header>
		  <div class="page-swipe">

				
		  		<view-banner :banner="banner"></view-banner>
				
				<div class="rank-detail" v-if="!$loadingRouteData">
					<mc-list-cell :title="'当前ID :'+rankId" :label="rankName" is-link>

					</mc-list-cell>
				</div>
 		 </div>
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

		  name: 'rankId-detial',

		  data() {

		           return {
						   banner: ['','',''],
				           rankId: '',
						   rankName: '',
						   rankPic: '',
				       //  rankId: this.$route.query.id
				   }
		  },

		  ready() {
		            // console.log(this.$route.query)
		  },

		  route: {
		         // Promise & ES6 http://router.vuejs.org/zh-cn/pipeline/data.html
		         data({to: {params: {rankId}}}) {

				          let self = this;
						  this.$set('rankId', rankId);

						  return Promise.all([
						          self.$http.get('/v2/recommenddetail.json', {'id': rankId, 'pageSize': 5, 'pageNo': 1})
						  ]).then(function(response){
								   let result = response[0].data
						           if(result.code == 200){
										   // 将数据复制给resource对象
										   return {
												   rankName: result.data.detail.name,
												   rankPic: result.data.detail.pic
										   }
								   }
								 // console.log(result)

						  }, function(error){
						           console.log('response fail....'+error)
						  })
				 }
		  },

		  methods: {

		  },
		  
		  components: {mcHeader, viewBanner, mcButton, mcListCell}
}
</script>




<style lang="scss">

</style>
