var question = prompt("What is your age?");
if (question <0 ){
  alert("This is not a valid age")
}
else if (question === 21){
  alert("Happy 21st birthday")
}
else if(question %2 !==0){
  alert("Your age is odd!")
}
else{
  alert("welcome!")
}