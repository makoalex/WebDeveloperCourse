fetch("https://api.cryptonator.com/api/full/btc-usd")
.then((result) => {
    console.log(result)
    return result.json()
  })
  .then((data) =>{
    console.log(data.ticker.markets)
  })
.catch((err) => {
    console.log(err)
  })

  // simplified version using async function

  const getPrice = async() =>{
    try{
      const getMarkets = await fetch("https://api.cryptonator.com/api/full/btc-usd");
      const jsonMarkets = await getMarkets.json();
      console.log(jsonMarkets)
    } catch(er){
      console.log('Failed with', er)
    }
  }

  getPrice()


  const getFilm = async() =>{
    const film = await fetch("http://api.tvmaze.com/singlesearch/shows?q=girls")
    const res = await film.json();
    console.log(res.name, `Genre ${res.genres[0].toLowerCase()}, ${res.genres[1].toLowerCase()}`)
  }
  getFilm()