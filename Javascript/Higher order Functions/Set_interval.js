// a funCtions that accepts and returns anotHer functions is called a HIGHER ORDER FUNCTION
//it's called <higher because instead of operating with strings/ numbers/>booleans. it goes to the higher level of functions
//Just as  STRINGS, NUMBERS, BOOLEANS, OBJECTS AND ARRAYS  are DATA, FUNCTIONS can also be DATA - pass them to other functions 
//                                                                                              - set them as objects properties
//                                                                                                    (makes them methods)
//                                                                                              - store them in ARRAYS- useful 
//                                                                                                     if  calling a list of functions ///                                                                                                     in response to an event
//                                                                                             - set them as variables

function PushUp(){
  console.log('Do a push up');
}
PushUp()


setInterval(PushUp, 2000);


// its can also be made with anonymous functions

setInterval(function(){
  console.log("DO A PUSH UP");
}, 2000)
