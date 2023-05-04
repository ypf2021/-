import { initState } from "./state"

export function initMixin(Vue) {    //给Vue增加_init方法
    Vue.prototype._init = function (options) {  //用于初始化操作
        //vue vm.$options 就是获取用户的配置
        const vm = this     //这里的this指的是实例
        //我们使用的 vue 中的 $nextTick $data $attr ... 在前面加一个 $专指一类vue的实例上的属性
        vm.$options = options     //将传入的东西挂载
        //初始化状态
        initState(vm)
    }
}

