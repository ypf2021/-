//排序去重
// var unique = function (arr) {
//     let newArr = [];
//     let sortArr = arr.sort();
//     let pre;
//     for (let i = 0; i < sortArr.length; i++) {
//         if (!i || pre !== sortArr[i]) {
//             newArr.push(sortArr[i])
//         }
//         pre = sortArr[i];
//     }
//     return newArr
// }

//set去重
// var unique = function (arr) {
//     return Array.from(new Set(arr))
// }

// Array.prototype.filter
// var unique = (arr) => {
//     var res = arr.filter(function(value, index){
//         return arr.indexOf(value) === index
//     })
//     return res
// }

var unique = (arr) => {
    let res = [];
    arr.forEach(element => {
        if (!res.includes(element)) {
            res.push(element)
        }
    });    
    return res
}

const names = ['D.O', 'K.O', 'LAY', 'KAI', 'IU', 'D.O', 'K.O', 'IU']
var res = unique([1, '1', '1', 1, 2, true, false, true, 3, 2, 2, 1])
console.log(unique(names))
console.log(res)























