const express = require('express');
const app = express();
// everytime  a requst hits our server we print this out
app.use(() => {
  console.log('We got a new request!')
})
app.listen(3000, () =>{
  console.log('Listening on port 3000!')
})