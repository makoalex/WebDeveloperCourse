const option = document.getElementsByTagName('option')
const resetButton = document.querySelector('#reset');
let chosenNumber = 0;
let gameRunning = true;


let numberPlays = document.querySelector('#numberPlayers');
numberPlays.addEventListener('change', function () {
  chosenNumber = parseInt(this.value);
})

const p1 = {
  button: document.querySelector('#p1Button'),
  score: 0,
  display:document.querySelector('#p1scoreDisplay')

};
const p2 ={
  button: document.querySelector('#p2Button'),
  score: 0,
  display: document.querySelector('#p2scoreDisplay')
};


function scoreUpdate(player, opponent){
  if (gameRunning) {
    player.score++;
    if (player.score === chosenNumber) {
      gameRunning = false
      player.display.classList.add('text-success')
      opponent.display.classList.add('text-danger')
      player.button.disabled= true;
      opponent.button.disabled= true;
    }
  }
  player.display.textContent = player.score;
}



function score1() {
  p1.button.addEventListener('click', function (){
    scoreUpdate(p1, p2)
  })
}

function score2() {
  p2.button.addEventListener('click', function () {
   scoreUpdate(p2, p1)
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

  for (p of [p1,p2]){
    p.score =0;
    p.display.textContent= p.score;
    p.display.classList.remove('text-success', 'text-danger')
    p.button.disabled= false;
    selected()
  gameRunning= true
  }
  // p1.score=0;
  // p2.score=0;
   
  // p2.display.textContent= p2.score;
 
  // p2.display.classList.remove('text-success','text-danger')
 
  // p1.button.disabled = false
  
}
  score1()
  score2()
  resetGame()