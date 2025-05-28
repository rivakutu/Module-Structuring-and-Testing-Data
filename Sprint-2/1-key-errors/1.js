// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// program will not run because decimalNumber has been declared twice
// console.log(decimalNumber) is incorrect since its not calling the function
// but its trying to log a variable it does not have access to

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
*/
//console.log(decimalNumber);

// =============> write your explanation here
// There is no need to have a decimalNumber variable in the method's local scope
// because we need to parse a decimal number as an argument to the function
//inside the console.log()

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage(0.2));
