let average = function (arr) {
    let total = arr.reduce((sum, cur) => {
        console.log("sum:", sum, ",cur:", cur)
        sum = cur + sum
        return sum
    }, 0);
    return total / arr.length
}
console.log(average([1, 2, 3, 4]))