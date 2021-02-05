// with promises we don't use more parameters for success and failure. Just pass in the URL
// they represent an asynchronous value that eventually will be RESOLVED OR REJECTED
// has 3 states: PENDING, RESOLVED OR REJECTED
// WE CAN RUN CODE WHEN THAT PROMISE IS REJECTED OR RESOLVED BY ATTACHING CALLBACKS TO THE OBJECT ITSELF RATHER THAN PASSING THEM INTO A FUNCTION
  //                  WE WAIT FOR THE RETURN OF A PROMISE OBJECT AND WE CAN ATTACH METHODS TO IT

const makeRequestPromise = (url) =>{
  return new Promise((resolved, rejected) =>{
    const delay = Math.floor(Math.random()*5000);
    setTimeout(() => {
      if (delay > 4000){
        rejected('Connection timeout')
      }
      else{
        resolved(`Here is your fake data from ${url}`)
      }
    }, delay)
  })
}

// makeRequestPromise('yelp.com/page1')
//   .then((resolved) => {
//     console.log('It worked (p1)')
//     console.log(resolved)
//     makeRequestPromise('yelp.com/page2')
//     .then(() => {
//       console.log('It worked(p2)')
//       makeRequestPromise('yelp.com/page3')
//       .then(() => {
//         console.log('it worked(p3)')
//       })
//       .catch(() =>{
//         console.log('error (p3)')
//       })
//     })
//     .catch(() =>{
//       console.log('error(p2)')
//     })
//   })

//   .catch(() =>{
//     console.log('Error')
//   })

  // The simplified version of PROMISES that looses a lot of the nesting
  makeRequestPromise('yelp.com/page1')
    .then((data) => {
      console.log('It worked for page 1')
      console.log(data)
      return makeRequestPromise('yelp.com/page2')
    })
    .then((data) =>{
      console.log('It worked for page 2')
      console.log(data)
      return makeRequestPromise('yelp.com/page3')
    })
    .then((data) => {
      console.log('It worked for page 3 ')
      console.log (data)
    })
    .catch((err) =>{
      console.log(' Oh no, something went wrong ')
      console.log(err)
    })