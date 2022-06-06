// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by
//splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// splice the first of the two lists then combine them

/* 
  I use splice to combine two lists together and merge them 
*/

// first try
// var mergeTwoLists = function (list1, list2) {
//    list1 = [1,3,3,4];
//    list2 = [1,2,3,4];
//   let all = [...list1,...list2];
//   return all.sort();
// };

// console.log(mergeTwoLists());

// second try
// var mergeTwoLists = function (list1, list2) {
//   list1 = [1, 3, 3, 4];
//   list2 = [1, 2, 3, 4];
//   let sum = list1.concat(list2);
//   return sum.sort();
// };

// console.log(mergeTwoLists());

// function frankenSplice(arr1, arr2, n) {
//   // Create a copy of arr2.
//   let combinedArrays = arr2.slice();
//   //                   [4, 5, 6]

//   // Insert all the elements of arr1 into arr2 beginning
//   // at the index specified by n. We're using the spread
//   // operator "..." to insert each individual element of
//   // arr1 instead of the whole array.
//   combinedArrays.splice(1, 0, ...arr1);
//   //                   (1, 0, ...[1, 2, 3])
//   //                   [4, 1, 2, 3, 5, 6]

//   // Return the combined arrays.
//   return combinedArrays.sort();
// }

// console.log(frankenSplice([1, 3, 3, 4], [1, 2, 3, 4]), 1);

// third try
function mergeTwo(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < (arr1.length + arr2.length)) {

    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;

    if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }

    current++;
  }

  return merged;
}


console.log(mergeTwo([1, 3, 3, 4], [1, 2, 3, 4]));