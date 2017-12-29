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
var nodecmd = require('./utils')
var path = require('path')
var fs = require('fs')
var EnterPath = path.resolve(__dirname, '../src/components')         // 拷贝路径
var TemplatePath = path.resolve(__dirname, 'template')               // 这个用来存模板

/**
 * 查文件与创建文件
 * @param {模板入口} insrc 
 * @param {输出位置} outsrc 
 * @param {模板名} name 
 * @param {回调} callback 
 */
var createfile = function (insrc, outsrc, name, callback) {
  fs.exists(path.resolve(outsrc, name), function (data) {
    if (data) {
      console.log('组件/视图已经存在')
      process.exit()
    } else {
      fs.mkdir(path.resolve(outsrc, name), function () {
        callback(insrc, outsrc, name)
      })
    }
  })
}
/**
 * 复制
 * @param {模板入口} insrc 
 * @param {输出位置} outsrc 
 * @param {模板名} name 
 */
function copyfile(insrc, outsrc, name) {
  fs.readdir(insrc, function (err, paths) {
    if (err) { throw err }
    else {
      paths.forEach((val) => {
        var readpipe, writerpipe  // 创建管道
        fs.stat(path.resolve(insrc, val), function (err, st) {
          if (err) { throw err }
          else {
            if (st.isFile()) {
              readpipe = fs.createReadStream(path.resolve(insrc, val))
              writerpipe = fs.createWriteStream(path.resolve(outsrc, name, val))
              readpipe.pipe(writerpipe)  // 写入管道 
            }
            if (st.isDirectory()) {
              // 继续创建文件
              createfile(path.resolve(insrc, val), path.resolve(outsrc, name), val, copyfile)
            }
          }
        })
      })
    }
  })
}

/**
 * 替换/重命名文件方法
 * @param {*入口文件} insrc 
 * @param {*模板名} name 
 */
var renamefile = function (insrc, name) {
  fs.readdir(insrc, function (err, paths) {
    if (err) throw err
    paths.forEach((val) => {
      fs.stat(path.resolve(insrc, val), function (err, st) {
        if (err) throw err
        if (st.isFile()) {
          if (!/\.(png|jpe?g|gif|svg|woff?|eot|ttf|otf)$/.test(val)) {
            fs.readFile(path.resolve(insrc, val), function (err, d) {
              if (err) { throw err }
              else {
                fs.writeFile(path.resolve(insrc, val), d.toString().replace(/\$\{name\}/g, name), function (err) {
                  fs.rename(path.resolve(insrc, val), path.resolve(insrc, `${name}.${val.split('.')[1]}`), function (err, r) {
                    if (err) throw err
                    console.log(`${name}.${val.split('.')[1]} 文件已经生成成功`)
                  })
                })
              }
            })
          }
        }
      })
    })
  })
}

// copyfile(TemplatePath, EnterPath, 'alert')

// fileexist(TemplatePath, EnterPath, 'alert', copyfile)

// renamefile(path.resolve(EnterPath, 'alert'), 'alert')
// var tmlname = ''
// nodecmd.cmd('请输入您的模板名？', (data) => {
//   if (!/^[a-zA_Z]{3,20}$/ig.test(data)) {
//     console.log('请输入3~25英文模板名')
//     nodecmd.close()  // 退出
//   } else {
//     tmlname = data
//   }
// }).cmd('是否确定创建？ (yes or no)  ', (data) => {
//   if (/(y(es)?)/ig.test(data)) {
//     createfile(TemplatePath, EnterPath, tmlname, copyfile)
//   } else {
//     console.log('已取消')
//     nodecmd.close()
//   }
// })



// console.log('NodeReadLine', NodeReadLine)
