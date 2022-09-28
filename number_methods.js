/**
 * Number methods
 */
let num  = "2";
let hi = "hi";
//console.log (!isNaN (hi));


let num2 = '3';
let hi2 = "hi";
//console.log ( isFinite (10/0));
//console.log ( Number.isInteger (10) );



// Getting fixed number of decimals
let dpNum = 0.786888547474565435352273788588558594949594549549594545949686866767655999459594949599666
let capedNum = dpNum.toFixed(2);
let nexCapedNum = dpNum.toPrecision(2);
console.log ( capedNum, nexCapedNum );