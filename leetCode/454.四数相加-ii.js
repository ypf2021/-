/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let map = new Map()
    let count = 0;
    for (let i of nums1) {
        for (let j of nums2) {
            let add = i + j;
            map.set(add, (map.get(add) || 0) + 1)
        }
    }

    for (let i of nums3) {
        for (let j of nums4) {
            let add = i + j;
            if (map.get((0 - add))) {
                count += map.get(0 - add)
            }
        }
    }

    return count

};
// @lc code=end

