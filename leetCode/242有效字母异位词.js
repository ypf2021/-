var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let recordArr = Array(26).fill(0);
    let base = 'a'.charCodeAt()

    for (const i of s) {
        recordArr[i.charCodeAt() - base]++;
    }
    console.log(recordArr)


    for (const i of t) {
        if (!recordArr[i.charCodeAt() - base]) return false
        recordArr[i.charCodeAt() - base]--
    }
    console.log(recordArr)

    return true

};

console.log(isAnagram("dgqztusjuu", "dqugjzutsu"))