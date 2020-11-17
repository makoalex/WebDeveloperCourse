const tests = {
  Mathew: 90,
  John:87,
  Cherry: 72,
  Michelle: 95
}
for (let person in tests){
  console.log(`${person} scored: ${tests[person]}`)
}

//or summing the values using Object

let total = 0;
for(let score of Object.values(tests)){
  total+=score;
  let average= total/ Object.keys(tests).length
  console.log(average)
}
