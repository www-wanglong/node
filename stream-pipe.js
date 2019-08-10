"use strict"

var fs = require("fs")

var rs = fs.createReadStream("./data/sample.txt")
var ws = fs.createWriteStream("./data/output1.txt")

rs.pipe(ws)