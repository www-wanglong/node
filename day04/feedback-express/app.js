var express = require('express')

var app = express()

app.use(express.static('./public/'))

// 配置使用art-template模版引擎
// 第一个参数 表示 当渲染以.art结尾的文件的时候，使用art-template模版引擎
// express-art-template是专门用来在express中把art-template整合到express中
// 虽然外面这里不需要记载art-template 但是必须安装
// 原因就在于express-art-template依赖art-template
app.engine('html', require('express-art-template'))

// 修改默认的views
//app.set('views', '目录路径')

// Express为Response相应对象提供了一个方法：render
// render方法默认是不可以使用，但是如果配置了模版引擎就可以使用了
// res.render('html模版名', {模版数据})
// 第一个参数不能写路径，默认会去项目中views目录查找该模版文件
// 也就是说Express有一个约定
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
app.get('/', function(req, res) {
  res.render('index.html', { comments: comments })
})

app.get('/admin', function(req, res) {
  res.render('admin/index.html', {
    title: '管理页面'
  })
})

app.get('/post', function(req, res) {
  res.render('post.html')
})

app.get('/pinglun', function(req, res) {
  console.log(req.query)
})

app.listen(30000, function() {
  console.log('running')
})