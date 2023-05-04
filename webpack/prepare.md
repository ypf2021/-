# webpack高级！

## 提高开发体验

### SourceMap
当我们打包了一个js文件，但是这个js文件给写错了，在页面中使用某个错误语句时，会在控制台报错，但去查看这个错误的文件时，查看到的是打包编译后的js代码，不能直观的发现源代码的错误。
>而`sourceMap`是一个用来生成源代码与构建后代码一一映射的文件的方案
它会生成一个xoox.map文件，里面包含源代码和构建后代码每一行、每一列的映射关系。当构建后代码出错了，会通过xxx.map文件，从构建后代码出错位置找到映射后源代码出错位置，从`而让浏览器提示源代码文件出错位置，帮助我们更快的找到错误根源。`

#### 怎么用

![image-20220922210652980](C:/Users/yxr/AppData/Roaming/Typora/typora-user-images/image-20220922210652980.png)

## 提升打包速度

### HotModuleReplacement

> HMR 热模块替代，在程序运行中，替换，添加，或删除**模块**，而无需重新加载整个页面

减少打包时间

在webpack5中是默认启动的

#### 怎么用

![image-20220922211707619](C:/Users/yxr/AppData/Roaming/Typora/typora-user-images/image-20220922211707619.png)



#### js热更新

上面的热模块替代只要争对的是模块，要解决js的热更新需要这样

在js代码中 main.js：

```js
if(module.hot){
	//判断是否支持热模块替代
	module.hot.accept("./js/count")
	module.hot.accept("./js/sum")
}
```

但这样文件多了的话很费劲

所以一般在项目中`vue-loader`和`react-hot-loader`都内置了 



### OneOf

在进行打包的过程中，一个资源要匹配打包的rules，需要挨个进行匹配，会耗费不少时间。就算匹配到了，也不会停下来，会一直匹配完

> oneOf保证匹配成功一个之后，就不再接着匹配其他的



#### 怎么用

原本是这样子的

![image-20220922212938386](C:/Users/yxr/AppData/Roaming/Typora/typora-user-images/image-20220922212938386.png)

**然后把rules都放再一个对象中，然后对象里面有个 oneOf数组，把这些rules粘到里面**

![image-20220922213119758](C:/Users/yxr/AppData/Roaming/Typora/typora-user-images/image-20220922213119758.png)

### Include/Exclude

#### 为什么

开发时我们使用的第三方插件或库，都下载到了node_modules中，而这些文件都是不需要编译直接使用的，所以我们在对文件进行处理时，需要排除 node_modules下的文件

####  是什么

- include

只处理某些文件

- exclude

排除某种文件

#### 怎么用

![image-20220922215020400](C:/Users/yxr/AppData/Roaming/Typora/typora-user-images/image-20220922215020400.png)

![image-20220922215221274](C:/Users/yxr/AppData/Roaming/Typora/typora-user-images/image-20220922215221274.png)

### cache

#### 为什么

每次打包时js文件都要经过Eslint检查和Babel编译，速度比较慢。

我们可以缓存之前的Eslint检查和Babel编译结果，这样第二次打包时速度就会更快了。

#### 是什么

对 `ESLint检查`和 `Bable`编译结果进行缓存

只对修改过的文件，进行检查和编译

提高第二次及以后的打包速度				

#### 怎么用

![image-20220922221124284](C:/Users/yxr/AppData/Roaming/Typora/typora-user-images/image-20220922221124284.png)

![image-20220922221501336](C:/Users/yxr/AppData/Roaming/Typora/typora-user-images/image-20220922221501336.png)

### Thead

 ## 减少代码体积

### Three Shaking

#### 为什么

当我们应用第三库时，我们可能只用其中的一部分功能，我们不能把整个库都打包进来，

#### 是什么

`Three Shaking`是一个术语，通常用于描述移除 JavaScript 中没有使用上的代码

**注意：依赖于 `ES Module`**

#### 怎么用

webpack默认开启，不需要其他配置

### Bable

#### 是什么

`@babel/plugin-transform-runtime`: 禁用了 Bable 对每个文件的 runtime 注入，而是引入

 `@babel/plugin-transform-runtime`，并且使所有辅助代码从这里引用。

#### 为什么

Babel为编译的每个文件都插入了辅助代码，使代码体积过大!

Babel对一些公共方法使用了非常小的辅助代码，比如`_extend `。默认情况下会被添加到每一个需要它的文件中。

你可以将这些辅助代码作为一个独立模块，来避免重复引入。

#### 怎么用

1. 下载

   `npm i @babel/plugin-transform-runtime -D`

2. 配置：在babel-loader中加入

3. ![image-20220923150111563](C:/Users/yxr/AppData/Roaming/Typora/typora-user-images/image-20220923150111563.png)

### Image Minimizer



#### 是什么

`image-minimizer-webpack-plugin`：压缩图片插件

#### 为什么

项目中如果本地图片多了，图片体积就比较大，请求速度也会变慢，就可以对图片进行压缩，减少体积

**注意：只对本地图片进行压缩，在线连接的图片不处理**

#### 怎么用

1. 下载包

```
npm i image-minimizer-webpack-plugin -D
```

还有剩下包要下载，有两种模式

- 无损压缩

  ```
  npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D
  ```

- 有损压缩

```
	npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo -D
```



## 优化代码运行性能

### Code Split

#### 是什么

代码分割(Code Split)主要做了两件事:
1.分割文件:将打包生成的文件进行分割，生成多个js文件。⒉按需加载:需要哪个文件就加载哪个文件。

#### 为什么

打包代码时会将所有js文件打包到一个文件中，体积太大了。我们如果只要渲染首页，就应该只加载首页的js文件，其他文件不应该加载。
所以我们需要将打包生成的文件进行代码分割，生成多个js 文件，渲染哪个页面就只加载某个js文件，这样加载的资源就少，速度就更快。



![image-20220924190425454](C:/Users/yxr/AppData/Roaming/Typora/typora-user-images/image-20220924190425454.png)

![image-20220924190432091](C:/Users/yxr/AppData/Roaming/Typora/typora-user-images/image-20220924190432091.png)