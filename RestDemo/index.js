const express = require('express');
const app = express();
const port = 3000;

app.get('/tacos', (req, res) =>{
  res.send('GET SEND')
})

app.post('/update', (req, res) => {
  res.send('POST REQUEST SUCCESSFUL')
})

app.listen(port, () =>{
  console.log('CONNNETED ON PORT 3000');
})