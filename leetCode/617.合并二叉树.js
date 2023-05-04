/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {

    //两个都是 null 时，就返回null
    if (!root1 && !root2) {
        return null
    }
    //一个存在一个不存在时，把值给到不存在一方，然后返回，并不接着执行递归
    if (!root1 && root2) {
        root1 = root2;
        return root1
    }
    if (root1 && !root2) {
        root2 = root1;
        return root1
    }
    //当两个都存在时，就把val的值相加
    if (root1 && root2) {
        let sum = root1.val + root2.val
        root1.val = sum
        root2.val = sum
    }
    //这里以root1作为基准，把和并好的值返回给 root1
    root1.left = mergeTrees(root1.left, root2.left)
    root1.right = mergeTrees(root1.right, root2.right)
    // 最后返回root1的值
    return root1
};
// @lc code=end

