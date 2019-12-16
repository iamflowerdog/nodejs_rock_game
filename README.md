## nodejs

#### 在控制台通过输入指令 `node index.js rock`
* process.argv[] 返回第一个参数是 node环境所在的目录 第二个参数是当前js文件所在的目录 最后一个参数是传入的参数

#### commonjs
* 通过require('./lib.js')发生的事情
```

/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

```
#### process.on监听用户的输入
* 注意在监听的时候，不能同时使用process.argv，会导致监听不生效

#### npm 大神
* TJ Holowaychunk `express`
* Mafintosh 
* Dominictarr
* npm event-stream (bitcon)

#### 递增运算符（++）
递增运算符为其操作加1，返回一个值result；
* 如果是postfix，即i++，那么将会在递增前返回这一数值（result）；
* 如果是prefix，即++i，那么将在递增后返回这一数值（result）；

#### events 
* EventEmitter 
  - 观察者模式
  - 调用vs抛事件
    1. 不知道被通知者是否存在
    2. 没有人继续听下去

#### nodejs非阻塞
* 阻塞和非阻塞区别在于，输入和输出之间是否可以做其他事情
![image](https://github.com/iamflowerdog/nodejs_rock_game/blob/master/image/nodejs.png)
* glob  读取本地文件异步方法 耗时 3.2ms，同步10ms