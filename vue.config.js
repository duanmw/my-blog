var webpack = require('webpack');
module.exports = {
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },
  lintOnSave: false,

  devServer: {
    proxy: { // 配置跨域
      '/api': {
        //target要访问的跨域的api的域名
        target: 'http://open.iciba.com/dsapi/',
        // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题  
        ws: true,
        changOrigin: true,
        pathRewrite: {
          // 替换target中的请求地址，也就是说以后你在请求http://XXX这个地址的时候直接写成/api即可
          '^/api': ''
        }
      }
    },
  },
  // var webpack = require('webpack');

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js'
      }),
    ]
  }

}
