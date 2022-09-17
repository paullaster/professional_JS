const grid = [];
const cells = 64;
let counter = 0;
let row;
for (let x = 0; x < cells + 1; x++) {
    if (counter % 8 === 0) {
        if (row !== undefined) {
        grid.push(row);
        }
    row = [];
    }
 counter++;
 let temp = counter;
 row.push(temp);
}
//console.table(grid);

//for of loop
let names = {list:['kevin', 'boo', 'bae']};
let nameObj = Object.entries(names);
console.log(nameObj[0][1]);
for(let i in names) {
    //console.log(names[i]);
}