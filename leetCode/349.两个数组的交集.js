/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    if (nums2.length > nums1.length) {
        let temp = nums2;
        nums2 = nums1;
        nums1 = temp
    }

    let nums1Set = new Set(nums1)

    let resSet = new Set()

    for (let i of nums2) {
        if (nums1Set.has(i)) {
            resSet.add(i)
        }
    }

    return Array.from(resSet)

};
// @lc code=end

