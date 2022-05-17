"use strict";

// Analyze the problem.
// 1.Check What Palindrome numbers
// Restate the problem.
// 2.Must return a boolean output thats false
// Write out examples of input and output.
// 3.Look up examples of algorithm
// Break the problem into its component parts.
// Outline a solution in psuedo-code.
// Step through your example data with your psuedo-code.

// Palindrome number

//  @param {number} x
//   @return {boolean}

// Needs to return false
// create a loop where number is being checked
// storm ideas
//implement
//redo process if no result

// Works for strings
const isPalindromeStr = function (inStr) {
  //  loop through number
  for (let i = 0; i < inStr.length; i += 1) {
    if (inStr[i] !== inStr[inStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindromeStr("sys"));

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  // this returns false if number is less than zero
  if (x < 0) {
    return false;
  }

  const original = x;
  let pali = 0;
  // checks condition if is true
  while (x > 0) {
    //asnwer is 1
    pali = (x % 10) + pali * 10;
    // Math.floor() returns number to the lowest integer
    x = Math.floor(x / 10);
    // output is (12 + pali) which is 1 so answer is 121
  }
  // returns true
  return original === pali;
};

console.log(isPalindrome(212));
