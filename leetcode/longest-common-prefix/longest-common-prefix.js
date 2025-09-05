
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

  for(let i = 0; i < strs.length; i++) {
    let character = strs[0][i]

    for(let j = 0; j < strs[i].length; j++) {
      if(character === strs[i][j]) {
        prefix += character      
      }  
    }
  }
  
  console.log(prefix);
  return prefix
};

longestCommonPrefix(strs)
