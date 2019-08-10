'use strict'

var s = 'hello'

function greet(name) {
  console.log( s + ',' + name + '!')
}

/*
 * 一个模块想要对外暴露变量（函数也是变量） 可以使用module.exports = xx;
 * 一个模块要引用其他模块暴露的变量 用var ref= requier("module_name")
 * 就拿到引用额变量
 */
module.exports = greet