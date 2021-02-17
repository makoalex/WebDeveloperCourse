const form = document.querySelector('#search')
const section = document.createElement('div')
let imageSelect= document.querySelectorAll('img');

const getShow= async function (evt) {
  evt.preventDefault()
  let searchInput = form.elements.searchTV.value;
  const film = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchInput}`);
  console.log(film.data)
  section.innerHTML ="";
  display(film.data)
  form.elements.searchTV.value= " ";
}
form.addEventListener('submit', getShow)

function display(tvshow) {
  for (i of Object.values(tvshow)) {
    if (i.show.image) {
      console.log(i.show.image.medium)
      const newImage = document.createElement('IMG');
      newImage.src = i.show.image.medium;
      section.append(newImage)
      document.body.appendChild(section)
    }
  }
}
