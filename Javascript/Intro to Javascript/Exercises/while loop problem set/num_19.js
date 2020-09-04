console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");
var number = -10;
while (number <= 19){
  console.log(number);
  number++
}

console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 AND 40");
var num = 10;
while (num <= 40){
  if (num % 2 === 0){
    console.log(num);
  }
  num += 1;
}

console.log("PRINTING ALL THE ODD NUMBERS BETWEEN 300 AND 333");
 var num1 = 300;
 while( num1 <= 333){
   if(num1 % 2 === 1){
     console.log(num1);
   }
   num1 += 1;
 }


 console.log("PRINTING ALL THE NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
 var num2 = 5;
 while (num2 <= 50){
   if (num2 %5 ===0 && num2 %3 === 0){
     console.log(num2);
   }
   num2 += 1;
 }

