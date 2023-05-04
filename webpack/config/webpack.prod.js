const path = require('path')    //node.js核心模块，专门用来处理路径问题
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// npm mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// css压缩
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {  //common.js的方法
    //入口
    entry: "./src/main.js", //相对路径
    //出口 
    output: {
        //所有文件的输出路径（绝对路径）
        path: path.resolve(__dirname, "../dist"),
        //入口文件输出的文件名
        filename: 'static/js/bound.js',
        clean: true, //在打包前，将以前打包的目录清空掉
    },
    //loader加载器
    module: {
        rules: [
            //loader的配置，test，use
            {
                oneOf: [
                    {   //css单独处理插件 npm i mini-css-extract-plugin -D 
                        test: /\.css$/,
                        use: [  //执行顺序从右到左，（从下到上）
                            MiniCssExtractPlugin.loader,    //替换style-loader,提取css成单独文件, 原来的styleloader是把css打包到js文件中，js加载时，创建一个style标签，会造成闪屏
                            "css-loader",    //将css资源编译成commonjs的模块到js中
                            {   //用来解决css兼容性问题
                                loader: "postcss-loader",
                                options: {
                                    postcssOptions: {
                                        plugins: [
                                            "postcss-preset-env",   //能解决大多数兼容性问题
                                        ]
                                    }
                                }
                            }
                        ],
                    },
                    {
                        test: /\.less$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            {
                                loader: "postcss-loader",
                                options: {
                                    postcssOptions: {
                                        plugins: [
                                            "postcss-preset-env",   //能解决大多数兼容性问题
                                        ]
                                    }
                                }
                            },
                            'less-loader'
                        ]
                    },
                    {
                        test: /\.(png|jpe?g|gif|webp|svg)$/,
                        type: 'asset',//这个可以转base64
                        parser: {
                            dataUrlCondition: {
                                //小于10kb的图片背转为base64，减少请求数量，体积会变得大一点点
                                maxSize: 10 * 1024 // 10kb
                            }
                        },
                        generator: {
                            // [hash]:表示生成的唯一对应的图片名称
                            //输出图片地址，
                            //[hash:10] 图片输出名称取前10位
                            filename: 'static/images/[hash:10][ext][query]'
                        }
                    },
                    {
                        test: /\.(ttf|woff2?)$/,
                        type: "asset/resource",//这个会原封不动输出，不转base64
                        generator: {
                            //输出名称
                            filename: "static/media/[hash:10][ext][query]",
                        }
                    },
                    {
                        // 首先药下载很多loader， babel-loader,@babel/core ,@babel/preset-env
                        test: /\.js$/,
                        exclude: /node_modules/, //排除 node_modules 这些文件中的内容不处理
                        loader: 'babel-loader',
                        options: {   //presets可以写在外部的 bable.config.js 中
                            // presets: ['@babel/preset-env']
                            cacheDirectory: true,   //开启bable缓存
                            cacheCompression: false,    //关闭缓存文件压缩（提高速度）
                            // npm i @babel/plugin-transform-runtime -D
                            // 将babeld的辅助代码设置成引用方法，而不是注入方法
                            plugins: ["@babel/plugin-transform-runtime"] //减少代码体积
                        }
                    }
                ]
            }
        ]
    },
    //plugin插件
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, "../src"), //context : 进行eslint验证的目录
            exclude: "node_modules",
            cache: true,
            cacheLocation: path.resolve(__dirname, "../node_modules/.cache/eslintcache")
        }),
        new HtmlWebpackPlugin({
            //模板：以public/index.html文件为模板创建新的html文件
            //新的html的特点： 1.结构和原来一样 2. 自动引入打包输出的资源
            template: path.resolve(__dirname, "../public/index.html"),
            exclude: "node_modules", //默认值
            cache: true,   //开启缓存
            cacheLoaction: path.resolve(__dirname, "../node_modules/.cache/eslintcache") //缓存的目录
        }),
        // new HtmlWebpackPlugin({
        //     //模板：以public/index.html文件为模板创建新的html文件
        //     //新的html的特点： 1.结构和原来一样 2. 自动引入打包输出的资源
        //     template: path.resolve(__dirname, "../public/index.html")
        // }),
        new MiniCssExtractPlugin({
            filename: 'static/css/main.css'
        }),
        new CssMinimizerPlugin()
    ],

    //开发服务器 //npm i webpack-dev-server //生产模式不需要 devServer,只需要打包生成文件

    //mode模式
    mode: "production",

    // source-map 会产出对应的可以看得懂的 对应代码 .map文件 
    // 通过devtool配置
    // 开发模式一般用 cheap-module-source-map   打包编译快，只包含行映射，没有列映射
    // 生产模式一般用 source-map    打包编译速度慢，包含行列映射
    // 
    devtool: 'source-map'
}

//运行时使用 npx webpack serve --config ./config/webpack.prod.js ( 线上运行 )
// --config 指定我们配置文件在哪

// webpack --config ./config/webpack.prod.js 打包生成文件