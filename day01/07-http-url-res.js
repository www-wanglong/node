var http = require('http')

var server = http.createServer()

server.on('request', function(request, response) {
  //response.write('hello')
  //response.end('hello')
  // 根据不同的路径发送 返回不同的
  var url = request.url //
  // if (url === '/') {
  //   response.end('index page')
  // } else if (url === 'login'){
  //   response.end('login page')
  // } else {
  //   response.end('404')
  // }
  var products = [
    {
      name: 'long',
      age: 2
    }
  ]
  if (url === '/products') {
    response.end(JSON.stringify(products))
  }
})

server.listen(30000, function() {
  console.log('启动成功了')
})