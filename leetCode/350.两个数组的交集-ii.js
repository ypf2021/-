/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)

    let stack = [];
    let l = 0, r = 0;
    while (l < nums1.length && r < nums2.length) {
        if (nums1[l] === nums2[r]) {
            stack.push(nums1[l])
            l++;
            r++
        } else if (nums1[l] < nums2[r]) {
            l++;

        } else if (nums1[l] > nums2[r]) {
            r++
        }
    }
    return stack
};
// @lc code=end

