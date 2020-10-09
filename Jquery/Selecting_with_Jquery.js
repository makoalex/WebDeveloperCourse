// select elements with the $()
// selecting is very similar to other dom selectors by using just the $

var first = $('h1')[0];
var list = $('li')[1];
var aTag = $('ol li a');
var third = $('#three');
console.log(first, list, aTag);

// use .css() to style the elements

var style1 = $('h1').css( "color", 'pink');
 // we can select by creating a separate object 
 var styles = {
   'color': 'red',
   'background': 'yellow',
   'font-size': '20px'
 };

 var style2 = $('h2').css(styles);

  // add the object directly into the css selector

  var style3 = $('li').css({
    fontSize: '15px',
    color: 'blue',
    background: 'rgba(101, 101, 101, 0.5)'
  })

