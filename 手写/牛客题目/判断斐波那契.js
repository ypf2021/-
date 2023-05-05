// 判断斐波那契数组

const _isFibonacci = array => {
    // 补全代码
    if (array.length < 3 || array[0] !== 0 || array[1] !== 1 || array[2] !== 1) return false
    for (let i = 2; i < array.length; i++) {
        if (array[i] !== array[i - 1] + array[i - 2]) return false
    }
    return true
}

console.log(_isFibonacci([0, 1, 1, 2, 3, 5]))

