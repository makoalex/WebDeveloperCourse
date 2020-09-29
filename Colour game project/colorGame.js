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
var picked_colour = colours[3];
title_color.textContent = picked_colour;
var messageDisplay = document.querySelector('#message');


for (var i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colours[i];
}



function pickColour() {
  for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', function () {
      var clicked_colour = this.style.backgroundColor;
      if (clicked_colour === picked_colour) {
        alert('Clicked');
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try again';
      }
    });
  }
}
pickColour()