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
var fs = require('fs')
var EnterPath =  path.resolve(__dirname, '../src/components')  // 拷贝路径
var TemplatePath = path.resolve(__dirname, 'template')               // 这个用来存模板


/*
fs.stat(TemplatePath, function (err, st) {
  console.log('st', st)
  if (err) {
    new Error(err)
  }
})

*/

var fileexist = function (insrc, outsrc, name, callback) {
  fs.exists(path.resolve(outsrc, name), (data) => {
    if (data) {
      // 存在
      console.log('组件已经存在')
    } else {
      fs.mkdir(path.resolve(outsrc, name), ()=>{
        callback(insrc, outsrc, name)
      })
    }
  })
}

var copyfile = function (insrc, outsrc, name) {
  fs.readdir(insrc, function (err, paths) {
    if (err) {throw err}
    else {
      paths.forEach((val) => {
        var readpipe, writerpipe;
        fs.stat(path.resolve(insrc, val), function (err, st) {
          if (err) {throw err}
          else {
            if (st.isFile()) {
              // 如果是文件的话，就复制
              readpipe = fs.createReadStream(path.resolve(insrc, val))
              writerpipe = fs.createWriteStream(path.resolve(outsrc, name, val))
              readpipe.pipe(writerpipe)  // 写入流
            }
            if (st.isDirectory()) {
              // 继续创建文件
              fileexist(path.resolve(insrc, val), path.resolve(outsrc, name), val, copyfile)
            }
          }
        })
      })
    }
  })
}

var renamefile = function (insrc, name) {
  fs.readdir(insrc, function (err, paths) {
    if (err) throw err
    console.log('paths', paths);
    paths.forEach((val) => {
      fs.stat(path.resolve(insrc, val), function (err, st) {
        if (err) throw err
        if (st.isFile()) {
          // console.log('paths-----', 'a', path.resolve(insrc, val))
          fs.readFile(path.resolve(insrc, val), function (err, d) {
            if (err) {throw err}
            else {
              // console.log(d.toString().replace(/\$\{name\}/g, name))
              fs.writeFile(path.resolve(insrc, val),d.toString().replace(/\$\{name\}/g, name), function (err) {
                console.log('err', err)
                fs.
              })
            }
          })
        }
      })
    })

  })
}

// copyfile(TemplatePath, EnterPath, 'alert')

// fileexist(TemplatePath, EnterPath, 'alert', copyfile)

renamefile(path.resolve(EnterPath, 'alert'), 'alert')


// 查看是否存在目录
function isexistsDir(name) {
  fs.exists(path.resolve(EnterPath, name), (data) => {
    if (!data) {
      // 创建文件
      CopyComponents(name)
    } else {
      console.error('组件已经存在了')
    }
  })
}

// isexistsDir('alert')


function CopyComponents(name) {
  console.log('name', name)
  console.log('入口文件', EnterPath, TemplatePath)
  fs.writeFileSync(path.resolve(EnterPath, name), fs.readFileSync(TemplatePath));
}


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
