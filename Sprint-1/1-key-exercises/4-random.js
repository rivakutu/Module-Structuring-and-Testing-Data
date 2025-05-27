const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.floor() method rounds a number down to the nearest integer.
//Math.random() method returns a random floating point number between 0 (inclusive) and 1 (exclusive)
//the maximum variable
//the minimum variable
console.log(num);
// I've used decomposition
//Math.floor(Math.random()) this part is rounding off the randomly generated number
//maximum - minimum + 1 this determines a range of value and where minimum and maximum are included
// Math.random() * (maximum - minimum + 1)); this part is always outputting random decimal point values, it ensures the maximum value is included

//the program is generating unique random numbers between the ranges of minimum and maximum
