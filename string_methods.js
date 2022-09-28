/**
 * Illustrating methods
 */
/**
 * Converting string to array
 */
let mySting = 'this is a string';
let stringArray = mySting.split(' ');
//console.log(stringArray);



/**
 * Joining an array to strings
 */

let newarr = stringArray.join('-');
//console.log (newarr);

/**
 * Working with index and position
 */
let randStr = ' this is a string, my girlfriend is a she Synthia, my name is haurweengs haurweengs';
let getIndexOf = randStr.indexOf ('is');
let searchIndex = randStr.search( 't');
let charAt = randStr.charAt( searchIndex + 1 );
//console.log (getIndexOf, searchIndex, charAt);



/**
 * Creating substring
 */
//slicing string
let lastChar = randStr.lastIndexOf ('my');
let subStr1 = randStr.slice (lastChar);
//console.log (subStr1);

/**
 * Replacing part of string
 */
let changedName = subStr1.replace ("haurweengs", "paullaster");
let changedAll = subStr1.replaceAll ("haurweengs", "paullaster")
//console.log (changedAll);


/**
 * Uppercase and lowercase
 */
let strToUpperCase = changedName.toUpperCase();
//console.log(strToUpperCase);
let strToLowerCase = strToUpperCase.toLowerCase();
//console.log(strToLowerCase);


//String manipulation
let arrOfStr = [
    'tHis iS the FisrT SenteNSE',
    'tHis iS the SeconD SenteNSE',
    'tHis iS the THIrd SenteNSE',
    'tHis iS the FourTH SenteNSE'
];
arrOfStr.forEach ( (str, i) => {
    console.log (str);
});
