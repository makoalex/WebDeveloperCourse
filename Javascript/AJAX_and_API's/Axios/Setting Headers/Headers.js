// in order to add headers, we have to configure the headers as another parameter

const firstHeader = async() =>{
  try{
    const headerconfig= {headers: {Accept: 'application/json'}}
    const response = await axios.get('https://icanhazdadjoke.com/', headerconfig);
    console.log(response.data.joke)
    newJoke(response.data.joke)
  }catch(e){
    console.log('its an error', e )
    newJoke('No jokes to show', e)
  }
  }



const buttonjoke = document.querySelector('#joke');
buttonjoke.addEventListener('click', firstHeader)

 function newJoke(data){
  const list= document.querySelector('#list');
  const newLi = document.createElement('li')
  newLi.append(data)
  list.appendChild(newLi)
 }

// const firstHeader = async() =>{
//   try{
//     const headerconfig= {headers: {Accept: 'application/json'}}
//     const response = await axios.get('https://icanhazdadjoke.com/', headerconfig);
//     console.log(response.data.joke)
//     return response.data.joke
//   }catch(e){
//     console.log('its an error', e )
    
//   }
//   }

//   const newJoke = async() =>{
//     const joke = await firstHeader();
//       const list= document.querySelector('#list');
//       const newLi = document.createElement('li')
//       newLi.append(joke)
//       list.appendChild(newLi)
//      }
     
// const buttonjoke = document.querySelector('#joke');
// buttonjoke.addEventListener('click', newJoke)
