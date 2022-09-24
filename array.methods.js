/**
 * Array methods
 */
/**
 * 1. 
 * forEach method - for performing action on each element
 * in the array using a callback function
 */
let arr = ['calvince', 'synthia', 'bridgid', 'idda', 'arthur', 'brenda'];

function firstLetterToUpperCase (str) {
    let transformedStr = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(transformedStr);
}