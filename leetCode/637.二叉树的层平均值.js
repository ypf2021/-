/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let res = [];
    let queue = []
    queue.push(root)
    while (queue.length) {
        let cur = []
        const average = function (arr) {
            let total = arr.reduce((sum, cur) => {
                // console.log("sum:", sum, ",cur:", cur)
                sum = cur + sum
                return sum
            }, 0);
            return total / arr.length
        }
        for (let i = queue.length; i > 0; i--) {
            let node = queue.shift()
            cur.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(average(cur))
    }
    return res
};
// @lc code=end

