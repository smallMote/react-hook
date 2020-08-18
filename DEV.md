# 开发记录

#### 样式引入
在next中使用css以及预处理语言需要插件的支持：
- [@zeit/next-css](@zeit/next-css)
- [@zeit/next-sass](@zeit/next-sass)
- [@zeit/next-less](@zeit/next-less)
- [@zeit/next-stylus](@zeit/next-stylus)

并在`next.config.js`进行配置，个语言配置也相同
```js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  // other options
})
```
若想共用css和一门预处理语言，配置的时候需要嵌套配置
```js
const withCSS = require('@zeit/next-css')
const withSASS = require('@zeit/next-sass')

module.exports = withSASS(withCSS())
```
