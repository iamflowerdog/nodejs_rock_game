
var userAction = process.argv[process.argv.length - 1];

console.log('userAction ' +  userAction);
var computerAction;
var random = Math.random() * 3;

if (random < 1) {
  computerAction = 'rock';
} else if (random > 2) {
  computerAction = 'scissor';
} else {
  computerAction = 'paper';
}
console.log('computerAction ' + computerAction);

if (userAction === computerAction) {
  console.log('tie');
} else if (
  (computerAction === 'rock' && userAction === 'paper') || 
  (computerAction === 'paper' && userAction === 'scissor') ||
  (computerAction === 'scissor' && userAction === 'rock')
) {
  console.log('you win!');
} else {
  console.log('you lose');
}
