// HOMEWORK EXERCISE ONE:
/**
 * Write a function that will accept array of your favourite movies.
 * The function should print in console each element of the list.
 */
// BONUS:
/**
 *      *Ignore elements that are not string.
 *      *Print in the DOM
 * OUTPUT:
 * Provided array: ["Movie One", "Movie Two", 2, true]
 * RESULT:
 *      1.Movie One;
 *      2.Movie Two;
 */

let ul = 1;
function printMovies(arrayOfMovies){
    for(i = 0; i < arrayOfMovies.length; i++){
        if(typeof arrayOfMovies[i] === 'string'){
            console.log(`${ul++}. ${arrayOfMovies[i]}`);
        }
    }
}
let myMovies = ["FastFive", 2, "Hobbit", false, "Zodiac"];
printMovies(myMovies);



console.log("************************")
// HOMEWORK EXERCISE TWO:
/**
 * Write a function that will accept an array of numbers and a number as parameters.
 * The function should return new array with numbers of the array multiplited by the number provided as parameter.
 *  BONUS:
 *      *Check if the array is valid, ignore elements that are not numbers.
 *      *Check if the number provided as parameter is a number.
 * OUTPUT:
 *      -Provided array: [2,3,5]; provided number:2; => RESULT: [4,6,10];
 */


function multiplitedNumbers(arrayOfNumbers, number){
    for(i = 0; i < arrayOfNumbers.length; i++){
        if(typeof arrayOfNumbers[i] === 'number'){
            console.log(arrayOfNumbers[i] * number);
        }
    }
}
myNumbers = [5,"25", 10, true, 6, 9];
console.log(myNumbers);
let number = 5;
console.log(typeof number);
multiplitedNumbers(myNumbers,number);



console.log("************************");
// HOMEWORK EXERCISE THREE:
/**
 * Write a function that will accept two arrays of numbers as parameters.
 * That function should return the sum of the numbers of both arrays.
 * BONUS:
 *      *Check if the arrays are valid, ignore elements that are not numbers.
 * OUTPUT:
 *      -Provided arrays:
 * arrayOne = [2, 3, 5] => Sum of this arrays is 10;
 * arrayTwo = [10, 20] => Sum of this arrays is 30;
 * RESULT:
 *      10 + 30 = 40
 */


function sumOfTwoArrays(arrayNumberOne,arrayNumberTwo){
    let sumOfOne = 0;
    let sumOfTwo = 0;
    let result = 0; 
    for(i = 0; i < arrayNumberOne.length; i++){
        if(typeof arrayNumberOne[i] === 'number'){
            sumOfOne += arrayNumberOne[i];
        }
    };
    for(i = 0; i < arrayNumberTwo.length; i++){
        if(typeof arrayNumberTwo[i] === 'number'){
            sumOfTwo += arrayNumberTwo[i];
        }
    };
    result = sumOfOne + sumOfTwo;
    return `RESULT: ${sumOfOne} + ${sumOfTwo} = ${result}`;
}

let arrayNumberOne = ["SEDC", 5, 10, true, 20];
let arrayNumberTwo = [20, 50, "solid", 100];

let finalResult = sumOfTwoArrays(arrayNumberOne, arrayNumberTwo);
console.log(finalResult);