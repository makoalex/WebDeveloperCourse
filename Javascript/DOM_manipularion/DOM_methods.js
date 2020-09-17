// getElementById- selects an element with an id, and returns it to us
// we call the method and we pass in the name of a single string argument- the name of the ID we want, and it returns
// the object representation to us '

var id = document.getElementById('highlight')


// getElementsByClassName- takes in a string, matching a class and returns a list of all the elements that have the class name
// we get back a light version of a list- a NODE list that doesn't have all the methods of an ARRAY

var aClass = document.getElementsByClassName('something');

//getElementByTagName- does the the same thing as class or id selectors but it takes in a tag name and returns the object representation to us
// we will get a list of all the elements of the tag .
// it's not limited of the elements inside the body, and returns a list even if it's one element

var tag = document.getElementsByTagName('li');

//querySelector- does what he other selectors do, but it takes a CSS Style selector and returns the first match NOT ALL
// for all matches we have querySelectorAll

var select = document.querySelector('#highlight');
var select1 = document.querySelector('.something');// returns the first element with class 'something'
var select2 = document.querySelectorAll('.something');//returns all the classes 'something'