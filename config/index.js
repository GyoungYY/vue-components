'use strict'
// Template version: 1.1.3
// see http://vuejs-templates.github.io/webpack for documentation.

//node自带的文件路径工具
const path = require('path')

module.exports = {
    //production生产环境
    build: {
        //构建环境
        env: require('./prod.env'),
        //构建输出的index.html文件
        index: path.resolve(__dirname, '../dist/index.html'),
        //构建输出的静态资源路径
        assetsRoot: path.resolve(__dirname, '../dist'),
        //构建输出的二级目录
        assetsSubDirectory: 'static',
        //构建发布的根目录，可配置为资源服务器域名或CDN域名
        assetsPublicPath: '/',
        //是否开启cssSourceMap
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        //默认关闭zip，因为很多流行的静态资源主机，例如Surge、Netlify，已经为所有静态资源开启gzip
        productionGzip: false,
        //需要使用gzip压缩的文件扩展名
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        //运行build命令行时，加上一个参数，可以在构建完成后参看包分析报告
        //true为开启，false为关闭
        bundleAnalyzerReport: process.env.npm_config_report
    },

    //dev 开发环境
    dev: {
        //开发环境
        env: require('./dev.env'),
        //端口号
        port: process.env.PORT || 8888,
        //是否自动打开浏览器
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        //编译发布的根目录，可配置为资源服务器域名或CDN域名
        assetsPublicPath: '/',
        //proxyTable代理的接口（可跨域）
        proxyTable: {},
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        //默认情况下，关闭CSS Sourcemaps，因为使用相对路径会报错。
        cssSourceMap: false
    }
}
