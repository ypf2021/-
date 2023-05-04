/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let item = intervals[0]
    let res = []
    for (let intervalItem of intervals) {
        if (item[1] >= intervalItem[0]) {
            item[1] = Math.max(item[1], intervalItem[1])
        } else {
            res.push([item[0], item[1]])
            item = intervalItem
        }
    }
    res.push(item)
    return res
};

// @lc code=end

