/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let nodeQueue = []
    let node = head
    while (node) {
        nodeQueue.push(node)
        node = node.next
    }

    while (nodeQueue.length > 2) {
        let lNode = nodeQueue.shift()
        let rNode = nodeQueue.pop()
        let temp = lNode.next
        lNode.next = rNode;
        rNode.next = temp
    }
    nodeQueue[nodeQueue.length - 1].next = null
    return head
};
// @lc code=end

