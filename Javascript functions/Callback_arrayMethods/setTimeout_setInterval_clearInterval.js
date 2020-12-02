// setTimeout, calls a function and evaluates an expression after a given time in milliseconds

console.log('.. is anybody there?')
setTimeout(() => console.log('... Hello!?'), 3000);
setTimeout(() => console.log('echoooo'), 3000);

// setInterval calls a function and evaluates and expression at specified intervals in milliseconds
// it will continue calling the function, until clearInterval() in called
// the id returned by setInterval() is used as a parameter for clearInterval()

  let id = setInterval(() => {
  console.log(Math.floor(Math.random()*6)+1)
},3500);