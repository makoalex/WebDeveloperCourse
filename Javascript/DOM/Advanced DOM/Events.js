//syntax: element.addEventListener('type', function - code we want to run when the event happens)

var para = document.querySelector('h3');
para.addEventListener('click', function () {
  alert('the Title was clicked');
})

var h1 = document.querySelector('h1');
h1.addEventListener('mousemove', function() {
  h1.style.background = 'pink';
})
h1.addEventListener('mouseleave', function(){
  h1.style.background = 'white';
})

// if we want for example to change the colour of the list  elements we have to loop through them:
// inside the even listener, this refers to the lists

var lists = document.querySelectorAll('li');
for (var i = 0; i < lists.length; i++){
  lists[i].addEventListener('click', function () {
    this.style.color = 'orange';
  });
}