// Predict and explain first...
//  =============> write your prediction here
// there will be an error message because the function is not being called
//

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
*/

// =============> write your explanation here
// the error message shows that str has already been declared
// =============> write your new code here
function capitalise(str) {
  let strr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return strr;
}
console.log(capitalise("orange"));
