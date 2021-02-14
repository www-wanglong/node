// 构建一个wen服务器
//1. 加载核心模块 http 创建编写服务器
var http = require('http')

//2. 返回一个server实例
var server = http.createServer()

// 3.服务器 对数据提供服务
// 注册request请求事件，当客户请求过来，就会触发服务器的request请求时间，然后执行第二个参数：回调处理
server.on('request', function() {
  console.log('收到请求了')
})

// 4.启动服务器 绑定端口号
server.listen(30000, function() {
  console.log('server success, http://127.0.0.1:30000')
})

