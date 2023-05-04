/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = []
    let queue = [root]
    if (!root) {
        return res
    }
    while (queue.length) {
        let len = queue.length
        let cur = []
        for (let i = 0; i < len; i++) {
            let temp = queue.shift()
            cur.push(temp.val)
            temp.left && queue.push(temp.left)
            temp.right && queue.push(temp.right)
        }
        res.push(cur)
    }
    return res
};
// @lc code=end

