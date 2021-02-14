var http = require('http')
var fs = require('fs')

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
      var content = ''
      if (err) {
        return res.end('Can not find www dir')
      }
      files.forEach(function(item) {
        content += `
          <li><a href=".git/">${item}/</a></li>
        `
      })

      data = data.toString()
      data = data.replace('list', content)
      return res.end(data)
    })
  })

})

server.listen('30000', function() {
  console.log('Running...')
})