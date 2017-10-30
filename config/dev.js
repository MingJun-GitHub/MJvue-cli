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
var webpack = require('webpack');
var webPackDevServer = require('webpack-dev-server');
var devconfig = require('./webpack.dev.config');
var compiler = webpack(devconfig);
var webconfig = require('./webconfig');
var opn = require('opn');
var yourip = require('./getip');                // 获取本地ipv4 ip
var openUrl = `${yourip}:${webconfig.dev.port}/`;
var server = new webPackDevServer(compiler, {
  hot: true,
  quiet: true,                                       // 控制台不输出打包信息
  noInfo: true,
  publicPath: webconfig.dev.outputPublicPath,
  stats: {
    colors: true
  },
  disableHostCheck: true,
  // 代理转发
  proxy: {
    '/api/*': {// 设配api/*路由
      // target: 'http://10.8.73.13:8080',           // 转发目标地址
      target: 'http://210.21.62.118:8082',           // uat转发目标地址
      // target: 'http://210.21.62.118:8083',        // 回归请求接口地址
      // target: 'http://120.132.120.185',           // 预生产地址
      // target: 'https://app.ds.cn',
      // target: 'http://10.8.75.39',                // sit转发目标地址
      pathRewrite: function (path) {                 // 过滤地址
        return path.replace('/api', '')
      },
      headers: {
        // host: 'app.ds.cn'
        host: '210.21.62.118'
        // host: '120.132.120.185'
        // host: '10.8.75.39'                        // sit
      },
      secure: false,
      bypass: function (req, res) {
        res.type('application/json')
        return res.body
      }
    }
  }
})
server.listen(webconfig.dev.port, '0.0.0.0');
// 加载多一个插件 opn， 编译完后打开链接
server.middleware.waitUntilValid(() => {
  console.log(`opening url is ${openUrl}`);
  opn(openUrl);
})




