// Question 1: Write a function in JavaScript called roundNumber()
// that takes a number as input and returns the number rounded to the nearest integer.

var Input = document.getElementById("number");
var rounded = document.getElementById("roundedNum");
// console.log(rounded.innerHTML);

function roundIt() {
  rounded.innerHTML = Math.round(Input.value);
  console.log(Math.round(Input.value));
  console.log("click");
}

// Question 2: Create a function called generateRandomInRange(min, max)
//  that generates a random integer between min and max (inclusive) in JavaScript.

var randomNumber = document.getElementById("RandomNum");

function GanerateRandom() {
  var RandomNumber = Math.random() * 100;
  randomNumber.innerHTML = Math.floor(RandomNumber);
}

// Question 3: Write a JavaScript function called convertToNumber(str) that takes a string as input and converts it into a number.
//  Ensure the function returns NaN if the string cannot be converted into a valid number.

var string = "100.1010"

console.log(+string, "+string");
console.log(parseInt(string), "parseInt");
console.log(parseFloat(string), "parseFloat");