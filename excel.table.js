/**
 * MOCK EXCEL OR GOOGLE DOCS
 */
let divContainer = document.getElementsByTagName("div");
let table = [];
let colSize = 26;
let rowSize = 1000;
let counter = 0;
for(let i = 0; i <rowSize; i++) {
    let tempTable = [];
    for(let j = 0; j <colSize; j++) {
        counter = counter + 1;
        tempTable.push(counter);
    }
    table.push(tempTable);
}

let pageTable = `
    <table>
        <tr>
            <thead>
                ${
                 (
                    ()=>{
                        for(let i = 0; i < colSize; i++) {
                           return `<th>${table[i]}</th>`;
                        }
                    }
                 )()    
                }
            </thead>
        </tr>
    </table>
`;
//console.log(divContainer);
//divContainer.insertAdjacentHTML('beforeEnd', pageTable); 
const h2 = document.getElementById("myH2");
let html = "<p>My new paragraph.</p>";
h2.insertAdjacentHTML("afterend", html);
function newFunction() {
    return "myH2";
}

