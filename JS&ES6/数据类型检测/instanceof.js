// function myInstanceof(leftVaule, rightVaule) {
//     //instanceof实际上是判断 右面的值的原型对象，有没有在左面的原型链上
//     let rightPrototype = rightVaule.prototype

//     while (true) {

//         leftValue = leftValue._proto__

//         if (leftVaule == null) return false

//         if (rightPrototype == leftVaule) return true
//     }
// }

function myInstanceof(left, right) {
    if (right === null) return false
    rightProto = right.prototype
    while (true) {
        left = left.__proto__
        if (left === null) return false
        if (left === rightProto) return true
    }
}