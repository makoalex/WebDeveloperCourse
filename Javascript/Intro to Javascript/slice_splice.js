let colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let coolColours = colours.slice(4);
let warmColours = colours.slice(0,4);
let newColour = colours.splice(1,0, 'coral');
let anotherColour = colours.splice(5,1, 'aquamarine')
console.log(newColour);
console.log(anotherColour);
console.log(colours);
