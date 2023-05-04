03/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function (head, val) {
//     let ret = new ListNode(null, head)
//     let cur = ret
//     while (cur.next) {
//         if (cur.next.val === val) {
//             cur.next = cur.next.next;
//             continue;
//         }
//         cur = cur.next
//     }
//     return ret.next
// };
var removeElements = function (head, val) {

    if (head === null) {
        return head
    }
    head.next = removeElements(head.next, val)
    return head.val === val ? head.next : head;

};


// @lc code=end

