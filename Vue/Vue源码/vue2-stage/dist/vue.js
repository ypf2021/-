(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  //  我们希望重写数组中的部分方法
  //Array.prototype == [].__proto__
  var oldArrayProto = Array.prototype; //获取数组原型
  //newArrayProto.__proto__ ==  oldArrayProto == Array.prototype 。在newArrayProto上加东西，不会改变原数组的原型

  var newArrayProto = Object.create(oldArrayProto);
  var methods = [//找到数组的变异方法  (能改变原数组的方法)
  'push', //在最后加
  'pop', //删最后一个
  'shift', //删第一个
  'unshift', //在第一个加
  'reverse', 'sort', 'splice' //删除或替换指定位置元素
  ]; //concat slice 都不会改变原数组

  methods.forEach(function (method) {
    //arr.push(1,2,3)
    newArrayProto[method] = function () {
      var _oldArrayProto$method;

      console.log(method, '被调用了'); //谁调用的函数 this 指向谁

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var result = (_oldArrayProto$method = oldArrayProto[method]).call.apply(_oldArrayProto$method, [this].concat(args)); //在内部调用原来的方法，并照样返回。函数的劫持，切片编程


      return result;
    };
  });

  var Observer = /*#__PURE__*/function () {
    function Observer(data) {
      _classCallCheck(this, Observer);

      //Object.defineProperty 只能劫持已经存在的属性 （vue2里面会为此单独写一些api $set $delete）
      if (Array.isArray(data)) {
        //这里我们可以重写数组中的方法 7个变异方法 这几个方法是可以修改数组本身的
        //并对数组中的引用类型进行劫持
        //保留原数组特性，并且可以重写部分方法。通过重写方法对这些方法进行监听。
        data.__proto__ = newArrayProto;
        this.observeArray(data);
      } else {
        this.walk(data);
      }
    }

    _createClass(Observer, [{
      key: "walk",
      value: function walk(data) {
        //循环对象，对属性依次劫持
        // "重新定义"属性
        Object.keys(data).forEach(function (key) {
          return defineReactive(data, key, data[key]);
        });
      }
    }, {
      key: "observeArray",
      value: function observeArray(array) {
        //观测数组
        array.forEach(function (item) {
          observe(item);
        });
      }
    }]);

    return Observer;
  }();

  function defineReactive(target, key, value) {
    //闭包  属性劫持
    observe(value); //递归进行劫持，直到劫持的不是对象位置 （33行）    //对象里有对象的情况，或者对数组里的内容进行检测

    Object.defineProperty(target, key, {
      get: function get() {
        //取值时执行get
        console.log('getName', key);
        return value;
      },
      set: function set(newValue) {
        //赋值时执行set
        if (newValue == value) return; //在设置值的时候还需要进行劫持，绑定。

        observe(newValue);
        value = newValue;
      }
    });
  }
  function observe(data) {
    //对这个对象进行劫持
    if (_typeof(data) !== 'object' || data == null) {
      return; //只对对象进行劫持
    } //如果一个对象被劫持过了，那就不需要再被劫持了（要判断一个对象是否被劫持，可以增添一个实例，用实例来判断是否被劫持）


    return new Observer(data);
  }

  function initState(vm) {
    var opts = vm.$options;

    if (opts.data) {
      initData(vm);
    }
  }

  function proxy(vm, target, key) {
    Object.defineProperty(vm, key, {
      //vm.name
      get: function get() {
        return vm[target][key]; //vm._data.name
      },
      set: function set(newValue) {
        vm[target][key] = newValue;
      }
    });
  }

  function initData(vm) {
    var data = vm.$options.data; // data 可能是函数

    data = typeof data === 'function' ? data.call(this) : data; //如果是函数就执行，且要改变data的指向，然后return一个对象回来

    vm._data = data; //将data挂载到了vm上
    //拿到数据之后要对数据进行劫持 vue2里 采用了一个api defineProperty
    //vue2 的响应式原理， 对象属性的劫持

    observe(data); //将 vm._data 用 vm 来代替，写一个代理的函数

    for (var key in data) {
      proxy(vm, '_data', key);
    }
  }

  function initMixin(Vue) {
    //给Vue增加_init方法
    Vue.prototype._init = function (options) {
      //用于初始化操作
      //vue vm.$options 就是获取用户的配置
      var vm = this; //这里的this指的是实例
      //我们使用的 vue 中的 $nextTick $data $attr ... 在前面加一个 $专指一类vue的实例上的属性

      vm.$options = options; //将传入的东西挂载
      //初始化状态

      initState(vm);
    };
  }

  //这里采用  构造方法的形式

  function Vue(options) {
    // options 就是用户的选项
    this._init(options);
  }

  initMixin(Vue); //扩展了 init 方法

  return Vue;

}));
//# sourceMappingURL=vue.js.map
