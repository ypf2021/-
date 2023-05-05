const _flatten = arr => {
    // 补全代码
    // return arr.flat(Infinity)

    while (arr.some((item) => Array.isArray(item))) {
        // arr = [...arr]
        arr = [].concat(...arr)
    }
    return arr
}

console.log(_flatten([1, [2, 3, [4, 5]]]))
