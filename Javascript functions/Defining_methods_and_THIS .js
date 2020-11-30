// a method is a function that has been placed as a property on a object
// every method is a function, but not every function is a method
// we can make and add our own methods to objects 
//  we can add a function as a property value

const square = {
  area: function(side){
    return side*side
  },
  perimeter: function(side){
    return side*4
  }
}
// it can also be simplified by doing this
const square2= {
  area(side){
    return side*side
  },
  perimeter(side){
    return side*4
  }
}
// and ow we can call
square2.perimeter(4);

// THIS

// we use it inside of a object, in a method

const puppy ={
  name: 'pepe',
  breed: 'labradoodle',
  eat(){
    console.log('feed 3 times a day');
    console.log(`${this.name} the ${this.breed} should be fed 3 times a day`)
  }
}


let hen = {
  name:"Helen",
  eggCount: 0,
  layAnEgg(){
    for(i of this.eggCount.Object.values){
      this.eggCount+=i
      return 'EGG'
    }
  }
}