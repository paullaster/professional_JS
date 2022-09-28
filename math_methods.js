/**
 * Math Methods
 */
let arrayNum = [ ]
do {
    let random = Math.floor (Math.random() * 100) +10 ;
    arrayNum.push(random);
}while (arrayNum.length < 11);
let highest = Math.max (arrayNum);
console.log(`Array: ${arrayNum}, \n highest value: ${highest}`);