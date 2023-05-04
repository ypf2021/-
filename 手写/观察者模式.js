// Subject
class Subject {
    constructor() {
        this.state = "开心";
        this.observers = []; // 存放观察者
    }

    // 让观察者观测自己 ， 将观察者放到自己身上
    attach(observer) {
        this.observers.push(observer);
    }

    // 更新 subject 状态
    setState(state) {
        // 状态改变
        this.state = state;
        // 通知观察者做出行动
        for (let observer of this.observers) {
            observer.update(this);
        }
    }
}

// 观察者
class Observer {
    constructor(name) {
        this.name = name;
    }
    // 观察小宝宝状态做出动作
    update(subject) {
        console.log(this.name, ":苦你嘛呢", subject.state);
    }
}

let baby1 = new Subject("小宝宝");

let father = new Observer("爹");
let mather = new Observer("妈");

baby1.attach(father);
baby1.attach(mather);

baby1.setState("unhappy");

// // 观察者
// class Observer {
//     constructor(name) {
//         this.name = name;
//     }

//     update() {}
// }

// class Sub {
//     constructor() {
//         this.observes = [];
//     }

//     attach(observe) {
//         this.observes.push(observe);
//     }

//     changeState() {
//         this.observes.forEach((item) => {
//             item.update();
//         });
//     }
// }
