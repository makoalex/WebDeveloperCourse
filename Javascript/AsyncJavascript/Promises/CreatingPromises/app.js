const makeColour= (colour, delay) =>{
  return new Promise((resolve, reject) =>{
     setTimeout(() =>{
       document.body.style.backgroundColor= colour;
       resolve()

    }, delay)
  })
}
makeColour('#97A66A', 1000)
  .then(()=>{
    return makeColour('#9EAC74', 1000)
  })
  .then(() =>{
    return makeColour('#A5B27F', 1000)
  })
  .then(() =>{
    return makeColour('#ADB889', 1000)
  })
  .then(() =>{
    return makeColour('#B4BF94', 1000)
  })
  .then (() =>{
    return makeColour('#BCC59F', 1000)
  })
  