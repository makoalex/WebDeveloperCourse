const player1ScoreDisplay = document.querySelector('#p1scoreDisplay');
const option = document.getElementsByTagName('option')
const player2ScoreDisplay = document.querySelector('#p2scoreDisplay');
let numberPlays = document.querySelector('#numberPlayers');
const player1Button = document.querySelector('#p1Button');
const player2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
let player1Score = 0;
let player2Score = 0;
let chosenNumber = 0;
let gameRunning = true;

numberPlays.addEventListener('change', function () {
  chosenNumber = Number(this.value);
})

function addColour() {

}

function removeColour() {
  player1ScoreDisplay.classList.remove('winner')
  player2ScoreDisplay.classList.remove('winner')
  player1ScoreDisplay.classList.remove('loser')
  player2ScoreDisplay.classList.remove('loser')
}

function score1() {
  player1Button.addEventListener('click', function () {
    if (gameRunning) {
      player1Score++;
      if (player1Score === chosenNumber) {
        gameRunning = false
        player1ScoreDisplay.classList.add('winner')
        player2ScoreDisplay.classList.add('loser')
        alert('player 1 wins')
      }
    }
    player1ScoreDisplay.textContent = player1Score;
  })
}

function score2() {
  player2Button.addEventListener('click', function () {
    if (gameRunning) {
      player2Score++;
      if (player2Score === chosenNumber) {
        gameRunning = false
        player2ScoreDisplay.classList.add('winner')
        player1ScoreDisplay.classList.add('loser')
        alert('player 2 wins');
      }
    }
    player2ScoreDisplay.textContent = player2Score;
  })
}

function selected(){
  for(let i = 0; i < option.length; i++){
    option[i].selected= option[i].defaultSelected
  }
}

function resetGame() {
  resetButton.addEventListener('click', reset)
}
function reset (){
  player2Score=0;
  player1Score=0;
  player1ScoreDisplay.textContent= player1Score; 
  player2ScoreDisplay.textContent= player2Score;
  removeColour()
  selected()
  gameRunning= true
}
  score1()
  score2()
  resetGame()