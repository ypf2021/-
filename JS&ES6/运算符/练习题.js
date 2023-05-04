// console.log(typeof (1 + "2"))   //string 12
// console.log(1 - "2")   //number -1


// var a = 1;
// a++ + a //3
// console.log(typeof a + 2)   //number2

// var d = a = 3, b = 4
// console.log(d)  //3

// var d = (a = 3, b = 4)
// console.log(d)  //4

// var a = 1, b = 2, c = 3;
// var val = typeof a + b || c > 0
// console.log(val)    //number2
// var d = 5;
// var data = d == 5 && console.log('bb')  //bb
// console.log(data)   //undefined
// var data2 = d = 0 || console.log('haha')    //haha
// console.log(data2)  //undefined
// var x = !!"Hello" + (!"world", !!"from here!!");
// console.log(x)  //2

// var a = 1;
// var b = 3;
// console.log(a++ + b);   //4

// console.log(1 + 1); //2
// console.log("2" + "4");//24
// console.log(2 + "4");//24
// console.log(+"4");  //4

// var a = typeof typeof 4 + 4
// console.log(a)  //string4

// var a = typeof 3 + 4
// console.log(a)

// console.log(a);  //undefined
// var a = 1;
// console.log(b);  //baocuo

// console.log(Number(undefined))  //NaN
// console.log(Number(null))   //0

// console.log(22 + null)  //22
// console.log(22 + undefined) //NaN

// console.log({} == false)    //false
// console.log([] == false)    //true
// console.log(null == undefined)  //true
// console.log(null === undefined)  //false
// console.log(null == 0)  //fasle 
// console.log(undefined == 0) //false //null和undefined 和其他任何数据类型都不相等

// var a = 2;
// if (a = 1) {    //a = 1的返回值是1  //赋值运算的返回值是等号右边的值
//     console.log("a 等于 1")
// } else {
//     console.log("a 不等于 1")
// }

// sayName("world");   //hello world
// sayAge(10); //not a function
// function sayName(name) {
//     console.log("hello ", name);
// }
// var sayAge = function (age) {
//     console.log(age);
// };

// var x = 10;
// bar()   //30
// function bar() {
//     var x = 30;
//     function foo() {
//         console.log(x)
//     }
//     foo();
// }

// var x = 10
// bar()   //10
// function foo() {
//     console.log(x)
// }
// function bar() {
//     var x = 30
//     foo()
// }

// var a = 1
// function fn1() {
//     function fn3() {
//         function fn2() {
//             console.log(a)
//         }
//         fn2()
//         var a = 4
//     }
//     var a = 2
//     return fn3
// }
// var fn = fn1()
// fn() // undefined


// var a = 1
// function fn1() {
//     function fn3() {
//         var a = 4
//         fn2()
//     }
//     var a = 2
//     return fn3
// }
// function fn2() {
//     console.log(a)
// }
// var fn = fn1()
// fn() // 1


// var a = 1
// var c = { name: "oli", age: 2 }
// function f1(n) {
//     ++n
// }
// function f2(obj) {
//     ++obj.age
// }
// f1(a)   //undefined
// f2(c)   //undefined
// f1(c.age)   //undefined
// console.log(a)  //1
// console.log(c)  //{ name: "oli", age: 3 }

// var obj1 = { a: 1, b: 2 };
// var obj2 = { a: 1, b: 2 };
// console.log(obj1 == obj2);  //false
// console.log(obj1 = obj2);   //打印等号右边的
// console.log(obj1 == obj2);  //true

// var name = "sex"
// var company = {
//     name: "qdywxs",
//     age: 3,
//     sex: "男"
// }
// console.log(company[name])  //优先看变量

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }
// console.log('script start');
// setTimeout(function () {
//     console.log('setTimeout');
// }, 0);
// async1();
// new Promise(function (resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function () {
//     console.log('promise2');
// });
// console.log('script end');
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2

// var data = [];
// for (var i = 0; i < 3; i++) {
//     (function (j) {
//         data[j] = function () {
//             console.log(j);
//         }
//     })(i)
// }
// data[0]();
// data[1]();
// data[2]()

// var flag = true;
// setTimeout(function () {
//     flag = false;
// }, 0)
// while (flag) { }
// console.log(flag);//死循环

var a = 1;
setTimeout(function () {
    a = 2;
    console.log(a);
}, 0);
var a;
console.log(a);
a = 3;
console.log(a);
