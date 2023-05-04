const shuffle = function (arr) {
    const result = [...arr];
    for (let i = arr.length - 1; i >= 0; i--) {
        let index = Math.floor(Math.random() * i);
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
    return result;
};

const arr = [1, 2, 3, 4, 5];
console.log(shuffle(arr)); // [ 2, 3, 5, 1, 4 ]
console.log(shuffle(arr)); // [ 4, 2, 3, 1, 5 ]
console.log(shuffle(arr)); // [ 5, 4, 2, 3, 1 ]
