const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
/*
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); this uses substring method to produce a new substring from the penceString by starting at
index 0 until the end of the string but excluding the last character of penceString

*/
/**2.
 * const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
 * This is ensuring that our string has 3 characters and if not add a "0" at the
 * beginning of the string
 */

/**3.
 * const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
 * This means give me the remaining digits after removing the last two digits from
 * the string and this will be my pounds value
 */
/**4.
 * const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
 * This means start from the second last character of the string using substring method
 * and give me the result but firstly padEnd ensures string is 2 characters long if not add a "0"
 */
/**5.
 * console.log(`£${pounds}.${pence}`);
 *  This is used to produce a formatted result of of the string in pounds and pence
 */
