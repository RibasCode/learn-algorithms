
'use strict' // https://leetcode.com/problems/palindrome-number/

// Case 1
let x = 121;

// Case 2
// let x = -121;

// Case 3
// let x = 10;

let isPalindrome = function(x) {
    
    let word = x.toString().toLowerCase();
    let wordLength = word.length - 1; // - 1 perqué el 0 en un array també el compte
    let reversedWord = '';

    for(let i = wordLength; i >= 0; i--){
        reversedWord += word[i];
    }

    // if(word === reversedWord) return true;
    // if(word !== reversedWord) return false;
    
    return word === reversedWord; // millor retornar true o false, d'aquesta manera
};

isPalindrome(x); 
