// 通过递归的方式
// function falatten(arr) {
//     let result = [];
//     for (let i of arr) {
//         if (Array.isArray(i)) {
//             result = result.concat(falatten(i));
//             continue;
//         }
//         result.push(i);
//     }
//     return result;
// }

// reduce 函数迭代
// function falatten(arr) {
//     return arr.reduce((total, cur) => {
//         return total.concat(Array.isArray(cur) ? falatten(cur) : cur);
//     }, []);
// }

// （3）扩展运算符实现
function falatten(arr) {
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

console.log(falatten([123, 1, 4, 5, [1, 23, 1, [11]], 1]));
