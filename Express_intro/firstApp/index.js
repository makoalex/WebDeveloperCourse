const express = require('express');
const app = express();
// everytime  a requst hits our server we print this out
// in order to get a response we need to pass 2 parameters to USE() request and response 
// they're objects made by Express( parses all the information into an object, by parsing the incoming HTTP information => request)
app.use((req, res) => {
  console.log('We got a new request!')
  res.send('HELLO THERE STRANGER')
})
app.listen(3000, () =>{
  console.log('Listening on port 3000!')
})