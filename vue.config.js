module.exports = {
    css: {
        loaderOptions: { // 向 CSS 相关的 loader 传递选项
            less: {
                javascriptEnabled: true
            }
        }
    },
    lintOnSave: false,
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    baseUrl: '/',
    devServer: {
        proxy: { // 配置跨域
            '/api': {
　　　　　　　　　　//要访问的跨域的api的域名
                target: 'http://open.iciba.com/dsapi/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    }
}