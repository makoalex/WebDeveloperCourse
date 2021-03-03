class Animal {
  constructor (name, age){
    this.name = name;
    this.age = age
  }
  eat() {
    return `${this.name} is eating`;
  }

  newAge () {
    return `${this.name } is now ${this.age} years old`
  }

}

class Gorilla extends Animal{
  constructor(name, age, location){
    super(name, age);
    this.location = location;
  }
  newLocation () {
    return `${this.name} has been moved to a zoo in ${this.location}`;
  }
  diet() {
    return `${this.eat()} a new diet of fruit. ${this.newLocation()}`
  }
}
class Pet extends Animal {
  constructor (name, age, breed, city){
    super (name, age);
    this.breed = breed;
    this.city = city;
  }
  description() {
    return `${this.name} is a ${this.age} yrs old ${this.breed}, from ${this.city} and  right now ${this.eat()}`
  }
  
}

class Dog extends Pet{

  walk (hour) {
    return `${this.name} has been for a walk at ${hour} today.`
  }
}
 class Cat extends Pet{
   constructor(name, age , breed, city, livesLeft){
     super(name, age, breed, city);
     this.livesLeft = livesLeft;
   }

   lives (){
     return `${this.name} has ${this.livesLeft} left!`
   }
 }