// function myNew(fn, ...args) {
//     if (typeof fn !== "function") return TypeError("必须是函数类型");
//     let newObj = Object.create(fn.prototype);
//     let res = fn.call(newObj, ...args);

//     return res instanceof Object ? res : newObj;
// }

function _new(target, ...args) {
    // let newObj = {};
    let newObj = Object.create(target.prototype);
    let result = target.call(newObj, ...args);
    return result instanceof Object ? result : newObj;
}
