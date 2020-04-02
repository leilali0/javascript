// 01-stringCompare.js
// checks if two strings are equal, gives feedback using alert
function stringCompare(string1, string2) {
  if (string1 == string2) {
    alert("They're equal!")
  } else {
    alert("They're not equal :(")
  }
}

// 02-numberCompare.js
// compare two numbers, give feed back using alert
function numberCompare(num1, num2) {
  if (num1 == num2) {
    alert("They're equal!")
  } else if (num1 > num2) {
    alert("The first number is bigger!")
  } else {
    alert("The second number is bigger!")
  }
}

// 03-functionCombine.js
// takes two arguements and returns a concatenated string in the console
function functionCombine(string1, string2) {
  console.log(string1, string2);
}

// 04-functionConditions.js
// take one argument, pass trhough a conditional statement
function functionConditions(num) {
  if (num < 10) {
    console.log("Number is smaller than 10.");
  } else if (num < 100) {
    console.log("Number is bigger than 10, but smaller than 100.");
  } else if (num < 1000) {
    console.log("Number is bigger than 100, but smaller than 1000.");
  } else {
    console.log("Number is bigger than 1000.");
  }
}

// 05-randomWords.js
function randomWords(){
  var stringArray = ["banana", "peach", "protein bar", "cup of coffee", "muffin", "bowl of cereal"];
  var result = Math.floor(Math.random() * stringArray.length);
  console.log("I had a", stringArray[result], "for breakfast!");
}
