var removeDuplicates = function (nums) {
  let uniqueChars = nums.filter((c, index) => {
    nums.indexOf(c) === index;
  });
  return uniqueChars
};

let arr = [1, 2, 2, 3];

console.log(removeDuplicates(arr));
