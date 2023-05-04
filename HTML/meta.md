### 常见的meta标签属性
#### 一.name属性

1. viewport
定义浏览器窗口的视窗为自适应大小

`<meta name="viewport" content="width: device-width,initial-scale=1.0">`

2. keywords
指定当前页面对于搜索引擎的关键字

`<meta name="keywords" content="js,html">`

3. description
告诉搜索引擎当前页面的主要内容，firefox中被用作标签的描述。

`<meta name="description" content="this is a websit">`


4. author

标明作者

`<meta name="author" content="lyralee">`

#### 二.http-equiv属性
该属性可以改变服务器和js引擎的一些行为。

`<meta http-equiv="xxx" content="xxx"> `

1. refresh

自动刷新页面。content的内容是刷新的间隔时间（s）

`<meta http-equiv="refresh" content="1">`


2. X-UA-Compatible

IE8出现的，对于IE8+有效。指定IE8+的浏览器渲染模式。

常见类型：

- 将IE8+使用最高版本的IE对应的渲染引擎进行渲染页面

`<meta http-equiv="X-UA-Compatible" content="ie=edge">`



- 将IE8+使用IE8渲染引擎渲染页面

`<meta http-equiv="X-UA-Compatible" content="ie=8">`



- 将IE8+使用IE7渲染引擎渲染页面

`<meta http-equiv="X-UA-Compatible" content="ie=7">`



- 对于内嵌了ChromeFrame的浏览器，使用chrome的渲染引擎进行渲染

`<meta http-equiv="X-UA-Compatible" content="ie=Edge,chrome=1">`

3. Content-Type

- UTF-8
`<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">`

