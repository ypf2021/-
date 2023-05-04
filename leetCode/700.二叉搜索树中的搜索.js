/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    //先看root是否为空
    if (root === null) return null
    //再检测root的值，
    if (root.val === val) return root
    //如果root的值不对应的话，就进行响应方向的递归，查询
    if (root.val > val) return searchBST(root.left, val)
    if (root.val < val) return searchBST(root.right, val)

};
// @lc code=end

