//  我们希望重写数组中的部分方法

//Array.prototype == [].__proto__
let oldArrayProto = Array.prototype; //获取数组原型

//newArrayProto.__proto__ ==  oldArrayProto == Array.prototype 。在newArrayProto上加东西，不会改变原数组的原型
export let newArrayProto = Object.create(oldArrayProto)

let methods = [ //找到数组的变异方法  (能改变原数组的方法)
    'push',     //在最后加
    'pop',      //删最后一个
    'shift',    //删第一个
    'unshift',   //在第一个加
    'reverse',
    'sort',
    'splice'    //删除或替换指定位置元素
]   //concat slice 都不会改变原数组

methods.forEach(method => {
    //arr.push(1,2,3)
    newArrayProto[method] = function (...args) {
        console.log(method, '被调用了')
        //谁调用的函数 this 指向谁
        const result = oldArrayProto[method].call(this, ...args)    //在内部调用原来的方法，并照样返回。函数的劫持，切片编程
        return result
    }
})