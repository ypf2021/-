// 请补全JavaScript代码，该函数接受两个参数分别为字符串、子字符串，要求返回子字符串在字符串中出现的频次。
const _searchStrIndexOf = (str, target) => {
    // 补全代码
    let index = str.indexOf(target, 0);
    let count = 0
    while (index !== -1) {
        count++
        index = str.indexOf(target, index + 1);
    }
    return count
}
