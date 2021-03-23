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

// adding EJS to  file RandomNum.ejs
// we can create an object to render {rand:num} or we can just use the {num:num}
app.get('/random', (req, res) =>{
  const num = Math.floor(Math.random() *10)+1;
  res.render('randomNum', {num})
})

// making a subredit template demo 

app.get('/r/:subreddit', (req, res) =>{
  const {subreddit} = req.params;
  res.render('subreddit',{subreddit})
})

app.listen(port, () =>{
  console.log('LISTENING ON PORT 3000!!!')
})