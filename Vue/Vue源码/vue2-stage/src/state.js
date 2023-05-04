import { observe } from "./observe/index";

export function initState(vm) {
    const opts = vm.$options;
    if (opts.data) {
        initData(vm)
    }

}

function proxy(vm, target, key) {
    Object.defineProperty(vm, key, {    //vm.name
        get() {
            return vm[target][key]  //vm._data.name
        },
        set(newValue) {


            vm[target][key] = newValue
        }
    })
}


function initData(vm) {
    let data = vm.$options.data // data 可能是函数
    data = typeof data === 'function' ? data.call(this) : data; //如果是函数就执行，且要改变data的指向，然后return一个对象回来

    vm._data = data //将data挂载到了vm上
    //拿到数据之后要对数据进行劫持 vue2里 采用了一个api defineProperty

    //vue2 的响应式原理， 对象属性的劫持
    observe(data)

    //将 vm._data 用 vm 来代替，写一个代理的函数
    for (let key in data) {
        proxy(vm, '_data', key)
    }
}

