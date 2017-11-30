'use strict'
//node自带的文件路径工具
const path = require('path')
//工具函数集合
const utils = require('./utils')
const webpack = require('webpack')
//配置文件
const config = require('../config')
//webpack配置合并插件
const merge = require('webpack-merge')
//webpack基本配置
const baseWebpackConfig = require('./webpack.base.conf')
//webpack复制文件和文件夹的插件
const CopyWebpackPlugin = require('copy-webpack-plugin')
//自动生成html并且注入到.html文件中的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//提取css的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//webpack优化压缩和优化css的插件
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

//使用生产环境
const env = config.build.env

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
    //是否开启sourceMap
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
      //编译输出的静态资源根路径
    path: config.build.assetsRoot,
      //编译输出的文件名
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
      //没有指定输出名的文件输出的文件名
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
      //definePlugin接收字符串插入到代码当中，所以你需要的话可以写上JS的字符串
      //此处，插入适当的环境
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // UglifyJs do not support ES6+, you can also use babel-minify for better treeshaking: https://github.com/babel/minify
      //压缩js
      new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // extract css into its own file
      //提取css
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
      //压缩提取出来的css
      //可以删除来自不同组件的冗余代码
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
      //将index.html作为入口，注入html代码后生成index.html文件
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        //必须通过CommonsChunkPlugin一致地处理多个chunks
      chunksSortMode: 'dependency'
    }),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // split vendor js into its own file
      //分割公共js到独立的文件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // any required modules inside node_modules are extracted to vendor
          //node_modules中的任何所需模块都提取到vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
      //将webpack runtime 和模块清单提取到独立的文件，以防止app包更新时导致公共jsd hash也更新
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // copy custom static assets
      //复制静态资源
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

//开启gzip的情况时，给webpack plugins添加compression-webpack-plugin插件
if (config.build.productionGzip) {
    //webpack压缩插件
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

    //向webpackconfig.plugins中加入下方的插件
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

//开启包分析的情况时，给webpack plugins添加webpack-bundle-analyzer插件
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
