'use strict';

let secretNumber = Math.trunc(Math.random() * 19 + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;
const selectMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    selectMessage('🔴NOT A NUMBER🔴');
    //NUMBER CANT BE GUESSED
  } else if (guess === secretNumber) {
    selectMessage('✔CONGRATULATIONS!!🎉');
    document.querySelector('.number').textContent = secretNumber;
    score === 20 ? (score = score) : score++;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //RIGHT NUMBER
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? selectMessage('👇A LITTLE LESS👇')
        : selectMessage('☝A LITTLE MORE☝');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      selectMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.background = 'red';
    }
  }
  //WRONG NUMBER
});

//-------------------------------------------------------------------------
//Game challange N#1
/*Implement a game rest functionality so that the game
player can make a new guess! here is how:

1.Select the element with the "again" class and attach a click
event handler
2.In the handler function, restore initial values of the score
and number variables
3.Restore the initial conditions of the message, number, and guess
input field
4.Also restore the original background (#222)
and number width (15rem)
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 19 + 1);

  selectMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
