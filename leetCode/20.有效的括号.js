/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let map = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    for (let element of s) {
        if (element in map) {
            stack.push(map[element])
            continue
        }
        if (element !== stack.pop()) return false
    }
    return !stack.length
};
// @lc code=end

