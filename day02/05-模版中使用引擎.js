var fs = require('fs')
var template = require('art-template')
// 1.安装
// 2.加载模块
// 3.api 使用
fs.readFile('./tpl.html', function(err, data) {
  if (err) {
    return console.log('读取失败')
  }
  // 将模板源代码编译成函数并立刻执行
  var ret = template.render(data.toString(), {
    title: '个人信息',
    name: 'Jack',
    age: 13,
    hobbies: ['code', 'game']
  })
  console.log(ret)
})
