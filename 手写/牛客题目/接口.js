// 请补全JavaScript代码，完成函数的接口功能。要求如下：
// 1. 函数接收两种类型的参数，分别为"get?"和"update?name=xxx&to=yyy"，"name"、"to"为参数，"xxx"、"yyy"分别为参数对应的值。
// 2. 当参数为"get?"时，返回data数据
// 3. 当参数为"update?name=xxx&to=yyy"时，将data中所有"name"为"xxx"的项，更改为"name"值为"yyy"

let data = [
    { name: 'nowcoder1' },
    { name: 'nowcoder2' }
]

const _api = string => {
    // 补全代码
    let type = string.split("?")[0]

    let params = string.split("?")[1] ? Object.fromEntries(string.split("?")[1].split("&").map((item) => {
        return item.split("=")
    })) : undefined

    if (type == 'get') {
        return data
    } else if (type == 'update') {
        data.forEach(item => {
            if (item.name == params.name) {
                item.name = params.to
            }
        })
        return data
    }
}

// _api('get?')

// console.log(_api('update?name=nowcoder2&to=nowcoder999'))
// console.log(_api('get?'))

function test() {
    _api('update?name=nowcoder2&to=nowcoder999');
    let data = _api('get?');
    return data[1].name === 'nowcoder999'
}
console.log(test())