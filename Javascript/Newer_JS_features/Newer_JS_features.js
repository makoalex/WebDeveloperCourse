// DEFAULT PARAMS
// in JS DEFAULT FUNCTION PARAMETER allows the use of a named parameter with default values, in case none are given

 function rollDye(numberFaces = 4){
    return Math.floor(Math.random() * numberFaces)+1;
 }

//  if nothing is passed it uses 4

function greet (name, msg='Good day!'){
  return `${msg}, ${name}`
}
//  in the case of multiple arguments, the default should come first 

                       // SPREAD (...)


// allows an iterable to be expanded in places where 0 or more arguments are expected (for function calls) or an object expression to be expanded in places where 0 or more key.value pairs are expected

let nums = [14,98, 56,32, 12, 11, 23, 187];
function maxx (){
  return(Math.max(...nums));
}

function minn (){
  console.log(Math.min(...nums));
}
//  it can be used with array literals
let pet1 = ['pet1', 'pet2', 'pet3', 'pet4'];
let pet2= ['parrot', 'puppy', 'kitten', 'chinchilla'];
let allPets = [...pet1, ...pet2];
console.log(allPets);

// can use it to copy properties from one object to the other

let dogs = {legs: 4, family: 'Caninae'}
let parrots ={legs: 2, family: 'Psittacidae'}
let news= {...dogs, ...parrots};
console.log(news);
// the last item copied will win when the conflict 
// we can also spread an array or string into an object, the indices will be the keys
const numbers =[1,2,3,4];
const newNum = {...numbers};
console.log(newNum);

// REST PARAMETER
// allows the use of an indefinite number of arguments as an array

function sum (...list){
  return list.reduce((total, el) => total+el)
}
sum(1,2,3,4,5,78,100)


// DESTRUCTURING ARRAYS 

//  makes it possible to unpack values from arrays or properties from objects into distinct variables

const winner = ['Tim', 'kate', 'Michelle', 'Mike', 'Pompeii'];
const [gold, silver, ...everyone] = winner;
 
let shopping = ['apple', 'banana', 'celery', 'brocoli','carrots','peas']
let [fruit, tropical_fruit, ...veggies]= shopping;

// DESTRUCTURING OBJECTS

const user = {
  username: 'mako',
  firstName: 'Macovei',
  lastName: 'Alexandra',
  email :'makotaco@gmail.com',
  birth: 1984,
  city: 'Oslo',
  country: 'Norway'
}
// extracting the info is done using the info that exists
const {lastName} = user;

//  if we want to create a new variable name using : and new variable name we want
const {firstName: first_name}= user;

// if we want to add a default value to the object
const {yearDeath='N/a'}= user;

// DESTRUCTURING PARAMETERS

// using the user we created above
function name(user){
  const {firstName, lastName} =user
  return `${firstName} ${lastName}`;
}
// second method is by destructuring on the way into the function, if we don't need any of the other properties from the object

function fullName ({firstName, lastName}){
  return `${firstName} ${lastName}`;
}


let movies= [
  {
    title: 'Iron Man',
    score: 95,
    year: 2008
  },
  {
    title: 'Avengers',
    score: 90,
    year: 2012
  },
  {
    title: 'Ant Man',
    score: 60
  },
  {
    title: 'Guardians of the Galaxy vol 1',
    score: 100
  },
  {
    title: 'The Shawshank redemption',
    score: 99,
    year: 1994
  },
  {
    title: 'The Green Mile',
    score: 85,
    year: 1999
  },
]

function score({score}){
  return  movies.filter(({score})=> score>95)

}

function name({score}){
  return movies.filter(({score}) => score > 95).map(m =>m.title)
}