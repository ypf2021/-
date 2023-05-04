function sum(arr, left) {
    if (left === arr.length) {
        return 0;
    }
    return arr[left] + sum(arr, left + 1)
}
console.log(sum([0, 2, 3, 5], 0))//14
