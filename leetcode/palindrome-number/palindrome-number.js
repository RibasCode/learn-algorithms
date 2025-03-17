
'use strict' // https://leetcode.com/problems/palindrome-number

// Case 1
let x = 121

// Case 2
// let x = -121

// Case 3
// let x = 10

function isPalindrome(x) {
  let word = x.toString();
  let wordLength = word.length - 1;
  let reversedWord = '';

  for(let i = wordLength; i >= 0; i--){
    reversedWord += word[i];
  }

  return word === reversedWord
}

console.log(isPalindrome(x))
