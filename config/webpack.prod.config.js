/**
 * Created by MingJun on 2017/9/25.
 *
 *          ┌─┐       ┌─┐
 *       ┌──┘ ┴───────┘ ┴──┐
 *       │                 │
 *       │       ───       │
 *       │  ─┬┘       └┬─  │
 *       │                 │
 *       │       ─┴─       │
 *       │                 │
 *       └───┐         ┌───┘
 *           │         │
 *           │         │
 *           │         │
 *           │         └──────────────┐
 *           │                        │
 *           │                        ├─┐
 *           │                        ┌─┘
 *           │                        │
 *           └─┐  ┐  ┌───────┬──┐  ┌──┘
 *             │ ─┤ ─┤       │ ─┤ ─┤
 *             └──┴──┘       └──┴──┘
 *
 *        神兽保佑 （神兽来源与网络） 代码无BUG!
 *
 */

process.env.NODE_ENV = 'prod';                                             // 生产环境
var webpack = require('webpack');                                          // webpack
var webpackMerge = require('webpack-merge');                               // webpack 合并工具
var baseconfig = require('./webpack.base.config');                         // 加载通用webpack配置
var webconfig = require('./webconfig');                                    // 加载网站配置
// var HtmlWebpackPlugin = require('html-webpack-plugin');                 // 加载html处理器
var ExtractTextPlugin = require('extract-text-webpack-plugin');            // 输出单独css
var CleanWebpackPlugin = require('clean-webpack-plugin');                  // 打包清除目录
var utils = require('./utils');                                             // 处理样式问题
var path = require('path');
var config = webpackMerge(baseconfig, {
  devtool: 'cheap-module-source-map',
  output: {
    path: webconfig.prod.outPath,
    publicPath: webconfig.prod.outputPublicPath,
    filename: 'js/[name]-[hash:5].js?[hash:5]'
  },
  module:{
    rules: utils.ExportsLoader()
  },
  plugins: [
    // 处理进度查看
    new webpack.ProgressPlugin(),
    // 异步处理
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 设置变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"prod"'
    }),
    // 压缩js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,            // 去除 debugger
        drop_console: true              // 去除 console
      }
    }),
    new ExtractTextPlugin({
      allChunks:true,
      filename:'css/[name]-[hash:5].css',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names:'manifest',
      chunks: ['vendor']
    }),
    // 加载html模板
    ...utils.CreateTplHtml(),
    // 清除目录再打包
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    })
  ]
})

// console.log('prod', config.module.rules[4].use);

module.exports = config
