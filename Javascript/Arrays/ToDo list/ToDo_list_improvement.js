var list = [];

function listTodo() {
  list.forEach(function (item, index) {
    console.log(index + 1 + ':' + '' + item);
  })
}

function new_item() {
  var new_item = prompt('What would you like to add?');
  list.unshift(new_item);
  return alert('New task added successfully!');

}

function delete_task() {
  var removed_item = Number(prompt('enter the number of the task you want to delete'));
  list.splice(removed_item - 1, 1);
  return alert('Task successfully deleted!');
}

function quit(){
  return alert('Session closed');
}

window.setTimeout(function () {
  while (answer !== 'q') {
    var answer = prompt('What would you like to do? N)ew, L)ist, D)elete, Q)uit');
    if (answer === 'l') {
      listTodo();
    } else if (answer === 'n') {
      new_item();
    } else if (answer === 'd') {
      delete_task();
    }
  }
  quit();
}, 500);