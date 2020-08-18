const withCSS = require('@zeit/next-css')
const withSASS = require('@zeit/next-sass')

module.exports = {
  ...withSASS(withCSS()),
  devIndicators: {
    autoPrerender: true, // 自动渲染指标
  }
}
