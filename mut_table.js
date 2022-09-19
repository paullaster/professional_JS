/**
 * MULTIPLICATION TABLE
 */
let mut_table =  [];
let col = row = 13;
let counter = 0;

for (let i = 0; i < row; i++) {
    let temp = [];
    for (let j = 0; j < col; j++) {
        counter = counter + 1;
        temp.push(counter);
    }
    mut_table.push(temp);
}
console.table(mut_table);