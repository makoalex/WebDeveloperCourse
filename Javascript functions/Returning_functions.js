// a factory function is a function that return a new object
function ageSort(min, max){
  return function(num){
    if(num>=min &&num<=max){
      return `${num} years is correct`
    }else{
      return `${num} years doesn't match`
    }
  }
}
