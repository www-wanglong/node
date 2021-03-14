require('./a')
var fn = require('./b') // 优先从缓存加载 -- 不会重复加载 提高模块加载效率
console.log(fn)