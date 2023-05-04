const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    // entry: "./"  //只有一个入口文件按，单入口
    entry: {
        //有多个入口文件，多入口
        main: "./src/main.js",
        app: "./src/app.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",    //webpack的明明方式，以[name]以文件名自己命名
        clean: true, //在打包前，将以前打包的目录清空掉

    },
    module: {
        rules: [
            {
                oneOf: [
                    {

                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        })
    ],
    // devServer: {
    //     host: "localhost",   //启动服务器域名
    //     port: "3000",   // 启动端口
    //     open: true, //是否自动打开浏览器
    //     hot: true,  //开启HMR （默认值就是true）
    // },
    optimization: { //优化
        splitChunks: {  //分块
            chunks: 'all',  //对所有模块都进分割
            //以下都是默认值
            // minSize: 20000,      //分割代码最小的大小20kb
            // minRemainingSize: 0, 
            // minChunks: 1,
            // maxAsyncRequests: 30,
            // maxInitialRequests: 30,
            // enforceSizeThreshold: 50000,
            cacheGroups: {
                // defaultVendors: {
                //     test: /[\\/]node_modules[\\/]/,
                //     priority: -10,
                //     reuseExistingChunk: true,
                // },
                default: {
                    minSize: 0,
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    mode: "production",
    // devtool: 'cheap-module-source-map'
}