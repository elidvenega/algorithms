
// target two values of array and add them together
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function bruteForceTwoSum(array, sum){
    let nums = []
    
    let prevNums = []

    for(let x in array){
        for(let y in array){
            if (array[x] + array[y] === sum){
                if(!!nums.length){ 
                    if (!prevNums.includes(array[x]) && !prevNums.includes(array[y])) {
                        prevNums.push(array[x])
                        nums.push([array[x], array[y]])
                    } 
                } else {
                    nums.push([array[x], array[y]])
                    prevNums.push(array[x])
                }
            }
        }
    }
   return nums
}

let array = [2, 3, 4, 3, 6, 7]
let sum = 10
console.log(bruteForceTwoSum(array, sum));
