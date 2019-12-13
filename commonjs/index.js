
const game = require('./lib');

// var userAction = process.argv[process.argv.length - 1];
// let result = game(userAction);

let winCount = 0;
process.stdin.on('data', (buffer) => {
  const userAction = buffer.toString().trim();
  const result = game(userAction);
  if (result == 1) {
    winCount++;
    if (winCount == 3) {
      console.log('我不玩了，你太牛逼了!');
      process.exit();
    }
  }
})  