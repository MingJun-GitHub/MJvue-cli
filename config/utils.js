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
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var isprod = process.env.NODE_ENV === 'prod'
console.log('process.env.NODE_ENV', isprod);
var webconfig = require('./webconfig');                          // 加载配置文件
var outputdir = require('./entry').returnOutputDir();
console.log('outputdir', outputdir);
// 样式loader
var stylearr = [
  {
    name: 'css',
    test: /\.css$/,
    loader: 'css-loader'
  },
  {
    name: 'less',
    test: /\.less$/,
    loader: 'less-loader'
  },
  /*
  {
    name: 'sass',
    test: /\.sass$/,
    loader: 'less-loader'
  },
  {
    name: 'stylus',
    test: /\.styl$/,
    loader: 'stylus-loader'
  } */
]


/*
 * 生产环境
 * {
     test: /\.css$/,
     use: ExtractTextPlugin.extract({
       fallback: 'style-loader',
       use: ['css-loader', 'postcss-loader', 'less-loader']
     })
   }

   开发环境
   {
     test: /\.css$/,
     use: ['style-loader', 'css-loader', 'postcss-loader']
   }
 * */

// 设置样式loader
function setLoaders(obj) {
  // 默认有两个loader是必须要加入进来的 style-loader potcss-loader
  var loader = ['style-loader', 'css-loader', 'postcss-loader'];
  if (obj.name !== 'css') {
    loader.push(obj.loader)
  }
  if (isprod) {
    if (obj.name !== 'css') {
     loader.push(obj.loader);
    }
    loader.shift();
    loader =  ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: loader
    });
  }
  return loader;
}

// 暴露方法 单独设置import @import loader 方法
exports.ExportsLoader = function() {
  var options = [];
  stylearr.forEach((val) => {
    options.push({
      test: val.test,
      use: setLoaders(val)
    })
  })
  return options;
}

// 暴露方法 单独提取vue-loader样式
exports.ExportsVueOption = function () {
  var options = {
    loaders:{}
  };
  stylearr.forEach((val) => {
    options.loaders[val.name] = setLoaders(val);
  })
  return options;
}
/*
*  new HtmlWebpackPlugin(
     {
       template: 'index.html',
       filename: 'index.html',
       inject: true
       }
     )
* */
// 加载html模板跟生成html文件
exports.CreateTplHtml = function() {
  var htmlarr = [];
  var baseconfig = require('./webpack.base.config');
  Object.keys(baseconfig.entry).forEach((val) => {
    // var name = isprod ? path.resolve(__dirname, `../dist/${outputdir[val]}/${val}.html`) : `${val}.html`;
    var name = isprod ? path.resolve(__dirname, `../dist/${outputdir[val].output}/index.html`) : `../dist/${outputdir[val].output}/index.html`;
    htmlarr.push(
      new HtmlWebpackPlugin({
        title: `大圣车服`,
        inject: true,
        template: outputdir[val].tpl,
        filename: name,
        chunks: isprod ? ['vendor', 'manifest', val] : [val],
        minify: isprod ? { removeAttributeQuotes: true } : false
      })
    )
  })
  return htmlarr;
}




