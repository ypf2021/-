function Mynew(father, ...args) {
    let newResult = {};
    newResult.__proto__ = father.prototype;
    let fatherRes = father.call(newResult, ...args)
    return fatherRes instanceof Object ? fatherRes : newResult
}