function myInstance(left, right) {
    let rPrototype = right.prototype;
    let lProto = left.__proto__;
    while (true) {
        if (rPrototype == lProto) {
            return true;
        }
        if (lProto === null) {
            return false;
        }
        lProto = lProto.__proto__;
    }
}
