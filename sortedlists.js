// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by
//splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// splice the first of the two lists then combine them

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

/* 
  I merge two arrays together into one sorted list
*/

// third try

var mergeTwoLists = function(list1, list2) {
  // empty value for merge list
  const dummy = new ListNode(-Infinity);
  // previous value
  let prev = dummy;

  while(list1 && list2) {
    if(list1.val <= list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next;
    }
  }

  if(!list1)prev.next = list2;
  if(!list2)prev.next = list1;

  return dummy.next;
};
