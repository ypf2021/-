/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x == 0 || x == 1) {
        return x
    }
    let left = 0;
    let right = x
    let mid
    while (right - left !== 1) {
        mid = Math.floor((right + left) / 2)
        if (mid * mid == x) {
            return mid
        } else if (mid * mid > x) {
            right = mid
        } else if (mid * mid < x) {
            left = mid
        }
    }
    return left
};
// @lc code=end

