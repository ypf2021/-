/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    // 使用递归中序遍历
    let map = new Map();
    // 1. 确定递归函数以及函数参数
    const traverTree = function (root) {
        // 2. 确定递归终止条件
        if (root === null) {
            return;
        }
        traverTree(root.left);
        // 3. 单层递归逻辑
        map.set(root.val, map.has(root.val) ? map.get(root.val) + 1 : 1);
        traverTree(root.right);
    }
    traverTree(root);
    //上面把数据都存储到map
    //下面开始寻找map里面的
    // 定义一个最大出现次数的初始值为root.val的出现次数
    let maxCount = map.get(root.val);
    // 定义一个存放结果的数组res
    let res = [];
    for (let [key, value] of map) {
        // 如果当前值等于最大出现次数就直接在res增加该值
        if (value === maxCount) {
            res.push(key);
        }
        // 如果value的值大于原本的maxCount就清空res的所有值，因为找到了更大的
        if (value > maxCount) {
            res = [];
            maxCount = value;
            res.push(key);
        }
    }
    return res;
};

// @lc code=end

