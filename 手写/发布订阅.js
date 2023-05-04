class SubPub {
    constructor() {
        // 时间总线
        this.events = {};
    }

    // 发布
    publish(type, ...args) {
        if (!this.events[type]) {
            throw Error("没有这个任务");
        }
        for (let cb of this.events[type]) {
            cb(...args);
        }
    }

    // 订阅
    subscribe(type, cb) {
        if (!this.events[type]) {
            this.events[type] = [];
        }
        // 添加回调
        this.events[type].push(cb);
    }
}

let pubsub = new SubPub();

let warTaskCb = function (warInfo) {
    console.log("宗门殿发布战斗任务，任务信息:" + warInfo);
};

// 订阅一个任务， 任务类型，回调
pubsub.subscribe("warTask", warTaskCb);

pubsub.publish("warTask", "他他开");
