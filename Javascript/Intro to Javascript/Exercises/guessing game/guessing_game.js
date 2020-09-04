var right_number = 11;
var question = Number(prompt("Guess a number between 1 amd 20 please:"));
if (question < right_number) {
  alert("close but not close enough! the number is higher!");
} else if (question > right_number) {
  alert("Number you chose is to high! go again");
} else {
  alert("Congrats! we have a winner!");
}
