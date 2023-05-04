/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let set = new Set()
    const getSum = function (n) {
        let sum = 0;
        while (n) {
            sum += (n % 10) ** 2;
            n = Math.floor(n / 10)
        }
        return sum
    }

    while (true) {

        let item = getSum(n)
        if (item === 1) {
            return true
        }

        if (set.has(item)) {
            return false
        }
        set.add(item)

        n = item

    }
};
// @lc code=end

