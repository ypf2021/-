/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
//递归法
// var maxDepth = function (root) {
//     if (root === null) {
//         return 0
//     }
//     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
// };
//层序遍历
var maxDepth = function (root) {
    const getHeight = function (root) {
        if (root == null) {
            return 0
        }
        let left = getHeight(root.left)
        let right = getHeight(root.right)

        return Math.max(left, right) + 1
    }
    return getHeight(root)
}
// @lc code=end

