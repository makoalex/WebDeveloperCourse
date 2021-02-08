const savings = async ()  =>{
  throw new Error('not possible')
  return 'Currently saving money'
}
savings()
.then((data) =>{
  console.log('Promise settled:', data )
})
.catch((err) =>{
  console.log(err)
})
// if there is an error inside an async function the PROMISE is going to be rejected
// if  a value is returned then the PROMISE is resolved.


const saving = async( budget, value) =>{
  if(budget > value){
    return (' i can afford the phone and something extra')
  }
  else if (budget === value){
    return ('i can afford only the phone')
  }
  else{
    throw new Error(' have to save more money')
  }
}
 saving(20000, 15000)
 .then((mess) =>{
   console.log(mess)
 })
 .catch((err) =>{
    console.log(err)
 })

 const login = async( username, password) =>{
   if(!username || !password) throw 'No Login Credentials'
   if(password === 'pepeiscute') return 'Welcome Back!'
   throw 'Invalid Password'
 }
 login('mako', 'pepeiscute')
  .then((msg) =>{
    console.log(msg)
  })
  .catch((err) =>{
    console.log(err)
  })