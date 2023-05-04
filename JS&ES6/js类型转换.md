常用的！取反
! 一个感叹号是取反，首先将值转化为布尔类型的值，然后取反
!! 两个感叹号是将其他的数据类型转换为 boolean 类型，相当于Boolean()
转换规则：
判断一个值是真还是假，遵循：只有 0 NaN “” null undefined 这五个是假，其余的都是真
此处 数字0才为假，如果是字符串的’0’,为真

判断两个值比较)是否相等，遵循：
如果是 == 比较的话，会进行默认的数据类型转换
1、对象 == 对象，永远不相等
2、对象 == 字符串 现将对象转换为字符串(调用toString的方法)，然后在进行比较
...
 [] 转换为字符串 ""
 {} 转换为字符串 "[object Object]" 
  
 [] == "" 为 true
 {} == "" 为 false
 {} == "[object Object]"  为true
...


3、对象 == 布尔类型 对象先转为字符串(toString)，然后把字符串转换为数字(Number),布尔类型也转换为数字(true是1 false 是0)，最后让两个数字比较

 console.log([] == false) // 为 true
 解析：首先 []转为字符串"",然后字符串转为数字类型number，Number("")结果为0，false
 转为数字类型，Number(false) 结果也为0，所以 [] == false, 就解析成了 0与0的比较，所以相等，
 返回true
 console.log({} == false) // 为 false
 解析：首先 {}转为字符串"[object Object]",然后字符串转为数字类型number，Number("[object Object]")结果为NaN，NaN 转为数字类型为NaN，NaN不等于任何值 返回false

4、对象 == 数字 对象先转为字符串(toString)，然后把字符串转换为数字(Number)
5、数字 == 布尔 布尔类型转换为数字
6、数字 == 字符串，字符串转换为数字
7、字符串 == 布尔 都转换为数字
8、null == undefined 结果是true
9、null和undefined 和其他任何数据类型都不相等
