
"use strict" // https://leetcode.com/problems/template/

// Case 1
let arrayList = [1, 2, 3, 4, 5]

function reveseArray(arrayList){

    let reversedArray = [];

    for(let i = arrayList.length - 1; i >= 0; i--){
        reversedArray.push(arrayList[i])
    }

    return reversedArray
}

console.log(reveseArray(arrayList));
