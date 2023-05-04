const _shouldUpdate = (oldVersion, newVersion) => {
    // 补全代码
    sortFn = function (a, b) {
        if (a < b) {
            return false
        }
        if (a > b) {
            return true
        }
    }
    return sortFn(oldVersion, newVersion)
}

console.log(_shouldUpdate('0.0.2', '0.0.0'))