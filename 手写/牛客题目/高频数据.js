// 描述
// 请补全JavaScript代码，要求找到参数数组中出现频次最高的数据类型，并且计算出出现的次数，要求以数组的形式返回。
// 注意：
// 1. 基本数据类型之外的任何引用数据类型皆为"object"
// 2. 当多种数据类型出现频次相同时将结果拼接在返回数组中，出现次数必须在数组的最后
// 示例1
// 输入：

// __findMostType([0,0,'',''])

// 输出：

// ['number','string',2]或['string','number',2]


const _findMostType = array => {
    // 补全代码
    maxCount = -Infinity
    typeMap = new Map()
    for (let item of array) {
        let type = typeof item
        console.log(type)
        if (typeMap.has(type)) {
            typeMap.set(type, typeMap.get(type) + 1);
        } else {
            typeMap.set(type, 1)
        }
        maxCount = Math.max(maxCount, typeMap.get(type))
    }

    let res = []
    let keys = typeMap.keys()
    for (let i of keys) {
        (typeMap.get(i) == maxCount) && res.push(i);
    }
    res.push(maxCount)
    // return res
    console.log(res)
}

// _findMostType([0, 0, '', '']) //['number','string',2]或['string','number',2]
_findMostType([1, "1", {}, {}, 2, 3, 4, 3, 3, "", "", "", "", ""])
