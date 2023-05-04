/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let len1 = num1.length - 1;
    let len2 = num2.length - 1;
    let add = 0;
    let res = []
    while (len1 >= 0 || len2 >= 0 || add != 0) {
        n1 = len1 < 0 ? 0 : num1[len1].charCodeAt() - "0".charCodeAt()
        n2 = len2 < 0 ? 0 : num2[len2].charCodeAt() - "0".charCodeAt()
        sum = n1 + n2 + add
        res.unshift(sum % 10)
        add = Math.floor(sum / 10)
        len1--
        len2--
    }
    return res.join("")
};

// @lc code=end

