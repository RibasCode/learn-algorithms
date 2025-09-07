
'use sict' // https://leetcode.com/problems/longest-common-prefix

// Case 1
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Case 2
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
  let prefix = ""

  for(let i = 0; i < strs[0].length; i++) {
    let character = strs[0][i]

    for(let j = 1; j < strs.length; j++) {
      if(strs[j][i] !== character) {
        return prefix // se rompe al primer carácter que no coincide
      }  
    }
    
    prefix += character      
  }
  
  return prefix
};

longestCommonPrefix(strs)
