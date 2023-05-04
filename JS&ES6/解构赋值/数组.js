// let [a, b, c] = [1, 2, 3];
// console.log(a)
// console.log(b)
// console.log(c)

// let [head, ...tail] = [1, 2, 3, 4, 5]
// console.log(head)   //1
// console.log(tail)   //[2,3,4,5] 

// let [one, two, three] = [1, [12, 23], 3]
// console.log(one)    //1
// console.log(two)    //[12,23]
// console.log(three)  //3

// let [one, [two], three] = [1, [12, 23], 3]
// console.log(one)    //1
// console.log(two)    //12
// console.log(three)  //3

//解构赋值右边必须是 可遍历 的结构

//默认值
// let [a, b, c = 4] = [1, 2];
// console.log(a)  //1
// console.log(b)  //2
// console.log(c)  //4

//当右边严格等于（===）undefined时，才会使用默认值
// let [a = 1] = [undefined]
// console.log(a) //1
// let [b = 1] = [null]
// console.log(b) //null