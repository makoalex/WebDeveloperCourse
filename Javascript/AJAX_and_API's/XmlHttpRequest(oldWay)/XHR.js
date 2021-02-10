const req = new XMLHttpRequest();
req.onload = function(){
  const data = JSON.parse(this.responseText)
  console.log(data.ticker.markets)
}
req.onerror = function(err){
  console.log( err)
}
 req.open('get', 'https://api.cryptonator.com/api/full/btc-usd')
 req.send( )