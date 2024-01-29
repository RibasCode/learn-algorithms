
"use strict" // https://www.aprendejavascript.dev/clase/arrays/algoritmos

// En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas. Por suerte, no hay dos libros con el mismo número de páginas.

// Necesitamos que la función reciba un array de números, sin ordenar, y que devuelva un array de dos posiciones con el índice del libro con menos páginas y el índice del libro con más páginas.

const words = [999, 255, 121];
// const words = [2, 1, 3, 4, 5, 6, 7, 8, 9];
// const words = [5, 10, 15, 20];

function minAndMaxWord(array) {
    let min = array[0]
    let max = array[0]

    let minIndex = 0
    let maxIndex = 0
    

    for(let i = 1; i < array.length; i++){
        
        if(array[i] < min){
            min = array[i]
            minIndex = i
        }
        
        if(array[i] > max){
            max = array[i]
            maxIndex = i
        }
    }
    
    let minAndMax = [minIndex, maxIndex]
    
    return minAndMax
}

minAndMaxWord(words)
