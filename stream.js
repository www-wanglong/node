'use strict'

// stream 是node.js提供的又一个仅在服务区端可用的模块 目的是支持'流'的数据结构
var fs = require("fs")

// 打开一个流
var rs = fs.createReadStream("./data/sample.txt", "utf-8")
var ws1 = fs.createWriteStream("./data/output1.txt", "utf-8")
var ws2 = fs.createWriteStream("./data/output2.txt")

// 在node.js中 流是一个对象 我们只要响应流的时间就可以了 data事件表示流的数据可以读取了
rs.on("data", function (chunk) {
  console.log("data")
  console.log(chunk)
})

ws1.write("使用stream写入")
ws1.write("end")
ws1.end()

ws2.write(new Buffer("使用stream写入二进制数据..\n", "utf-8"))
ws2.write(new Buffer("End","utf-8"))
ws2.end()



// end事件便表示这个流已经到末尾了
rs.on("end", function () {
  console.log("end")
})

rs.on("error", function (err) {
  console.log("error:" + err)
})