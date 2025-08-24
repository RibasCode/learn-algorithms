
'use strict' // https://leetcode.com/problems/roman-to-integer

// Case 1
let x = 121

// Case 2
// let x = -121

// Case 3
// let x = 10

function isPalindrome(input) {
  const str = input.toString().toLowerCase().replace(/\s+/g, '');
  // return str === str.split('').reverse().join('');

  let strLength = str.length - 1;
  let reversedStr = '';

  for(let i = strLength; i >= 0; i--){
    reversedStr += str[i];
  }

  return str === reversedStr
}

console.log(isPalindrome(x))
