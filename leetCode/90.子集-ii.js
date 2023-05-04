/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */



// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let result = []
    let path = [];
    nums.sort((a, b) => a - b)
    const backtrack = function (nums, startIndex) {
        result.push([...path])

        if (startIndex > nums.length - 1) {
            return
        }

        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] == nums[i - 1]) {
                continue;
            }
            path.push(nums[i])
            backtrack(nums, i + 1)
            path.pop()
        }
    }
    backtrack(nums, 0)
    return result
};
// @lc code=end

