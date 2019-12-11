// console.log('start');
// 通过require() 引入的js文件，先执行，然后会返回一个exports对象
var lib = require('./lib');
console.log(typeof lib);
lib.asyc = 'asyc';
console.log(lib);