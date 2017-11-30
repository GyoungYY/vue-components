'use strict'
//工具函数集合
const utils = require('./utils')
//配置文件
const config = require('../config')
//是否为生产环境
const isProduction = process.env.NODE_ENV === 'production'

//vue-loader的配置
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
      //提取出独立的文件
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
