function shallowCopy(obj) {
    if (typeof obj !== "object") return;

    let newObj = Array.isArray(obj) ? [] : {};
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            newObj[i] = obj[i];
        }
    }
    return newObj;
}
