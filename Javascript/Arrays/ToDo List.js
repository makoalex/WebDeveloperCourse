var list = [];


window.setTimeout(function() {
  while (answer !== 'q'){
    var answer = prompt('what would you like to do now: N)ew, L)ist, Q)uit?');
    if (answer === 'n'){
      var item = prompt('what would you like to add?:');
      list.unshift(item);
    }
    else if (answer === 'l'){
      alert(list);
      console.log(list);
    }
  }
}, 500);