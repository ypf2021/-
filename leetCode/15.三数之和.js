/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        if (nums[i] > 0) return res
        if (nums[i] == nums[i - 1]) continue
        while (l < r) {
            sum = nums[i] + nums[l] + nums[r]
            if (sum < 0) {
                l++
            } else if (sum > 0) {
                r--
            } else {
                res.push([nums[i], nums[l], nums[r]])
                while (nums[l] == nums[l + 1]) {
                    l++
                }
                while (nums[r] == nums[r - 1]) {
                    r--
                }
                r--
                l++
            }
        }
    }
    return res
};


// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// @lc code=end

