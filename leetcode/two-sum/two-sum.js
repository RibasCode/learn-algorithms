
'use strict' // https://leetcode.com/problems/two-sum/

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

let twoSum = function(nums, target) {

    for(let i = 0; i < nums.length; i++){

        for(let j = 0; j < nums.length; y++){
            
            if (i === j) { continue; };
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
};

console.log(twoSum(nums, target));
