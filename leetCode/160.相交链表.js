/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getListLen = function (head) {
    let len = 0, cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    return len;
}
var getIntersectionNode = function (headA, headB) {
    let curA = headA, curB = headB
    let lenA = getListLen(headA)
    let lenB = getListLen(headB)
    if (lenA < lenB) {
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }
    for (let i = lenA - lenB; i > 0; i--) {
        curA = curA.next
    }
    while (curA && curA !== curB) {
        curB = curB.next
        curA = curA.next
    }
    return curA
};

// @lc code=end

