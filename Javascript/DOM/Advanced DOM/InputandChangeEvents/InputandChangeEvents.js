const input1= document.querySelector('input');
const input2= document.querySelector('#two');
h1= document.querySelector('h1');
input1.addEventListener('change', () =>{console.log('change event activates only when we BLUR the input. click away')})


// input2.addEventListener('input',() =>{
//   console.log('This triggers when the value has been changed. it is triggered whenever the value is changed')
//   h1.innerText= input2.value;
// })    

input2.addEventListener('input', function(){
  switch(input2.value){
    case '':
      h1.innerText = 'welcome';
      break;
    default:
      h1.innerText= input2.value;
      break;
  }
  console.dir(h1)
})