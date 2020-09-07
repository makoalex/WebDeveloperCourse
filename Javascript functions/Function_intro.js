// Syntax is 
//function NAME() {
 // CODE TO BE EXECUTED
//}
// semicolons are used to separate executable JS code. since a function declaration is not executable, we don't use a semicolon after
function MyNameIs(){
  console.log('My name is Alexandra');
}
MyNameIs();

function text(){
  console.log("Aquila non capit musca. Laocoon ardens suma decurrit ab arcae et procul: O miseri que tanta insania cives");
}
text();

// PARAMETERS/ ARGUMENTS, is how we can write functions that take inputs and make it easier to write code. 
//Parameters are passed in the function declaration while ARGUMENTS are passed in later

function math(number){
  console.log(num*num);
}
math(10);

function greeting(name){
  console.log("hey there"+" "+ name);
}
greeting("Mary")

// function can also have multiple parameters
// if we don't fill in one of the parameters , it's going to be print out as undefined when we call the function
// in other programming languages, this would throw an error, but NOT in Javascript, which means that we have to be extra careful
function are(length, width){
  console.log(length* width);
}
are(10, 5);

//RETURN STATEMENT- end the execution of the function  and specifies a function to be returned to the function caller
// captured the values that is coming out of the function 
// it can be stored in a variable

var str = 'paris';
function capitalize(str){
  return str.charAt(0).toLowerCase + str.slice(1);
}

function math(n){
  return n*20;
}



//FUNCTION EXPRESSIONS- a JS function can also be defined using an expression 
// a FUNCTION EXPRESSION can be stored in a VARIABLE
// the variable can be overwritten if we assign it to something else

var math = function(name) {return 'this is '+ name}
