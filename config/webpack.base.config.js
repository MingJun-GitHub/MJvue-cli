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

var path = require('path');
var webpack = require('webpack');
var utils = require('./utils');                                             // 引入工具类
var entry = require('./entry')
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
  entry: entry.returnEntry(),
  // 输出
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
    chunkFilename: 'js/[name].[chunkhash].js',
    filename: 'js/[name].js',
  },
  // 打包模块配置
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
        // include: [path.resolve(__dirname, '../src')]                        // babel-loader
      },
      /*
      {                                                                  // vue-loader
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
              }),
              less: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
              })
            }
          }
        }
      },
      {                                                                  // css-loader less-loader
         test: /\.(css|less)$/,
         use: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         use: ['css-loader', 'less-loader']            // 从右到左运算
         })
       },
       */
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: utils.ExportsVueOption()
          /*
          options: {
            loaders: {
              css: ['style-loader', 'css-loader', 'postcss-loader'],
              less: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            }
          }*/
        }
      },
      {                                                                  // image
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'image/[name].[hash:7].[ext]'                          // 将图片都放入images文件夹下，[hash:7]防缓存
          }
        }]
      },
      {                                                                  // font
        test: /\.(woff?|eot|ttf|otf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]'    // 将字体放入fonts文件夹下
          }
        }]
      }
    ]
  },
  // 重命名
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@s': path.resolve(__dirname, '../src'),                         // src
      '@a': path.resolve(__dirname, '../src/assets'),                  // assest
      '@v': path.resolve(__dirname, '../src/components'),              // components
      '@css': path.resolve(__dirname, '../src/assets/css'),            // css
      '@js': path.resolve(__dirname, '../src/assest/js'),              // js
      '@img': path.resolve(__dirname, '../src/assest/image')           // image
    }
  }
}


module.exports = config


