/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let preSum = 0
    let maxSum = nums[0]
    nums.forEach((item) => {
        preSum = Math.max(preSum + item, item)
        maxSum = Math.max(maxSum, preSum)
    })
    return maxSum
};
// @lc code=end

