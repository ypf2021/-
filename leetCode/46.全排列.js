/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */


// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];
    let path = [];
    let used = new Array(nums.length).fill(false)

    const traved = function (path) {
        // 终止条件
        if (path.length == nums.length) {
            result.push([...path])
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i] == true) {
                continue
            }
            used[i] = true
            path.push(nums[i])

            traved(path)

            path.pop(nums[i])
            used[i] = false
        }
    }

    traved(path)


    return result

};
// @lc code=end

