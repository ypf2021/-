/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
// var hasPathSum = function(root, targetSum) {
//     if(!root) return false
//     if(targetSum==root.val&&!root.left&&!root.right) return true
//     return hasPathSum(root.left,targetSum-root.val) || hasPathSum(root.right,targetSum-root.val)
// };




var hasPathSum = function (root, targetSum) {
    if (!root) return 0
    let res = false
    const dfs = (root, sum) => {
        if (!root) return
        if (sum == targetSum && (!root.left && !root.right)) {
            res = true
        }
        if (root.left) dfs(root.left, sum + root.left.val)
        if (root.right) dfs(root.right, sum + root.right.val)
    }
    dfs(root, root.val)
    return res

};
// @lc code=end

