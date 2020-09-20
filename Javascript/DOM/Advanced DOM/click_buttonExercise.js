var button = document.querySelector('button');
var body = document.querySelector('body');
is_purple = false;
button.addEventListener('click', function(){
  if (is_purple){
    document.body.style.background = 'white'
  }else{
    document.body.style.background = 'purple'
  }
  is_purple=! is_purple;
})


// or it can be done with classList and toggle
// creating a class in the style tag in HTML
button.addEventListener('click', function(){
  document.body.classList.toggle('purple');
})
