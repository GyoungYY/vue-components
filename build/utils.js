'use strict'
//node自带的文件路径工具
const path = require('path')
//配置文件
const config = require('../config')
//提取css的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * 生成静态资源的路径
 * @param _path 相对于静态资源文件夹的文件路径
 * @returns {string|*} 静态资源完整路径
 */
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
    //path.posix.join与path.join一样，不过总是以posix兼容的方式交互
  return path.posix.join(assetsSubDirectory, _path)
}

/**
 * 生成处理css的loaders配置
 * @param options 生成配置
 * option = {
 *  //是否开启sourceMap
 *  sourceMap: true,
 *  //是否提取css
 *  extract: true
 * }
 * @returns {{css, postcss, less, sass, scss, stylus, styl}} 处理css的loaders配置对象
 */
exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
    /**
     * 生成ExtractTextPlugin对象或loader字符串
     * @param loader loader名称数组
     * @param loaderOptions
     * @returns {*} ExtractTextPlugin对象或loader字符串
     */
  function generateLoaders (loader, loaderOptions) {
    const loaders = [cssLoader]
    if (loader) {
      loaders.push({
          //例如，sass?indentedSyntax
          //在?号前加上"-loader"
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
        //extract为true时，提取css
        //生产环境中，默认为true
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
/**
 * 生成style-loader的配置
 * @param options 生成配置
 * option = {
 *  //是否开启sourceMap
 *  sourceMap: true,
 *  //是否提取css
 *  extract: true
 * }
 * @returns {Array} style-loader的配置
 */
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
