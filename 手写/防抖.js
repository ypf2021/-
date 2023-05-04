function debounce(fn, delay = 1000) {
    let timer = null;

    return function (...args) {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn.call(this, ...args);
        }, delay);
    };
}
