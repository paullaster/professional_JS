/**
 * Array methods
 */
/**
 * 1. 
 * forEach method - for performing action on each element
 * in the array using a callback function
 */
let arr = ['calvince', 'synthia', 'bridgid', 'idda', 'arthur', 'brenda'];
let arrNum = [[3,6],[8,9],[1,3,2]];

Array.min = (arr) => {
    return Math.min.apply (Math, arr);
}
//console.log(Array.min(arrNum));

function firstLetterToUpperCase (str) {
    let transformedStr = str.charAt(0).toUpperCase() + str.slice(1);
   // console.log(transformedStr);
};
//firstLetterToUpperCase('okoth')
arr.forEach(firstLetterToUpperCase);

arrNum.forEach( (el, index) => {
    let smallesrVal = Array.min (el);
    let len = el.length;
   // console.log(`at index: ${index} the Smalles Value: ${smallesrVal} and length of the array is: ${len}`);
});


/**
 * 2.
 * Filtering the array
 * filter() method.
 * It takes a function as an argument,
 * the function should return a Boolean value,
 * if the Boolean value is true, it is
 * included in the filtered array else it is ignored.
 */

//Filter aarray method
function findingDivisblesOfFive (el) {
    return el % 5 === 0;
}
let randomArray = [];
while (randomArray.length < 50) {
    const randomElem = Math.floor(Math.random() * 100) + 10;
    randomArray.push(randomElem);
}
let filteredArray = randomArray.filter (findingDivisblesOfFive);
//console.log(filteredArray);


//every method of array
//Check if on every item if they have met certain criteria
//checking a condition for all item in the array
function checkNumer (item) { 
    return typeof item === 'number'
};

//console.log (randomArray.every (checkNumer));


/**
 * copywithin() method of array
 * copy changes the content but do not modify the length
 */
//console.log (randomArray);
randomArray.copyWithin(0, 30, 45);


/**
 * mapping array with arrays map() method:
 * returns new arrray with new tranformed valued.
 */
function squareItems (item, index) {
    return item % index;
};


let mappedArray = randomArray.map(squareItems);
//console.log (mappedArray);


/**
 * Removing duplicates from array
 */
function removeDuplicate (item,index, arr) {
    console.log (item, index, arr.indexOf(item));
    return arr.indexOf(item) === index;
};

let filteredItems = randomArray.filter(removeDuplicate);
zzconsole.log(filteredItems);