// 第一个参数:目标对象

// 第二个参数:需要定义的属性或方法的名字。

// 第三个参数:目标属性所拥有的特性。（descriptor）

// descriptor
// 他有以下取值，我们简单认识一下，后面例子，挨个介绍，
// value:属性的值(不用多说了)
// writable:如果为false，属性的值就不能被重写,只能为只读了
// configurable:总开关，一旦为false，就不能再设置他的（value，writable，configurable）
// enumerable:是否能在for...in循环中遍历出来或在Object.keys中列举出来。

// 在 descriptor 中不能 同时设置访问器 (get 和 set) 和 wriable 或 value，否则会错，就是说想用(get 和 set)，就不能用（wriable 或 value中的任何一个）
var a = {};
Object.defineProperty(a, b, {
    value: 123,
    enumerable: true,
    writable: true,
    configurable: false
})
