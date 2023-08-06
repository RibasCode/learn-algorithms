
'use strict' // https://leetcode.com/problems/two-sum/

// Case 1
let nums = [2,7,11, ];
let target = 9;

// Case 2
// let nums = [3,2,4];
// let target = 6;

// Case 3
// let nums = [3,3];
// let target = 6;

// Així evites comparar els index que ja s'han comparat anteriorment, video Youtube: https://www.youtube.com/watch?v=NLhkpg9p7VQ

function twoSum(nums, target) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {
            
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum(nums, target));
