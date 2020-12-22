// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
 const Url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (i =1;i<= 151;i++){
  const newDiv= document.createElement('section')
  const newSpan= document.createElement('span')
  newSpan.innerText=i
  const newImg = document.createElement('img')
  newImg.src = `${Url}${i}.png`
  newDiv.append(newImg)
  newDiv.append(newSpan)
  container.append(newDiv)
}