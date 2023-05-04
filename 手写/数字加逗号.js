function _comma(number) {
    // 补全代码
    let navigater = undefined
    if (number < 0) {
        navigater = '-'
        number = Math.abs(number)
    }

    number = String(number)
    let result = ''
    while (number.length > 3) {
        let end = number.substring(number.length - 3)
        result = ',' + end + result
        number = number.substring(0, number.length - 3)
    }
    return navigater ? (navigater + number + result) : number + result
}
console.log(_comma(1234567)); // 1,234,567
console.log(_comma(123456)); // 123,456
console.log(_comma(-123456)); // 123,456

