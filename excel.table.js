/**
 * MOCK EXCEL OR GOOGLE DOCS
 */
let divContainer = document.querySelector(divContainerFunction());
let tablerow;
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
    <table colspan="2">
        <tr>
            <thead colspan="2">
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
        <tr>
            <tbody>
            ${
                (
                    ()=>{
                        let tableData;
                        for(let i = 0; i < colSize; i++) {
                            for(let j = 0; j < rowSize; j++){
                            return tableData = `<td>${table[i][j]}</td>`;
                            }
                        }
                    }
                )()
            }
            </tbody>
        </tr>
    </table>
`;
console.log(divContainer);
divContainer.insertAdjacentHTML("beforeend", pageTable);
function divContainerFunction() {
    return "#container";
};

