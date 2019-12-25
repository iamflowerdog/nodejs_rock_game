const os = require('os');

function myCpu(data=[]) {
  const result = [];
  let i = 0;
  while (i < data.length) {
    result.push({
      model: data[i++],
      speed: data[i++]
    });
  }
  return result;
}
console.log(os.cpus());
console.log(myCpu([
  'Intel', '22', 'AMD', '23'
]));
