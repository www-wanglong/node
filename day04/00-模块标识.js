var fs = require('fs')
// 文件中操作中的相对路径可以省略./
// /根目录
fs.readFile('/data/a.txt', function(err, data) {
  if (err) {
    console.log(err)
    return console.log('读取失败')
  }
  console.log(data.toString())
})

// 在模块加载中 相对路径中的 ./ 不能省略
require('./data/foo')