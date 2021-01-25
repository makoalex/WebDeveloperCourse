const form = document.querySelector('#first');
const UsernameInput = form.elements.username;
const valInput = form.elements.comments;

form.addEventListener('submit', function(evt){
  console.log('Submitted!')
  evt.preventDefault();
  addingComment()
  removeItem()
  
})
// to get the value of an input we can use the value attribute
function addingComment(){
  const newL = document.createElement('li');
  const bTag= document.createElement('b');
  bTag.append(UsernameInput.value);
  newL.append(bTag);
  newL.append(bTag, `: ${valInput.value}`);
  const list = document.querySelector('ul').append(newL);
  UsernameInput.value =""
  valInput.value= ""
  return list;
}

function removeItem(){
  const ul= document.querySelector('ul');
  ul.addEventListener('click',function(e){
    console.log('clicked')
    console.dir(e.target)
    e.target.nodeName==='LI'&& e.target.remove();
    e.target.nodeName=== 'B' && e.target.remove()
  })
}

removeItem()