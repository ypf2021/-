//  problem.xml

// 拆字符串
// const _getExFilename = (filename) => {
//     let constructor = filename.split('.')
//     return ['.', constructor[constructor.length - 1]].join('')
// }

// 找索引，
const _getExFilename = (filename) => {
    let lastIndex = filename.lastIndexOf('.')
    console.log(filename.slice(lastIndex))
}







console.log(_getExFilename('problem.xml'))