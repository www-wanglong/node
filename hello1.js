//node的js的实现原理
var module = {
  id: 'hello',
  exports: {

  }
}

var load = function (module) {
  function greet(name) {
    console.log('Hello,' + name + '!')
  }

  module.exports = greet

  return module.exports
}

var exported = load(module)

save(module, exported)