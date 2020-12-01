//accepts a function as its argument and it once for each element in an array

const numbers =[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
// using froEach to get the prime numbers out
numbers.forEach(function(num){
  if(num  % 2 ===1 && num %3 ===1)
  console.log(num);
})

let movies = [
  {
    title: "Parasite",
    score: 95
  },
  {
    title: "Amadeus",
    score: 99
  },
  {
    title: "Alien",
    score: 90
  }
]
movies.forEach(function(el){
  console.log(`${el.title}- ${el.score}/100`)
})