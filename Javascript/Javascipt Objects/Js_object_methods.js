// example of JS object with method
var puppy = {
  name : 'Pepe',
  age : 1,
  sound : function(){
    return 'woof';
  }
};

console.log(puppy.sound());

// avoid namespace collision by adding methods to objects


var dogSound = {};
dogSound.sound = function(){
  return 'WOOF';
} 

var catSound = {};
catSound.sound = function(){
  return 'Meow';
}

//keyword THIS in JS
   
var data = {};

data['comments'] = [' Great  job!!!', 'keep up the  good work', ' Looking forward to your new post!!']
console.log(data);
data.print = function(){
  this.comments.forEach(function(i){
    console.log(i);
  });
}
console.log(data.print());