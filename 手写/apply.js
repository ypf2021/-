Function.prototype.myApply = function (TargetThis) {
    if (typeof this !== "object") throw TypeError("");
    let context = TargetThis || Window;
    context.fn = this;
    let result;
    if (arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
};
