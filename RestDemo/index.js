const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/tacos', (req, res) =>{
  res.send('GET SEND')
})

app.post('/update', (req, res) => {
  console.log(req.body)
  const {meat, qty } = req.body
  res.send(`Here is your order update for ${qty} of ${meat}`)
})

app.listen(port, () =>{
  console.log('CONNNETED ON PORT 3000');
})