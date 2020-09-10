// Push() adds something to the end of an array
// Pop() removes the last item in a list, it doesn't need any parameter
 var fruits = ['apple', 'banana', 'nectarine']
 fruits.push('kiwi')
 console.log(fruits)
 fruits[0]= 'grapes'
 fruits.pop()
 console.log(fruits)

 //Shift() and unshift() remove the first and respectively unshift adds one more element to the beginning of the array

 var colours = ['green', 'red', 'scarlet']
 colours.shift()
 colours.unshift('yellow')
 console.log(colours)

 // IndexOf() will try and find an element in a list/ array and will return the first instance that it finds
 // returns -1 if the index is not found in the list

 var groceries = ['milk', 'broccoli', 'spinach', 'goats cheese']
 console.log(groceries.indexOf('spinach'))
 console.log(groceries.indexOf('oranges'))

 //Slice() returns a shallow copy of a portion of an array into a new object array
 // needs a START (optional- it will start from 0 if it's greater then the index range, ann empty array is returned) 
 // END (optional)- if omitted slice extracts through the end of the sequence
 // if given, slice extracts up to but not  including
 // we can also copy an entire array, by not passing any starting and end points

 var fruit = ['mango', 'cherries', 'orange', 'lemon', 'grapefruit', 'raspberries', 'apricots']
 console.log(fruit.slice())
 var citruses = fruit.slice(2,5)
 console.log(citruses)