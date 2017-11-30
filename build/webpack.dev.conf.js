'use strict'
//工具函数集合
const utils = require('./utils')
const webpack = require('webpack')
//配置文件
const config = require('../config')
//webpack配置合并插件
const merge = require('webpack-merge')
//webpack基本配置
const baseWebpackConfig = require('./webpack.base.conf')
//自动生成html并且注入到.html文件中的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//webpack错误信息提示插件
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

//引入js-xlsx的两个文件jszip、xlsx
const path = require('path')
const ROOT = path.dirname(__dirname);
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

// add hot-reload related code to entry chunks
//将Hot-reload热重载的客户端代码添加到webpack.base.conf的对应entry中，一起打包
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
      //styleLoaders
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
    //最新的配置为cheap-module-eval-source-map，虽然cheap-module-eval-source-map更快，但它的定位不准确
    //所以，可以换成#eval-source-map
  devtool: '#cheap-module-eval-source-map',
  plugins: [
      //definePlugin接收字符串插入到代码当中，所以你需要的话可以写上JS的字符串
      //此处，插入适当的环境
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
      //HotModule插件在页面进行变更的时候只会重绘对应的页面模块，不会重绘整个html文件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin

      //引入js-xlsx的两个文件jszip、xlsx
      new CopyWebpackPlugin([{
          from: path.join(ROOT, 'node_modules/xlsx/dist/jszip.js'),
          to: config.build.assetsRoot
      },
          {
              from: path.join(ROOT, 'node_modules/xlsx/dist/xlsx.js'),
              to: config.build.assetsRoot
          }
      ]),
      new HtmlWebpackIncludeAssetsPlugin({
          assets: ['jszip.js', 'xlsx.js'],
          append: false,
      }),
      //将index.html作为入口，注入html代码后生成index.html文件
      new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
      //webpack错误信息提示插件
    new FriendlyErrorsPlugin()
  ]
})
