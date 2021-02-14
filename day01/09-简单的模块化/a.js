console.log('a start')
// 在node中没有全局作用域 只有模块作用域
// 1.加载文件模块并执行代码
// 2.拿到被加载文件模块导出的接口对象
const b = require('./b')

console.log(b)