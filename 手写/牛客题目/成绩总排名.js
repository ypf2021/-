// 请补全JavaScript代码，要求将数组参数中的对象以总成绩(包括属性"chinese"、"math"、"english")从高到低进行排序并返回。
const _rank = array => {
    // 补全代码
    array.sort((left, right) => {
        return (right.chinese + right.math + right.english) - (left.chinese + left.math + left.english)
    })
    return array
}

console.log(_rank([{ name: 'nowcoder1', chinese: 73, math: 80, english: 72 }, { name: 'nowcoder2', chinese: 59, math: 53, english: 36 }, { name: 'nowcoder3', chinese: 94, math: 96, english: 94 }]))