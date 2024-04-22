// Q. Write a program that takes an array of numbers as input. Double each even number in the array and remove all odd numbers. Return the modified array.

// var ArrayNumber = [2, 6, 7, 5, 9, 26];

// for (var i = 0; i < ArrayNumber.length; i++) {

//   if (ArrayNumber[i] % 2 == 0) {
//     var addedNumber = ArrayNumber[i] * 2;
//     ArrayNumber == addedNumber
//   } else {
//     var oddNumber = ArrayNumber.indexOf(ArrayNumber[i])
//     var removedNum = ArrayNumber.splice(oddNumber, 1)
//     i--
//   }
// }
// console.log(ArrayNumber);

// -----------------------------------------------------------------------------------------------------------------

// Q.Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0

// var userPassword = prompt("password");

// var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var smallLetters = "abcdefghijklmnopqrst";
// var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// var minimumLenght = false;
// var firstletterCap = false;
// var AlphaAndNumber = false;

// var firstletterIndex = capitalLetters.indexOf(userPassword[0]);
// var firstletter = capitalLetters.charAt(firstletterIndex);
// // console.log(firstletter == userPassword[0] );

// if (userPassword.length >= 6) {
//   minimumLenght = true;
//   // console.log(minimumLenght, "minimumLenght");
// }
// if (firstletter == userPassword[0]) {
//   firstletterCap = true;
//   // console.log(firstletterCap, "firstletterCap");
//   for (var i = 1; i < userPassword.length; i++) {
//     console.log( smallLetters.indexOf(userPassword[i]) !== -1);
//     if (smallLetters.indexOf(userPassword[i]) !== -1) {
//       AlphaAndNumber = true;
//       // console.log(AlphaAndNumber, "AlphaAndNumber");
//     }
//   }
// }

// if(minimumLenght == true && firstletterCap == true && AlphaAndNumber == true){
//   console.log("Valid Password");
// }else{
//   console.log("invalid Password");
// }

// ------------------------------------------------------------------------------------------------------------

// Q.Write a program that takes two arrays of numbers as input and returns a new array containing only the elements that are present in both arrays. Use nested for loops to compare each element of the first array with each element of the second array.

// var array1 = [5, 10, 13, 18, 20];
// var array2 = [5, 11, 13, 19, 20];

// var newArray = [];

// for (let i = 0; i < array1.length; i++) {
//   // console.log(array1[i], "Array 1" );
//   for (let i = 0; i < array2.length; i++) {
//     // console.log(array2[i] , "Array 2");

//   }
//   if (array1[i] == array2[i]) {
//     newArray[i] = array2[i];
//     // console.log(newArray, 'newArray');
//     // console.log(array2[i], "array2[i]");

//     // console.log(newArray);

//     if (newArray[i] == undefined) {
//       newArray.splice(i, 1);
//       console.log("undefined");
//       break
//     }
//   }
// }

// --------------------------------------------------------------------------------------------------------------

// Q.Write a program that takes a number as input and checks whether it is a prime number or not.

