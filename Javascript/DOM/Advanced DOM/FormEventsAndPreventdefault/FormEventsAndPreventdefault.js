const form = document.querySelector('#first');
form.addEventListener('submit', function(evt){
  console.log('Submitted!')
  evt.preventDefault();
  addingComment()
})
// to get the value of an input we can use the value attribute
function addingComment(){
  const UsernameInput = form.elements.username.value;
  const valInput = form.elements.comments.value;
  const newL = document.createElement('li');
  const bTag= document.createElement('b');
  bTag.append(UsernameInput);
  newL.append(bTag);
  console.log(valInput);
  newL.append(bTag, `: ${valInput}`);
  const list = document.querySelector('ul').append(newL);
return list ;
}