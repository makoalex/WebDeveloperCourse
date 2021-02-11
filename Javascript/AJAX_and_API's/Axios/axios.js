axios.get("https://api.cryptonator.com/api/full/btc-usd")
  .then(result => console.log(result.data.ticker.price)
  )
  .catch(err=> console.log(err))

  // with an async function

  const axiAsync= async()=>{
    try{
      const axi = await axios.get("https://api.cryptonator.com/api/full/btc-usd");
      const res = await axi.data.ticker
      console.log(res)

    }catch(error){
      console.log(error)
    }
  }
  axiAsync()

  const second = async() =>{
    try{
      const response = await axios.get('http://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes');
      console.log(response.data.name, response.data.rating['average'])
    }catch(er){
      console.log(er)
    }
  }
second()

fetch('http://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes')
  .then(resp => {
    console.log('this is the response for Fetch',resp)
    return resp.json()
  })
  .then(final => console.log('this is the other response for fetch', final.name))
  .catch(anyError => console.log(anyError))