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
process.env.NODE_ENV = 'dev'
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');                               // webpack 合并工具
var baseconfig = require('./webpack.base.config');                         // 加载通用webpack配置
var webconfig = require('./webconfig');                                    // 加载网站配置
// var HtmlWebpackPlugin = require('html-webpack-plugin');                 // 加载html处理器
var frienderrtip = require('friendly-errors-webpack-plugin');              // 新的wepback友好提示插件
var utils = require('./utils');                                             // 处理样式问题
var path = require('path')
//
// Object.keys(baseconfig.entry).forEach((name) => {
//   baseconfig.entry[name] = [
//     `webpack-dev-server/client?http://localhost:${webconfig.dev.port}/`,
//     `webpack/hot/dev-server`
//   ].concat(baseconfig.entry[name]);
// })

// baseconfig.entry = entry.returnEntry();
var eslintconfig = {
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../test')],
  options: {
    formatter: require('eslint-friendly-formatter')
  }
}
var config = webpackMerge(baseconfig, {
  // entry: entry.returnEntry(),
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: webconfig.dev.outPath,
    publicPath: webconfig.dev.outPublicPath
  },
  module:{
    rules:[eslintconfig].concat(utils.ExportsLoader())
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // 加载html模板
    ...utils.CreateTplHtml(),
    new frienderrtip()
  ]
})
// console.log('config', config.module.rules);
module.exports = config
