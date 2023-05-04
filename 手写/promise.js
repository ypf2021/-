// promise.all
Promise._all = function (promiseList) {
    return new Promise((resolve, reject) => {
        let result = [];
        let count = 0;
        if (promiseList.length === 0) {
            resolve(result);
            return;
        }
        for (let i = 0; i < promiseList.length; i++) {
            Promise.resolve(promiseList[i]).then(
                (res) => {
                    result[i] = res;
                    count++;
                    // 不能直接通过 result.length 进行比较，因为 会存在下标大的先赋值
                    // 例如 i = 3 第一个返回结果，此时数组变为[empty,empty,empty,res]
                    if (count == promiseList.length) {
                        resolve(result);
                    }
                },
                (err) => {
                    reject(err);
                }
            );
        }
    });
};

// promise.race
Promise._race = function (promiseList) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseList.lengt; i++) {
            Promise.resolve(promiseList[i])
                .then(
                    (res) => {
                        resolve(res);
                    },
                    (err) => {
                        reject(err);
                    }
                )
                .catch((err) => {
                    reject(err);
                });
        }
    });
};

// Promise.allSettled
Promise._allSettled = function (promiseList) {
    return new Promise((resolve, reject) => {
        let result = [],
            count = 0;
        const addRes = function (i, res) {
            result[i] = res;
            count++;
            if (count == promiseList.length) {
                resolve(result);
            }
        };
        for (let i = 0; i < promiseList.length; i++) {
            Promise.resolve(promiseList[i]).then(
                (res) => {
                    addRes(i, { status: "fulfilled", data: res });
                },
                (err) => {
                    addRes(i, { status: "rejected", data: err });
                }
            );
        }
    });
};
