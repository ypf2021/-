function deepCopy(obj) {
    if (typeof obj !== 'object') {
        return obj
    }
    let res = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnPrototype(key)) {
            res[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
        }
    }
    return res
}
