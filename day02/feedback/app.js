// 统一处理静态资源
var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')

var comments = [
  {
    name: '张三',
    message: '今天天气不错',
    dataTime: '2020-02-03'
  },
  {
    name: '张三2',
    message: '今天天气不错',
    dataTime: '2020-02-03'
  }
]

http
  .createServer(function(req, res) {
    var parseObj = url.parse(req.url, true)
    var pathname = parseObj.pathname
    if (pathname === '/') {
      fs.readFile('./views/index.html', function(err, data) {
        if (err) {
          console.log(err)
          return res.end('404 Not Found')
        }
        var htmlStr = template.render(data.toString(), {
          comments: comments
        })
        res.end(htmlStr)
      })
    } else if (pathname.indexOf('/public') === 0) {
      // 统一处理静态资源路径
      fs.readFile('.' + pathname, function(err, data) {
        if (err) {
          console.log(err)
          return res.end('404 Not Found')
        }
        return res.end(data)
      })
    } else if (pathname === '/post') {
      fs.readFile('./views/post.html', function(err, data) {
        if (err) {
          return res.end('404 Not Found')
        }
        return res.end(data)
      })
    } else if (pathname === '/pingLun') {
      //res.end(JSON.stringify(parseObj.query))
      // 2. 生成日期
      // 3. 重定向
      var comment = parseObj.query
      comment.dataTime = '2017-09-08'
      comments.push(comment)
      // 重定向 1.状态码 302 2.location 告诉往哪定位
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
    } else {
      fs.readFile('./views/404.html', function(err, data) {
        if (err) {
          console.log(err)
          return res.end('404 Not Found')
        }
        return res.end(data)
      })
    }
  })
  .listen('30000', function() {
    console.log('Running...')
  })