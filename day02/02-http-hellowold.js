var http = require('http')
var fs = require('fs')

// 2.创建服务
var server = http.createServer()
var wwwDri = '../www/'

server.on('request', function(req, res) {
  var url = req.url
  var filePath = 'index.html'
  if (filePath !== '/') {
    filePath = url
  }
  console.log(url)
  fs.readFile(wwwDri + url, function(err, data) {
    if (err) {
      return res.end('404 not found')
    }
    return res.end(data)
  })

  // if (url === '/') {
  //   fs.readFile(wwwDri + 'index.html', function(err, data) {
  //     if (err) {
  //       return res.end('404 not found')
  //     }
  //     res.end(data)
  //   })
  // } else if (url === '/apple/login.html') {
  //   fs.readFile(wwwDri + 'apple/login.html', function(err, data) {
  //     if (err) {
  //       return res.end('404 not found')
  //     }
  //     res.end(data)
  //   })
  // } else {
  //   res.end('404')
  // }
})

server.listen('30000', function() {
  console.log('Running...')
})