const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
  // res.send('hi')
  res.render('home')
})

app.listen(port, () =>{
  console.log('LISTENING ON PORT 3000!!!')
})