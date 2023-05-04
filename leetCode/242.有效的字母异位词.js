/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) return false;
    let arr = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt() - "a".charCodeAt()]++
    }

    for (let i = 0; i < t.length; i++) {
        if (!arr[t[i].charCodeAt() - "a".charCodeAt()]) {
            return false
        }
        arr[t[i].charCodeAt() - "a".charCodeAt()]--
    }
    return true


};
// @lc code=end

