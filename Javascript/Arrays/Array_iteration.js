// Can be done with a FOR LOOP, WHILE LOOP or with a FOR EACH() method
 var shoppingList = ['eggs', 'bread', 'muesli', 'milk','bacon'];
 
 //for loop iteration
 for(i = 0; i < shoppingList.length; i++){
   console.log(shoppingList[i]);
 }


 // while loop iteration

 var i = 0;
 while(i < shoppingList.length){
   console.log(shoppingList[i]);
   i++;
 }

 //FOR EACH () iteration

 console.log('for each iteration')
 shoppingList.forEach(function(item){
   console.log(item);
 })

 console.log('New forEach')
 var numbers = [1,2,3,4,5];

 function add (number){
   console.log('********');
  console.log(number*2);
   console.log('********');
 }
 
// performing iteration, by passing the ADD function into the forEach function
 numbers.forEach(add);
 
 