Array.prototype._filter = function (fn, targetThis) {
    // 类型判断
    let result = [];
    this.forEach((element, index, arr) => {
        if (fn(element, index, arr)) {
            result.push(element);
        }
    });
    return result;
};
