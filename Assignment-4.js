// 1.  Basic For Loop

for (var i = 1; i <= 5; i++) {
  console.log(i);
}

// 2. Summation with For Loop

var sum = 0;

for (var i = 1; i <= 10; i++) {
  var sum = sum + i;
}

console.log("The sum of numbers from 1 to 10 is:", sum);

// 3. Reverse Counting with For Loop

for (var i = 10; i > 0; i--) {
  console.log(i);
}

// 4. Multiplication Table with For Loop

var num = 12;

for (var i = 1; i <= 10; i++) {
  console.log(num + "x" + i + "=" + num * i);
}

// 5. Conclusion

/* Loop is the Fundamental part of Programming in any language. In JS there are many type of loops in which For loop is one of the most used loop in JS.
 Loops Ease the flow of code as it repeat the Block of cade so the code Run fast.  */


//  6. Pattern Printing with For Loop

var star = "**********"
for(var i = 0; i <= 10; i++){
    star = star.slice(1)
    console.log(star);
}
