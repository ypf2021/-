/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {

    if (root === null) {
        return 0;
    }
    if (!root.left && !root.right) {
        //叶子节点，左右子节点都为null
        return 1;
    }

    if (!root.left && root.right) {
        //左子树为空。右子树存在
        return 1 + minDepth(root.right)
    }
    if (root.left && !root.right) {
        //左子树存在。右子树为空
        return 1 + minDepth(root.left)
    }

    return 1 + Math.min(minDepth(root.left), minDepth(root.right))

};
// @lc code=end

