// 请补全JavaScript代码，要求返回一个长度为参数值并且每一项值都为参数值的数组。
// 注意：
// 1. 请勿直接使用for/while

// 用递归的方法进行创建
// const _createArray = (number) => {
//     // 补全代码
//     let count = 1;
//     let result = []
//     function create() {
//         if (count != number) {
//             count++
//             create()
//         }
//         result.push(number)
//     }
//     create()
//     return result
// }


// 调用api new Array , fill
// const _createArray = (number) => {
//     // 补全代码
//     return new Array(number).fill(number)
// }


// 调用api, array.from
const _createArray = (number) => {
    // 补全代码
    return Array.from({ length: number }, () => number)
}


console.log(_createArray(4))
