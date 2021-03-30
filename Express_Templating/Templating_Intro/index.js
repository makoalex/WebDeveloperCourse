const express = require('express');
const { dirname } = require('path');
const app = express();
const jData = require('./data.json');
console.log(jData)
const port = 3000;

app.set('view engine', 'ejs')
// setting views directory in order ot be able to work from different directories
const path = require('path');
app.set('views', path.join(__dirname, '/views'))

// using static files from public folder using express.static()
app.use(express.static(path.join(__dirname, 'public')))
// making the absolute path for the public folder
// connecting the public folder with the ejs file


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

// looping with ejs
app.get('/user', (req, res) =>{
  const users= [
    'mackochan', 'olovholm', 'pepe1st'
  ];
  res.render('userName', {users})
})

// making a subredit template demo 

app.get('/r/:subreddit', (req, res) =>{
  const {subreddit} = req.params;
  // adding more complex ejs work using the data.json file
  // taking the subreddit data and plugging into the JsanData to extract the info
  const data = jData[subreddit];
  if(data){
  res.render('subreddit',{...data})
  }else{
    res.render('failure', {subreddit})
  }
  
})


app.listen(port, () =>{
  console.log('LISTENING ON PORT 3000!!!')
})