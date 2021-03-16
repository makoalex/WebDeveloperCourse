const franc = require('franc');
const langs = require('langs')
const colour = require('colors')
const input = process.argv.slice(2);
console.log(input)
// console.log(input)
// const langCode = franc(input);
// const language = langs.where('3', langCode)
// // console.log(language.name)
const prerror = () => {
  console.log('*******')
  console.log(`${input}`.red)
  console.log('Seems i do not know that language'.red)
  console.log('*******')
}



try {
  for (let i of input) {
    const langCode = franc(i);
    const language = langs.where('3', langCode);
    let result = language.name;
    console.log('*********')
    console.log(`${langCode.toUpperCase()} ${result}`)
  }
} catch (err) {
  prerror();
}

// for (let i of input) {
//   const langCode = franc(i);
//   const language = langs.where('3', langCode)
//   const result= language.name;
//   if( langCode == 'und'){
//     prerror();
//   }else{
//     console.log('*********')
//     console.log(`${langCode.toUpperCase()} ${result}`)
//   }
// }