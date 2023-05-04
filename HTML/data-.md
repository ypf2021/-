### HTML5中的data-* 属性

> `data-*`全局属性是一类被称为自定义数据属性的属性，它赋予我们在所有 HTML 元素上**嵌入自定义数据属性**的能力。
>
### 二、 data-*的使用

在HTML里边用data-变量名使用，如下：

`<div class="child" data-name="小红" data-age="18"></div>`

在js里有两种获取方法：

（1）dataset：所有放在data-*中的属性都在dataset中

`var dataset = document.getElementsByClassName('child')[0].dataset;`

（2）getAttribute()方法获取

`document.getElementsByClassName('child')[0].getAttribute('data-name');`
