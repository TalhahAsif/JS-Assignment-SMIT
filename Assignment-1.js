//   Alert

// alert("hello");

//   Variables for Strings

var favoriteFood = "Tikka";
console.log("favoriteFood", favoriteFood);

//  Variables for Numbers

var num1 = 25;
var num2 = 3;

var addition = num1 + num2;
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;

console.log("addition", addition);
console.log("subtraction", subtraction);
console.log("multiplication", multiplication);
console.log("division", division);

//  Variable Names Legal and Illegal

//legal
var first_name = "talha";
var firstName = "talha";
var FirstName = "talha";

// illegal
// var 1st name ="talha"
// var !Firstname ="talha"
// var +FirstName ="talha"

//   Math Expressions: Unfamiliar Operators

//it divide the numbers and show the remaining if any. for example

var num3 = 24;
var num4 = 5;

var noRemain = num3 % num4;
console.log("modulas", noRemain);


//if there is nothing remain is show 0

var num5 = 20

var remain = num5 % num4
console.log("modulas",remain);


// Increament and decreament

//pre increament
var preIncreament = ++num5
console.log("preIncreament",preIncreament);;

//post Increament
var postIncreament = num5++
console.log("postIncreament", postIncreament);


//  Concatenating Text Strings

var firstName = "Talha"
var lastName = "Asif"

var fullname = firstName + " " + lastName
console.log("fullname" ,fullname);


// Prompts

var userAge = prompt("Enter your Age")

console.log("Your Age is:", userAge);