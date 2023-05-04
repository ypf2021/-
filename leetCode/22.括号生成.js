/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */


// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = []
    let track = []

    const trackback = (left, right, track) => {
        if (left > right) {
            return
        }
        if (left < 0 || right < 0) {
            return
        }

        if (left == 0 && right == 0) {
            result.push(track.join(""))
        }

        track.push("(")
        trackback(left - 1, right, [...track])
        track.pop()

        track.push(")")
        trackback(left, right - 1, [...track])
        track.pop()
    }

    trackback(n, n, track)
    return result
};
// @lc code=end

