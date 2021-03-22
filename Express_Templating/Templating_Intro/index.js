const express = require('express');
const { dirname } = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
// setting views directory in order ot be able to work from different directories
const path = require('path');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) =>{
  // res.send('hi')
  res.render('home')
})

app.listen(port, () =>{
  console.log('LISTENING ON PORT 3000!!!')
})