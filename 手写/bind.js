Function.prototype._bind = function (TargetThis, ...args) {
    const _self = this;

    const bindFn = (...reset) => {
        _self.call(TargetThis, ...args, ...reset);
    };
    return bindFn;
};


