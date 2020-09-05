var question = prompt("we've been driving for long.. Are we there yet??!!");
while(question !== 'yes' && question !== 'yeah' && question.includes('yes', 'yeah')===-1) {
  var question = prompt("Are we there now?");
}
alert("Yay, Finally")


// Indexof() method gives  the first position of an occurring element, and it returns -1 if the element is not found