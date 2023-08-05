/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Case 1
let nums = [2,7,11,15];
let target = 9;

// Case 2
// let nums = [3,2,4];
// let target = 6;

// Case 3
// let nums = [3,3];
// let target = 6;

// Així estas comparant tots amb tots menos amb els mateix index

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let y = 0; y < nums.length; y++){
            if (i === y) { continue; };
            if(nums[i] + nums[y] === target){
                return [i, y];
            }
        }
    }
};

console.log(twoSum(nums, target));
