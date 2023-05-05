const _isCard = number => {
    // 补全代码
    let regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return regx.test(number)
}