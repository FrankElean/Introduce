// see http://vuejs-templates.github.io/webpack for documentation.
// proxyTable: https://github.com/chimurai/http-proxy-middleware
var path = require('path')

module.exports = {
		  build: {
					env: require('./prod.env'),
					index: path.resolve(__dirname, '../dist/index.html'),
					assetsRoot: path.resolve(__dirname, '../dist'),
					assetsSubDirectory: 'static',
					assetsPublicPath: '/',
					productionSourceMap: true
		  },
		  dev: {
					env: require('./dev.env'),
					port: 8080,
					proxyTable: {
						     // JSON数据
						     '/v2': {
								     target: 'http://localhost:80/api/data/',
									 changeOrigin: true,
									 pathRewrite: {
										    '^/v2': '' 
									 }	
							 },
							 // 图片服务器
						     '/v3/': {
								     target: 'http://localhost:80/api/assets/images/',
									 changeOrigin: true,
									 pathRewrite: {
										    '^/v3': '' 
									 }	
							 },
							 // 字体库
						     '/v4/': {
								     target: 'http://localhost:80/api/assets/fonts/',
									 changeOrigin: true,
									 pathRewrite: {
										    '^/v4': '' 
									 }	
							 }
					}
		  }
}
