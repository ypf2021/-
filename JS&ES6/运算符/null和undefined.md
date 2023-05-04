### null 和 undefined 的不同点
- 在使用typeof运算符进行检测时，Undefined类型的值会返回undefined.而Null类型的值返回为object
- 在进行数值类型的转换时，undefined会转换为NaN,无法参与计算，而null会转换为0,可以参与计算。
- undefined 意思是 定义但为赋值，null表示不存在为空
-  === 时为false

### 出现场景
>1.NULL：
>①用作函数的参数，表示该函数的参数不是对象。
>②用作对象原型链的终点。

>2.undefined：
>①函数没有返回值时，默认返回undefined。
>②变量已声明，没有赋值时，为undefined。
>③对象中没有赋值的属性，该属性的值为undefined。
>④调用函数时，应该提供的参数没有提供，该参数等于undefined。
