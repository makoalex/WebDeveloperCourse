const express = require('express');
const app = express();
const port = 8080;
app.listen(port, () => {
  console.log('CONNECTED!!');
})
app.get('/r/:parameter/:postID', (req, res) => {
   const {parameter, postID} =req.params;
  res.send(`<h1>This is a search for ${parameter}, with the POST ID: ${postID} </h1>`)
})