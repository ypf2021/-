/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let rightPoint = 0
    let length = s.length
    let ans = 0
    for (let n = 0; n < length; n++) {
        if (n != 0) {
            set.delete(s.charAt(n - 1))
        }
        while (rightPoint < length && !set.has(s.charAt(rightPoint))) {
            set.add(s.charAt(rightPoint))
            rightPoint++
        }
        ans = Math.max(ans, set.size)
    }
    return ans
    // return 111
};
// @lc code=end

