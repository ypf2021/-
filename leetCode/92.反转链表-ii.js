/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {

    // 定义一个虚拟头结点
    let dummyNode = new ListNode(-1, head)
    let pre = dummyNode;

    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }

    let rightNode = pre
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next
    }

    let leftNode = pre.next
    let curr = rightNode.next

    // 切断原来的连接
    rightNode.next = null;
    pre.next = null;

    const reverse = function (leftNode) {
        let next
        let cur = leftNode;
        let pre = null
        while (cur) {
            next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        }
    }
    reverse(leftNode)

    pre.next = rightNode
    leftNode.next = curr
    return dummyNode.next
};
// @lc code=end

