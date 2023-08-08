'use strict'

function isPalindrome(str){
    
    str = str.replace(/\W/g, '');
    str = str.toLowerCase();
    
    return str === str.split('').reverse().join('');
};

function question(str){
    
    console.log(`Is ${str} a palindrome word?`);
    
    if(isPalindrome(str) === true) console.log('Yes :)'); 
    else console.log('No :(');
};




// Es pot fer de dos formes per iterar els elements del array, en acast cas l'optim és el 2:

// 1 --> Através dels Indexs
let words = ['Racecar', 'Scoop', 'Eye', 'Marc', 'Pro'];

for (let i = 0; i < words.length; i++){
    question(words[i]);
};

// 2 --> Através dels elements
words = ['Orange', 'Ribas', 'Kayak'];

for (let word of words){
    question(word);
};