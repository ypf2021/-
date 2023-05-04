// console.log("script start");
// let promise1 = new Promise(function (resolve) {
//     console.log("promise1");
//     resolve();
//     console.log("promise1 end");
// }).then(function () {
//     console.log("promise2");
// });
// setTimeout(function () {
//     console.log("settimeout");
// });
// console.log("script end");

// script start -> promise1 -> promise1 end -> script end -> promise2 -> settimeout

async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}
async function async2() {
    console.log("async2");
}
console.log("script start");
async1();
console.log("script end");

// script start -> async1 start -> async2 -> async1 end -> script end
