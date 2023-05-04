/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let map = new Map([
        ["+", (a, b) => a * 1 + b * 1],
        ["-", (a, b) => b - a],
        ["*", (a, b) => a * b],
        ["/", (a, b) => (b / a) | 0],
    ])

    let stack = [];
    for (let item of tokens) {
        if (map.has(item)) {
            stack.push(map.get(item)(stack.pop(), stack.pop()))
        } else {
            stack.push(item)
        }
    }
    return stack.pop()
};
// @lc code=end

