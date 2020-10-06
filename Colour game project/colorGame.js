var num = 6
var colours = generateColoursArray(num);
var square = document.querySelectorAll('.square');
var title_color = document.querySelector('span');
var picked_colour = random_colour_pick();
title_color.textContent = picked_colour;
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
resetButton = document.getElementById('reset');
var body = document.querySelector('body');
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');

function pick_squareColour() {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colours[i];
  };
}

function easyLevel() {
  easy.addEventListener('click', function () {
    easy.classList.add('selected');
    hard.classList.remove('selected');
    num = 3;
    colours = generateColoursArray(num);
    picked_colour = random_colour_pick()
    title_color.textContent = picked_colour;
    for (var i = 0; i < square.length; i++) {
      if (colours[i]) {
        square[i].style.backgroundColor = colours[i];
      } else {
        square[i].style.display = 'none';
      }
    }
  });
}

function hardLevel() {
  hard.addEventListener('click', function () {
    hard.classList.add('selected');
    easy.classList.remove('selected');
    num = 6
    colours = generateColoursArray(num)
    for (var i = 0; i < square.length; i++) {
      square[i].style.display = 'block';
    }
  });
}


function New_colours() {
  resetButton.addEventListener('click', function () {
    //generate all new colour
    colours = generateColoursArray(num);
    //pick a new random colour from the array
    picked_colour = random_colour_pick();
    // change the colour display to match the picked square
    title_color.textContent = picked_colour;
    //change colours of the squares
    pick_squareColour();
    h1.style.backgroundColor = body.style.backgroundColor;
    resetButton.textContent = 'New Colours';
  })
}


function generateColoursArray(num) {
  //create and array
  var arr = []
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random colour and push into arr
    arr.push(randomColour())
  }
  //return array
  return arr;
}

function randomColour() {
  //pick a red from 0-255
  var red = Math.floor(Math.random() * 256);
  //pick a green from 0-255
  var green = Math.floor(Math.random() * 256);
  //pick a blue from 0-255
  var blue = Math.floor(Math.random() * 256);
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
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
  resetButton.textContent = 'Play Again';
}

function random_colour_pick() {
  //picking a random number is done with MATH.random()
  var randomColour = Math.floor(Math.random() * colours.length);
  return colours[randomColour];
}

pick_squareColour()
pickColour()
New_colours()
easyLevel()
hardLevel()