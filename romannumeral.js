function roman_to_Int(str1) {
  if (str1 == null) return -1;
  var num = char_to_int(str1.charAt(0));
  var pre, curr;

  for (var i = 1; i < str1.length; i++) {
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
}

function char_to_int(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}
console.log(roman_to_Int("XXVI"));
console.log(roman_to_Int("CI"));

// Tutorial

//function with key values roman numerals
function convertToRoman(num) {
  // Roman numeral values
  var romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // empty string variable
  var roman = "";
  // for in gets the property of the object
  for (var key in romanToNum) {
    console.log(key);
    // console.log("key", key);
    // console.log("value:", romanToNum[key]);
    // getting the property in the paramaters
    while (num >= romanToNum[key]) {
      roman += key;
      num -= romanToNum[key];
      console.log("Num is decreased:", num);
    }
  }

  return roman;
}

console.log(convertToRoman(3));
