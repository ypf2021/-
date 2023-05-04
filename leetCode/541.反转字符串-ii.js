/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let resArr = s.split("")
    for (let i = 0; i < s.length; i += 2 * k) {
        let left = i - 1, right = i + k > s.length ? s.length : i + k;
        while (++left <= --right) {
            [resArr[left], resArr[right]] = [resArr[right], resArr[left]]
        }
    }
    res = resArr.join("")
    return res
};
// @lc code=end

