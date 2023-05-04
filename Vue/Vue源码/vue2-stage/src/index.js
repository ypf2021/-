import { initMixin } from './init'

//不适用 class 因为在class中添加方法，多了的话很不友好,并且构造函数可以把 方法写到别的文件中

//这里采用  构造方法的形式
function Vue(options) { // options 就是用户的选项
    this._init(options)
}

initMixin(Vue)  //扩展了 init 方法


export default Vue