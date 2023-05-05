// 输入：

// getParams('https://nowcoder.com/online?id=1&salas=1000')

// 输出：

// {id:1, salas: 100}


const _getParams = (url) => {
    // 补全代码
    let result = {}
    let params = url.slice(url.indexOf('?') + 1).split("&").map((item) => {
        return item.split('=')
    })
    // [ [ 'id', '1' ], [ 'salas', '1000' ] ]

    return Object.fromEntries(params)  //{ id: '1', salas: '1000' }
}

console.log(_getParams('https://nowcoder.com/online?id=1&salas=1000'))

console.log(_getParams('https://scriptoj.com/problems?offset=100&limit=10'))