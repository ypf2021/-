/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 == "0" || num2 == "0") return "0"
    let mulArr = []
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            mulArr[i + j] = (mulArr[j + i] || 0) + num1[i] * num2[j]
        }
    }
    let carry = 0
    for (let index = mulArr.length - 1; index >= 0; index--) {
        let sum = mulArr[index] + carry
        mulArr[index] = sum % 10
        carry = Math.floor(sum / 10)
    }
    if (carry) {
        mulArr.unshift(carry)
    }
    return mulArr.join("")
};
// @lc code=end

