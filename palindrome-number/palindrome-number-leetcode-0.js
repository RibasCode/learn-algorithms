
"use strict" // https://leetcode.com/problems/palindrome-number/solutions/3341636/javascript-100-easy-explanation-overall-o-1-space/

// Case 1
let x = 121;

// Case 2
// let x = -121;

// Case 3
// let x = 10;

var isPalindrome = function (x) {
    //TIME-COMPLEXITY: O(n);
    //MEMORY: O(1);
    const str = x.toString();
    let leftIndex = 0;
    let rightIndex = str.length - 1;
  
    while (leftIndex < rightIndex) {
      if (str.charAt(leftIndex) !== str.charAt(rightIndex)) {
        return false;
      }
      leftIndex++;
      rightIndex--;
    }
  
    return true;
};

isPalindrome(x); 
