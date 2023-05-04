const path = require('path')    //node.js核心模块，专门用来处理路径问题
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//处理图片压缩
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
// css压缩
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {  //common.js的方法
    //入口
    entry: "./src/main.js", //相对路径
    //出口 
    output: {
        //所有文件的输出路径（绝对路径）
        path: undefined,    //开发环境没有输出
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
                    //处理 css less sass scss style
                    // 1.先下载css loader
                    // 2.在入口文件中引入要解析的css文件
                    {
                        test: /\.css$/, //只检测 .css结尾的文件   
                        use: [  //执行顺序从右到左，（从下到上） 先执行cssloader后styleloader
                            "style-loader", //将js中css通过创建style标签添加到html文件中生效
                            "css-loader"    //将css资源编译成commonjs的模块到js中
                        ],
                    },
                    {
                        test: /\.less$/,
                        use: ['style-loader',
                            'css-loader',
                            'less-loader'
                        ]
                    },
                    // 处理图片资源                                                                                                                                                    
                    {
                        // webpack5中内置了对图片的操作，不需要配置也会解析成功
                        // 后续是对图片的优化
                        test: /\.(png|jpe?g|gif|webp|svg)$/,
                        type: 'asset',//这个可以转base64（base64指把图片转换成字符串资源，可以不用去请求服务器）

                        parser: {
                            dataUrlCondition: {
                                //小于10kb的图片背转为base64，减少请求数量，体积会变得大一点点，大个几kb，好过去请求
                                maxSize: 10 * 1024
                            }
                        },
                        generator: {
                            //输出图片地址，
                            //[hash:10] 图片输出名称取前10位
                            filename: 'static/images/[hash:10][ext][query]'
                        }
                    },
                    {
                        // 字体图标的资源 
                        test: /\.(ttf|woff2?)$/,
                        type: "asset/resource",//这个会原封不动输出，不转base64
                        generator: {
                            //输出名称
                            filename: "static/media/[hash:10][ext][query]",
                        }
                    },
                    {
                        // 对js处理，webpack本身只能对 ES模块化 语法进行处理，不嫩编译其他语法，需要做兼容处理，规范处理
                        test: /\.js$/,
                        exclude: /node_modules/, //排除 node_modules 这些文件中的内容不处理
                        loader: 'babel-loader',
                        // 添加缓存，减少第二次的打包速度
                        options: {   //presets可以写在外部的 babel.config.js 中
                            // presets: ['@babel/preset-env']

                            cacheDirectory: true,   //开启babel缓存
                            cacheCompression: false,    //关闭缓存文件压缩（提高速度）

                            plugins: ["@babel/plugin-transform-runtime"],    //减少代码体积
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
            cacheLocation: path.resolve(__dirname, "../node_modules/.cache/eslintcache") //缓存的目录
        }),

        new CssMinimizerPlugin()

    ],
    // optimization: {
    //     minimizer: [
    //         照片图片的压缩
    //         new ImageMinimizerPlugin({
    //             minify: ImageMinimizerPlugin.squooshMinify,
    //             minimizerOptions: {
    //                 encodeOptions: {
    //                     mozjpeg: {
    //                         // That setting might be close to lossless, but it’s not guaranteed
    //                         // https://github.com/GoogleChromeLabs/squoosh/issues/85
    //                         quality: 100,
    //                     },
    //                     webp: {
    //                         lossless: 1,
    //                     },
    //                     avif: {
    //                         // https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
    //                         cqLevel: 0,
    //                     },
    //                 },
    //             },
    //         }),
    //     ]
    // },
    //开发服务器 //npm i webpack-dev-server, 让每次改变内容都去自动打包，热更新，
    devServer: {
        host: "localhost",   //启动服务器域名
        port: "3000",   // 启动端口
        open: true, //是否自动打开浏览器

        // HotModuleReplacement 热模块替换 提升打包构建速度，
        // webpack默认是，不管修改了多少内容，都要将全部模块重新编译打包，
        // 通过这个hot就可以局部修改，局部重新打包
        hot: true,  //开启HMR （默认值就是true）
        // 开发服务器是没有输出的，不会输出资源，只在内存中打包
    },
    //mode模式
    mode: 'development',
    devtool: 'cheap-module-source-map'

}

//运行时使用 npx webpack serve --config ./config/webpack.dev.js
// --config 指定我们配置文件在哪