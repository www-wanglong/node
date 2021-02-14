var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function(req, res) {
  var url = req.url
  if (url === '/') {
    fs.readFile('./resource/index.html', function(error, data) {
      if (error) {
        res.setHeader('Content-type', 'text/plain; charset=utf-8')
        res.edn('加载失败')
      } else {
        res.setHeader('Content-type', 'text/html; charset=utf-8')
        res.end(data)
      }
    })

  }
})

server.listen('30000', function() {
  console.log('Server is running...')
})