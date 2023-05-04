// 该函数接受两个参数分别为数组、索引值，要求在不改变原数组的情况下返回删除了索引项的新数组。

const _delete = (array, index) => {
    // 补全代码
    return [...array.slice(0, index), ...array.slice(index + 1)]
}

// [1,2,3,5,1,5]
console.log(_delete([1, 2, 3, 5, 1, 5], 3))