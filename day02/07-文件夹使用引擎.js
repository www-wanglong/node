var http = require('http')
var fs = require('fs')
var template = require('art-template') //服务端渲染

// 2.创建服务
var server = http.createServer()
var wwwDri = '../www/'

server.on('request', function(req, res) {
  fs.readFile('./template.html', function(err, data) {
    if (err) {
      return res.end('404 not found')
    }
    // 如何得到 1.目录列表中的文件名和目录名
    // 2. 替换（）
    fs.readdir(wwwDri, function(err, files) {
      if (err) {
        return res.end('Can not find www dir')
      }
      var htmlStr = template.render(data.toString(), {
        files: files,
        title: '哈哈'
      })
      return res.end(htmlStr)
    })
  })

})

server.listen('30000', function() {
  console.log('Running...')
})