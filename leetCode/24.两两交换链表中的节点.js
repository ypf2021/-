/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    //使用一个空节点，方便temp的转换
    let ret = new ListNode(0, head);
    let temp = ret;
    while (temp.next && temp.next.next) {
        let pre = temp.next;
        let cur = temp.next.next;
        pre.next = cur.next;
        cur.next = temp.next;
        //这里不要忘了将cur的值给了temp.next不然就直接把一些节点给丢失了
        temp.next = cur
        temp = pre;
    }
    return ret.next
};
// @lc code=end

