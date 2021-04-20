const express = require('express');
const app = express();
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')
const port = 3000;
const path = require('path');

const comments =[
  { 
    id: uuid(), 
    user:'mako',
    comment: 'This film was clearly underrated'
  },

   {
     id : uuid(),
      user : 'badass',
    comment : 'i liked the CGI '
   },

    {
      id : uuid(),
      user : 'fred400',
    comment : "seen it  times already. Can't wait for the sequel"
}
];

// views folder and ejs setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'/views'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// to fake put PATCH/DELETE/PUT requests
app.use(methodOverride('_method')) 

app.get('/comments', (req, res)=>{
  res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) =>{
  res.render('comments/new');
  
})


app.post('/comments', (req, res) => {
  const {user, comment}= req.body
  comments.push({ user , comment , id: uuid()})
   res.redirect('/comments');
 })

app.get('/comments/:id', (req, res) => {
  const {id} = req.params;
  const comment =comments.find(c => c.id ===id);
  res.render('comments/show', {comment})

})

app.get('/comments/:id/edit', (req, res) =>{
  const { id } = req.params;
  const comment =comments.find(c => c.id === id);
  res.render( 'comments/edit' , { comment })
  res.redirect('/comments' );
})


app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const findComment = comments.find(c => c.id = id);
  findComment.comment = newComment;
  res.redirect('/comments')

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