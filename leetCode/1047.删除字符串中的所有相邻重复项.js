/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let stack = [];

    for (let item of s) {
        let c = null
        if (stack.length && (c = stack.pop()) === item) continue;
        c && stack.push(c);
        stack.push(item)

    }

    return stack.join("")
};
// @lc code=end

