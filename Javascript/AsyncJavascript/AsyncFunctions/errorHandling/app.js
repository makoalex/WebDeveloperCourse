const makeFakeRequest = (url) =>{
  return new Promise((resolve, reject) =>{
    const time = Math.floor(Math.random()* 5000)
    setTimeout(() =>{
      if (time> 1500) reject('Connection timeout')
      resolve(`Here is your fake data from ${url}`)
    },time)
  })
}

async function catchErr(){
  try {
    let request =await makeFakeRequest('/page1');
    console.log(request)
    let request2 = await makeFakeRequest('/page2');
    console.log(request2)
  }
  catch(err){
    console.log(`An error was caught: ${err}`)
  }
}
catchErr()