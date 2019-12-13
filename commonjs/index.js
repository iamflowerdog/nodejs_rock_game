// console.log('start');
// 通过require() 引入的js文件，先执行，然后会返回一个exports对象
/**
 * 通过require引入('./lib')，发生的情况
 * 1. 创建一个空的module对象
 * 
 */
var lib = require('./lib');
console.log(typeof lib);
lib.asyc = 'asyc';
console.log(lib);
