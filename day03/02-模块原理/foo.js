// 在node中，每个模块内部都有一个自己的module对象
// 该module对象中，又又一个成员叫： exports
// m

// var module = {
//   exports: {

//   }
// }
// 谁require我，得到module.exports
// 默认在代码的最后有一句return module.exports

module.exports.foo = 'foo'
console.log(exports === module.exports)
// exports和module.exports是一个引用
// 为了简化操作 专门提供了一个变量 var exports = module.exports

// 引用类型赋值赋值的地址引用
exports = 'hello'

