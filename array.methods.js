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
    console.log(transformedStr);
};
//firstLetterToUpperCase('okoth')
arr.forEach(firstLetterToUpperCase);

arrNum.forEach( (el) => {
    let smallesrVal = Array.min (el, index);
    let len = el.length;
    console.log(`at index: ${index} the Smalles Value: ${smallesrVal} and length of the array is: ${len}`);
});