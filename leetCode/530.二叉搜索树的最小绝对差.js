/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

const { null } = require("check-types");

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
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let res = []
    const traverse = function (root) {
        if (root === null) {
            return null;
        }
        traverse(root.left)
        res.push(root.val)
        traverse(root.right)
    }
    traverse(root)
    let min = res[res.length - 1] - res[0];
    for (let i = 1; i < res.length; i++) {
        min = Math.min(min, res[i] - res[i - 1])
    }
    return min
};
// @lc code=end

