// console.log('hello lib');

exports.a = 'nihao';

exports.add = function (a, b) {
  return a + b;
}

exports.hello = { nice: 'hhh'}

module.exports = function () {
  
}
setTimeout(function () {
  console.log(exports);
}, 2000)