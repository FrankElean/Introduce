var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
        baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
        module: {
                loaders: utils.styleLoaders()
        },
        // eval-source-map is faster for development
        devtool: '#eval-source-map',
        plugins: [
                new webpack.DefinePlugin({
                        'process.env': config.dev.env
                }),
                // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NoErrorsPlugin(),
                // https://github.com/ampedandwired/html-webpack-plugin
                new HtmlWebpackPlugin({
                        filename: 'index.html',
                        template: 'index.html',
						favicon:'src/assets/favicon.ico', //favicon路径
					//	filename:'./index.html',    //生成的html存放路径，相对于 path
					//	template:'./src/index.html',    //html模板路径
						inject:true,    //允许插件修改哪些内容，包括head与body
						// hash:true,    //为静态资源生成hash值
						minify:{    //压缩HTML文件
							removeComments:true,    //移除HTML中的注释
							collapseWhitespace:true    //删除空白符与换行符
						}
                }),
				// add third plug
				new webpack.ProvidePlugin({
					   // jQuery: "jquery",
						//$: "jquery"
						$: 'zepto'
				})
        ],
		//third source
		resolve: {
				alias: {
					'vue': 'vue/dist/vue',

					'zepto': 'zepto/dist/zepto'
				}
		}
})
