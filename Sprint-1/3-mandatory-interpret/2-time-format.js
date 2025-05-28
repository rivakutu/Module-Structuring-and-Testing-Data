const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

//a) there are 5 variable declarations in this program namely movieLength, remainingSeconds,
// totalMinutes, remainingMinutes and totalHours
//b) there is only 1 function call which is on line 10
//c) the expression movieLength % 60 means we are telling the computer to give us the remainder
// of movieLength/60
//d) the expression is for isolating total hours and minutes from the seconds to make the calculation
// easier and precise and keeping the results as totalMinutes
//e) the variable result represents the movie duration. A better name which keeps inline with
// the variable names of this file would be movieDuration
//f) yes the code will work for different values of movieLength
