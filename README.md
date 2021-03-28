# NodeJs
`<<编写可维护的JavaScript>>`

## day02

- 服务端渲染
  + 就是在服务端使用模版引擎
  + 模版引擎最早诞生在服务端，后来才发展到了前端
- 服务端渲染和客户端渲染的区别
  + 客户端渲染不利用SEO搜索引擎优化
  + 服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的
  + 电商的商品列表采用服务端渲染

## day03

- 301 永久重定向 浏览器会记住
  + a.com b.com
  + a 浏览器不会请求a了 直接取跳转到b了
- 302 临时重定向 浏览器不记忆
  + 反之

## node - node package manager
  + 网站 npmjs.com
  + 命令行工具
   `npm --version`
   `npm install --global npm`
   + 常用命令
    `npm init`
    `npm init -y`
    `npm install`
    `npm install 包名`
    `npm install --save 包名`
    `npm uninstall 包名`
    `npm uninstall --save 包名`
  + cnpm
    `npm install --global cnpm`
    `npm install jquery --registry=https://registry.npm.taobao.org`
    `npm config set registry https://registry.npm.taobao.org`
    `npm config list`
## Express

