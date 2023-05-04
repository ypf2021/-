Array.prototype.myMap = function (callback, thisArg) {
    let result = [];

    this.forEach((element, index, arr) => {
        if (thisArg !== undefined) {
            result[index] = callback.call(thisArg, element, index, arr);
        } else {
            result[index] = callback(element, index, arr);
        }
    });

    return result;
};

const a = new Array(2).fill(2);
console.log(a.map((item, index, arr) => item + 1)); // [1,3]
console.log(a.myMap((item, index, arr) => item * index + 1)); // [1,3]
