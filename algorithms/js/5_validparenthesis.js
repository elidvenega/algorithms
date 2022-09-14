// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

const isValid = function (s) {
  let op1 = "()";

  if (op1 === s) {
    console.log("true");
  } else {
    console.log("wrong");
  }
};

isValid("()");
