function queryString(obj) {
    let str = '';
    for (let attr in obj) {
        str += `${attr}=${obj[attr]}&`
    }
    return str.substr(0, str.length - 1)
}

/*
    type 代表 请求方式
    url  代表 请求url路径
    data 代表 发送数据
    success 代表 下载数据成功以后执行的函数
    error   代表 下载数据失败以后执行的函数
*/

export function $ajax(type, url, data, success, error) {
    try {
        const xhr = new XMLHttpRequest();
    } catch {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    if (type == 'get' && data) {
        url += `?${queryString(data)}`
    }
    xhr.open(type, url, true)

    if (type == 'get') {
        xhr.send()
    } else {
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
        data ? xhr.send(queryString(data)) : xhr.send()
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (success) {
                    success(xhr.responseText)
                }
            } else {
                if (error) {
                    error('ERROR:' + xhr.status)
                }
            }
        }
    }
}
