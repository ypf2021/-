async function async1() {
    console.log("async1 start");
    await async2();
    // new Promise(resolve) => resolve(async2()))
    console.log("asnyc1 end");
}
async function async2() {
    console.log("async2");
}
console.log("script start");

async1();
new Promise(function (reslove) {
    console.log("promise1");
    reslove();
}).then(function () {
    console.log("promise2");
});
console.log("script end");

// script start`
// async1 start
// async2
// promise1
// script end

// //微任务
// promise2
// asnyc1 end

// console.log("script start");

// async function async1() {
//     // new Promise((resolve) => resolve(async2()))
//     await async2();
//     console.log("async1 end");
// }
// async function async2() {
//     console.log("async2 end");
//     return Promise.resolve().then(() => {
//         console.log("async2 end1");
//     });
// }
// async1();

// new Promise((resolve) => {
//     console.log("Promise");
//     resolve();
// })
//     .then(function () {
//         console.log("promise1");
//     })
//     .then(function () {
//         console.log("promise2");
//     })
//     .then(function () {
//         console.log("promise3");
//     });
// Promise.resolve().then(function () {
//     console.log("promise4");
// });

// console.log("script end");

// //
// script start
// async2 end
// Promise
// async2 end1
// promise1
// promise4

// //wei

// promise2
