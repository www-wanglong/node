var express = require('express')

var app = express()

// 当以 /public/开头的时候(暴露静态资源)
app.use(express.static('./public/')) //可以直接省略public
//app.use('/public', express.static('./public/'))

app.get('/', function(req, res) {
  res.send('hello world3')
})

app.listen(30000, function() {
  console.log('express app is running')
})