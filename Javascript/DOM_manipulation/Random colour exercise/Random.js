const h1 = document.querySelector('h1');
const buttonColour = document.querySelector('#button');
const bodySelect= document.querySelector('body');

function colour() {
const red = Math.floor(Math.random()*256);
const green= Math.floor(Math.random()*256)
const blue = Math.floor(Math.random()*256)
if ( red<100 && green< 100&& blue < 100){
  h1.textContent= white;
}
return`rgb(${red}, ${green}, ${blue})`
}


function buttonChange(){
  buttonColour.addEventListener('click', function(){
    bodySelect.style.backgroundColor = colour();
  })
}
function titleChange(){
  buttonColour.addEventListener('click', () => h1.textContent = colour())
}
 
buttonChange()
titleChange()

