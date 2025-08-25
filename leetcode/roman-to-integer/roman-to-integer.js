
'use sict' // https://leetcode.com/problems/roman-to-integer

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

let s = "LVIII"

function romanToInt(s) {

  let counter = 0

  for(let i = 0; i < s.length; i++) {

    if(s[i] === "I") {

      if(s[i+1] !== "I" && s[i+1] !== undefined) {
        counter -= 1
        continue
      }

      counter += 1
    }

    if(s[i] === "V") {

      if(
          s[i+1] === "L" && s[i+1] !== undefined ||
          s[i+1] === "C" && s[i+1] !== undefined ||
          s[i+1] === "D" && s[i+1] !== undefined ||
          s[i+1] === "M" && s[i+1] !== undefined
        ) {
        counter -= 5
        continue
      }

      counter += 5
    }

    if(s[i] === "X") {

      if(
        s[i+1] === "L" && s[i+1] !== undefined ||
        s[i+1] === "C" && s[i+1] !== undefined ||
        s[i+1] === "D" && s[i+1] !== undefined ||
        s[i+1] === "M" && s[i+1] !== undefined
      ) {
        counter -= 10
        continue
      }

      counter += 10
    }

    if(s[i] === "L") {

      if(
        s[i+1] === "D" && s[i+1] !== undefined ||
        s[i+1] === "M" && s[i+1] !== undefined
      ) {
        counter -= 50
        continue
      }

      counter += 50
    }

    if(s[i] === "C") {

      if(
        s[i+1] === "D" && s[i+1] !== undefined ||
        s[i+1] === "M" && s[i+1] !== undefined
      ) {
        counter -= 100
        continue
      }

      counter += 100
    }

    if(s[i] === "D") {

      if(s[i+1] === "M" && s[i+1] !== undefined) {
        counter -= 500
        continue
      }

      counter += 500
    }

    if(s[i] === "M") {
      counter += 1000
    }
  }

  return counter
}

console.log(romanToInt(s))
