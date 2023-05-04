// 配置eslint，首先需要编写配置文件， （.eslintrc,.eslintrc.js,eslintrc.json区别在于配置不一样）
// 在webpack 中进行插件配置添加  EslintWebpackPlugin
module.exports = {
    //继承其他 Eslint 规则
    extends: ["eslint:recommended"],    //官方规定规则，使用集成的规范
    env: {  //允许使用node 和 浏览器 中的全局变量，不然会报错，不允许使用未被声明的内容
        node: true, //启用node中全局变量
        browser: true,//启用浏览器中的全局变量
    },
    globals: {
        // 在全局注册一个内容，不声明也可以访问
        // "$": true        //true 是可以访问和读取，false是只读，不能修改
    },
    // 解析选项，解析代码时用什么规范
    parserOptions: {
        ecmaVersion: 6, // ES 语法版本
        sourceType: "module",   //ES 模块化
        ecmaFeatures: { // ES其他特性
            jsx: true    //如果时 React 项目，就需要开启 jsx 语法
        }
    },
    // 具体检查规则
    rules: {
        // off 或 0，关闭规则
        // warn 或 1 开启规则，警告级别时warn
        // error 或 2 开启规则，警告级别时error报错
        "no-var": 2  //不能使用var 变量
    }
}

