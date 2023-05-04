// function Mynew(father, ...args) {
//     var newResult = {};
//     // Object.setPrototypeOf(newResult, father.prototype)
//     newResult.__proto__ = father.prototype
//     let fatherResult = father.call(newResult, ...args)
//     return fatherResult instanceof Object ? fatherResult : newResult
// }

// function myNew(Con, ...args) {
//     // 创建一个新的空对象
//     let obj = {};
//     // 将这个空对象的__proto__指向构造函数的原型
//     // obj.__proto__ = Con.prototype;
//     // 将this指向空对象
//     let res = Con.apply(obj, args);js
//     return res instanceof Object ? res : obj;
//   }

function myNew(father, ...args) {
    let sonObj = {};
    sonObj.__proto__ = father.prototype;
    let res = father.call(sonObj, ...args);
    return res instanceof Object ? res : sonObj;
}
