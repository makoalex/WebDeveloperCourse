//  the REDUCE() performs a reducer function on every element of an array resulting in a single element outcome
//  takes in 4 elements :   ACCUMULATOR
                        //  CURRENT VALUE 
                        //  CURRENT INDEX 
                        //  SOURCE ARRAY 

// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])


// THE ACCUMULATOR holds the REDUCERS functions returned value and it is remembered with every iteration through the array 
// and finally becomes that SINGLE RESULTING VALUE
// CURRENT VALUE- the current value being processed in the array
// INDEX[,array](optional)- the index of the current element being processed in the array reduce was called on


const numbers = [1, 3, 5, 7, 11, 13, 17, 19 ];
const sumOf = numbers.reduce((acc, current) =>{
  return acc+current;
})
//  returning the smallest value in the array

const smallest = numbers.reduce((small, value) => {
  if (value < small){
    return value;
  }
  return small;
})

// finding the highest rated movie

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
  }
]

const highest = movies.reduce((acc, rating) =>{
  if(rating.score > acc.score){
    return rating
  }
  return acc
})