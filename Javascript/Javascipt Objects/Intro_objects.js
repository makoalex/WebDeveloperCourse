// create using key-value pairs and curly braces

var student = {
  first_name : 'Tom',
  last_name : 'Hanret',
  age : 21
}

// to access, we can use the key , bracket notation
console.log(student['first_name']);
// can save the property in a variable and access the value through the variable name in brackets
var string = 'age';
console.log(student[string]);
// we can  use the .dot notation
console.log(student.last_name);
// the .dot notation doesn't work if the property starts with a number or has a property names with spaces in between


//if we want to update a value, we can use either og the two methods mentioned above
student.age += 1;
student['age']+=2;
console.log(student.age);
student['city']= 'Huston';
console.log(student);

// object can be initialized either by creating an empty an empty object and then adding to it
 var clients = {}
 clients['name'] = 'Jane Doe';
 clients['age'] = 36;
 // either by creating it all at once:
 var clients = {
   name : 'John Doe',
   age : 40
 }
 console.log(clients);

 // or by initializing an object
 var clients = new Object();
 clients.name = 'Jenny Tal';
 clients['age'] = 56;

 console.log(clients);
