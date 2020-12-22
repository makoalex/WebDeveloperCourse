// creating new elements from scratch , appending it, removing it from the page
// we are first creating just the tag, which is an empty shell. we have to fill it, and then append it to the html in order for it to show
// before appending we have to select where in the html we want the tag, the parent
function myFunction(){
  const newbutton = document.createElement('button')
  newbutton.innerText = 'click again'
  document.body.appendChild(newbutton)
}

const newH1 = document.createElement('h1');
newH1.innerText= ' I am created in Js with appendchild ';
document.body.appendChild(newH1);


// when we use the APPEND only, we are appending to the end of the selected element
//  we can append more then one thing 
// and we append to the inside of the element
newH1.append(' and this is done with just append')
// we can prepend , at the beginning of an element
const newB = document.createElement('b')
newB.append('this is coming before the rest')
newH1.prepend(newB);
// INSERT ADJACENT ELEMENT

const h2= document.createElement('h2');
h2.append('Inserting is fun')
const title = document.querySelector('h1')
title.insertAdjacentElement('afterend', h2);
console.log(title.nextSibling)
const paragraph = document.createElement('p')
paragraph.append(" The good The Fitbit Versa 2 battery lasts for days and days. ... The bottom line The Versa 2 is a great hybrid of a fitness tracker and a smartwatch, but lacks built-in GPS which may be a deal-breaker for runners. It's still one of the best wearables you can buy for under $200.")
const selH2 = document.querySelector('h2');
selH2.insertAdjacentElement('beforebegin',paragraph);

// adding an image
const Image = document.createElement('img');
Image.src ="https://images-na.ssl-images-amazon.com/images/I/61JzeOC9rsL._AC_SL1500_.jpg"
Image.classList.add('square')
const par= document.querySelector('p');
par.insertAdjacentElement('afterend', Image);

// new example

const H3= document.createElement('h3');
H3.innerText= 'Buy It!'
par.after(H3)

// EXERCISE - create 100 button elements inside the container



for(let i =0; i<=100;i++){
  const Button100= document.createElement('button');
  Button100.innerText='new';
  document.getElementById('container').appendChild(Button100)
}



