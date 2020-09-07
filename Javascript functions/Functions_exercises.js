// function that takes in a number and returns true if the number is even and false if it's not

function even_number(number){
  return number % 2 === 0;
//   if(number % 2 == 0){
//     return true;
//   }
//   else{
//     return false
//   }
 }

even_number(12)

//function that takes in a single number and returns the factorial of that number 

function factorial(x){
  var result = 1;
  for(i= 1; i<=x; i++){
    result= result*i;
  }
  return result;
}  

factorial(3)

function factor(num){
  var final = num;
  for(i = num-1; i>=1; i-- ){
    final *= i;
  }
  return final;

  }
factor(4)

// write a function that replaces - with _ from kebab case to snake case

function insteadOf(string){
  var res = /-/g;
  return string.replace(res, "_");
}
insteadOf('miami-beach-is-the-coolest')