// creates an array with elements that pass a test provided as a function
let movies= [
  {
    title: 'Iron Man',
    score: 95,
    year: 2008
  },
  {
    title: 'Avengers',
    score: 90,
    year: 2012
  },
  {
    title: 'Ant Man',
    score: 60
  },
  {
    title: 'Guardians of the Galaxy vol 1',
    score: 100
  },
  {
    title: 'The Shawshank redemption',
    score: 99,
    year: 1994
  },
  {
    title: 'The Green Mile',
    score: 85,
    year: 1999
  },
]

const over90 = movies.filter((i) =>i.score >85);
// because we et 4 objects as a result we can also use it together with Map() to get just the titles
const best_films = movies.filter(movie => movie.score>85).map(movie => movie.title);
const year90s = movies.filter(m => m.year < 2000).map(m => m.title)


// writing a function that accepts an array or usernames and filters the names that are less then 10 characters

function validUserNames (str){
  return str.filter(s => s.length < 10)
}