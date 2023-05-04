function toThousands(num) {
    num = num.toString();
    let result = "";
    while (num.length > 3) {
        result = "," + num.substring(num.length - 3) + result;
        num = num.substring(0, num.length - 3);
    }
    num = num + result;
    return num;
}
console.log(toThousands(1234567)); // 1,234,567
console.log(toThousands(123456)); // 123,456
