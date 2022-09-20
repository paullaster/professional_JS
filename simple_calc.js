/**
 * simple calculator program
 */
let fnum = parseInt(prompt('Enter the first number: '));
let snum = parseInt(prompt('Enter the second number: '));
let op = prompt('Enter operation to perform: ')
function calculator (options, x, y) {
    let result;
    switch (options) {
        case '+' :
            result = x + y;
            break;
        case '-' :
            result = x - y;
            break; 
        case '*' :
            result = x * y;
            break; 
        case '%' :
            result = x % y;
            break;
        case '**' :
            result = x ** y;
            break; 
        default :
          console.error('Unknown');

    }
    console.log(result);
}

let someArray = [fnum, snum];
let opArr = [op]
calculator(...opArr, ...someArray);

