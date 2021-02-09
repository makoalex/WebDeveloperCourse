async function colours( colour, delay){
  await new Promise(resolve =>{
    setTimeout(()=>{
      document.body.style.backgroundColor = colour;
      resolve()
    }, delay)
  })
}

async function multiColoured(){
   await colours('red', 1000)
   await colours('orange', 1000)
   await colours('pink', 1000)
   await colours('fuchsia', 1000)
   return 'ALL DONE!'
}

async function over(){
  await multiColoured(). then((data) =>{
    console.log(data)
    console.log('MANY COLOURS DISPLAYED!!')
  })
}
over()