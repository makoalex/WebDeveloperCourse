// selecting and manipulating with DOM- basic example
//just like CSS we can select elements and apply styles
// with JS we write code that selects elements, and returns them back to us so we can change the way they look

var h1 = document.querySelector('h1');
h1.style.color = 'red';

var p = document.querySelector('div');
p.style.background = 'pink';

//changing the background colour
var body = document.querySelector('body');
is_colour = false;
setInterval(function () {
  if (is_colour) {
    body.style.background = '#e08d90';
  } else {
    body.style.background = '#e0a275';
  }
  is_colour = !is_colour;
}, 1000);