/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let ret = new ListNode(-1, head)
    //为什么 slow 和 fast 是 ret 而不是 ret.next
    let slow = ret
    let fast = ret
    while (n--) {
        fast = fast.next
    }
    while (fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return ret.next
}
// @lc code=end

