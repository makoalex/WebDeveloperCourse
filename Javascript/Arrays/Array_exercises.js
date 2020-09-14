// create a function that takes an array and returns it backwards

function print_reverse(array) {
  console.log(array.reverse());
}
print_reverse(['a', 'b', 'c'])

function reverse(list) {
  list.reverse().forEach(function (item) {
    console.log(item);
  })
}
reverse([4, 5, 6])

function backwards(lis) {
  for (var i = lis.length; i >= 0; i--) {
    console.log(lis[i]);
  }
}

backwards([7, 8, 9, 10])


// function that takes an array as an argument and returns true if all the elements are identical or false if they aren't

function isUniform(arr) {
  var first = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (first !== arr[i]) {
      console.log(false);
    }
    console.log(true);
  }
}
isUniform([1,1,1])



// function that sums all the elements in the array

function isSum(Array){
  var z = 0;
  for (i= 1; i<= Array.length;i++){
    z = z+i;
    
  }
  console.log(z);
}

isSum([1,2,3])

// function that sums all the elem in the array using FOR EACH

function SSum(Array){
  var z = 0;
  Array.forEach(function(i){
    z = z+i;
    
  });
  console.log(z)
}

SSum([1,3,3])
   // function that accepts an array of numbers and returns the maximum number 

   function max(array){
     var long = array[0];

     for (i = 1; i<= array.length; i++){
       if(array[i] > long){
         long = array[i];
       }
     }
     console.log(long)
   }
   max([1,5,6,7])