let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//a) there are 5 function calls in this file,
/* these are the function calls Number(carPrice.replaceAll(",", ""));-- first function call
is Number() and second one is replaceAll() both on line 4 
third function call is Number() and replaceAll() which are both on line 5 and console.log() on line 10
*/
//b) the error is coming from line 5. it is occurring due to a missing comma after the first double
// quote marks
//c)line 4 and line 5 are variable reassignment statements
//d)lines 1 and 2 are variable declarations
//e) the expression is converting a string variable carPrice to an whole number using the Number() method
// and by also using the replaceAll() method to replace "," with a space
