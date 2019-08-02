'use strict'

var fs = require('fs')

// 异步读取文本
fs.readFile('data/sample.txt', 'utf-8', function(err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
}) 

//异步读取图片
fs.readFile('data/sample.jpg',function(err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
    console.log(data.length + 'bytes')
  }
})

//同步读取文件
try {
  var data = fs.readFileSync('data/sample.txt', 'utf-8')
  console.log(data)
} catch(err) {

}

//由于node环境执行的JavaScript代码是服务器的代码，所以，绝大多数需要在服务器运行期
//反复执行业务逻辑的代码，必须要使用异步，否则，同步代码在执行时期，服务器将停止响应。因为JavaScript只用一个执行线程。