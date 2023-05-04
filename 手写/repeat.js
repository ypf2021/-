function repeat(fn, time, delay = 1000) {
    let context = this;

    return async function (...args) {
        for (let i = 1; i <= time; i++) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    fn.call(context, ...args);
                    resolve();
                }, delay);
            });
        }
    };
}

const repeatFn = repeat(console.log, 4, 1000);

repeatFn("hello");
