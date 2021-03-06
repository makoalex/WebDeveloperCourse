var h1 = document.querySelector('h1');
h1.style.color = 'blue';
h1.style.border = '1px solid black';
h1.style.marginRight = '10px';

// or we can do it with the CLASSLIST property- a read only list that contains the classes of a given element
//rather than manipulating  individual properties, we can change things by using CLASSLIST inside of our JS
// classList.add()
// classList.remove()
// classList.toggle()- if the class list of an element that that class, it removes it, otherwise it adds it 
// classList.replace()- replace and existing css class with a new one
 
var h3 = document.querySelector('strong');
// h3.classList.add('big')
h3.classList.toggle('big')

//InnerText- returns only the text inside an element the text part wrapped by the element and nothing else

p = document.getElementsByTagName('p')[0];
p.textContent= 'if this changes it worked'
console.log(p)

var text = document.querySelector('h3');
text.innerHtml = 'Corgi mixes are really really adorable'
console.log(text);
// they can also be chained together as so:
var changing = document.querySelector('h4').textContent = 'this is another way to select and change text';

// TEXT CONTENT  treats whatever we give him as plain text
//INNER HTML  will render everything as html if we give it tags to render



//ATTRIBUTES MANIPULATION
     // on href and src

var attr = document.querySelector('img');
attr.getAttribute('src') // selecting the link
attr.setAttribute('src', 'https://i.pinimg.com/originals/dc/f1/9f/dcf19fdbd0b8de49146f665f49e95c80.png'); // setting a new attribute t chang the image

// can use that on an href as well
var link = document.querySelector('a');
link.getAttribute('href')// displays the href
link.setAttribute("href", "https://www.youtube.com"); // this will change the link
attr.textContent = "Link to the corgi site"; // this will change the text from link to google to link to corgi site

