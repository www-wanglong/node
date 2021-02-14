console.log('b.js执行')
var foo = 'b'

exports.foo = foo
exports.add = function(x, y) {
  return x + y
}