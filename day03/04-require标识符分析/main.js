// 如果是非路径形式的模块标识
// 核心模块文件
// 第三方模块
    //优先当前目录， 上、上上直到根目录。node_modules/package.json  main属性
    //默认会加载index.js
    // 注意： 一个项目只有一个 node_modules,放到项目的根目录中
require('a')
