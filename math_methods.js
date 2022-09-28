/**
 * Math Methods
 */
let arrayNum = [ ]
do {
    let random = Math.floor (Math.random() * 100) +10 ;
    arrayNum.push(random);
}while (arrayNum.length < 11);

let i = 0;
let highest = Math.max (45,23,456,786,746,342,55657,324,545467,34232,67678867,23234346,2324525,3346,1322344,56567);
let lowest = Math.min (4898,5,3223434,4456,68769,32136,9087677,3434,2323234,45545,67868,890,6790,088,788,08989677,35335434,777777,01);

//console.log(`Array: ${arrayNum}, \n highest value: ${highest}, \n lowest value: ${lowest}`);

//Square, square root and power:
let squareRoot = Math.sqrt (4);
let power = Math.pow (2, 3);
//console.log (squareRoot, power);


//Round function
let c = 9.234;
//console.log (Math.round (c));
//console.log (Math.ceil (c));

//trunc method
//console.log (Math.trunc (c));





//Exponents and logarithms
 let x = 2;
 console.log (Math.exp (x));
