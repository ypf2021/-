
function myInstance(leftVal, rightVal) {
    rightPro = rightVal.prototype;
    while (true) {
        leftVal = leftVal.__proto__
        if (leftVal == null) return false
        if (leftVal === rightPro) return true
    }
}






