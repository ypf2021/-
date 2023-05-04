/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return [];
    }

    const ans = [];
    const queue = [root];

    while (queue.length) {
        const cnt = queue.length;
        const level = [];
        for (let i = 0; i < cnt; ++i) {
            const cur = queue.shift();
            level.push(cur.val);
            for (const child of cur.children) {
                queue.push(child);
            }
        }
        ans.push(level);
    }

    return ans;
};

// @lc code=end

