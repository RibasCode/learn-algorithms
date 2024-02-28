
"use strict"

function fibonacci(times){

    let secuence = [0, 1]

    for(let i = 2; i < times; i++){
        secuence[i] = secuence[i - 2] + secuence[i - 1]
    }

    return secuence

}

console.log(fibonacci(10));

