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

/*
* {
*    name: '',       // 模块名
*    path: '',       // 路径
*    output: ''      // 输出位置
*    tpl: ''         // 选择模板
* }
*
* */
var path = require('path');
var webconfig = require('./webconfig');
// 入口文件配置
var entry = [
  {
    name: 'index',
    path: path.resolve(__dirname, '../src/main.js'),
    output: '',
    tpl: 'src/tpl/index.html'            // 以根目录为准
  }
  // ,{
  //   name: 'page2',
  //   path: path.resolve(__dirname, '../src/views/page2.js'),
  //   output:'page2',
  //   tpl:'index.html'
  // }
]
// 格式 'index':'......js',
// exports.returnEntry =
exports.returnEntry = function() {
  var entrys = {};
  if (process.env.NODE_ENV === 'dev') {
    entry.forEach((val) => {
      entrys[val.name] = [
        `webpack-dev-server/client?http://localhost:${webconfig.dev.port}/`,
        `webpack/hot/dev-server`,
        val.path
      ]
    })
  } else {
    entry.forEach((val) => {
      entrys[val.name] = ['babel-polyfill', val.path]
      // entrys[val.name] = val.path
    })
    // entrys['vendors'] = ['babel-polyfill', 'vue', 'vue-router']
  }
  return entrys;
}

// 打包输出目录
exports.returnOutputDir = function () {
  var outputs = {}
  entry.forEach((val) => {
    outputs[val.name] = {
      tpl: val.tpl,
      output: val.output
    }
  })
  return outputs
}

