// 请补全JavaScript代码，要求在Number对象的原型对象上添加"_isPrime"函数，该函数判断调用的对象是否为一个质数，是则返回true，否则返回false。

Number.prototype._isPrime = function () {
    number = +this;
    if (typeof number !== 'number') return false;
    else {
        if (number === 2) return true;
        if (number > 2) {
            for (let i = 1; i <= Math.ceil(number / 2); i++) {
                if (number % i === 0 && i !== 1) return false;
            }
            return true;
        }
    }
}
