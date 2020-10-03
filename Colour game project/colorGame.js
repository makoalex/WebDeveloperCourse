var colours = [
  " rgb(252, 3, 186)",
  "rgb(171, 2, 127)",
  "rgb(140, 1, 104)",
  "rgb(120, 2, 89)",
  "rgb(92, 0, 68)",
  "rgb(74, 1, 55)"
];
var square = document.querySelectorAll('.square');
var title_color = document.querySelector('span');
var picked_colour = random_colour_pick();
title_color.textContent = picked_colour;
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');


for (var i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colours[i];
}



function pickColour() {
  for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', function () {
      var clicked_colour = this.style.backgroundColor;
      if (clicked_colour === picked_colour) {
        messageDisplay.textContent = 'Correct!';
        rightAnswerColour(picked_colour)
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try again';
      }
    });
  }
}

function rightAnswerColour(colour) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colour;
  }
  h1.style.backgroundColor = colour;
}

function random_colour_pick(){
  //picking a random number is done with MATH.random()
 var randomColour=  Math.floor(Math.random()*colours.length);
 return colours[randomColour];
}
pickColour()