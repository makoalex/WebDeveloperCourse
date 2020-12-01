//  Arrow functions allow us to write shorter function syntax

// BEFORE

let hello = function(){
  return 'hello world';
}

// with ARROW FUNCTION

let hei = () => {
  return "hei there";
}

const add = (x,y) => {
  return x+y;
}

// if the function has 1 parameter, using the parenthesis is optional
const square = i => i*i
const squar = i =>{
  return i*i;
}

// if the function has only 1 statement and that statement return a value, we can remove the brackets and the return keyword

let print = () => "hello world";

const rollDie = () => Math.floor(Math.random()*6)+1
// removing the return keyword
const greet = (str) => `Hey ${str}`;
// removing the brackets
const hi = str => `Hei there ${str}`; 
const addition = (a,b) => a+b;
//  or we can have parenthesis as well in the implicit return , but oky if there is one statement 
const random = () => (Math.floor(Math.random()* 100)+1)

let movies= [
  {
    title: 'Iron Man',
    score: 95
  },
  {
    title: 'Avengers',
    score: 90
  },
  {
    title: 'Ant Man',
    score: 60
  },
  {
    title: 'Guardians of the Galaxy vol 1',
    score: 100
  }
]
const mapp = movies.map((i) => i.title)