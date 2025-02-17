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


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Test - should say "Hello, Jack!"\n', helloName('Jack'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

console.log('Test - adds 3 and 34\n', addNumbers(3, 34));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  return num1 * num2 * num3;
}

console.log('Test - multiplies 2,3,4\n', multiplyThree(2,3,4));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }else{
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
function getLast( array ) {
  return array[array.length - 1];
}

console.log('Test - should return undefined\n', getLast([]));
console.log('Test - should return "pizza"\n', getLast(['lasagna', 'eggs', 'pizza']));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for(let el of array){
    if(el === value) return true;
  }

  return false;
}

console.log('Test - should return true\n', find('pizza', ['lasagna', 'eggs', 'pizza']));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return letter === string[0];

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  for(let num of array){
    sum += num;
  }
  return sum;
}

console.log('Test - sums [4,7,8]\n', sumAll([4,7,8]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function onlyPositive(array){
  let result = [];
  for(let el of array){
    if(el >= 0){
      result.push(el);
    }
  }
  return result;
}

console.log('Test - should return positives of [3,-1,4,5,-15]\n', onlyPositive([3,-1,4,5,-15]));
console.log('Test - should return empty array\n', onlyPositive([-3, -4, -5]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Write a function that repeats every letter in a string once:
function doubleChar(str) {
	let result = "";
	for(let letter of str){
		result += letter + letter;
	}
	return result;
}

console.log('Test - should say "HHeelllloo  WWoorrlldd!!"\n', doubleChar("Hello World!"));
