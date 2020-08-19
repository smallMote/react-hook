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

#### 路由
文件位于`pages`下，文件夹或文件名为路由名称。若有文件夹，文件夹下有`index.js`文件，则会自动索引到此文件，若没有需要添加到路由名称后。

###### 路由跳转
- 可使用`Link`标签的方式跳转
    ```js
    import { Link } from 'next/link'
    
    export default () => {
      return <Link path="/about">About</Link>
    }
    ```

- 可使用js函数跳转
    ```js
    import { useRouter } from 'next/router'
    
    const router = useRouter() // 特别地，该函数需要在组件函数内才能使用
    function jump() {
      router.push(item.path)
    }
    ```

相关文档：[next路由文档](https://www.nextjs.cn/docs/api-reference/next/router)
