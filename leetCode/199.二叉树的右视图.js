/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
    let res = [];
    let queue = [];
    if (!root) {
        return res
    }
    queue.push(root)
    while (queue.length !== 0) {
        //放每层中的节点，
        let cur = [];
        //这里循环条件的长度要定在那一层中的长度
        //执行完整个for循环会把那一层的元素遍历完，然后把下一层的元素添加进去
        for (let i = queue.length; i > 0; i--) {
            let node = queue.shift()
            if (i == 1) {
                cur.push(node.val)
            }

            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        //把每一层的结果放入嘴中结果中
        res.push(cur)
    }
    return res
};
// @lc code=end

