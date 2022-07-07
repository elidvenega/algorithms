// target two values of array and add them together
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// function bruteForceTwoSum(array, sum) {
//   // empty array
//   let nums = [];

//   // empty array for previous numbers
//   let prevNums = [];

//   // for loops
//   for (let x in array) {
//     for (let y in array) {
//       if (array[x] + array[y] === sum) {
//         if (!!nums.length) {
//           if (!prevNums.includes(array[x]) && !prevNums.includes(array[y])) {
//             prevNums.push(array[x]);
//             nums.push([array[x], array[y]]);
//           }
//         } else {
//           nums.push([array[x], array[y]]);
//           prevNums.push(array[x]);
//         }
//       }
//     }
//   }
//   return nums;
// }

// let array = [2, 3, 4, 3, 6, 7];
// let sum = 10;
// console.log(bruteForceTwoSum(array, sum));

// youtube tutorial
function twoSum(nums, target) {
  // empty object with previous values
  const previousValues = {};
  // loop through array
  for (let i = 0; i < nums.length; i++) {
    // current number
    const currentNumber = nums[i];
    // subtracting target number - currentNumber
    const neededValues = target - currentNumber;
    // will return number if index is true
    const index2 = previousValues[neededValues];
    if (index2 != null) {
      return [index2, i];
    } else {
      previousValues[currentNumber] = i;
    }
  }
}

let arr = [1, 2, 4, 5, 6];
// it does work
console.log(twoSum(arr, 11));
