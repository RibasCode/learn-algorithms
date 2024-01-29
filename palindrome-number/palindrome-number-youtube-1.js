"use strict"

function isPalindrome(str){
    
    str = str.replace(/\W/g, "");
    str = str.toLowerCase();
    
    for(let i = 0; i < str.length; i++){
        
        console.log(str[str.length - 1 - i]);

        if(str[i] !== str[str.length - 1 - i]){
            return false;
        };
    }

    return true;
};




let string1 = "Eye";
console.log(string1);
console.log(isPalindrome(string1));

string1 = "Oastrao";
console.log(string1);
console.log(isPalindrome(string1));
