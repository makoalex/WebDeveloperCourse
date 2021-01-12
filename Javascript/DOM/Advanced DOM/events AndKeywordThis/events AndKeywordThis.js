const buttonSelect = document.querySelectorAll('button');
 
function random(){
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  switch(r,g,b){
    case r<100 && g<100 &&b<100:
      buttonSelect.style.color= white;
      break

  }
  return`rgb(${r},${g},${b})`
}
function buttonClik(){
  for(let b of buttonSelect){
    b.addEventListener('click',colour)
  }
}

function colour(){
  this.style.backgroundColor= random();
  this.style.color= random();
}

buttonClik()