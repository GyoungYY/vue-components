'use strict'
//检测npm和node版本
require('./check-versions')()

//配置文件
const config = require('../config')
//如果Node的环境无法判断当前是dev／product环境，使用config.dev.env.NODE_ENV作为当前的环境
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

//可以强制打开浏览器并跳转到指定url的插件
const opn = require('opn')
//node自带的文件路径工具
const path = require('path')
//express框架
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
//测试环境，使用的配置与生产环境的配置一样
//开发环境配置文件
const webpackConfig = require('./webpack.dev.conf')

//端口号为命令行中输入的 PORT 参数或者配置文件中的默认值
const port = process.env.PORT || config.dev.port
//配置文件中 是否自动打开浏览器
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
//配置文件中http代理配置
const proxyTable = config.dev.proxyTable

//启动 express 服务
const app = express()
//启动 webpack 编译
const compiler = webpack(webpackConfig)

//可以将编译后的文件暂存到内存中的插件
const devMiddleware = require('webpack-dev-middleware')(compiler, {
    //公共路径，与webpack的publicPath一样
    publicPath: webpackConfig.output.publicPath,
    //不打印
    quiet: true
})

//Hot-reload热重载插件
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false,
    heartbeat: 2000
})
//html-webpack-plugin 当template更改之后，强制刷新浏览器
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

// enable hot-reload and state-preserving
// compilation error display
//将Hot-reload挂载到express服务上
app.use(hotMiddleware)

// proxy api requests
//将proxyTable中的请求配置挂载到启动的express服务上
Object.keys(proxyTable).forEach(function (context) {
    let options = proxyTable[context]
    //如果options的数据类型为string，则表示只设置了url，
    //所以需要将url设置为对象中的target的值
    if (typeof options === 'string') {
        options = {target: options}
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
//使用connect-history-api-fallback匹配资源
//如果不匹配就可以重定向到指定地址
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
//将暂存到内存中的webpack编译后的文件挂载到express服务上
app.use(devMiddleware)

// serve pure static assets
//拼接static文件夹的静态资源路径
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
//静态文件服务
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
    _resolve = resolve
    _reject = reject
}
)

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() = > {
    portfinder.getPort((err, port) = > {
    if(err) {
        _reject(err)
    }
    process.env.PORT = port
var uri = 'http://localhost:' + port
console.log('> Listening at ' + uri + '\n')
// when env is testing, don't need open it
if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
}
server = app.listen(port)
_resolve()
})
})

module.exports = {
    ready: readyPromise,
    close: () = > {
    server.close()
}
}
