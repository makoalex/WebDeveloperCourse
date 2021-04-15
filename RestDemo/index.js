const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const comments =[
  { 
    id: 1, 
    user:'mako',
    comment: 'This film was clearly underrated'
  },

   {
     id : 2,
      user : 'badass',
    comment : 'i liked the CGI '
   },

    {
      id : 3,
      user : 'fred400',
    comment : "seen it  times already. Can't wait for the sequel"
}
];

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'/views'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/comments', (req, res)=>{
  res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) =>{
  res.render('comments/new');
  
})

app.get('/comments/:id', (req, res) => {
  const {id} = req.params;
  const comment =comments.find(c => c.id ===parseInt(id));
  res.render('comments/show', {comment})

})


app.post('/comments', (req, res) => {
 const {user, comment}= req.body
 comments.push({user,comment})
  res.redirect('/comments');
})

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