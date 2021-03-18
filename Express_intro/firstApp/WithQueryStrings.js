const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () =>{
  console.log('CONNECTED!!!')
})

app.get('/search', (req, res) =>{
  const {q} = req.query;
  if (!q){
    res.send('<h1>NOTHING FOUND IF NOTHING SEARCHED!</h1>')
  }else{
    res.send(`<h1>YOUR SEARCH FOR ${q}</h1>`)
  }
})