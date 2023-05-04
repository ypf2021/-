/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function () {
    this.instack = []
    this.outstack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.instack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (!this.outstack.length) {
        while (this.instack.length) {
            this.outstack.push(this.instack.pop())
        }
    }
    return this.outstack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (!this.outstack.length) {
        while (this.instack.length) {
            this.outstack.push(this.instack.pop())
        }
    }
    return this.outstack[this.outstack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.instack.length === 0 && this.outstack.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

