const eventobj= document.querySelector('button');
eventobj.addEventListener('click', function(e){
  console.log(e)
})

const eventKey= document.querySelector('input');
eventKey.addEventListener('keydown',function(evt){
  console.log(evt);
  console.log(evt.key)
  console.log(evt.code)

})
window.addEventListener('keydown', function(e){
  switch(e.code)
  {
    case 'ArrowUp':
      console.log('GOING UP!')
      break
    case 'ArrowLeft':
      console.log('GOING LEFT!')
      break
    case 'ArrowDown':
      console.log('GOING DOWN!')
      break
    case 'ArrowRight':
      console.log('GOING RIGHT!')
      break
    default:
      alert('WRONG KEY')
      break

  }
})
