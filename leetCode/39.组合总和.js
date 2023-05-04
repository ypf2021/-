/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// const { result } = require("lodash");

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    let record = []
    let sum = 0
    candidates.sort((a, b) => a - b)
    const combine = function (candidates, target, j) {
        if (sum > target) {
            return
        }
        if (sum == target) {
            // console.log(record)
            result.push([...record])
            // console.log(result)
            return
        }

        for (let i = j; i < candidates.length; i++) {
            sum += candidates[i]
            console.log(sum)
            record.push(candidates[i])
            combine(candidates, target, i)
            sum -= candidates[i];
            record.pop()
        }
    }
    combine(candidates, target, 0)
    return result
};

// console.log(combinationSum([2, 3, 6, 7], 7))
// @lc code=end

