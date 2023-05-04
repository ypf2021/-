import { newArrayProto } from './array'
class Observer {
    constructor(data) {
        //Object.defineProperty 只能劫持已经存在的属性 （vue2里面会为此单独写一些api $set $delete）

        if (Array.isArray(data)) {
            //这里我们可以重写数组中的方法 7个变异方法 这几个方法是可以修改数组本身的
            //并对数组中的引用类型进行劫持

            //保留原数组特性，并且可以重写部分方法。通过重写方法对这些方法进行监听。
            data.__proto__ = newArrayProto
            this.observeArray(data)
        } else {
            this.walk(data)
        }

    }
    walk(data) {    //循环对象，对属性依次劫持
        // "重新定义"属性
        Object.keys(data).forEach(key => defineReactive(data, key, data[key]))
    }

    observeArray(array) {    //观测数组
        array.forEach(item => {
            observe(item)
        })
    }

}

export function defineReactive(target, key, value) {    //闭包  属性劫持
    observe(value);  //递归进行劫持，直到劫持的不是对象位置 （33行）    //对象里有对象的情况，或者对数组里的内容进行检测
    Object.defineProperty(target, key, {
        get() { //取值时执行get
            console.log('getName', key)

            return value;
        },

        set(newValue) { //赋值时执行set
            if (newValue == value) return;
            //在设置值的时候还需要进行劫持，绑定。
            observe(newValue)
            value = newValue
        }
    })
}


export function observe(data) {
    //对这个对象进行劫持
    if (typeof data !== 'object' || data == null) {
        return; //只对对象进行劫持
    }

    //如果一个对象被劫持过了，那就不需要再被劫持了（要判断一个对象是否被劫持，可以增添一个实例，用实例来判断是否被劫持）

    return new Observer(data)
}