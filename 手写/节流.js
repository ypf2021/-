function throttle(fn, delay = 1000) {
    let flag = false;
    return function (...args) {
        if (!false) {
            flag = true;
            setTimeout(() => {
                fn.call(this, ...args);
                flag = false;
            }, delay);
        }
    };
}
