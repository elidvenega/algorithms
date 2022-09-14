// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums
//being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Given array of numbers
/* 
 Occurrence means to count down and one way is a for loop
 checking to see if number being 
 nums is the = []
 val the Number we want to remove
*/
/* 
Write a function that will remove duplicate values in array
*/
// var removeElement = function (nums, val) {
//     for(let i = 0; i <= nums.length; nums++) {
//         if()
//     }
// };

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
};


// Solution
// var removeElement = function (nums, val) {
//     // Counter for keeping track of elements other than val
//     let count = 0;
//     // Loop through all the elements of the array
//     for (let i = 0; i < nums.length; i++) {
//         // If the element is not val
//         if (nums[i] !== val) {
//             nums[count++] = nums[i];
//         }
//     }
//     return count;
// };















