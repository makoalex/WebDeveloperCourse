// similar to forEach() in the sense that it accepts a callback (function)  once for each element in the array

// it returns a new array with the results of the called function without altering the previous one


let movies= [
  {
    title: 'Iron Man',
    score: 95
  },
  {
    title: 'Avengers',
    score: 90
  },
  {
    title: 'Ant Man',
    score: 60
  },
  {
    title: 'Guardians of the Galaxy vol 1',
    score: 100
  }
]
// making ann array just with the movie titles
const titles = movies.map(function(m){
  return m.title;

})
const score = movies.map(function(s){
  return s.score
})
//  we are taking data from an array, and transform it as we copy it/ map it into a new array

function cleanNames(arr){
  return arr.map(function(i){
    return i.trim();
  })
}
 