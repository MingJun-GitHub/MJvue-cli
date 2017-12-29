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
// 拷贝文件
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


// console.log('data')
fileOption(TemplatePath, EnterPath, 'alerts', copyFile)


