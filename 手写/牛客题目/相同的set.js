// 请补全JavaScript代码，要求以boolean的形式返回两个Set对象参数是否一样，是则返回true，否则返回false。
const _isSameSet = (s1, s2) => {
    // 补全代码
    if (s1.size !== s2.size) return false

    for (let i of s1) {
        if (!s2.has(i)) {
            return false
        }
    }
    return true
}
