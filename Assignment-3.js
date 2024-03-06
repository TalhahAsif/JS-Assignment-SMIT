  //Task 1:
  var fruits = ["apple", "banana", "orange", "grape"];
  //Fruits On Fruits Stand:
  console.log("Available Fruits: " + fruits);
  //First Customer Buys A fruits:
  fruits.pop();
  //Available Fruits After First Customer's Purchase:
  console.log("Fruits Available After First Purchase: " + fruits);
  //Second Customer Buys A fruits:
  fruits.pop();
  //Available Fruits After Second Customer's Purchase:
  console.log("Fruits Available After Second Purchase: " + fruits)
  //Adding Fruit Of Customer's Choice:
  var newFruit = prompt("Please Enter A Fruit Name.");
  //Available Fruits After Customer's Fruit Addition:
  fruits.push(newFruit);
  console.log("Fruits Available After Customer's Recommendation: " + fruits);

  //Task 2:
  //Remove The First Fruit From The List And Display It As A Newly Arrived Fruit:
  var newFruit = fruits.shift();
  console.log("The Newly Arrived Fruit Is: " + newFruit);
  //Updated Fruit's List:
  console.log("Upadted Inventory: " + fruits);
  //Prompt The User To Add A New Fruit At The Beginning:
  var usersFruit = prompt("Please Enter A Fruit Name (For Task 2)");
  console.log("Updated Inventory After User's Addition: " + fruits);

  //Task 3:
  //Create Numbers Array:
  var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Range Of Numbers: " + nums);
  //Ask User For Starting And Ending Index:
  var start = prompt("Please Enter Value For Starting Index");
  var end = prompt ("Please Enter The Value For Ending Index");
  //Remove Values From Given Indexes:
  nums.splice(start, end);
  //Updated Range:
  console.log("Updated Range Of Numbers: " + nums);

  //Task 4:
  //Re-assign Numbers To The Array:
  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Range Of Numbers: " + nums);
  //Ask User For Starting And Ending Index:
  var start = prompt("Please Enter Value For Starting Index Of Slice");
  var end = prompt ("Please Enter The Value For Ending Index Of Slice");
  //Extract Values Using Given Indexes:
  var extractedRange = nums.slice(start, end);
  //Extracted Slice Of Numbers:
  console.log("Extracted Slice From The Range: " + extractedRange);

