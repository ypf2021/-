###  DOCTYPE 有什么作用？怎么写？
- <!DOCTYPE> 声明大小写不敏感。
- 用 W3C 的验证器来检查是否编写了有效的 HTML / XHTML 文档
- <!DOCTYPE> 声明必须是 HTML 文档的第一行，位于 `<html>` 标签之前。
- <!DOCTYPE> 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个HTML 版本进行编写的指令。
- DOCTYPE都是标准的文档类型，无论使用哪种模式完整定义DOCTYPE，都会触发标准模式，而如果DOCTYPE缺失则在ie6，ie7，ie8下将会触发怪异模式（quirks 模式）
