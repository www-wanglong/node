function Hello() {
  var name;
  this.setName = function(thyName) {
    name = thyName;
  }

  this.sayHello = function() {
    console.log('Hello ' + name)
  }

}
// 把对象封装到模块中
module.exports = Hello;

