import Vue from 'vue'
import FastClick from 'fastclick'
import Zepto from 'zepto'
import Music from './App'

import resource from 'vue-resource'

import router from './router'
import './assets/fonts/iconfont.css'; 

// Fix fastClick delay 300ms
document.addEventListener('DOMContentLoaded', function(){
	    
	    FastClick && FastClick.attach(document.body)
}, false)


Vue.use(resource);


Vue.config.debug = true

// Resource Header Set
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;
Vue.http.options.root = '/root';
Vue.http.options.xhr = {withCredentials: true}
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'


Vue.http.interceptors.push((request, next) => {
	
	    //request.method = 'POST',
		next((response) => {
			//console.log(typeof response.data)
			    let result = JSON.parse(response.data)

			    if(result.token == undefined || result.code !== 200){
					
					    throw new Error(request.url +' response exception...')
						return false;
				}
				
				return response;
		})
})

// 通过CMD方式加载文件 并在Vue全局注册过滤器
const filters = require('./filter')

Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key])	
})


router.start(Music, 'music')



// 处理retina屏幕显示效果
var classNames = []
let pixelRatio = window.devicePixelRatio || 1
classNames.push('pixel-ratio-' + Math.floor(pixelRatio))
if (pixelRatio >= 2) {
  	classNames.push('retina')
}

let html = document.getElementsByTagName('html')[0]

classNames.forEach((className) => html.classList.add(className))