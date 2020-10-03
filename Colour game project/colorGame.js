var colours = generateColoursArray(6);
var square = document.querySelectorAll('.square');
var title_color = document.querySelector('span');
var picked_colour = random_colour_pick();
title_color.textContent = picked_colour;
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');


for (var i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colours[i];
}

function generateColoursArray(num){
  //create and array
  var arr = []
  //repeat num times
  for (var i = 0; i < num; i++){
    //get random colour and push into arr
    arr.push(randomColour())
  }
  //return array
  return arr;
}

function randomColour(){
  //pick a red from 0-255
  var red = Math.floor(Math.random()* 256);
  //pick a green from 0-255
  var  green = Math.floor(Math.random() * 256);
  //pick a blue from 0-255
  var blue = Math.floor(Math.random() * 256);
  return 'rgb('+ red+', ' +green+', '+ blue+')'
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

function random_colour_pick() {
  //picking a random number is done with MATH.random()
  var randomColour = Math.floor(Math.random() * colours.length);
  return colours[randomColour];
}
pickColour()