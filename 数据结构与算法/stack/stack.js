export default class Stack {
    StackItem = [];
    constructor() {
    }
    //push
    push(item) {
        this.StackItem.push(item)
    }
    //pop
    pop() {
        return this.StackItem.pop()
    }
    //getSize
    getSize() {
        return this.StackItem.length
    }
    //peek
    peek() {
        return this.StackItem[this.StackItem.length - 1]
    }
    isEmpty() {
        return this.StackItem.length === 0
    }
}
