const glob = require('glob');

var result = null;
// console.time('glob');
// result = glob.sync(__dirname + '/**/*');
// console.timeEnd('glob');
// console.log(result);

console.time('glob');
glob(__dirname + '/**/*', function (err, data) {
  console.log(data);
})
console.timeEnd('glob');
console.log(1 + 1);