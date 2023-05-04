/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var sum = 0;
var result = []
var path = []
var combinationSum3 = function (k, n) {
    result = []
    combine(n, k, 1)
    return result
};
const combine = function (n, k, startIndex) {
    if (path.length == k) {
        if (sum == n) {
            result.push([...path])
            return
        }
        return
    }

    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
        sum += i;
        path.push(i)
        combine(n, k, i + 1)
        path.pop()
        sum -= i
    }


}
// @lc code=end

