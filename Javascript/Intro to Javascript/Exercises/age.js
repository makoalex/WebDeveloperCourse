var age = prompt("what is your age?: ");
var years_leap =age/4;
var years = age- years_leap;
var result = (years* 365)+ (years_leap*366)
alert("your have lived for:"+""+ result+""+" days")