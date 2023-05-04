function flatten(arr) {
    return arr.reduce((total, cur) => {
        return total.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
}

console.log(flatten([123, 1, 4, 5, [1, 23, 1, [11]], 1]));
