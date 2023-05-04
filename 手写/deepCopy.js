function deepCopy(obj, hash = new WeakMap()) {
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    if (typeof obj !== "object") return obj;

    if (hash.has(obj)) return hash.get(obj);
    let cloneObj = new obj.construcotr();
    hash.set(obj, cloneObj);

    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            cloneObj[i] = deepCopy(obj[i], hash);
        }
    }
    return cloneObj;
}
