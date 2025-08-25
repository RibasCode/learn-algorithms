
'use sict' // https://leetcode.com/problems/roman-to-integer/solutions/6333315/beats-100-c-java-py3-js-easy-n-clean-explanation/

// Case 1
//Input: s = "III"
//Output: 3
//Explanation: III = 3.

// Case 2
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Case 3
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

let s = "III"

function romanToInt(s) {
  const romanToInt = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
      if (i + 1 < s.length && romanToInt[s[i]] < romanToInt[s[i + 1]]) {
          result -= romanToInt[s[i]];
      } else {
          result += romanToInt[s[i]];
      }
  }
  return result;
}

console.log(romanToInt(s))
