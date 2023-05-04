Function.prototype.MyCall = function (TargetThis, ...args) {

    if (typeof this !== 'function') throw new TypeError('not function');
    // console.log(this)
    TargetThis = TargetThis || window
    TargetThis.fn = this
    let result = TargetThis.fn(...args)
    delete TargetThis.fn
    return result
}

Function.prototype.MyApply = function (TargetThis) {
    if (typeof this !== 'function') throw new TypeError('not function');
    TargetThis = TargetThis || window
    TargetThis.fn = this
    if (arguments[1]) {
        let result = TargetThis.fn(...arguments[1])
    }
    else {
        let result = TargetThis.fn()
    }
    delete TargetThis.fn
    return result
}
