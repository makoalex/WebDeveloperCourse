var question = prompt("we've been driving for long.. Are we there yet??!!");
while(question !== 'yes' && question !== 'yeah' && question.includes('yes', 'yeah')===-1) {
  var question = prompt("Are we there now?");
}
alert("YAy, Finally")
