const readline = require('readline')


var rl = null, index = 0, questionArr = [];  // rl readline实例,   当前位置  ,  处理的方法


rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function NodeReadLine() {
  if (rl == null) {
    conosle.log('-------创建------')
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }
  return this
}

NodeReadLine.prototype.cmd = function (question, callback) {
  NodeReadLine()
  rl.prompt()
  questionArr.push({ question: question, callback: callback })
  if (questionArr.length == 1) {
    dealQuestion(this)
  }
  return this                          // jq 链式调用
}
NodeReadLine.prototype.close = function() {
  rl.on('close', function(){
    process.exit()
  })
  rl.close()
}


function dealQuestion(target) {
  // console.log('index',index,'问题长度', questionArr.length)
  if (index >= questionArr.length) {
    index = 0
    rl.close()
    questionArr.length = 0
    rl = null
    return target
  } else {
    rl.question(questionArr[index].question, (data) => {
      questionArr[index].callback(data)
      index++
      dealQuestion()
    })
  }
}

var nodecmd = new NodeReadLine()
// nodecmd.cmd('请输入您的姓名: ', (data) => {
//   console.log('您的姓名: ', data)
//   nodecmd.close()
// }).cmd('请输入您的职业: ', (data) => {
//   console.log('您的职业: ', data)
// })


module.exports = nodecmd 
