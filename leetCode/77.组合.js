/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

const NumberToString = require("es-abstract/2018/numbertostring");

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let result = [];
let path = [];
var combine = function (n, k) {
    result = []
    combineHelper(n, k, 1)
    return result
};

// const backyrack = function(nums,startIndex)
const combineHelper = function (n, k, startIndex) {
    // if(终止条件){
    //     return 
    // }
    if (path.length == k) {
        result.push([...path])
        return
    }
    // for (let i = startIndex; i < nums.length; i++) {
    //     //添加元素
    //     track.push(nums[i])
    //     //纵向深入，递归，注意参数
    //     backyrack(nums, i + 1)
    //     //回溯撤销元素进入下一个
    //     track.pop()
    // }
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
        path.push(i)
        combineHelper(n, k, i + 1)
        path.pop()
    }
}

// @lc code=end

