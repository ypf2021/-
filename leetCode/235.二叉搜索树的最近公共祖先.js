/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // 使用递归的方法
    // 1. 使用给定的递归函数lowestCommonAncestor
    // 2. 确定递归终止条件
    if (root === null) {
        return root;
    }
    if (root.val > p.val && root.val > q.val) {
        // 向左子树查询
        let left = lowestCommonAncestor(root.left, p, q);
        return left !== null && left;
    }
    if (root.val < p.val && root.val < q.val) {
        // 向右子树查询
        let right = lowestCommonAncestor(root.right, p, q);
        return right !== null && right;
    }
    return root;
};

// @lc code=end

