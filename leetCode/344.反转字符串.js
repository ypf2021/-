/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let backPoint = 0, frontPoint = s.length - 1;
    while (backPoint <= frontPoint) {
        [s[backPoint], s[frontPoint]] = [s[frontPoint], s[backPoint]];
        backPoint++;
        frontPoint--;
    }
    return s
};
// @lc code=end

