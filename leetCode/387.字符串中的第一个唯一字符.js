/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let freq = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        let x = s[i].charCodeAt() - "a".charCodeAt()
        freq[x]++;
    };
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i].charCodeAt() - "a".charCodeAt()] === 1) {
            return i
        }
    }
    return -1
};
// @lc code=end

