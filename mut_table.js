/**
 * MULTIPLICATION TABLE
 */
let mutTable = [];
const maxMut = 20;
for (let i = 0; i < maxMut; i++) {
    let temp = [];
    for (let j = 0; j < maxMut; j++) {
        temp.push(i * j);
    }
    mutTable.push(temp);
}
//console.table(mutTable);

const myArray = [1,5,7];
for(el in myArray){
 //console.log(Number(el));
 el = Number(el) + 5;
 console.log(el);
}
//console.log(myArray);