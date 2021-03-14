var foo = 'bar'

function add(x, y) {
  return x + y
}

// 只能得到给出的
// 这样做的目的是为了解决变量名冲突的问题
// exports.add = add

// 一个模块直接导出这个成员 使用module
// require加载：指执行被加载模块中的代码；得到被加载模块中的exports 导出接口对象
// exports导出：

// 后者会覆盖前者
module.exports = {
  add,
}