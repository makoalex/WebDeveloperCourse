// in order to stop event bubbling ( the order in which event handlers are called, and one element is nested inside others that might also have a listener for the same event)
const selectButton = document.querySelector('button');
selectButton.addEventListener('click',(e) =>{e.stopPropagation() })


const change = document.querySelector('#change');
const hide = document.querySelector('#hide');
const divColour= document.querySelector('#container');
makeRandom= () =>{
  const red = Math.floor(Math.random()*256);
  const green = Math.floor(Math.random()*256);
  const blue = Math.floor(Math.random()*256);
  return `rgb(${red},${green},${blue})`;
}
change.addEventListener('click',function(e){
  divColour.style.backgroundColor= makeRandom();
  e.stopPropagation();
})

divColour.addEventListener('click', function(e){
  this.classList.toggle('hide')
})
