function once(fn) {
    let res,
        isOnce = true;
    return function (...args) {
        if (isOnce) {
            res = fn.call(this, ...args);
            isOnce = false;
        }
        return res;
    };
}
