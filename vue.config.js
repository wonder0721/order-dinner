
module.exports = {
    // 基本路径
    publicPath: "./",
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
    devServer: {
        open: false,
        port: 8080,
        hotOnly: true,
        host: 'localhost',
        // proxy: 'http://localhost:3000'
        // 设置跨域代理
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
                }
            }
        },
        // productionSourceMap: false
    },
}