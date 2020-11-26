// let and const variables are blocked scoped while VAR is function scoped

// function setWidth(){
//   var width = 100;
//   console.log(width);
// }
// // if we try to call var outside the function it won't work, as it is function scoped 
// console.log(width);

// // outside of a function , in global scope it is available
// // it is also not limited by curly braces
// var age = 70;
// if (age>20){
//   var dogYears= age*7;
//   console.log(`You are $(dogYears) dog years old!`)
// }
// // var dogYears will be available , as it is not block scoped
// // LET AND CONST RATHER THAN BEING SCOPED TO THE FUNCTION ARE SCOPED TO THE BLOCK- WHAT WE HAVE BETWEEN CURLY BRACES

// var age = 70;
// if(age> 23){
//   let dogYears = age*7;
//   console.log(`You are ${dogYears} dog years old!`);
// }

// // lexical scope means that a variable for example only exists i the 'region ' where it was created 
// function BankRobbery(){
//   let superHeroes=['Batman', 'Iron Man', 'Cat woman'];
//   function help(){
//     for(let hero of superHeroes){
//       console.log(`${hero}, help us" `)
//     }
//   }
//   help()
// }
const key= 'avatar'
const user ={
  username: 'echo',
  avatar:'echo.png'
};
console.log(user['username']);
console.log(Object.values(user[key]));