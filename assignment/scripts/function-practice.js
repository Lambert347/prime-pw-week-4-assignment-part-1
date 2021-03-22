console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName(name) {
  console.log('Hello, ' + name + '!');
  return true;
}
// Remember to call the function to test
helloName('Ian');


// 3. Function to add two numbers together & return the result
//Altered the function slighty to take two numbers as inputs, add them together, and return the answer.
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  return answer;
}
console.log('First Number + Second Number:', addNumbers(8, 9));
console.log('First Number + Second Number:', addNumbers(56, 9));


// 4. Function to multiply three numbers & return the result
//Altered the function to take three numbers as inputs, multiply them, and then return the answer.
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
let answer = firstNumber * secondNumber * thirdNumber;
return answer;
}
console.log('Three numbers multiplied:', multiplyThree(3, 5, 6));
console.log('Three numbers multiplied:', multiplyThree(5, 86, 102));
console.log('Three numbers multiplied:', multiplyThree(0, 6, 97));
console.log('Three numbers multiplied:', multiplyThree(-6, 7, 9));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
//Checks if the number is positive and if it is, return true. If not, returns false.
function isPositive(number) {
  if (number > 0) {
    return true;
  } {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
//Function to return the last item of the array, returns undefined if the array in the input is empty.
function getLast(array) {
  return array[array.length - 1];
}
console.log('Last item of array should be 298:', getLast([1, 5, 10, 97, 298]));
console.log('Last item of array should be 3427:', getLast([1, 65, 7632, 3456, 21, 3, 6, 3427]));
console.log('Last item of array should be undefined:', getLast([]));
console.log('Last item of array should be 1:', getLast([1]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
//Function that searches an array for a value and returns true if found, false if not found.
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log('Find the value in the array:', find(87, [1, 87, 9376, 456, 2]));
console.log('Find the value in the array:', find(2, [1, 5, 6, 89, 0, -7, -8]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
//Function to check if the letter of input is first in the array and returns true if that is the case and false if not.
function isFirstLetter(letter, string) {
  if (string[0] === letter) {
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
//Function the moves through the entire array with a for loop and adds each value in the array to an increasing sum, then returns the sum.
function sumAll(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log('Sum should be 15', sumAll([1, 2, 3, 4, 5]));
console.log('Sum should be 769', sumAll([2, 657, 78, 32]));
console.log('Sum should be 9251', sumAll([6570, 23, 45, 67, 712, 33, 45, 908, 2, 1, 6, 784, 34, 21]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
//Function that filters out the positive numbers in an input array and returns those positive values as an array.
function givePositive(array) {
  let positive = array;
  return array.filter(function(number) {
    return number > 0;
  });
}

console.log('New positive Array:', givePositive([1, -7, 0, -2, 1, 6, 7]));
console.log('New positive Array:', givePositive([-7, -8, 0, -10, -45, -8]));
console.log('New Positive Array:', givePositive([1, 2, 3, 4, 5, 6, 7]));

//Alternative array to the previous question that deletes non-positive numbers an array and returns the new array of positive numbers.
function givePositive(array) {
  let newArray = array
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] < 0 || newArray[i] === 0) {
      delete newArray[i];
    }
  }
  return newArray;
}
console.log('New positive Array:', givePositive([1, -7, 0, -2, 1, 6, 7]));
console.log('New positive Array:', givePositive([-7, -8, 0, -10, -45, -8]));
console.log('New Positive Array:', givePositive([1, 2, 3, 4, 5, 6, 7]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//The problem I selected is from edabit and it is to make a function that converts minutes into seconds, and then prints the result.
function convertMin(minutes) {
  let seconds = minutes * 60;
  return seconds;
}

console.log('Seconds:', convertMin(1));
console.log('Seconds:', convertMin(6));
console.log('Seconds:', convertMin(20));
console.log('Seconds:', convertMin(360));

//That problem was pretty easy so I decided to do another.
//This next problem is to make a function that returns the area of a triangle with the input of base and height.
function findArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log('Area should be 3:', findArea(3, 2));
console.log('Area should be 14:', findArea(7, 4));
