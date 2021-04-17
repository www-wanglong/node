var express = require('express')

var app = express()

app.engine('html', require('express-art-template'))

app.get('/', function(req, res) {
  res.render('index.html')
})

app.listen('30000', function() {
  console.log('running 30000')
})