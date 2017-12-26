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
// var NodeReadLine = require('./utils')


var nodecmd = require('./utils')
var path = require('path')
var EnterPath =  path.resolve(__dirname, '../src/entry/components')  // 拷贝路径
var TemplatePath = path.resolve(__dirname, 'template')               // 这个用来存模板

console.log('入口文件', EnterPath, TemplatePath)

/*
nodecmd.cmd('请输入您的模板名？)  ', (data) => {
  if (/^[a-zA_Z]{3,20}$/ig.test(data)) {
    console.log('请输入正入3~25英文模板名....')
    nodecmd.close()  // 退出
  }
}).cmd('是否确定创建？ (yes or no)  ', (data) => {
  if (/(y|yes)/ig.test(data)) {
    // 开始调用创建

  }
})

*/

// console.log('NodeReadLine', NodeReadLine)
