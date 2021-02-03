const TimedChange = (colour, delay, next) => {
  setTimeout(() => {
    document.body.style.backgroundColor=colour;
    next()
  }, delay)
}

TimedChange('red', 1000,() => {
  TimedChange('orange', 1000, () => {
    TimedChange('salmon', 1000 , () =>{
      TimedChange('pink', 1000, () =>{
      })
    })
  })
})

// sometimes we can have 2 callbacks into a function
// a success and a failure, to be able to anticipate different kinds of outcomes