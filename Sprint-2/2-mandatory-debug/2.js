// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// the function will return the first two digits of num

/*
const num = 103;
function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); */

// Now run the code and compare the output to your prediction
// =============> write the output here
//my prediction was inaccurate i thought using slice(-1) would
// remove the last digit from the string and give back the first 2 digits of num
// Explain why the output is the way it is
// =============> write your explanation here
// the function is using the variable num for all its computations that it why
// the answer is always 3
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
