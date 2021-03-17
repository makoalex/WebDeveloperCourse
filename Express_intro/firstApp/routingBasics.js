// routing is taking incoming requests, and a ath and patching them to some code and response
const express = require('express');
const app = express();
const port = 3000;

 app.listen(port, () =>{
   console.log('CONNECTED!')
 })

app.get('/cat', (req, res) =>{
  res.send('CAT SAYS MEOW!!')
})

app.get('/dog', (req, res) => {
  res.send('DOG SAYS WOOF!!!')
})
app.get('/', (req, res) => {
  res.send('WELCOME TO THE HOMEPAGE!')
})
app.post('/cat', (req,res) =>{
  res.send('CAT PEOPLE!')
})
//  has to come last 
app.get('*', (req, res) => {
  res.send('NO PATH IS FOUND!')
})
