// creating  fake request trying to simulate a real life possibility
// we pass in 2 callbacks, a success and a failure

const makeRequest = (url, success, failure) =>{
  const timeDelay = Math.floor(Math.random()*4500);
  setTimeout(() => {
    if( timeDelay > 3000){
      failure('Connection Timeout :(')
    }
    else{
      success(`Here is your fake data ${url}`)
    }
  }, timeDelay)

}
// to try it we have to pass in 2 callbacks but only 1 will work

makeRequest('books.com/page1', function(answer){
  console.log('IT WORKED 1ST REQ')
  console.log(answer)
  makeRequest('books.com/page2', function(answer){
    console.log('IT WORKED 2ND REQ')
    console.log(answer)
    makeRequest('books.com/page3', function(response){
      console.log('IT WORKED 3RD REQ')
      console.log(response)
    },
     function(err){
      console.log('ERROR 3RD REQ', err)
    })
  },
  function(fail){
    console.log('ERROR 2ND REQ', fail)
  })
}, 
function(FAIL){
  console.log('ERROR', FAIL)
})