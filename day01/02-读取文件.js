// 文件操作的API
//1. 使用require方法加载fs核心模块
var fs = require('fs')
// 2
fs.readFile('../data/a.txt', function(error, data) {
  // 存储的二进制
  if (error) {
    console.log(' 读取文件失败了！！！')
  } else {
    console.log(data.toString())
  }

})
