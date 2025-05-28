// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// the 3 passed to the function will cause an error because we cannot use an integer
// as a variable name. i think it could cause a type error or undefined error

/*function square(3) {
    return num * num;
}
*/

// =============> write the error message here
// syntax error: unexpected number

// =============> explain this error message here
//An integer cannot be used as a parameter name

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}
console.log(square(3));
