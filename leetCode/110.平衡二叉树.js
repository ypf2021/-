/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {

    const getHeight = function (root) {

        if (root == null) {
            return 0;
        }

        let right = getHeight(root.right)
        if (right == -1) {
            return -1
        }

        let left = getHeight(root.left)
        if (left == -1) {
            return -1
        }
        if (Math.abs(left - right) > 1) {
            return -1
        }

        return (Math.max(left, right) + 1)
    }

    return getHeight(root) != -1
};
// @lc code=end

