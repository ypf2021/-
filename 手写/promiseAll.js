// function myAll(promises) {
//     if (!Array.isArray(promises)) {
//         throw new TypeError("类型错误");
//     }
//     return new Promise((resolve, reject) => {
//         let resolveCount = 0;
//         let result = [];
//         for (let i = 0; i < promises.length; i++) {
//             Promise.resolve(promises[i]).then(
//                 (value) => {
//                     resolveCount++;
//                     result.push(value);
//                     if (resolveCount === promises.length) {
//                         resolve(result);
//                     }
//                 },
//                 (err) => {
//                     return reject(err);
//                 }
//             );
//         }
//     });
// }

let a = new Promise((resolve, reject) => {
    console.log(1);
    resolve(1);
});

let b = new Promise((resolve, reject) => {
    console.log(2);
    reject(2);
});
let c = new Promise((resolve, reject) => {
    console.log(3);
    resolve(3);
});

let result = Promise.all([a, b, c]).then(
    (res) => {},
    (err) => console.log(err)
);

console.log(result);
