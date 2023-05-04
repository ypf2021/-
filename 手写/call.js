// Function.prototype.myCall = function (TargetThis) {
//     if (typeof this !== "function") throw new TypeError("aa");

//     let context = TargetThis || Window;

//     let args = [...arguments].slice(1);

//     context.fn = this;
//     let result = context.fn(...args);
//     delete context.fn;
//     return result;
// };

Function.prototype._call = function (TargetThis, ...args) {
    const context = TargetThis === undefined ? window : Object(TargetThis);

    const key = Symbol();

    context[key] = this;
    let result = context[key](...args);
    delete context[key];
    return result;
};
