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
function helloName( name ) {
  console.log('Hello, Ian!');
  return true;
}
// Remember to call the function to test
helloName();


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber ) {
  // return firstNumber + secondNumber;
  let answer = 7 + 9;
  return answer;
}
console.log('First Number + Second Number:', addNumbers());


// 4. Function to multiply three numbers & return the result
function multiplyThree( ){
let answer = 3 * 8 * 4;
return answer;
}
console.log('Three numbers multiplied:', multiplyThree());


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 )
  {
    return true;
  }
  else ( number < 0 || number == 0 )
  {
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
function getLast( array )
{
  return array[array.length - 1];
}
console.log('Last item of array should be 298:', getLast([1, 5, 10, 97, 298]));
console.log('Last item of array should be 3427:', getLast([1, 65, 7632, 3456, 21, 3, 6, 3427]));
console.log('Last item of array should be undefined:', getLast([]));
console.log('Last item of array:', getLast([1]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array )
{
  let array1 = [1, 87, 9376, 456, 2];
  let value1 = 87;
  for (let i = 0; i < array1.length; i++)
  {
    if (array1[i] === value1)
    {
      return true;
    }
  }
  return false;
}

console.log('Find the value in the array:', find());

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string)
{
  for (let i = 0; i < string.length; i++)
  {
    if (string[i] === letter)
    {
      return true;
    }
  }
  return false;

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array2) {
  let sum = 0
  for (let i = 0; i < array2.length; i++)
  {
    sum += array2[i];
  }
  return sum;
}

console.log('Sum should be 15', sumAll([1, 2, 3, 4, 5]));
console.log('Sum should be 769', sumAll([2, 657, 78, 32]));
console.log('Sum should be 9251', sumAll([6570, 23, 45, 67, 712, 33, 45, 908, 2, 1, 6, 784, 34, 21]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function givePositive(array3)
{
  let newArray = array3
  for (let i = 0; i < newArray.length; i++)
  {
    if (newArray[i] < 0 || newArray[i] === 0)
    {
      delete newArray[i];
    }
  }
  return newArray;
}
console.log('New positive Array:', givePositive([1, -7, 0, -2, 1, 6, 7]));

//COME BACK TO THIS ONE --> ask in class on thursday



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
//This next problem is to make a function that returns the area of a triangle
