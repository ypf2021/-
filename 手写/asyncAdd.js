const map = new Map();
// 异步加法
function asyncAdd(a, b, cb) {
    setTimeout(() => {
        cb(null, a + b);
    }, 1000);
}
async function total() {
    const res1 = await sum(1, 2, 3, 4, 5, 6, 4);
    const res2 = await sum(1, 2, 3, 4, 5, 6, 4);
    return [res1, res2];
}
total().then((res) => console.log(res));

function add(a, b) {
    return new Promise((resolve, reject) => {
        asyncAdd(a, b, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
// 实现下sum函数。注意不能使用加法，在sum中借助asyncAdd完成加法。尽可能的优化这个方法的时间。

function combain(array) {
    let result = [];
    for (let i = 0; i < array.length / 2; i++) {
        if (i === array.length - 1 - i) {
            result.push(array[i]);
        } else {
            result.push([array[i], array[array.length - i - 1]]);
        }
    }
    return result;
}
async function sum() {
    const arr = [...arguments];
    if (arr.length === 1) return arr[0];

    const fn = combain(arr).map((item) => {
        if (typeof item !== "number") {
            const key = `${item[0]}+${item[1]}`;
            if (map.has(key)) {
                return map.get(key);
            }
            return add(item[0], item[1]);
        }
        return item;
    });

    const result = await Promise.all(fn).then((res) => {
        fn.forEach((item, i) => {
            if (typeof item !== "number") {
                const key = `${item[0]}+${item[1]}`;
                map.set(key, res[i]);
            }
        });
        return res;
    });
    return await sum(...result);
}
