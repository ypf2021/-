/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {

    const getSum = function (root) {
        if (root === null) {
            return 0;
        }

        let leftVal = getSum(root.left);
        let rightVal = getSum(root.right);

        if (root.left && !root.left.left && !root.left.right) {
            return root.left.val + leftVal + rightVal
        }
        return leftVal + rightVal
    }

    return getSum(root)

};
// @lc code=end

