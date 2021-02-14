var fs = require('fs')

fs.writeFile('./hello.txt', 'hello node', function(error) {
  if (error) {
    console.log(error)
  } else {
    console.log('写入成功！！')
  }
})