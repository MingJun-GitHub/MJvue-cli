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
// console.log('process.env.NODE_ENV', process.env.NODE_ENV)
var config = {
  plugins:[
    require('autoprefixer')           // 加前辍
  ]
}
if (process.env.NODE_ENV === 'prod') {
  config.plugins.push(require('cssnano'))
}
// 先判断是否是开发环境 开发环境不用压缩，浪费时间
module.exports = config
/*
module.exports = {
  plugins: [
    require('autoprefixer'),                // 加前辍
    require('cssnano')                      // 压缩
  ]
}
*/
