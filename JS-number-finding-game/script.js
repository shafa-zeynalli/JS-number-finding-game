'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  let score = document.querySelector('.score').textContent;
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'Correct number';
    displayMessage('Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else{
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
      displayMessage( guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage( 'You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  } 
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage( 'Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
