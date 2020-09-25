var player1 = document.getElementById('one');
var player2 = document.getElementById('two');
var first_score = document.getElementById('first_score');
var second_score = document.querySelector('#second_score');
var resetScore = document.getElementById('reset');
var inputNumber = document.querySelector('input');
var player1_score = 0;
var player2_score = 0;
var gameOver = true;
var number_plays = 5;

function player_one() {
  player1.addEventListener('click', function () {
    if (gameOver) {
      player1_score++
      console.log(player1_score, number_plays);
      if (player1_score === number_plays) {
        first_score.classList.add('winner');
        alert('player one won');
        gameOver = false;
      }
      first_score.textContent = player1_score;
    }
  });
  return first_score;
}


function player_two() {
  player2.addEventListener('click', function () {
    if (gameOver) {
      player2_score++;
      if (player2_score === number_plays) {
        second_score.classList.add('winner');
        alert('Player 2 won!');
        gameOver = false;
      }
      second_score.textContent = player2_score;
    }
  });
  return player2;
}

function reset() {
  resetScore.addEventListener('click', function () {
    player1_score = 0;
    player2_score = 0;
    first_score.textContent = player1_score;
    second_score.textContent = player2_score;
    first_score.classList.remove('winner');
    second_score.classList.remove('winner');
    gameOver= true;
  });
  return resetScore
}

function input(){
  choseNumber = document.querySelector('p span');
  inputNumber.addEventListener('input', addValue);
  function addValue(e){
    choseNumber.textContent = e.target.value;
    number_plays = Number(this.value ); 
  }
}

function reset_game (){
  inputNumber.addEventListener('click', function(){
    reset();
  })
}


  player_one()
  player_two()
  reset()
  input()
  reset_game()