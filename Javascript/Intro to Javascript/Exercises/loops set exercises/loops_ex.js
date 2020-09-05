console.log("numbers from -10 to 19 ") 
for (var count = -10; count <= 19; count++){
  console.log(count);
}



console.log("the numbers between 10 and 40")

for (var number = 10; number <= 40; number++){
  if(number %2 === 0){
  console.log(number);
  }
}
console.log("odd numbers between 300 and 333")

for (var num = 300; num <= 333; num++){
  if(num % 2 ===1){
    console.log(num);
  }
}

console.log("numbers divisible by 5 and 3")

for (var n = 5; n<=50;n++){
  if(n % 5 ===0 && n % 3 ===0){
    console.log(n);
  }
}