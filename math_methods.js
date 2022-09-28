/**
 * Math Methods
 */
let arrayNum = [ ]
do {
    let random = Math.floor (Math.random() * 100) +10 ;
    arrayNum.push(random);
}while (arrayNum.length < 11);

console.log(arrayNum);