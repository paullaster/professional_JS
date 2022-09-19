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
console.table(mutTable);