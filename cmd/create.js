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
var path = require('path')
var fs = require('fs')
var EnterPath = path.resolve(__dirname, '../src/components')         // 拷贝路径
var TemplatePath = path.resolve(__dirname, 'template')               // 这个用来存模板
var readline = require('readline')
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
/**
 * 检查文件与生成文件
 * @param {*} insrc 模板路径 
 * @param {*} outsrc 输出路径
 * @param {*} name 生成模板名
 * @param {*} callback 回调方法
 */
function fileOption(insrc, outsrc, name, callback) {
  fs.exists(path.resolve(outsrc, name), (data) => {
    if (data) {
      console.log('组件/视图已经存在')
      process.exit()
    } else {
      fs.mkdir(path.resolve(outsrc, name), (data) => {
        // console.log('data', data)
        fs.exists(path.resolve(outsrc, name), (data) => {
          if (data) {
            console.log('文件已经创建成功')
            callback(insrc, outsrc, name)
          }
        })
      })
    }
  })
}

/**
 * 拷贝文件
 * @param {*} 模板路径 
 * @param {*} 输出路径 
 * @param {*} 生成模板名 
 */
function copyFile(insrc, outsrc, name) {
  fs.readdir(insrc, function (err, paths) {
    if (err) { throw err }
    else {
      paths.forEach((val) => {
        var readpipe, writerpipe  // 创建管道
        fs.stat(path.resolve(insrc, val), (err, st) => {
          if (err) { throw err }
          else {
            if (st.isFile()) {
              readpipe = fs.createReadStream(path.resolve(insrc, val))
              writerpipe = fs.createWriteStream(path.resolve(outsrc, name, val))
              readpipe.pipe(writerpipe)  // 写入管道
              writerpipe.on('finish', () => {
                // 读取模板与更改
                if (!/\.(png|jpe?g|gif|svg|woff?|eot|ttf|otf)$/.test(val)) {   // 如果是图片文字的话，就不用替换了
                  fs.readFile(path.resolve(outsrc, name, val), (err, data) => {
                    if (err) throw err
                    // console.log('读取到的数据', data.toString())
                    fs.writeFile(path.resolve(outsrc, name, val), data.toString().replace(/\$\{name\}/g, name), (err) => {
                      fs.rename(path.resolve(outsrc, name, val), path.resolve(outsrc, name, `${name}.${val.split('.')[1]}`), (err, r) => {
                        if (err) throw err
                        console.log(`${name}.${val.split('.')[1]} 文件已经生成成功`)
                      })
                    })
                  })
                }
              })
            }
            if (st.isDirectory()) {
              // 继续创建文件
              fileOption(path.resolve(insrc, val), path.resolve(outsrc, name), val, copyFile)
            }
          }
        })
      })
    }
  })
}

// function dealQuestion(question) {
//   return new Promise((resolve, reject) => {
//     rl.question(question, (data) => {
//       if (data) {
//         resolve(data)
//       } else {
//         reject()
//       }
//     })
//   })
// }

// fileOption(TemplatePath, EnterPath, 'alerts', copyFile)

/**
 * 简单交互系统
 */
rl.question('请输入你的模板名? ', data => {
  if (!/^[a-zA_Z]{3,20}$/ig.test(data)) {
    // 模板名不合法
    console.log('请输入3~25英文模板名')
    rl.close()
  } else {
    var name = data
    rl.question('是否确定创建？ (yes or no) ', data => {
      if (/y(es)?/ig.test(data)) {
        fileOption(TemplatePath, EnterPath, name, copyFile)
      } else{
        console.log('你已经取消了')
        rl.close()
      }
    })
  }
})
/**
 * 取消操作
 */
rl.on('close', () => {
  process.exit()
})