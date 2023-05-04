/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let head1 = new ListNode(-1), p1 = head1
    let head2 = new ListNode(-1), p2 = head2
    let p = head
    while (p) {

        if (p.val < x) {
            p1.next = p
            p1 = p1.next
        } else {
            p2.next = p
            p2 = p2.next
        }
        p = p.next
    }

    p1.next = null;
    p2.next = null;
    p1.next = head2.next
    return head1.next

};
// @lc code=end

