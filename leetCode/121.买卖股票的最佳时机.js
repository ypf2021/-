/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0]
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice)

        minPrice = Math.min(minPrice, prices[i])
    }
    return maxProfit
};
// @lc code=end

