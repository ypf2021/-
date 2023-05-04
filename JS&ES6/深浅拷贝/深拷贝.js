// function deep(obj) {
//     if (typeof obj !== "object") return obj;
//     let newobj = obj instanceof Array ? [] : {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             newobj[key] = typeof obj[key] === "object" ? deep(newobj[key]) : obj[key]
//         }
//     }
//     return newobj
// }


function deepCopy(obj, hash = new WeakMap()) {
    if (obj instanceof RegExp) return RegExp(obj)
    if (obj instanceof Date) return Date(obj)
    if (typeof obj !== "object") return obj
    if (hash.get(obj)) return hash.get(obj)
    let cloneObj = new obj.constructor()
    hash.set(obj,cloneObj)

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepCopy(obj[key], hash)
        }
    }
    return cloneObj
}


function deepCopy(obj, hash = new WeakMap()) {
    if (obj instanceof RegExp) return RegExp(obj)
    if (obj instanceof Date) return Date(obj)
    if (typeof obj !== 'object') return obj

    if (hash.has(obj)) return hash.get(obj) 
    let cloneObj = new obj.constructor()
    hash.set(obj, cloneObj)
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepCopy(obj[key],hash)
        }
    }
    return cloneObj
}
